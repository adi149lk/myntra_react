const Spinner = () => {
  return (
    <div
      className="spinner-grow text-primary"
      role="status"
      style={{ width: "3rem", height: "3rem", margin: "30px auto" }}
    >
      <span className="visually-hidden">Loading...</span>
    </div>
  );
};
export default Spinner;
