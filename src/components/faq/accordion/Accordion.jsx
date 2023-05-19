import React from 'react';
import './Accordion.scss'

const Accordion = ({ title, content, id, isActive, selectActive }) => {

  console.log(isActive)
  return (
    <div className='accordion__item'>
      <div className='accordion__title' onClick={() => selectActive(id)}>
        <div>{title}</div>
        <div>{isActive === id ? '-' : '+'}</div>
      </div>
      <div className={`answer__wrapper ${isActive === id ? "open" : "close"}`}>
        <div className='answer'>{content}</div>
      </div>
      <div className='line'></div>
    </div>
  );
};

export default Accordion;