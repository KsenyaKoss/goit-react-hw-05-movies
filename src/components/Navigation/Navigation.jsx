import { StyledNavLink, StyledList } from './Navigation.styled';

export const Navigation = () => {
  return (
    <nav>
      <StyledList>
        <li>
          <StyledNavLink to="/">Home</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="movies">Movies</StyledNavLink>
        </li>
      </StyledList>
    </nav>
  );
};
