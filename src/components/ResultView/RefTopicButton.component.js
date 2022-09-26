import styled from "styled-components";

export const TopicButtonWrapper = styled.button`
  border: 1px solid darkgreen;
  border-radius: 5px;
  margin: 1em;
  padding: 0.5em 1em;
  font-size: 1em;
  cursor: pointer;
  &:hover {
    background-color: #ccc;
  }
`;

export const RefTopicButtonBadge = styled.span`
  border-radius: 1em;
  margin: 0 0.5em;
  padding: 0 0.5em;
  color: white;
  background-color: green;
`;
