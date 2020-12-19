import React, { useState } from 'react';
import {
  Button,
  Col,
  Row,
} from 'reactstrap';
import { Link, useHistory } from 'react-router-dom';

import Lock from './Lock';

export default function Final () {
  const history = useHistory();

  const [morse1Done, setMorse1Done] = useState(false);
  const [hasGirlGuide, setHasGirlGuide] = useState(false);
  const [hasBadges, setHasBadges] = useState(false);
  const [hasSign, setHasSign] = useState(false);
  const [hasMotto, setHasMotto] = useState(false);
  const [hasCircle, setHasCircle] = useState(false);

  const isDone = morse1Done;

  return (
    <div className="final">
      <Row>
        <h4 className='row'>
          To be a great detective, you have to start with the basics.
        </h4>
        <h4 className='row'>
          Learn about Girl Scouts to know how you can help solve the mystery.
        </h4>
        <br />
        <iframe 
          width="560" 
          height="315" 
          src="https://www.youtube.com/embed/RguQd_1PGDw" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </Row>
      <Lock
        answer='1912'
        question='What year did Girl Scouts begin?'
        // clickFunction={() => setHasDate(true)}
      />
      <br />
      <hr />
      <br />
      <Lock
        answer={['girl guides', 'girl guide']}
        question='What were Girl Scouts originally called (and still named in many countries)?'
        clickFunction={() => setHasGirlGuide(true)}
      />
      <br />
      <hr />
      <br />
      {/* {isDone && */}
        <div>
          <Row>
            <h1>
              Congratulations! You solved the mystery!
            </h1>
          </Row>
          <Row>
            <h3>
              Now Santa and his reindeer are off to deliver toys.
            </h3>
          </Row>
          <br />
          <br />
          <br />
          <br />
          <br />
          <Row>
            <h3>
              For your final lock, find your code below:
            </h3>
          </Row>
          <br />
          <Row>
            <Col md={3}><b>Blue</b></Col>
            <Col md={3}>783</Col>
          </Row>
          <Row>
            <Col md={3}><b>Dark Green</b></Col>
            <Col md={3}>157</Col>
          </Row>
          <Row>
            <Col md={3}><b>Silver</b></Col>
            <Col md={3}>804</Col>
          </Row>
          <Row>
            <Col md={3}><b>Pink</b></Col>
            <Col md={3}>926</Col>
          </Row>
          <Row>
            <Col md={3}><b>Black</b></Col>
            <Col md={3}>175</Col>
          </Row>
          <Row>
            <Col md={3}><b>Light Green</b></Col>
            <Col md={3}>206</Col>
          </Row>
          <Row>
            <Col md={3}><b>Red</b></Col>
            <Col md={3}>384</Col>
          </Row>
          <Row>
            <Col md={3}><b>Purple</b></Col>
            <Col md={3}>521</Col>
          </Row>
          <br />
          <br />
          <br />
          <br />
          <Row>
            You can now revist any page:
          </Row>
          <Row>
            <Link to='/'>Home</Link>
          </Row>
          <Row>
            <Link to='/detective'>Detective</Link>
          </Row>
          <Row>
            <Link to='/christmas'>Christmas</Link>
          </Row>
          <Row>
            <Link to='/cookies'>Cookies</Link>
          </Row>
          <Row>
            <Link to='/games'>Games</Link>
          </Row>
          <br />
          <br />
          <br />
          <br />
          <h1>NOW YOU CAN PLAY GAMES</h1>
          <h1><Link to='/games'>GAMES</Link></h1>
        </div>
      {/* } */}
      <br />
      <br />
      <br />
    </div>
  );
}


