import React from "react";

export default function PopupWithForm({name, title, textButton, children, isOpen, onClose}) {
  return(
    <div className={`popup popup_type_${name} ${isOpen ? 'popup_opened' : ""}`}>
      <div className="popup__container">
        <button className="popup__close button" type="button" onClick={onClose} />
        <form
          className={`popup__form popup__form_${name}`}
          action="#"
          name={name}
          noValidate
        >
          <h2 className="popup__name">{title}</h2>
          {children}
          <button
            className={`popup__save popup__save_${name} button popup__submit`}
            type="submit"
          >
            {textButton}
          </button>
        </form>
      </div>
    </div>
  )
}