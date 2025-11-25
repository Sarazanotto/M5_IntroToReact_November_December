import { createContext, useState, useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { CommentContext } from "../../../context/CommentsContext";

const AddComment = ({ asin }) => {
  const { getComment } = useContext(CommentContext);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    comment: "",
    rate: "",
    elementId: asin,
  });

  const addComment = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments`,
        {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTAzNjk3NWM2MDhlZjAwMTVjN2JkMjUiLCJpYXQiOjE3NjM3OTczNTksImV4cCI6MTc2NTAwNjk1OX0.4F7N_EkoUzkLeZm7ZrTFKvN9S0TI_6TAo-7qmZdPOFM",
          },
        }
      );
      const data = await response.json();
      getComment(
        `https://striveschool-api.herokuapp.com/api/books/${asin}/comments/`
      );
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await addComment();
  };

  return (
    <>
      <Form onSubmit={onSubmit} className="d-flex flex-column gap-3">
        <Form.Label className="fs-4">Scrivi qui la tua recensione</Form.Label>
        <Form.Control
          onChange={onChange}
          as="textarea"
          placeholder="Il tuo commento..."
          name="comment"
          rows={2}
        />
        <Form.Control
          onChange={onChange}
          placeholder="Assegna da 1 a 5"
          type="number"
          name="rate"
          min={1}
          max={5}
        />

        <Button type="submit" className="btn btn-form">
          Invia
        </Button>
      </Form>
    </>
  );
};

export default AddComment;
