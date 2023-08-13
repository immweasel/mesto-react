import Header from "./Header/Header.jsx";
import Main from "./Main/Main.jsx";
import Footer from "./Footer/Footer.jsx";
import PopupWithForm from "./PopupWithForm/PopupWithForm.jsx";
import ImagePopup from "./ImagePopup/ImagePopup.jsx";
import { useCallback, useState, useEffect } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext.js";
import api from "../utils/api.js";
import EditProfilePopup from "./EditProfilePopup/EditProfilePopup.jsx";
import EditAvatarPopup from "./EditAvatarPopup/EditAvatarPopup.jsx";
import AddPlacePopup from "./AddPlacePopup/AddPlacePopup.jsx";

function App() {
  //стейты попаов
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [isImagePopupOpen, setImagePopupOpen] = useState(false);
  const [isDeleteCardPopupOpen, setDeleteCardPopupOpen] = useState(false);
  //стейт контекста
  const [currentUser, setCurrentUser] = useState([]);
  //стейты карточки
  const [cards, setCards] = useState([]);
  const [deleteCardId, setDeleteCardId] = useState('');

  const setAllStatesForClosePopups = useCallback(() => {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setImagePopupOpen(false);
    setSelectedCard(null);
    setDeleteCardPopupOpen(false);
  }, [])

  const closePopupByEscape = useCallback((evt) => {
    if (evt.key === 'Escape') {
      setAllStatesForClosePopups()
      document.removeEventListener("keydown", closePopupByEscape)
    }
  }, [setAllStatesForClosePopups])

  const closeAllPopups = useCallback(() => {
    setAllStatesForClosePopups()
    document.removeEventListener("keydown", closePopupByEscape)
  }, [setAllStatesForClosePopups, closePopupByEscape])

  function setEventListenerForDocument() {
    document.addEventListener("keydown", closePopupByEscape);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
    setEventListenerForDocument()
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
    setEventListenerForDocument()
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
    setEventListenerForDocument()
    // hangEventListener()
  }

  function handleDeleteClick(cardId) {
    setDeleteCardId(cardId);
    setDeleteCardPopupOpen(true);
    setEventListenerForDocument()
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    setImagePopupOpen(true);
    setEventListenerForDocument()
  }

  useEffect(() => {
    Promise.all([api.getInfo(), api.getCards()])
      .then(([dataUser, dataCard]) => {
        setCurrentUser(dataUser);
        setCards(dataCard);
        // dataCard.forEach((data) => data.myid = dataUser._id);
      })
      .catch((err) => console.log(`Возникла какая-то ошибка: ${err}`));
  }, []);

  function handleCardDelete(evt) {
    evt.preventDefault()
    api.deleteCard(deleteCardId)
      .then(() => {
        setCards(cards.filter(card => {
          return card._id !== deleteCardId;
        }))
        closeAllPopups()
      })
      .catch((err) => console.log(`Возникла какая-то ошибка: ${err}`));
  }

  function handleUpdateUser(dataUser, reset) {
    api.setUserInfo(dataUser)
      .then(res => {
        setCurrentUser(res)
        closeAllPopups()
        reset()
      })
      .catch((err) => console.log(`Возникла какая-то ошибка: ${err}`));
    }

  function handleUpdateAvatar(dataUser, reset) {
    api.setNewAvatar(dataUser)
      .then(res => {
        setCurrentUser(res)
        closeAllPopups()
        reset()
      })
      .catch((err) => console.log(`Возникла какая-то ошибка: ${err}`));
    }

  function handleAddPlaceSubmit(dataCard, reset) {
    api.addCard(dataCard)
      .then(res => {
        setCards([res, ...cards])
        closeAllPopups()
        reset()
      })
      .catch((err) => console.log(`Возникла какая-то ошибка: ${err}`));
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page__content">

        <Header />

        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          onDeleteCard={handleDeleteClick}
          cards={cards}
        />

        <Footer />

        <EditProfilePopup
          onUpdateUser={handleUpdateUser}
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        />

        <AddPlacePopup
          onAddPlace={handleAddPlaceSubmit}
          onClose={closeAllPopups}
          isOpen={isAddPlacePopupOpen}
        />

        <PopupWithForm
          name='delete"'
          title='Вы уверены?'
          textButton='Да'
          isOpen={isDeleteCardPopupOpen}
          onClose={closeAllPopups}
          onSubmit={handleCardDelete}
        />

        <EditAvatarPopup
          onUpdateAvatar={handleUpdateAvatar}
          onClose={closeAllPopups}
          isOpen={isEditAvatarPopupOpen}
        />

        <ImagePopup
          card={selectedCard}
          isOpen={isImagePopupOpen}
          onClose={closeAllPopups}
        />

      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
