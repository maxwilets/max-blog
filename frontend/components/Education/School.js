export default function School({ school }) {
  return (
    <div className="schoolDiv">
      <h4>{school.title}</h4>
      <h5>{school.name}</h5>
      <p>{school.time}</p>
      <p>{school.location}</p>
    </div>
  );
}
