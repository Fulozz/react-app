import React, { useEffect, useState } from "react";
import "./listing.css";;
import Axios from 'axios'
// imported icons;
import { BsArrowRightShort } from "react-icons/bs";
import { BiLink } from "react-icons/bi";
import { Link } from "react-router-dom";
//imported image
import computer from "../../../Assets/computer.png";




const Listing = () => {

  const [product, setProduct] = useState([])
  useEffect(()=>{
    Axios.get('http://localhost:3000/api/v1/listing').then((response)=>{
      setProduct(response.data)
    })
  },[])
  return (
    <div className="listingSection">
      <div className="heading flex">
        <h1>Ultimas inclusões - Limitar em 6 para telas menores</h1>
        <button className="btn flex">
          Ver todos <BsArrowRightShort className="icon" />
        </button>
      </div>

      <div className="secContainer flex">
        {product && product.map((product, index) => (
            <div className="singleItem" key={index}>
            <h5>{product.host_name}</h5>
              <BiLink className="icon" />
              <img src={computer} alt="Image Name" />
              <Link to={`/product/${product.patrimonio}`}>
                <h3>{product.patrimonio}</h3>
              </Link>
              </div>

          ))}   
      </div>
    </div>
  );
};

export default Listing;
