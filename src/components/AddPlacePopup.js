import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function AddPlacePopup(props) {
    const currentUser = React.useContext(CurrentUserContext);
    const [place, setPlace] = React.useState('');
    const [link, setLink] = React.useState('');

    function hanldePlace(e) {
        setPlace(e.target.value);
    }

    function handleLink(e) {
        setLink(e.target.value);
    }

    function handleSubmit (e) {
        e.preventDefault();

        props.onSubmit({
            name: place,
            link: link
        });
    };

    //очистит поля ввода для карточки
    React.useEffect(() => {
        setPlace('');
        setLink('');
    }, [props.open])


    return (
        <PopupWithForm 
        name='cards' 
        title='Новое место' 
        open={props.open}
        close={props.close}
        buttonText = 'Создать'
        onSubmit={handleSubmit}
        onOverlayClose = {props.onOverlayClose}
        >
        <input
        value={place}
        onChange={hanldePlace}
        className="popup__placeholder-input popup__placeholder-input_type_name"
        id="place"
        type="text"
        placeholder="Название"
        name="name"
        minLength="2"
        maxLength="30"
        required="required"/>
    <span id="error-place" className="popup__error"></span>
        <input
        value={link}
        onChange={handleLink}
        className="popup__placeholder-input popup__placeholder-input_type_passion"
        id="link"
        type="url"
        placeholder="Ссылка на картинку"
        name="link"
        required="required"/>
    <span id="error-link" className="popup__error"></span>
        </PopupWithForm>
    )
}

export default AddPlacePopup