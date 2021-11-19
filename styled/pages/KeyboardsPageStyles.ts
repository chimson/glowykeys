import styled from 'styled-components';

export const Main = styled.main`
  margin-top: 5rem;
  display: grid;
  grid-template-columns: repeat(4, minmax(auto, 1fr));
  grid-template-areas:
    'header header header header'
    'browse browse browse browse'
    'footer footer footer footer';
`;

export const Header = styled.header`
  grid-area: header;
  position: relative;
  text-align: center;
  display: flex;
  padding: 0 1rem;
  min-height: 600px;
  justify-content: center;
  max-width: 100%;
  width: 100%;
  margin: 0 auto;
  align-items: center;
  box-shadow: 0 2px 6px 0px rgb(255 255 255 / 15%);
  img {
    z-index: -1;
    filter: brightness(0.5);
  }
`;

export const H1 = styled.h1`
  max-width: 600px;
`;

export const ProductsSection = styled.section`
  display: grid;
  grid-area: browse;
  max-width: 1440px;
  padding: 5rem 1rem;
  width: 100%;
  gap: 3rem;
  margin: 0 auto;
  grid-template-columns: repeat(4, minmax(auto, 1fr));
  grid-template-areas:
    'filters filters filters filters'
    'items items items items';

  @media (min-width: 768px) {
    padding: 5rem 0;
    grid-template-areas: 'filters items items items';
  }
`;

export const FilterSection = styled.section`
  grid-area: filters;
`;

export const ProductsContainer = styled.section`
  grid-area: items;
  display: grid;
  margin: 0 auto;
  max-width: 1440px;
  width: 100%;
  gap: 2rem;

  grid-template-columns: minmax(330px, 1fr);

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(auto, 1fr));
    grid-column-start: 2;
  }
`;
