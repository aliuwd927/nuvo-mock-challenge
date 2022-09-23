import "./App.css";
import Header from "./components/header/header";
import Items from "./components/items/items";
import Description from "./components/descriptions/descriptions";
import { useState } from "react";

function App() {
  //Lift upstate to pass from items component to description component
  const [showDescription, setShowDescription] = useState(null);

  return (
    <div className="App">
      <div className="top_Container">
        <Header />
      </div>

      <div className="bottom_Container">
        <Items setShowDescription={setShowDescription} />
        <Description showDescription={showDescription} />
      </div>
    </div>
  );
}

export default App;

/**
 * Plan of attack:
 *
 * 1. Create 3 containers.
 *
 *    - One for header top - Done
 *
 *    - One for items left - Done
 *
 *    - One for description right - Done
 *
 *
 *
 * 2. For Styling => FlexBox ( Grid is probably the best here )
 *
 *  -Create 2 divs to have clear seperations for css.
 *
 *  -Top Section and Bottom Section
 *  - Use Percentages for css when possible
 *
 *
 *
 *
 *      Flex Box Layout
 *           Header
 *
 *      Items    Description
 *
 *
 * API URL : https://fakestoreapi.com/products?limit=5
 *
 *
 * 3. "Try to build as much from scratch w/o relying on external lib and pkg"
 *
 */

/**
 * Instructions
 *
 * 1. Clicking on the image, item name or round chevron button should display the corresponding
 *    product information in the white box to the right.
 *    (Add to card button doesn't need to do anything)
 *
 *
 * 2. Rotate the chevron button and fill in its color if the product is selected is active.
 *
 *
 * 3. SEO is extremely important to us. All text content should be visible in the HTML
 *    even though it might be hidden from the user.
 *
 * 4. The app must be fully responsive (mobile, tablet and desktop)
 */
