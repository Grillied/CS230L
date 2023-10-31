
const Cards = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <div className="card bg-danger text-white w-10">
            <div className="card-body">
              <h5 className="card-title">Red Card</h5>
              <p className="card-text">This is the red card's body text.</p>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card bg-primary text-white w-10">
            <div className="card-body">
              <h5 className="card-title">Blue Card</h5>
              <p className="card-text">This is the blue card's body text.</p>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card bg-success text-white w-10">
            <div className="card-body">
              <h5 className="card-title">Green Card</h5>
              <p className="card-text">This is the green card's body text.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
