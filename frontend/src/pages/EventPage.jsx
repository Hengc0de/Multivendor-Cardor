import React from "react";
import Header from "../components/Layout/Header";
import EventCard from "../components/Route/Events/EventCard.jsx";
const EventPage = () => {
  return (
    <div>
      <Header activeheading={4} />
      <EventCard active={true} />
      <EventCard active={true} />
    </div>
  );
};

export default EventPage;
