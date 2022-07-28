import "./Modal.css";
import { useState } from "react";

export default function Modal(props) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  // const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const event = {
      title: title,
      date: date,
      id: Math.floor(Math.random() * 10000),
    };

    props.addEvent(event);
    resetForm();
  };

  const resetForm = () => {
    setDate("");
    setTitle("");
    // setDescription("");
    props.handleClose();
  };

  return (
    <form className="modal-backdrop" onSubmit={handleSubmit}>
      <div className="modal">
        <h2 className="title">Add an Event</h2>
        <label className="title-label">
          <h4>Event Title:</h4>
          <span>
            <input
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </span>
        </label>
        {/* <label className="date-label">
          Event Description:
          <span>
            <input
              type="text"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
          </span>
        </label> */}
        <label className="date-label">
          <h4>Event Date:</h4>
          <span>
            <input
              type="date"
              onChange={(e) => setDate(e.target.value)}
              value={date}
            />
          </span>
        </label>
        <button class="submit">Submit</button>
        <button className="close" onClick={props.handleClose}>
          X
        </button>
      </div>
    </form>
  );
}
