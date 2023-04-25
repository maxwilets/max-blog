import styled from 'styled-components';

const ResumeStyles = styled.div`
  display: flex;
  flex-direction: row;

  .jobSection {
    max-width: 65%;
  }

  .headers {
    display: flex;
    flex-direction: row-reverse;
    h3 {
      margin-left: 10px;
    }
  }
  .yearHeader {
    background-color: #fff;
    height: fit-content;
    text-align: center;
    padding: 15px 20px;
    display: inline-block;
    transform: translateX(-19px) translateY(17.5px);
    border-radius: 50%;
    border: 2px solid #000;
    position: relative;
    box-shadow: var(--bs);

    &:after {
      content: ' ';
      height: 100%;
      top: 101.5%;
      left: 47%;
      width: 3px;
      background-color: var(--lightGray);
      position: absolute;
    }

    svg {
      vertical-align: bottom;
    }
  }
`;

const JobStyles = styled.div`
  border: 1px solid var(--lightGray);
  padding: 16px 5%;
  border-radius: 5px;
  margin-top: 5rem;
  position: relative;
  box-shadow: var(--bs);

  :first-of-type {
    margin-top: -10px;
  }
`;

const JobWrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
`;

export { ResumeStyles, JobStyles, JobWrapper };
