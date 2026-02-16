import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsActions } from "../store/itemSlice";
import { fetchingActions } from "../store/fetchigSlice";

export default function fetching() {
  console.log("comme to fetching");
  const fetchStatus = useSelector((store) => store.fetchstatus);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("comme to useeft ");
    if (fetchStatus.fetchingDone) return;

    const controller = new AbortController();
    const { signal } = controller;
    dispatch(fetchingActions.markFetchigStarted());
    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        console.log("come to then");
        dispatch(fetchingActions.markFetchigDone());
        dispatch(fetchingActions.markFetchigFinshed());
        dispatch(itemsActions.addInitialItems(items[0]));
      });

    return () => {
      controller.abort();
    };
  }, [fetchStatus]);
  return <div></div>;
}
