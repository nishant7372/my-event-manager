import "./card.css";
export default function EventList(props) {
  const a = ["yellow", "magenta", "blue", "green", "sky-blue", "voilet"];
  return props.events.map((event, index) => (
    <div
      className={`event-card ${a[Math.floor(Math.random() * 6)]}`}
      key={event.id}
    >
      <h2>
        {index + 1}. {event.title}
      </h2>
      <p>{event.date}</p>
      <button onClick={() => props.handleClick(event.id)}>Delete</button>
    </div>
  ));
}
