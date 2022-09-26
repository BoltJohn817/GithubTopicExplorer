import { useQuery, gql } from "@apollo/client";

const GET_GIT_TOPICS = gql`
  query GetTopicsByName($name: String!) {
    topic(name: $name) {
      id
      name
      stargazerCount
      relatedTopics(first: 10) {
        id
        name
        stargazerCount
      }
    }
  }
`;

const useTopicQuery = ({ query }) => {
  const { data, loading, error } = useQuery(GET_GIT_TOPICS, {
    variables: {
      name: query,
    },
  });

  return {
    data: data && data.topic,
    loading,
    error,
  };
};

export { useTopicQuery };
