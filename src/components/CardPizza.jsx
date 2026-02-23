import { formatPrice } from '../utils/formatPrice';
import './CardPizza.css';

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="card card-pizza h-100">
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          <strong>Ingredientes:</strong>{' '}
          {Array.isArray(ingredients) ? ingredients.join(', ') : ingredients}
        </p>
        <p className="card-text fw-bold text-primary fs-5">
          ${formatPrice(price)}
        </p>
        <div className="mt-auto d-flex gap-2">
          <button className="btn btn-outline-primary flex-grow-1">
            Ver más
          </button>
          <button className="btn btn-primary flex-grow-1">Añadir</button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
