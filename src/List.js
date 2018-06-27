import React from 'react';
import './List.css';

const List = props => (
  <ul className="itemList">
    {
      props.items.map((item, index) => <li key={index}>
      <div className='taskNumber' onClick={() => props.delete(index)}>Task number {item.id}</div>
      <div className='taskDetails'> {item.details}</div>
      </li>)
    }
  </ul>
);

export default List;