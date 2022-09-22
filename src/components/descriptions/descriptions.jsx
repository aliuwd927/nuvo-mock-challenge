export default function Description(props) {
  return (
    <div className="description_Container">
      {props.showDescription === null ? null : (
        <div>
          <div>{props.showDescription.price}</div>
          <div>{props.showDescription.description}</div>
          <div>{props.showDescription.rating.rate}</div>
          <div>{props.showDescription.rating.count}</div>
          <button>Add Cart</button>
        </div>
      )}
    </div>
  );
}
