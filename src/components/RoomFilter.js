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
        {/* room price */}
        <div className="form-group">
          <label htmlFor="price"> room price ${price}</label>
          <input className="form-control" type="range" id="price" name="price" min={minPrice} max={maxPrice} value={price} onChange={handleChange}/>
        </div>
        {/* end room price */}
        {/* size */}
        <div className="form-group">
          <label htmlFor="size">room size</label>
          <div className="size-inputs">
            <input className="size-input" type="number" id="size" name="minSize" onChange={handleChange} value={minSize}/>
            <input className="size-input" type="number" id="size" name="maxSize" onChange={handleChange} value={maxSize}/>
          </div>
        </div>
        {/* end size */}
        {/* extras */}
        <div className="form-group">
          <div className="single-extra">
            <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange}/>
            <label htmlFor="breakfast">breakfast</label>
          </div>
          <div className="single-extra">
            <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange}/>
            <label htmlFor="pets">pets</label>
          </div>
        </div>
        {/* end extras */}
      </form>
    </section>
  )
}
