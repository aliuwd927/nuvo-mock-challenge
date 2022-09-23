export default function Description(props) {
  //Returns the amount or star rating based by props
  function RatingStar(rating) {
    //Convert Floating Decimal to a whole number by rounding up
    let rateOfStars = Math.ceil(rating);
    // If stars is 0 or null do not do anything
    if (rateOfStars === 0 || rateOfStars === null) return;

    // Let the accumlated stars equal to and emtpy string ""
    let starsAccumlated = "";
    //Iterate the rating number
    for (let i = 0; i < rateOfStars; i++) {
      /**
       * Treat this like a tracker
       * Append each time, i iterates upwards based by rating num
       * Use this code for star: "\u2605"
       */

      starsAccumlated += "\u2605";
    }
    //Return the amount of stars and render it
    return starsAccumlated;
  }
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
              {RatingStar(props.showDescription.rating.rate)}
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
