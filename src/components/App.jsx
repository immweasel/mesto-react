import Header from "./Header/Header.jsx";

function App() {
  return (
    <div className="page__content">
      
      <Header />
      
      <main className="main">
        <section className="profile">
          <div className="profile__container">
            <button className="profile__avatar-button button" type="button">
              <img className="profile__avatar" src="#" alt="Аватарка" />{" "}
            </button>
            <div className="profile__info">
              <div className="profile__edit-container">
                <h1 className="profile__name">ляляля</h1>
                <button className="profile__edit button" type="button" />
              </div>
              <p className="profile__description" />
            </div>
          </div>
          <button className="profile__add button" type="button" />
        </section>
        <section className="photo-grid" />
      </main>
      <footer className="footer">
        <p className="footer__copyright">© 2023 Максимова Кира</p>
      </footer>
      <div className="popup popup_type_edit">
        <div className="popup__container">
          <button className="popup__close button" type="button" />
          <form
            className="popup__form popup__form_edit"
            action="#"
            name="edit-profile-info"
            noValidate=""
          >
            <h2 className="popup__name">Редактировать профиль</h2>
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
            <button
              className="popup__save popup__save_add button popup__submit"
              type="submit"
            >
              Сохранить
            </button>
          </form>
        </div>
      </div>
      <div className="popup popup_type_add">
        <div className="popup__container">
          <button className="popup__close button" type="button" />
          <form
            className="popup__form popup__form_add"
            action="#"
            name="edit-profile-info"
            noValidate=""
          >
            <h2 className="popup__name">Новое место</h2>
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
            <button
              className="popup__save popup__save_add button popup__submit"
              type="submit"
            >
              Создать
            </button>
          </form>
        </div>
      </div>
      <div className="popup popup_type_figure">
        <figure className="popup__container popup__container_type_figure">
          <button
            className="popup__close popup__close-figure button"
            type="button"
          />
          <img className="popup__figure-photo" src="#" alt="#" />
          <figcaption className="popup__figure-caption" />
        </figure>
      </div>
      <div className="popup popup_type_avatar">
        <div className="popup__container">
          <button className="popup__close button" type="button" />
          <form
            className="popup__form popup__form_avatar"
            action="#"
            name="editAvatar"
            noValidate=""
          >
            <h2 className="popup__name">Обновить аватар</h2>
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
            <button
              className="popup__save popup__save_add button popup__submit"
              type="submit"
            >
              Сохранить
            </button>
          </form>
        </div>
      </div>
      <div className="popup popup_type_delete">
        <div className="popup__container">
          <button className="popup__close button" type="button" />
          <form
            className="popup__form popup__form_add"
            action="#"
            name="deleteCard"
            noValidate=""
          >
            <h2 className="popup__name popup__name_type_delete">Вы уверены?</h2>
            <button
              className="popup__save popup__save_add button popup__submit"
              type="submit"
            >
              Да
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
