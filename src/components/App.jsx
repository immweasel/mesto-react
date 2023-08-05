import Header from "./Header/Header.jsx";
import Main from "./Main/Main.jsx";
import Footer from "./Footer/Footer.jsx";
import PopupWithForm from "./PopupWithForm/PopupWithForm.jsx";
import ImagePopup from "./ImagePopup/ImagePopup.jsx";
import React, { useCallback } from "react";

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [isImagePopupOpen, setImagePopupOpen] = React.useState(false);
  const [isDeleteCardPopupOpen, setDeleteCardPopupOpen] = React.useState(false);

  const setAllStatesForClosePopups = useCallback (() => {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setImagePopupOpen(false);
    setSelectedCard(null);
    setDeleteCardPopupOpen(false);
  },[])

  const closePopupByEscape = useCallback ((evt) => {
    if (evt.key === 'Escape') {
      setAllStatesForClosePopups()
      document.removeEventListener("keydown", closePopupByEscape)
    }
  },[setAllStatesForClosePopups])

  const closeAllPopups = useCallback (() => {
    setAllStatesForClosePopups()
    document.removeEventListener("keydown", closePopupByEscape)
  },[setAllStatesForClosePopups, closePopupByEscape])

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

  function handleDeleteClick() {
    setDeleteCardPopupOpen(true);
    setEventListenerForDocument()
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    setImagePopupOpen(true);
    setEventListenerForDocument()
  }

  return (
    <div className="page__content">
      
      <Header />

      <Main
        onEditProfile = {handleEditProfileClick}
        onAddPlace = {handleAddPlaceClick}
        onEditAvatar = {handleEditAvatarClick}
        onCardClick = {handleCardClick}
        onDeleteCard = {handleDeleteClick}
      />

      <Footer />

      <PopupWithForm 
        name = 'edit'
        title = 'Редактировать профиль'
        textButton = 'Сохранить'
        isOpen = {isEditProfilePopupOpen}
        onClose = {closeAllPopups}
      >
        <div className="popup__text-input-container">
          <input
            className="popup__text popup__text_name"
            type="text"
            name="name"
            id="name"
            placeholder="Имя"
            minLength={2}
            maxLength={40}
            required=""
          />
          <span className="popup__invalid popup__invalid_type_name" />
        </div>
        <div className="popup__text-input-container">
          <input
            className="popup__text popup__text_description"
            type="text"
            name="description"
            id="description"
            placeholder="О себе"
            minLength={2}
            maxLength={200}
            required=""
          />
          <span className="popup__invalid popup__invalid_type_description" />
        </div>
      </PopupWithForm>

      <PopupWithForm 
        name = 'add'
        title = 'Новое место'
        textButton = 'Создать'
        isOpen = {isAddPlacePopupOpen}
        onClose = {closeAllPopups}
      >
      <div className="popup__text-input-container">
        <input
          className="popup__text popup__text_place-name"
          type="text"
          name="title"
          id="title"
          placeholder="Название"
          minLength={2}
          maxLength={30}
          required=""
        />
        <span className="popup__invalid popup__invalid_type_title" />
      </div>
      <div className="popup__text-input-container">
        <input
          className="popup__text popup__text_place-link"
          type="url"
          name="link"
          id="link"
          placeholder="Ссылка на картинку"
          required=""
        />
        <span className="popup__invalid popup__invalid_type_link" />
      </div>
      </PopupWithForm>

      <PopupWithForm 
        name = 'delete"'
        title = 'Вы уверены?'
        textButton = 'Да'
        isOpen={isDeleteCardPopupOpen}
        onClose={closeAllPopups}
      />

      <PopupWithForm 
        name = 'avatar'
        title = 'Обновить аватар'
        textButton = 'Сохранить'
        isOpen = {isEditAvatarPopupOpen}
        onClose = {closeAllPopups}
      >
      <div className="popup__text-input-container">
        <input
          className="popup__text popup__text_place-link"
          type="url"
          name="avatar"
          id="avatar"
          placeholder="Ссылка на картинку"
          required=""
        />
        <span className="popup__invalid popup__invalid_type_avatar" />
      </div>
      </PopupWithForm>

      <ImagePopup 
        card={selectedCard} 
        isOpen={isImagePopupOpen} 
        onClose={closeAllPopups} 
      />

    </div>
  );
}

export default App;
