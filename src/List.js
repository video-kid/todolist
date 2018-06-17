import React from 'react';
import './List.css';

const List = props => (
  <ul className="itemList">
    {
      props.items.map((item, index) => <li key={index}>Task number {item.id}</li>)
    }
  </ul>
);

export default List;