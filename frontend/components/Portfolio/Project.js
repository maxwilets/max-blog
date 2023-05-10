import { PortfolioStyles } from './style';

export default function Project({ projectData }) {
  console.log(projectData);
  return (
    <PortfolioStyles>
      <img src={projectData.photo.image.publicUrlTransformed} />
      <h3>{projectData.title}</h3>
      <p>{projectData.p1}</p>
      {projectData.p2 ? <p>{projectData.p2}</p> : <></>}
      {projectData.p3 ? <p>{projectData.p3}</p> : <></>}
      {projectData.technology.map((techButton) => (
        <a
          href={techButton.typeLink}
          target="_blank"
          className="btn"
          rel="noreferrer"
        >
          {techButton.name}
        </a>
      ))}
    </PortfolioStyles>
  );
}
