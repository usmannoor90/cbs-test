const DataList = () => {
  return (
    <div className="data-list-container">
      <h2>Stored Data</h2>
      <input type="text" placeholder="Search..." />
      <div className="data-list">
        <p>No data available</p>
      </div>
    </div>
  );
};
export default DataList;
