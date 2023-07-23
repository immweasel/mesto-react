export default function Card({ card, onCardClick }) {
  return (
      <div className="photo-grid__item">
        <button className="photo-grid__delete button" type="button" />
        <img className="photo-grid__photo" src={card.link} alt={`Изображение ${card.name}`} onClick={() => onCardClick({link: card.link, name: card.name})} />
        <div className="photo-grid__description-container">
          <h3 className="photo-grid__description">{card.name}</h3>
          <div className="photo-grid__likes-container">
            <button className="photo-grid__like button" type="button" />
            <span className="photo-grid__counter" />
          </div>
        </div>
      </div>
  )
}