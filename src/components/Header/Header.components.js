import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 1em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid darkgray;
`;

export const HeaderLabel = styled.h2`
  color: slateblue;
`;

export const SearchInput = styled.input`
  padding: 0.5em 1em;
  height: 2em;
  border-radius: 2em;
  border: 1px solid lightgray;
  width: 150px;
  transition: 0.25s all ease-out;
  &:focus {
    width: 300px;
  }
`;
