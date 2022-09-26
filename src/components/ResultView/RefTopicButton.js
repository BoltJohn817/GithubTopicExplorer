import {
  TopicButtonWrapper,
  RefTopicButtonBadge,
} from "./RefTopicButton.component";

export const RefTopicButton = ({ topic, ...props }) => {
  return (
    <TopicButtonWrapper {...props} data-testid="testTopicButton">
      {topic.name}
      <RefTopicButtonBadge>{topic.stargazerCount}</RefTopicButtonBadge>
    </TopicButtonWrapper>
  );
};
