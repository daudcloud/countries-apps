import styled from "styled-components";

const Div = styled.div`
  background: var(--clr-background-element);
  border-radius: 0.3rem;
  color: var(--clr-text);
  display: flex;
  align-items: center;
  gap: 1.4rem;
  font-weight: 600;
  padding: 1.3em 2em;
  position: relative;
  cursor: pointer;
  box-shadow: 0 0.025rem 0.5rem 0.3rem var(--clr-shadow);
  span {
    margin-left: 1.5rem;
  }
  ul {
    list-style: none;
    position: absolute;
    background: var(--clr-background-element);
    left: 0;
    right: 0;
    top: calc(100% - 0.5em);
    border-radius: 0.3rem;
    padding: 1em 0;
    transition: 0.1s ease-in-out;
    transform: scaleY(0);
    transform-origin: top;
    z-index: 2;
    box-shadow: 0 0.025rem 0.5rem 0.3rem var(--clr-shadow);

    &.opened {
      transform: scaleY(1);
    }
  }
`;

export const Li = styled.li`
  transition: 0.1s linear;
  padding: 0.3em 2em;
  background-color: ${({ active }) =>
    active ? "var(--clr-list-active)" : "transparent"};
  &:hover,
  &:focus {
    background-color: ${({ active }) =>
      active ? "current" : "var(--clr-list-hover)"};
  }
`;

export default Div;
