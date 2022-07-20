import {useEffect, useState} from "react";
import {apiConfig} from '../utils/Api'
import Card from "./Card";

function Main(props) {
    const [userName, setUserName] = useState('');
    const [userAvatar, setUserAvatar] = useState('');
    const [userAbout, setUserAbout] = useState('');
    const [card, setCard] = useState([]);

    useEffect(() => {
        apiConfig.getUserInfo()
        .then((res) => {
            setUserName(res.name);
            setUserAvatar(res.avatar);
            setUserAbout(res.about);
        apiConfig.getInitialCards()
        .then((res) => {
            setCard(res)
        })
        })
        .catch((err) => {
            console.log(`Ошибка: ${err}`)
        })
    }, []);
    
    return (
        <main className="main">

        <section className="profile">
            <div className="profile__box">
                <div className="profile__edit-box">
                    <img className="profile__avatar profile__avatar_overlay" src={userAvatar}
                        alt="аватарка" />
                    <button className="profile__editAva-button" type="button" onClick={props.onEditAvatar}></button>
                </div>
                <div className="profile__info">
                    <h1 className="profile__info-name">{userName}</h1>
                    <button className="profile__edit-button" type="button" aria-label="Изменить" onClick={props.onEditProfile}></button>
                    <p className="profile__info-passion">{userAbout}</p>
                </div>
            </div>
            <button className="profile__add-button" type="button" aria-label="Добавить" onClick={props.onAddPlace}></button>
        </section>

        <section className="elements-container">
            <ul className="elements">
            {card.map((cards) =>(
                <Card
                card={cards}
                key={cards._id}
                onCardClick={props.onCardClick}
                />
            ))}  {/* постарался примернить деструктуризацию в Cards, onCardClick принимает только {props.onCardClick} хотя пропса вобще больше нет в Card, как это работает сам не понял, верно ли это выше? */}
            </ul>
        </section>

    </main>
    )
}

export default Main;