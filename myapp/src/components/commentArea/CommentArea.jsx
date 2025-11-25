import React, { useState, useEffect, useContext } from "react";
import SingleComment from "./singleComment/SingleComment";
import { Container, Row } from "react-bootstrap";
import CostumLoading from "../costums/costumLoading/CostumLoading";
import { CommentContext } from "../../context/CommentsContext";


const CommentArea = ({asin}) => {

  const{loading, comments, getComment}=useContext(CommentContext)
 
  useEffect(()=>{
    getComment(`https://striveschool-api.herokuapp.com/api/books/${asin}/comments/`)
  },[])
 
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

