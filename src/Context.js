import React, { Component } from 'react'

const RoomContext = React.createContext();

class RoomProvider extends Component {
  state = {
    greeting: "hello",
    name: "tran duc anh"
  }
  render() {
    return (
      <RoomContext.Provider value={{...this.state}}>
        {this.props.children}
      </RoomContext.Provider>
    )
  }
}

const RoomConsumer = RoomContext.Consumer;

export {RoomContext, RoomProvider, RoomConsumer};
