import React from 'react';
import {useContext} from 'react';
import {RoomContext} from '../Context';
import Title from './Title';

//get all unique value
const getUnique = (items, value) => {
  return (
    [...new Set(items.map(item => item[value]))]
  )
}

export default function RoomFilter({rooms}) {
  const context = useContext(RoomContext);
  const {handleChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets} = context;

  // get unique type
  let types = getUnique(rooms, "type");
  //add all
  types = ["all", ...types];
  //map to jsx
  types = types.map((item,index) => <option key={index} value={item}>{item}</option>);

  let people = getUnique(rooms, 'capacity');
  people = people.map((item, index) => (<option key={index} value={item}>{item}</option>))

  return (
    <section className="filter-container">
      <Title title={"search rooms"}/>
      <form className="filter-form">
        {/* select type */}
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            className="form-control"
            name="type"
            id="type"
            value={type}
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
        {/* end select type */}
        {/* guests */}
        <div className="form-group">
          <label htmlFor="capacity">Guests</label>
          <select
            className="form-control"
            name="capacity"
            id="capacity"
            value={capacity}
            onChange={handleChange}
          >
            {people}
          </select>
        </div>
        {/* end guests */}
      </form>
    </section>
  )
}
