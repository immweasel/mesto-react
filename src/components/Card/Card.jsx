export default function Card({ card, onCardClick, onDeleteCard }) {

function handleCardClick() {
  onCardClick(card);
}

  return (
      <div className="photo-grid__item">
        <button className="photo-grid__delete button" type="button" onClick={onDeleteCard}/>
        <img 
          className="photo-grid__photo" 
          src={card.link} 
          alt={`Изображение ${card.name}`} 
          onClick={handleCardClick} 
        />
        <div className="photo-grid__description-container">
          <h3 className="photo-grid__description">{card.name}</h3>
          <div className="photo-grid__likes-container">
            <button className="photo-grid__like button" type="button"></button>
            <span className="photo-grid__counter">{card.likes.length}</span>
          </div>
        </div>
      </div>
  )
}