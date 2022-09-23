import { useEffect, useState } from "react";

export default function Items(props) {
  //store API to useState. Use .map() to render multiple divs for elements in API
  const [shopItems, setShopItems] = useState([]);

  //useState to ensure we are targeting the right element we are clicking for the arrows
  const [storeItemId, setStoreItemId] = useState(null);

  const [isActive, setIsActive] = useState(false);

  //useEffect to call the API once to get data
  useEffect(() => {
    getShopItemsAPI();
  }, []);

  //store api in variable
  const API_URL = "https://fakestoreapi.com/products?limit=5";

  //Fetch API data using ASYNC / AWAIT
  async function getShopItemsAPI() {
    //Add Error Handling
    try {
      //Returns a Promise Object
      let itemResponse = await fetch(API_URL);
      //Use itemReponse.json() to returns [{},{},{},{},{}]
      let storeItems = await itemResponse.json();
      //Sets shopitems state to render items
      setShopItems(storeItems);
    } catch (err) {
      console.log(err);
    }
  }

  let arrowContainer = "arrow_Container";

  /**
   *
   * Handles the arrow and lifting state up to App.jsx
   *
   * Pass props into description component
   *
   * Treat description like arrow toggle.
   *
   * When ID matches, show / hide description
   *
   * When ID mathes, arrow flips
   */

  function handleToggleArrow(id, description) {
    if (storeItemId === id) {
      setStoreItemId(undefined);
      props.setShowDescription(null);
    } else {
      setStoreItemId(id);
      props.setShowDescription(description);
    }
  }

  /**
   *
   * When we click on the element, ONLY that element arrow changes.
   *
   */

  return (
    <div className="items_Container">
      {shopItems.map((items) => {
        return (
          <div className="shopItems" key={items.id}>
            <img src={items.image} alt={items.title} />
            <p>
              <b>{items.title}</b>
            </p>
            {/*Conditionally Render the arrow left or right.
               Conditionally Render Bg Color / Arrow Color
            */}
            <div
              className={arrowContainer}
              style={{
                backgroundColor: storeItemId === items.id ? "#3498db" : "",
              }}
              onClick={() => {
                //Toggles the arrow, sends items object to lift state up.
                handleToggleArrow(items.id, items);
              }}
            >
              <i
                className={`arrow ${
                  storeItemId === items.id ? "right" : "left"
                }`}
                style={{
                  color: storeItemId === items.id ? "white" : "#3498db",
                }}
              ></i>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/**
 *
 * Create 3 div containers for the items. ( Look at the PDF )
 *
 * Items we need:
 *
 * Cotton Jacket
 *
 * Backpack
 *
 * Slim Fit T-Shirt
 *
 */
