import React, { useState } from 'react';
import style from './Accordion.module.scss'

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={style.accordion__item}>
      <div className={style.accordion__title} onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>{isActive ? '-' : '+'}</div>
      </div>
      {isActive && <h3 className={style.accordion__content}>{content}</h3>}
      <div className={style.line}></div>
    </div>
  );
};

export default Accordion;