import { useEffect, useState } from "react";

export default function Items(props) {
  const [shopItems, setShopItems] = useState([]);
  const [storeItemId, setStoreItemId] = useState(null);

  useEffect(() => {
    getShopItemsAPI();
  }, []);

  const API_URL = "https://fakestoreapi.com/products?limit=5";

  //Fetch Item using ASYNC / AWAIT
  async function getShopItemsAPI() {
    //Add Error Handling
    try {
      //Returns a Promise Object
      let itemResponse = await fetch(API_URL);
      //Use itemReponse.json() to returns [{},{},{},{},{}]
      let storeItems = await itemResponse.json();
      setShopItems(storeItems);
    } catch (err) {
      console.log(err);
    }
  }

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
            {/*Conditionally Render the arrow left or right  */}
            <p>
              <i
                className={`arrow ${
                  storeItemId === items.id ? "right" : "left"
                }`}
                onClick={() => {
                  handleToggleArrow(items.id, items);
                }}
              ></i>
            </p>
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
