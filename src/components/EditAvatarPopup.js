import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
    const ref = React.useRef();

    function handleSubmit(e) {
        e.preventDefault()

        props.onSubmit({
            avatar: ref.current.value
        })
    }

   //очистит поле ввода ссылочки на аватар, на случай если она уже заполнена
    React.useEffect(() => {
        ref.current.value = ''
    }, [props.open])


    return (
        <PopupWithForm
                    name='avatar'
                    title='Обновить аватар'
                    open={props.open}
                    close={props.close}
                    onSubmit={handleSubmit}
                    buttonText = 'Сохранить'
                    onOverlayClose={props.onOverlayClose}
                    >
                    <input
                    ref={ref}
                    className="popup__placeholder-input popup__placeholder-input_type_passion"
                    id="avatar"
                    type="url"
                    placeholder="Ссылка на картинку"
                    name="avatar"
                    required="required"/>
                <span id="error-avatar" className="popup__error"></span>
            </PopupWithForm>
    )
}

export default EditAvatarPopup;