import { useSelector } from "react-redux";
import Homeitem from "./HomeItem";

export default function Home() {
  console.log("comme to home ");
  const items = useSelector((store) => store.items);
  return (
    <main>
      <div className="items-container">
        {items.map((item) => (
          <Homeitem item={item} key={item.id} />
        ))}
      </div>
    </main>
  );
}
