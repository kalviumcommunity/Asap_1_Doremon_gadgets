import React from 'react'
import "./Card.css"

const Card = (props) => {
  
  return (
    <div className="cont">
    <div className='cards'>
        <img width={315}px src={props.props.img} alt="" />
        <h2>{props.props.name}</h2>
        <p>
            {props.props.des}
        </p>
        <h3 className='sub'>Category : {props.props.category}</h3>
        <h3 className='sub'>Year Invented : {props.props.year_invented}</h3>
        <br />
        <br />
        <br />
    </div>
    </div>
  )
}

export default Card