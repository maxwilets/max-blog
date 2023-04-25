import { SkillStyles } from './styles';

export default function Skill({ skill }) {
  return (
    <SkillStyles $level={skill.level}>
      <p>{skill.skillName}</p>
      <span className="colorDial">
        <span>{skill.level}</span>
      </span>
    </SkillStyles>
  );
}
