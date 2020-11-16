import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Form, Button } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';

const CreateMeeting = () => {
  //   const [startDate, setStartDate] = useState(new Date());
  // <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
  return (
    <FormContainer>
      <Form>
        <Form.Group controlId='host'>
          <Form.Label>Host</Form.Label>
          <Form.Control type='host' placeholder='Host Name'></Form.Control>
        </Form.Group>
        <Form.Group controlId='guest'>
          <Form.Label>Guest</Form.Label>
          <Form.Control type='guest' placeholder='Guest Name'></Form.Control>
        </Form.Group>
        <Form.Group controlId='time'>
          <Form.Label>Time</Form.Label>
          <Form.Control as='select' type='guest' placeholder='Guest Name'>
            <option>8:00 am</option>
            <option>9:00 am</option>
            <option>10:00 am</option>
            <option>11:00 am</option>
            <option>12:00 pm</option>
            <option>1:00 pm</option>
            <option>2:00 pm</option>
            <option>3:00 pm</option>
            <option>4:00 pm</option>
          </Form.Control>
        </Form.Group>
      </Form>
    </FormContainer>
  );
};
export default CreateMeeting;
