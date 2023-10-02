import React from 'react';
import './Card.css';

const Card = (props) => {
  return (
    <div className={`card ${props.isMyCource ? 'my-course' : ''}`}>
      <img height={170} width={300} src={props.img} alt="images" />
      <h3>{props.title}</h3>
      <div className='card__user'>
        <div className='card__levercourse'><p>{props.levelOfCourse}</p></div>
        <img className='card__user-avatar' height={20} width={20} src={props.user.avatar} alt="avatar user"/>
        <p className='card__user-name' >{props.user.name}</p>
        <span className='card__user-rating'>{props.rating}</span>
      </div>
      <div className='card__info'>
        <p className='card__info-students'>{props.students} Students</p>
        <p className='card__info-modules'>{props.modules} Modules</p>
        <data className='card__info-data'>{props.time}</data>
      </div>
      {props.isMyCource && (
        <>
          <progress value="50" max="100">
            50%
          </progress>
          <div className="card__info">
            <p>5 / 10 Modules</p>
            <div>50 %</div>
          </div>
        </>
      )}
    </div>
  );
};

export default Card;