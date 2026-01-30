// Load the correct graph by learning domain

import grammarGraph from './french-grammar-graph.json';
import vocabularyGraph from './french-vocabulary-graph.json';
import listeningGraph from './french-listening-graph.json';
import readingGraph from './french-reading-graph.json';
import cultureGraph from './french-culture-graph.json';

const GRAPHS = {
  grammar: grammarGraph,
  vocabulary: vocabularyGraph,
  listening: listeningGraph,
  reading: readingGraph,
  culture: cultureGraph,
};

export function getGraphForDomain(domainId) {
  return GRAPHS[domainId] ?? GRAPHS.grammar;
}
