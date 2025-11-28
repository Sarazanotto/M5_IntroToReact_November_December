import React, { useState, useEffect, useContext } from "react";
import SingleComment from "./singleComment/SingleComment";
import { Container, Row, Col} from "react-bootstrap";
import CostumLoading from "../costums/costumLoading/CostumLoading";
import { CommentContext } from "../../context/CommentsContext";
import { SelectedBookContext } from "../../context/SelectedBookContext";


const CommentArea = () => {
const {isSelected}= useContext(SelectedBookContext)
  const{loading, comments, getComment}=useContext(CommentContext)

  useEffect(()=>{
    if(isSelected){
  getComment(`https://striveschool-api.herokuapp.com/api/books/${isSelected}/comments/`)
    }
  
  },[isSelected])
 
  return (
    <>
      <Container  className="mt-5">
        {!loading && !isSelected &&(
          <Row>
          <Col>
          <p className="text-center"> <b>Seleziona un libro!</b> <br/>Scopri le recensioni. <br/> Dai tua opinione.</p>
          </Col>
          </Row>
        )}
        {loading ? (
          <CostumLoading />
        ) : (
          <Row className="flex-column gap-3">
          
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

