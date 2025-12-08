import React, { useState } from "react";
import { Col, Container } from "react-bootstrap";
import CostumLoading from "../../costums/costumLoading/CostumLoading";
import CustomAlert from "../../costums/customAlert/CustomAlert";
const SingleComment = ({ author, comment, rate, id }) => {
  const [removeComment, setRemoveComment] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [modify, setModify] = useState(false);

  const deleteComment = async () => {
    setIsLoading(true);
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
      setError(true);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  {
    /*const modifyComment = async () => {
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
  };*/
  }

  return (
    <>
      {!removeComment && (
        <Container className="border-bottom border-1 pb-2 ">
          {isLoading && <CostumLoading />}
          {!isLoading && (
            <>
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
              {error && <CustomAlert variant="danger">{error}</CustomAlert>}
            </>
          )}
        </Container>
      )}
    </>
  );
};

export default SingleComment;
