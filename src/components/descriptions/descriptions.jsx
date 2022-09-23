export default function Description(props) {
  return (
    <div className="description_Container">
      {/* if showDescription is null, render nothing, else render the follow item object */}
      {props.showDescription === null ? null : (
        <div className="showDescription_Container">
          <p className="description price_Text">
            <b>${props.showDescription.price}</b>
          </p>
          <p className="description description_Text">
            <b>{props.showDescription.description}</b>
          </p>
          <div className="rating_Container">
            <p className="description rating_Text">
              <b>{props.showDescription.rating.rate}</b>
            </p>
            <p className="description rating_Count_Text">
              <b>({props.showDescription.rating.count})</b>
            </p>
          </div>

          <div className="btn_Container">
            <button className="add_Cart_Btn">Add Cart</button>
          </div>
        </div>
      )}
    </div>
  );
}
