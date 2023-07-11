export default function Main() {
  return(
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
  )
}