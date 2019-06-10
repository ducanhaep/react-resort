import React, { Component } from 'react'
import items from "./data";
const RoomContext = React.createContext();

class RoomProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      rooms: [],
      sortedRooms: [],
      featuredRooms: [],
      loading: true,
    }
  }
  

  // componentDidMount() {
  //   let rooms = this.formatData(items);
  //   let featuredRooms = rooms.filter(room => room.featured === true);
  //   // this.setState((prevState) => ({
  //   //   rooms: prevState.rooms,
  //   //   sortedRooms: prevState.rooms,
  //   //   featuredRooms: prevState.featuredRooms,
  //   //   loading: !prevState.loading

  //   // }))
  //   this.setState({
  //     rooms,
  //     featuredRooms,
  //     sortedRooms: rooms,
  //     loading: false,
  //   })
  //   console.log("run context")
  // }

  componentWillMount() {
    let rooms = this.formatData(items);
    let featuredRooms = rooms.filter(room => room.featured === true);
    this.setState({
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      loading: false,
    })
    console.log("run context")
  }

  formatData(items) {
    let tempItems = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => (
        image.fields.file.url
      ));
      let room = {...item.fields, images, id};
      return room;
    })
    return tempItems;
  }

  getRoom = (slug) => {
    let tempRooms = [...this.state.rooms];
    const room = tempRooms.find(room => room.slug === slug);
    return room;
  }

  render() {
    return (
      <RoomContext.Provider value={{...this.state, getRoom: this.getRoom}}>
        {this.props.children}
      </RoomContext.Provider>
    )
  }
}

const RoomConsumer = RoomContext.Consumer;

export {RoomContext, RoomProvider, RoomConsumer};
