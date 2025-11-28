import { useEffect, useState, createContext } from "react";

export const CommentContext = createContext();
export const CommentsProvider = ({ children }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);

  const getComment = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTAzNjk3NWM2MDhlZjAwMTVjN2JkMjUiLCJpYXQiOjE3NjM3OTczNTksImV4cCI6MTc2NTAwNjk1OX0.4F7N_EkoUzkLeZm7ZrTFKvN9S0TI_6TAo-7qmZdPOFM",
        },
      });
      const data = await response.json();
      setComments(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <CommentContext.Provider
      value={{ getComment, loading, comments, setComments }}
    >
      {children}
    </CommentContext.Provider>
  );
};
