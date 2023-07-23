export default function PopupImage() {
  return(
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
  )
}