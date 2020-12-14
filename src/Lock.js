import React, { useState, useEffect } from 'react';
import {
  Button,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from 'reactstrap';
import * as _ from 'lodash';
import PropTypes from 'prop-types';

import lock from './assets/lock.png';
import './App.css';

export default function Lock ({
  answer,
  clickFunction,
  question,
  required,
}) {
  const [lockCode, setLockCode] = useState();
  const matches = (
    _.lowerCase(lockCode) === _.lowerCase(answer)
  ) || (
    _.isArray(answer) &&
    _.includes(answer, _.lowerCase(lockCode))
  );

  return (
    <div className="lock">
      <Row>
        <Col>
          <Form>
            <FormGroup>
              <Label for={question}>
                {question}
              </Label>
              <Input
                id={question}
                type='text'
                onChange={(e) => setLockCode(e.target.value)}
              />
            </FormGroup>
          </Form>
        </Col>
        <Col md={3}>
          <Button
            className='lock-btn'
            disabled={required && !matches}
            onClick={clickFunction}
          >
            <img className='lock-img' src={lock} />
            &nbsp;&nbsp;&nbsp; {
              !matches && required ?
              'Locked' :
              'Unlocked'
            }
          </Button>
        </Col>
      </Row>
    </div>
  );
}


Lock.propTypes = {
  answer: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]),
  question: PropTypes.string,
  required: PropTypes.bool,
  clickFunction: PropTypes.func,
};

Lock.defaultProps = {
  required: true,
  clickFunction: () => {},
};
