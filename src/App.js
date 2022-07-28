import "./App.css";
import "./Components/Title";
import Modal from "./Components/Modal";
import Title from "./Components/Title";
import { useState } from "react";
import EventList from "./Components/EventList";

function App() {
  const [events, setEvents] = useState([
    { title: "Satin's Birthday Party", date: "29-08-2022", id: 1 },
    { title: "Nitin's Birthday Party", date: "05-09-2022", id: 2 },
    { title: "Nishant's Birthday Party", date: "10-10-2022", id: 3 },
    { title: "Srishti's Birthday Party", date: "20-03-2023", id: 4 },
  ]);
  const [showModal, setshowModal] = useState(false);
  const [showEvents, setshowEvents] = useState(true);

  const addEvent = (event) => {
    setEvents((prevEvents) => {
      return [...prevEvents, event];
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
        {events.length != 0 && !showEvents && (
          <button
            onClick={() => {
              setshowEvents(true);
            }}
          >
            Show Events
          </button>
        )}

        {events.length != 0 && showEvents && (
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
