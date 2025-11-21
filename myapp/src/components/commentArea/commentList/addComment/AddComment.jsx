import React, { useState, useEffect } from "react";
import {urlToken} from '../../../urlToken'
import SingleComment from "../singleComment/SingleComment";
const AddComment = () => {

   const [comments, setComments] = useState([]);

  const getComment = async (asin) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/books/${asin}/comments/`,
        {
          headers: {
            Authorization: 'Bearer' + urlToken,
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
