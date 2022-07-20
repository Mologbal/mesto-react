import React from "react";

function PopupWithForm(props) {
    let PopupOpen = props.open ? 'popup_enable': ``;
    return (
        <div className={`popup ${PopupOpen}`} id={`popup-${props.name}`}>               
        <div className="popup__window">
            <button className="popup__close-button" type="button" aria-label="Закрыть" onClick={props.close}></button>
            <h2 className="popup__title">{props.title}</h2>
            <form className="popup__placeholder" name="popup__form" noValidate>
            {props.children}
                <button className="popup__save-button" id="saveProfile" type="submit"
                    aria-label="Сохранить">Сохранить</button>
            </form>
        </div>
        <div className="popup__overlay"></div>
    </div>
    )
}

export default PopupWithForm;