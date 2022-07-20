import React from "react";

function Cards(props) {

    function handleClick() {
        props.onCardClick(props.card);
    } 

    return(
        <li className="elements__element">
            <button className="elements__delete-button" type="button"></button>
            <img className="elements__element-image" src={props.card.link}
                alt={props.card.name} onClick={handleClick}/>
            <div className="elements__element-box">
                <h2 className="elements__element-subtitle">{props.card.name}</h2>
                <div className="elements__element-likes-box">
                <button className="elements__element-like" type="button" aria-label="Понравилось"></button>
                <span className="elements__element-like-length"></span>
            </div>
            </div>
        </li>
    )
}

export default Cards;