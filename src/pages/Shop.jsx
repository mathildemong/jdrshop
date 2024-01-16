import React from "react";
import '../styles/Shop.css'
import data from "../datas/list.jsx";

const Shop = () => {

  const [data, setData] = React.useState([]);
   React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);
//to do usestate pour les produits //
//to do useeffect pour fetch produit et mettre a jour le state grace au use state produit//

    const {name, image, prix} = data;
    const handleClick = () => {};
  return (
    <div className="shop">
        <div className="image_box">
            <img src={image} alt="jeux"/>
        </div>
        <div className="details">
        <p>{!data ? "Loading..." : data}</p>
            <p>{name}</p>
            <p>{prix}</p>
            <button onClick={()=>handleClick(data)} >Add to Cart</button>
        </div>
    </div>
  )
}

export default Shop;