import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { usefetch } from "../components/hooks/usefetch/UseFetch";
import { useParams } from "react-router-dom";
import MainLayout from "../components/mainLayout/MainLayout";
import { BookOpenCheck, Heart, ShoppingBasket } from "lucide-react";
import { LikedContext } from "../context/LikedContext";
import CostumLoading from "../components/costums/costumLoading/CostumLoading";
import { CartContext } from "../context/cartContext";

const Detail = () => {
  const { toggleLike, like } = useContext(LikedContext);
  const { toggleInCart } = useContext(CartContext);
  const [isLoading, setIsLoading] = useState(false);
  const { asin } = useParams();
  const [book, setBook] = useState(null);

  const [isCart, setIsCart] = useState(false);

  const getDetail = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`https://epibooks.onrender.com/${asin}`);
      const data = await res.json();
      console.log(data);
      setBook(data[0]);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getDetail();
  }, [asin]);

  const toggleCart = () => {
    setIsCart(!isCart);
    toggleInCart(!isCart);
  };

  return (
    <MainLayout>
      {isLoading && <CostumLoading />}
      {!isLoading && (
        <Container className="py-5">
          <Row className="d-flex justify-content-center justify-content-md-between g-5">
            <Col sm={12} md={5} className="">
              {book && (
                <img src={book.img} alt={book.title} className="img-fluid p-1 img-book-detail" />
              )}
            </Col>

            <Col sm={12} md={7} className="d-flex justify-content-center flex-column">
              {book && (
                <>
                  <h3>{book.title}</h3>
                  <ul className="list-unstyled d-flex flex-column gap-3 mt-4">
                    <li>Category : {book.category}</li>
                    <li> € {book.price}</li>
                    <li> Asin {book.asin}</li>
                  </ul>
                  <Row className="mt-4">
                    <Col className="d-flex gap-5">
                      <button
                        className="btn p-0"
                        onClick={toggleCart}
                      >
                        <ShoppingBasket color={isCart ? "red" : "black"} />
                      </button>
                      <button
                        className="btn"
                        onClick={() => toggleLike(book.asin)}
                      >
                        <BookOpenCheck
                          color={like[book.asin] ? "red" : "black"}
                        />
                      </button>
                    </Col>
                  </Row>
                </>
              )}
            </Col>
          </Row>
        </Container>
      )}
    </MainLayout>
  );
};

export default Detail;
