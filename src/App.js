import "./App.css";
import { useState } from "react";
import "./workSpace/superAwesome.css";
import JCB from "./workSpace/JCB.png";
import Tractor from "./workSpace/Tractor.jpg";

function App() {
  let details = [
    {
      img: `${JCB}`,

      title: `JCB`,
      description: `No introduction needed`,
      price: `30,00,000/-`,
    },
    {
      img: `${Tractor}`,
      title: `Hoshiyar Tractor`,
      description: `Introduction needed`,
      price: `3,00,000/-`,
    },
  ];

  const [list, addedList] = useState([]);

  const addItemToCart = (a) => {
    addedList([...list, a]);
  };

  console.log(list);

  return (
    <>
      <div className="allCards">
        {details.map((a, i) => (
          <div className="InduvidualCard" key={i}>
            <div className="card">
              <div className="information">
                <div className="img">
                  <img src={a.img} alt="" className="image" />
                </div>
                <div className="titleDesc">
                  <div className="title">{a.title}</div>
                  <div className="description">{a.description}</div>
                </div>
              </div>

              <div className="details">
                <div className="price">{a.price}</div>
              </div>

              <div className="addToCart">
                <div className="btn">
                  <button
                    className="btn"
                    onClick={() => addItemToCart(a.title)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="CART">
          Shopping Cart :
          {list.map((a, i) => (
            <div key={i}>{a}</div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
