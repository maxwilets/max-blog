import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import DisplayError from '../ErrorMessage';
import H3Style from '../styles/Typography';
import { JobWrapper, ResumeStyles } from './ResumeStyles';
import Job from '../Job';
import YearSpacer from '../YearSpacer';

export const ALL_JOBS_QUERY = gql`
  query ALL_JOBS_QUERY {
    allResumes {
      id
      title
      company
      startYear
      endYear
      date
      role1
      role2
      role3
      role4
      role5
    }
  }
`;

export default function Resume() {
  const { data, error, loading } = useQuery(ALL_JOBS_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <DisplayError error={error} />;
  const { allResumes } = data;

  return (
    <>
      <h2>Resume</h2>

      <ResumeStyles>
        <section className="jobSection">
          <H3Style>Work History</H3Style>
          {allResumes.map((resume) => (
            <JobWrapper>
              <YearSpacer
                years={resume.endYear ? resume.endYear : resume.startYear}
              />
              <Job key={resume.id} resume={resume} />
            </JobWrapper>
          ))}
        </section>
      </ResumeStyles>
    </>
  );
}
