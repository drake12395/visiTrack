import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Form, Button } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';

const CreateMeeting = () => {
  const [startDate, setStartDate] = useState(new Date());
  console.log(startDate);
  return (
    <FormContainer>
      <h1>Create a meeting</h1>
      <Form>
        <Form.Group controlId='host'>
          <Form.Label>Host</Form.Label>
          <Form.Control
            type='host'
            placeholder='Enter host name'
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='guest'>
          <Form.Label>Guest</Form.Label>
          <Form.Control
            type='guest'
            placeholder='Enter guest name'
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='day'>
          <Form.Label>Day</Form.Label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
          {/* <Form.Control type='day' placeholder='Select a day'></Form.Control> */}
        </Form.Group>

        <Form.Group controlId='time'>
          <Form.Label>Time</Form.Label>
          <Form.Control as='select' type='guest' placeholder='Add your guest'>
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

        <Form.Group controlId='locatin'>
          <Form.Label>Location</Form.Label>
          <Form.Control
            as='select'
            type='location'
            placeholder='Select a Meeting Room'
          >
            <option>Room 1</option>
            <option>Room 2</option>
            <option>Room 3</option>
            <option>Room 4</option>
            <option>Room 5</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId='meetingDescription'>
          <Form.Label>Meeting Description</Form.Label>
          <Form.Control
            as='textarea'
            type='meetingDescription'
            placeholder='Add any details of the meeting here...'
          ></Form.Control>
        </Form.Group>
      </Form>
      <Button type='submit' variant='primary'>
        Submit
      </Button>
    </FormContainer>
  );
};
export default CreateMeeting;
