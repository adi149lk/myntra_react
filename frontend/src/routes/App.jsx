import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Fetching from "../components/Fetching";
import { useSelector } from "react-redux";
import Spiner from "../components/spiner";

function App() {
  const fetchstatus = useSelector((store) => store.fetchstatus);
  console.log(fetchstatus.currentlyFetching);
  return (
    <>
      <Header />
      <Fetching />
      {fetchstatus.currentlyFetching ? <Spiner /> : <Outlet />}

      <Footer />
    </>
  );
}

export default App;
