import React from 'react'
import "./Card.css"

const Card = (props) => {
  
  return (
    <div className="cont">
    <div className='cards'>
        <img width={315}px src={props.props.img} alt="" />
        <h2>{props.props.name}</h2>
        <p>
            A cloak that renders its wearer invisible, providing stealth and
            the ability to navigate unseen, making for entertaining and
            mischievous escapades.
        </p>
    </div>
    </div>
  )
}

export default Card