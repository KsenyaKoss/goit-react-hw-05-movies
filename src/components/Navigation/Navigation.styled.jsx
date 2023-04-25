import styled from 'styled-components';

export const StyledList = styled.ul`
  display: flex;
  gap: 30px;
  padding: 20px, 30px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const StyledLi = styled.li`
  color: black;
  font-size: 500px;

  &.active {
    color: red;
  }

  &:hover:not(.active) {
    text-decoration: underline;
  }
`;
