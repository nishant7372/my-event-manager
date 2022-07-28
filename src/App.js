import "./App.css";
import "./Components/Title";
import Modal from "./Components/Modal";
import Title from "./Components/Title";
import { useState } from "react";
import EventList from "./Components/EventList";

function App() {
  const [events, setEvents] = useState([
    { title: "Riya's Birthday Party", date: "2022-08-29", id: 1 },
    { title: "Rohan's Birthday Party", date: "2022-09-05", id: 2 },
    { title: "Naman's Birthday Party", date: "2022-10-10", id: 3 },
    { title: "Kirti's Birthday Party", date: "2023-03-20", id: 4 },
  ]);

  const [showModal, setshowModal] = useState(false);
  const [showEvents, setshowEvents] = useState(true);

  const addEvent = (event) => {
    setEvents((prevEvents) => {
      if (event.title !== "") return [...prevEvents, event];
      else {
        setshowModal(true);
        return [...prevEvents];
      }
    });
  };

  const handleClick = (id) => {
    setEvents(
      events.filter((event) => {
        return event.id !== id;
      })
    );
  };

  const handleClose = (id) => {
    setshowModal(false);
  };

  return (
    <div className="App">
      <Title />
      <div className="main">
        {events.length !== 0 && !showEvents && (
          <button
            onClick={() => {
              setshowEvents(true);
            }}
          >
            Show Events
          </button>
        )}

        {events.length !== 0 && showEvents && (
          <button
            onClick={() => {
              setshowEvents(false);
            }}
          >
            Hide Events
          </button>
        )}

        <button
          onClick={() => {
            setshowModal(true);
          }}
        >
          Add an Event
        </button>

        {showEvents && <EventList events={events} handleClick={handleClick} />}
      </div>
      {showModal && <Modal handleClose={handleClose} addEvent={addEvent} />}
    </div>
  );
}

export default App;
