import styled from 'styled-components';

const ResumeStyles = styled.div`
  max-width: 75%;
  display: flex;
  flex-direction: row;
  .spacer {
    width: 3px;
    height: 5px;
    color: var(--gray);
  }
`;

const JobStyles = styled.div`
  border: 1px solid var(--lightGray);
  padding: 16px 5%;
  border-radius: 5px;
  margin-top: 5rem;
  position: relative;
  box-shadow: var(--bs);
`;

const JobWrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
`;

export { ResumeStyles, JobStyles, JobWrapper };
