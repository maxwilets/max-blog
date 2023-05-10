import styled from 'styled-components';
import { Devices } from '../Devices';

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

    @media ${Devices.tablet} {
      flex-direction: column;
    }
  }

  .servicesCard {
    padding: 1rem;
    width: 30%;
    text-align: center;
    background-color: var(--offWhite);
    border: 1px solid var(--lightGray);
    box-shadow: var(--bs);
    margin-top: 2em;

    @media ${Devices.tablet} {
      width: 100%;
    }
  }
`;
