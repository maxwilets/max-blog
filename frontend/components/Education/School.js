export default function School({ school }) {
  return (
    <div className="schoolDiv">
      <h4>{school.title}</h4>
      <p className="large">
        <img src={school.photo?.image.publicUrlTransformed} />
        {school.name}
      </p>
      <p className="large">{school.location}</p>
      <p className="large">{school.time}</p>
    </div>
  );
}
