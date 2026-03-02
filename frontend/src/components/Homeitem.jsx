import { GrAddCircle } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";

export default function Homeitem({ item }) {
  const dispatch = useDispatch();
  const bag = useSelector((store) => store.bag);
  let elementFound = bag.indexOf(item.id) >= 0;
  const handleAddToBag = () => {
    dispatch(bagActions.addTobag(item.id));
  };
  const handleRemove = () => {
    dispatch(bagActions.removeFrombag(item.id));
  };
  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {elementFound ? (
        <button
          type="button"
          className="btn btn-danger btn-add-bag"
          onClick={handleRemove}
        >
          <AiFillDelete /> Remove
        </button>
      ) : (
        <button
          type="button"
          className="btn btn-success btn-add-bag"
          onClick={handleAddToBag}
        >
          <GrAddCircle /> Add to bag
        </button>
      )}
    </div>
  );
}
