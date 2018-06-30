import React from 'react';
import './List.css';

const List = props => (
  <ul className="itemList">
    {
      props.items.map((item, index) => <li key={index}>
      <div className='taskNumber'>
        <div className='titleContainer'>
        {item.taskDate} Task number {item.id}
        </div>
        <div className='iconContainer'>
          <i className="fas fa-trash-alt"  onClick={() => props.delete(index)}></i>
        </div>
      </div>
      <div className='taskDetails'> {item.details}</div>
      </li>)
    }
  </ul>
);

export default List;