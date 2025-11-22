import { useState } from "react";
import { Button, Form } from "react-bootstrap";


const CommentArea = ({asin}) => {
   const [formData, setFormData] = useState({
    comment: "",
    rate: "",
    elementId: asin,
  });

 
  const addComment = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments`,
        {
          method: 'POST',
          body: JSON.stringify(formData),
          headers: {
            'Content-Type': 'Application/json',
          Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTAzNjk3NWM2MDhlZjAwMTVjN2JkMjUiLCJpYXQiOjE3NjM3OTczNTksImV4cCI6MTc2NTAwNjk1OX0.4F7N_EkoUzkLeZm7ZrTFKvN9S0TI_6TAo-7qmZdPOFM',
          },
        }
      );
      return await response.json()
    } catch (e) {
      console.log(e);
    }
  };



  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmit= async(e)=>{
    e.preventDefault()
    await addComment()
  }

  return (
    <>
      <Form onSubmit={onSubmit}>
        <Form.Group>
          <Form.Label>scrivi qui</Form.Label>
          <Form.Control
            onChange={onChange}
            as="textarea"
            name="comment"
            rows={2}
          />
          <Form.Control
            onChange={onChange}
            type="number"
            name="rate"
            min={1}
            max={5}
          />
        </Form.Group>
        <Button type="submit" className="btn">Invia</Button>
      </Form>
    </>
  );
};

export default CommentArea;
