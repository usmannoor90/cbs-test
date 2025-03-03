const Form = () => {
  return (
    <div className="form-container">
      <h2>Add Data</h2>
      <form>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" name="name" />
        </div>
        <div className="form-group">
          <label>Age:</label>
          <input type="number" name="age" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default Form;
