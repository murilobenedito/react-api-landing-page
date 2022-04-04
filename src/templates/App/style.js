import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ background }) => css`
    background: ${background};
    color: white;
    text-align: center;
    padding: 15px;
    margin: 10px;
    font-family: Helvetica, sans-serif;
    text-transform: uppercase;
    border-radius: 10px;
  `}
`;
