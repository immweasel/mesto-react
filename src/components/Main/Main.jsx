import { useEffect, useState } from "react";
import api from "../../utils/api";
import Card from "../Card/Card.jsx";

export default function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {

  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getInfo(), api.getCards()])
      .then(([dataUser, dataCard]) => {
        setUserName(dataUser.name);
        setUserDescription(dataUser.about);
        setUserAvatar(dataUser.avatar);
        dataCard.forEach((data) => data.myid = dataUser._id);
        setCards(dataCard);
  })
}, []);

  return(
    <main className="main">
      <section className="profile">
        <div className="profile__container">
          <button className="profile__avatar-button button" type="button" onClick={onEditAvatar}>
            <img className="profile__avatar" src={userAvatar} alt="Аватарка" />{" "}
          </button>
          <div className="profile__info">
            <div className="profile__edit-container">
              <h1 className="profile__name">{userName}</h1>
              <button className="profile__edit button" type="button" onClick={onEditProfile} />
            </div>
            <p className="profile__description">{userDescription}</p>
          </div>
        </div>
        <button className="profile__add button" type="button" onClick={onAddPlace} />
      </section>
      <section className="photo-grid">
          {cards.map(card => {
            return (
              <div className="photo-grid__item" key={card._id}>
                <Card card={card} onCardClick={onCardClick}/>
              </div>
            )
          })}
      </section>
    </main>
  )
}