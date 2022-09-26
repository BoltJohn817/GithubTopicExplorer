import React, { useContext, useCallback } from "react";
import { useTopicQuery } from "../../hook/useTopicQuery";
import { SearchContext } from "../../store/SearchContext";
import {
  Loading,
  Error,
  Badge,
  ResultViewWrapper,
  ResultCount,
} from "./ResultView.components";
import { RefTopicButton } from "./RefTopicButton";

function ResultView() {
  const { query, setQuery } = useContext(SearchContext);
  const { data, loading, error } = useTopicQuery({
    query,
  });

  const handleTopicClick = useCallback(
    (topic) => {
      setQuery(topic);
    },
    [setQuery]
  );

  if (loading) {
    return <Loading>Loading ...</Loading>;
  }

  if (error) {
    return <Error>{`${error.name}: ${error.message}`}</Error>;
  }

  if (!data) {
    return <Error>Data is Empty;</Error>;
  }

  return (
    <ResultViewWrapper>
      <ResultCount>
        {data.name} - <Badge>{data.stargazerCount}</Badge>
      </ResultCount>
      <div>
        {data.relatedTopics &&
          data.relatedTopics.map((topic) => (
            <RefTopicButton
              topic={topic}
              onClick={() => handleTopicClick(topic.name)}
            />
          ))}
      </div>
    </ResultViewWrapper>
  );
}

export { ResultView };
