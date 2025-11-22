import React, { useState, useEffect } from "react";
import SingleComment from "../singleComment/SingleComment";
const AddComment = () => {

   const [comments, setComments] = useState([]);

  const getComment = async (asin) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/books/${asin}/comments/`,
        {
          headers: {
            Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTAzNjk3NWM2MDhlZjAwMTVjN2JkMjUiLCJpYXQiOjE3NjM3OTczNTksImV4cCI6MTc2NTAwNjk1OX0.4F7N_EkoUzkLeZm7ZrTFKvN9S0TI_6TAo-7qmZdPOFM',
          },
        }
      );
      const data = await response.json();
      setComments(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getComment(asin);
  }, []);

  return(
  <>
  { comments && comments.map(comment=>(
    <SingleComment
    key={comment._id}
    author={comment.author}
    comment={comment.comment}
    rate={comment.rate}/>
  ))}
   {/*bottone elimina che chiama fetch che fa delete passando id*/}
    </>
     
)};

export default AddComment;
