import { useSelector } from 'react-redux';

export const useTechData = (selectedTech, selectedChildTech) => {
  const { loading } = useSelector(state => state.data.loading);
  const { error } = useSelector(state => state.data.error);
  const topicsData = useSelector(state => state.data.data.map(topic => topic.label));
  const topicChildData = useSelector(state => 
    selectedTech 
      ? state.data.data.find(topic => topic.label === selectedTech)
                        ?.children
                        ?.map(topicChild => topicChild.label) 
      : null
  );
  const topicGrandChildData = useSelector(state => 
    selectedChildTech 
      ? state.data.data.find(topic => topic.label === selectedTech)
                        ?.children
                        ?.find(topicChild => topicChild.label === selectedChildTech)
                        ?.children
                        ?.map(topicGrandChild => topicGrandChild) 
      : null
  );

  return { loading, error, topicsData, topicChildData, topicGrandChildData };
};
