import React, { useState, useEffect } from "react";
import { Row, Col, Container, Alert } from "react-bootstrap";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Charger les données des produits depuis le fichier JSON
    fetch("../src/Products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Erreur lors du chargement des produits:", error));
  }, []);

  // Fonction pour acheter un produit (buy)
  const buyProduct = (index) => {
    setProducts((prevProducts) =>
      prevProducts.map((product, i) =>
        i === index && product.quantity > 0
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  };

  // Fonction pour gérer Like
  const handleLikeToggle = (index) => {
    setProducts((prevProducts) =>
      prevProducts.map((product, i) =>
        i === index ? { ...product, like: true } : product
      )
    );
  };

  // Fonction pour gérer Dislike
  const handleDislikeToggle = (index) => {
    setProducts((prevProducts) =>
      prevProducts.map((product, i) =>
        i === index ? { ...product, like: false } : product
      )
    );
  };

  return (
    <Container className="mt-4">
      {/* Message de Bienvenue */}
      <Alert variant="success">
        <h4>Bienvenue sur notre plateforme de produits!</h4>
        <p>Découvrez nos produits et passez votre commande dès aujourd'hui!</p>
      </Alert>

      <Row className="g-4">
        {products.map((product, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3}>
            <Product
              product={product}
              onBuy={() => buyProduct(index)}  // Fonction d'achat
              onLikeToggle={() => handleLikeToggle(index)}  // Fonction Like
              onDislikeToggle={() => handleDislikeToggle(index)}  // Fonction Dislike
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Products;