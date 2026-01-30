import { useParams, useNavigate } from 'react-router-dom';
import LessonViewer from '../components/LessonViewer';
import { markNodeCompleted } from '../utils/progress';
import '../App.css';

function LessonPage() {
  const { nodeId } = useParams();
  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/');
  };

  const handleCompleteLesson = () => {
    if (nodeId) markNodeCompleted(nodeId);
    navigate('/');
  };

  return (
    <div className="lesson-page">
      <LessonViewer
        nodeId={nodeId}
        onClose={handleClose}
        onCompleteLesson={handleCompleteLesson}
      />
    </div>
  );
}

export default LessonPage;