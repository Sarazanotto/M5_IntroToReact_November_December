import React, { useState, useEffect } from "react";
import SingleComment from "./singleComment/SingleComment";
import { Container, Row } from "react-bootstrap";
import CostumLoading from "../costums/costumLoading/CostumLoading";


const CommentArea = ({ asin}) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
 
 

  const getComment = async (asin) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/books/${asin}/comments/`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTAzNjk3NWM2MDhlZjAwMTVjN2JkMjUiLCJpYXQiOjE3NjM3OTczNTksImV4cCI6MTc2NTAwNjk1OX0.4F7N_EkoUzkLeZm7ZrTFKvN9S0TI_6TAo-7qmZdPOFM",
          },
        }
      );
      const data = await response.json();
      setComments(data);
      
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getComment(asin);
  }, []);


  return (
    <>
      <Container>
        {loading ? (
          <CostumLoading />
        ) : (
          <Row className="flex-column g-4">
            {comments &&
              comments.map((comment) => (
                <SingleComment
                  key={comment._id}
                  author={comment.author}
                  comment={comment.comment}
                  rate={comment.rate}
                  id={comment._id}
                />
              ))}
          </Row>
        )}
      </Container>
    </>
  );
};

export default CommentArea;

