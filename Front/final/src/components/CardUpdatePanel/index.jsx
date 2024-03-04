import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import './style.scss'

const CardUpdatePanel = () => {
  const { id } = useParams();
  const { token, decode } = useContext(UserContext);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const myFileInput = useRef();

  useEffect(() => {
    if (!decode || decode.role !== "admin") {
      window.location.href = "/cardsPanel";
    } else {
      getProduct(id);
    }
  }, [decode, id]);

  async function getProduct(id) {
    try {
      const response = await fetch(`http://localhost:3600/cards/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch product data");
      }
      const productData = await response.json();
      setName(productData.name);
      setPrice(productData.price);
      setDiscount(productData.discount);
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    formData.append("name", name);
    formData.append("price", price);
    formData.append("discount", discount);


    const data = await fetch(`http://localhost:3600/cards/${id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });
    if (data.ok) {
      window.location.href = "/cardsPanel";
    }
    console.log("Product updated successfully");
  }

  return (
    <>
  
      <div className="cardUpdatePanel">
      <h1>Card Update </h1>
        <form onSubmit={handleSubmit} className="form">
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            ref={myFileInput}
            className="noneInput"
          />
          <div
            className="upload"
            onClick={() => {
              myFileInput.current.click();
            }}
          >
            <i className="fa-solid fa-upload"></i> <span>Update Image</span>
          </div>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name" 
          />
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Price"
          />

          <input
            type="text"
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
            placeholder="Discount"
          />

          <br />
          <button type="submit">Update Product</button>
        </form>
      </div>
    </>
  );
};

export default CardUpdatePanel;
