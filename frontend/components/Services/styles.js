import styled from 'styled-components';

export const ServicesStyles = styled.div`
  max-width: 1100px;
  margin: auto;
  margin-bottom: 1em;
  padding: 2rem 0 !important;
  .header {
    width: 100%;
  }

  .servicesBody {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }

  .servicesCard {
    width: 30%;
    text-align: center;
    background-color: var(--offWhite);
    border: 1px solid var(--lightGray);
    box-shadow: var(--bs);
  }
`;
