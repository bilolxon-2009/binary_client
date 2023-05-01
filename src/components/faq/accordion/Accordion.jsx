import React, { useState } from 'react';
import './Accordion.scss'

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className='accordion__item'>
      <div className='accordion__title' onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>{isActive ? '-' : '+'}</div>
      </div>
      <div className={`answer__wrapper ${isActive ? "open" : "" }`}>
        <div className='answer'>{content}</div>
      </div>
      <div className='line'></div>
    </div>
  );
};

export default Accordion;