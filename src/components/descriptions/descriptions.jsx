export default function Description(props) {
  return (
    <div className="description_Container">
      {/* if showDescription is null, render nothing, else render the follow item object */}
      {props.showDescription === null ? null : (
        <div className="showDescription_Container">
          <p>
            <b>${props.showDescription.price}</b>
          </p>
          <p>
            <b>{props.showDescription.description}</b>
          </p>
          <div className="rating_Container">
            <p>
              <b>{props.showDescription.rating.rate}</b>
            </p>
            <p>
              <b>({props.showDescription.rating.count})</b>
            </p>
          </div>

          <button className="add_Cart_Btn">Add Cart</button>
        </div>
      )}
    </div>
  );
}
