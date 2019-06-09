import React from "react";
import { RoomContext } from "../Context";
import Loading from "./Loading";
import Rooms from "./Rooms";
import Title from "./Title";

export default class FeaturedRoom extends React.Component {
  static contextType = RoomContext;

  render() {
    let {loading, featuredRooms: rooms} = this.context;
    rooms = rooms.map(room => <Rooms key={room.id} room={room} />)

    return (
      <section>
        <Title title="feature rooms"/>
        <div className="featured-rooms-center">
          {loading ? <Loading /> : rooms}
        </div>
      </section>
    )
  }
}
