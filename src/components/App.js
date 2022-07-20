import {useState} from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
    const [isEditProfilePopupOpen, toggleEditProfilePopup] = useState(false);
    const [isAddPlacePopupOpen, toggleAddPlacePopup] = useState(false);
    const [isEditAvatarPopupOpen, toggleEditAvatarPopup] = useState(false);
    const [isImagePopupOpen, toggleZoomImagePopup] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null)


    function handleEditProfileClick() {
        toggleEditProfilePopup(true);
    }

    function handleAddPlaceClick() {
        toggleAddPlacePopup(true);
    }

    function handleEditAvatarClick() {
        toggleEditAvatarPopup(true);
    }

    function closeAllPopups() {
        toggleEditProfilePopup(false);
        toggleAddPlacePopup(false);
        toggleEditAvatarPopup(false);
        setSelectedCard(null);
    }

    function handleCardClick(card) {
        setSelectedCard(card)
    }

    return (
        <section className='content'> 
        <div className="page">
            <Header/>
            <Main
                onEditProfile={handleEditProfileClick}
                onEditAvatar={handleEditAvatarClick}
                onAddPlace={handleAddPlaceClick}
                onCardClick={handleCardClick}
                />
            <Footer/>

            <PopupWithForm
                name='profile'
                title='Редактировать профиль'
                open={isEditProfilePopupOpen}
                close={closeAllPopups}
                buttonText = 'Сохранить'
                >
                <input
                    className="popup__placeholder-input popup__placeholder-input_type_name"
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Имя"
                    minLength="2"
                    maxLength="40"
                    required="required"/>
                <span id="error-name" className="popup__error"></span>
                <input
                    className="popup__placeholder-input popup__placeholder-input_type_passion"
                    id="passion"
                    type="text"
                    name="about"
                    placeholder="Профессиональная деятельность"
                    minLength="2"
                    maxLength="200"
                    required="required"/>
                <span id="error-passion" className="popup__error"></span>
            </PopupWithForm>

            <PopupWithForm
                    name='avatar'
                    title='Обновить аватар'
                    open={isEditAvatarPopupOpen}
                    close={closeAllPopups}
                    buttonText = 'Сохранить'
                    >
                    <input
                    className="popup__placeholder-input popup__placeholder-input_type_passion"
                    id="avatar"
                    type="url"
                    placeholder="Ссылка на картинку"
                    name="avatar"
                    required="required"/>
                <span id="error-avatar" className="popup__error"></span>
            </PopupWithForm>

            <PopupWithForm 
                    name='cards' 
                    title='Новое место' 
                    open={isAddPlacePopupOpen}
                    close={closeAllPopups}
                    buttonText = 'Создать'
                    >
                    <input
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
                    className="popup__placeholder-input popup__placeholder-input_type_passion"
                    id="link"
                    type="url"
                    placeholder="Ссылка на картинку"
                    name="link"
                    required="required"/>
                <span id="error-link" className="popup__error"></span>
            </PopupWithForm>

            <PopupWithForm
                    name='delete'
                    title='Вы уверены?'
                    close={closeAllPopups}
                    buttonText = 'Да'
                    />

            <ImagePopup
                    card={selectedCard}
                    onClose={closeAllPopups}
            />
            
        </div>
        </section>
    );
}

export default App;
