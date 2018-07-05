import React from 'react';
import './List.css';

const List = props => (

  <ul className="itemList">
    {
      props.items.map((item, index) => <li key={index}>
      
      <div className="containerOfAll">
      <div className='taskNumber'>
        <div className='headerContainer'>
          <div className='showDetails'>
          <i className="fas fa-caret-down"onClick={() => props.toggler(index)}></i>
          </div>
          <div className='timeContainer'>
          {new Intl.DateTimeFormat('pl-PL').format(item.taskDate)}
          </div>
          <div className="titleContainer">
            Task number {item.id}
          </div>
          <div className='iconContainer'>
            <i className="fas fa-check-square"  onClick={() => props.delete(index)}></i>
        </div>
          
          </div>
      </div>
      <div className={'taskDetails' + ' ' + item.detailsVisibility} > {item.details}</div>
      </div>
      <div style={{clear: 'both'}}></div>
       
      </li>)
      
    }
    
  </ul>
);

export default List;
