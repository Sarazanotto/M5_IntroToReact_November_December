import React, { useState } from "react";
import { Col, Container } from "react-bootstrap";
import CostumLoading from "../../costums/costumLoading/CostumLoading";

const SingleComment = ({ author, comment, rate, id }) => {
  const [removeComment, setRemoveComment] = useState(false);
  const [modify, setModify] = useState(false);

  const deleteComment = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${id}`,
        {
          method: "DELETE",

          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTAzNjk3NWM2MDhlZjAwMTVjN2JkMjUiLCJpYXQiOjE3NjM3OTczNTksImV4cCI6MTc2NTAwNjk1OX0.4F7N_EkoUzkLeZm7ZrTFKvN9S0TI_6TAo-7qmZdPOFM",
          },
        }
      );
      const data = await response.json();

      setRemoveComment(true);
    } catch (error) {
      console.log(error);
    }
  };

  const modifyComment = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${id}`,
        {
          method: "PUT",
          body: JSON.stringify(),

          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTAzNjk3NWM2MDhlZjAwMTVjN2JkMjUiLCJpYXQiOjE3NjM3OTczNTksImV4cCI6MTc2NTAwNjk1OX0.4F7N_EkoUzkLeZm7ZrTFKvN9S0TI_6TAo-7qmZdPOFM",
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {!removeComment && (
        <Container className="border-bottom border-1 pb-2 ">
          <div className="d-flex align-items-center justify-content-between">
            <div>
              <p className="m-0 fw-bold"> {author}</p>
              <p className="m-0"> {comment} </p>
              <p className="m-0">Punteggio: {rate} </p>
            </div>

            <button
              className="btn btn-form text-light small"
              size="sm"
              onClick={deleteComment}
            >
              x
            </button>
          </div>
        </Container>
      )}
    </>
  );
};

export default SingleComment;
