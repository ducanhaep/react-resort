import React from "react";
import { RoomContext } from "../Context";

export default class FeaturedRoom extends React.Component {
  static contextType = RoomContext;
  render() {
    return <div>from featured rooms</div>;
  }
}
