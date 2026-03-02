import Bagitem from "./Bagitem";
import Bagsumery from "./Bagsumery";
import { useSelector } from "react-redux";

export default function Bag() {
  const items = useSelector((store) => store.items);
  const bag = useSelector((store) => store.bag);
  const finalItems = items.filter((it) => {
    const present = bag.indexOf(it.id);
    return present >= 0;
  });
  return (
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          {finalItems.map((item) => (
            <Bagitem item={item} key={item.id} />
          ))}
        </div>
        <Bagsumery items={finalItems} />
      </div>
    </main>
  );
}
