import { useState, useMemo } from 'react';
import { getLesson } from '../data/lessons';
import './LessonViewer.css';

const COMPLETE_THRESHOLD = 0.7; // 70% correct to unlock "Complete lesson"

const LessonViewer = ({ nodeId, onClose, onCompleteLesson }) => {
  const lesson = getLesson(nodeId);
  const [exerciseAnswers, setExerciseAnswers] = useState({});
  const [exerciseResults, setExerciseResults] = useState({});

  const exercises = lesson?.exercises ?? [];
  const { score, allChecked, canComplete } = useMemo(() => {
    if (exercises.length === 0) {
      return { score: 1, allChecked: true, canComplete: true };
    }
    const checked = Object.keys(exerciseResults).length;
    const allChecked = checked >= exercises.length;
    const correct = Object.values(exerciseResults).filter(r => r?.isCorrect).length;
    const score = exercises.length ? correct / exercises.length : 0;
    const canComplete = allChecked && score >= COMPLETE_THRESHOLD;
    return { score, allChecked, canComplete };
  }, [exercises.length, exerciseResults]);

  if (!lesson) {
    return (
      <div className="lesson-viewer">
        <div className="lesson-container">
          <div className="lesson-header">
            <h2>Lesson Not Available</h2>
            <button className="close-button" onClick={onClose}>×</button>
          </div>
          <div className="lesson-content">
            <p>Lesson content for this concept is coming soon!</p>
          </div>
        </div>
      </div>
    );
  }

  const renderContent = (item, index) => {
    switch (item.type) {
      case 'heading':
        return <h3 key={index} className="lesson-heading">{item.text}</h3>;
      
      case 'paragraph':
        return <p key={index} className="lesson-paragraph">{item.text}</p>;
      
      case 'list':
        return (
          <ul key={index} className="lesson-list">
            {item.items.map((listItem, i) => (
              <li key={i}>{listItem}</li>
            ))}
          </ul>
        );
      
      case 'examples':
        return (
          <div key={index} className="lesson-examples">
            {item.items.map((example, i) => (
              <div key={i} className="example-item">
                <span className="example-french">{example.french}</span>
                <span className="example-english">{example.english}</span>
              </div>
            ))}
          </div>
        );
      
      case 'tip':
        return (
          <div key={index} className="lesson-tip">
            {item.text}
          </div>
        );
      
      default:
        return null;
    }
  };

  const handleExerciseAnswer = (exerciseIndex, answer) => {
    setExerciseAnswers({
      ...exerciseAnswers,
      [exerciseIndex]: answer
    });
  };

  const checkExercise = (exerciseIndex, exercise) => {
    const userAnswer = exerciseAnswers[exerciseIndex];
    let isCorrect = false;

    if (exercise.type === 'multiple_choice') {
      isCorrect = userAnswer === exercise.correct;
    } else if (exercise.type === 'fill_blank') {
      isCorrect = userAnswer?.toLowerCase().trim() === exercise.answer.toLowerCase().trim();
    }

    setExerciseResults({
      ...exerciseResults,
      [exerciseIndex]: { isCorrect, explanation: exercise.explanation }
    });
  };

  const renderExercise = (exercise, index) => {
    const result = exerciseResults[index];

    return (
      <div key={index} className="exercise-container">
        <div className="exercise-question">{exercise.question}</div>
        
        {exercise.type === 'multiple_choice' && (
          <div className="exercise-options">
            {exercise.options.map((option, optIndex) => (
              <button
                key={optIndex}
                className={`exercise-option ${exerciseAnswers[index] === optIndex ? 'selected' : ''}`}
                onClick={() => handleExerciseAnswer(index, optIndex)}
              >
                {option}
              </button>
            ))}
          </div>
        )}

        {exercise.type === 'fill_blank' && (
          <input
            type="text"
            className="exercise-input"
            value={exerciseAnswers[index] || ''}
            onChange={(e) => handleExerciseAnswer(index, e.target.value)}
            placeholder="Type your answer..."
          />
        )}

        <button
          className="check-button"
          onClick={() => checkExercise(index, exercise)}
          disabled={exerciseAnswers[index] === undefined || exerciseAnswers[index] === ''}
        >
          Check Answer
        </button>

        {result && (
          <div className={`exercise-result ${result.isCorrect ? 'correct' : 'incorrect'}`}>
            {result.isCorrect ? '✓ Correct!' : '✗ Incorrect'}
            {result.explanation && (
              <div className="exercise-explanation">{result.explanation}</div>
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="lesson-viewer">
      <div className="lesson-container">
        <div className="lesson-header">
          <button className="back-button" onClick={onClose}>← Back to Map</button>
          <h2>{lesson.title}</h2>
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        
        <div className="lesson-content">
          {lesson.content.map((item, index) => renderContent(item, index))}
        </div>

        {lesson.exercises && lesson.exercises.length > 0 && (
          <div className="lesson-exercises">
            <h3 className="exercises-heading">Practice Exercises</h3>
            {lesson.exercises.map((exercise, index) => renderExercise(exercise, index))}
            {allChecked && (
              <div className="lesson-complete-section">
                <p className="lesson-score">
                  Score: {Math.round(score * 100)}% ({Object.values(exerciseResults).filter(r => r?.isCorrect).length}/{lesson.exercises.length} correct)
                </p>
                {canComplete ? (
                  <button
                    type="button"
                    className="complete-lesson-button"
                    onClick={() => onCompleteLesson?.()}
                  >
                    ✓ Complete lesson
                  </button>
                ) : (
                  <p className="lesson-complete-hint">
                    Score at least {Math.round(COMPLETE_THRESHOLD * 100)}% to mark this lesson complete. Review and try again!
                  </p>
                )}
              </div>
            )}
          </div>
        )}
        {lesson.exercises?.length === 0 && onCompleteLesson && (
          <div className="lesson-complete-section">
            <button
              type="button"
              className="complete-lesson-button"
              onClick={() => onCompleteLesson()}
            >
              ✓ Mark lesson as complete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LessonViewer;