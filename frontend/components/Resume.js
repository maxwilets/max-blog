import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import DisplayError from './ErrorMessage';
import H3Style from './styles/Typography';

export const ALL_JOBS_QUERY = gql`
  query ALL_JOBS_QUERY {
    allResumes {
      id
      title
      company
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
  console.log(data.allResumes);
  return (
    <>
      <h2>Resume</h2>
      <H3Style>Work History</H3Style>
      {allResumes.map(({ title, date, role1, role2, role3, role4, role5 }) => (
        <section className="resume-card">
          <h4>{title}</h4>
          <h5>{date}</h5>
          <ul>
            <li>{role1}</li>
            <li>{role2}</li>
            <li>{role3}</li>
            <li>{role4}</li>
            <li>{role5}</li>
          </ul>
        </section>
      ))}
    </>
  );
}
