import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import DisplayError from '../ErrorMessage';
import H3Style from '../styles/Typography';
import { JobWrapper, ResumeStyles } from './styles';
import Job from '../Job';
import YearSpacer from '../YearSpacer';
import { Briefcase } from '../../icons/Briefcase';

export const ALL_JOBS_QUERY = gql`
  query ALL_JOBS_QUERY {
    allResumes(sortBy: startYear_DESC) {
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
  console.log(allResumes);

  // console.log(allResumesSorted);

  return (
    <>
      <h2>Resume</h2>

      <ResumeStyles>
        <section className="jobSection">
          <section className="headers">
            <H3Style>Work History</H3Style>
            <span className="yearHeader">
              <Briefcase />
            </span>
          </section>
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
