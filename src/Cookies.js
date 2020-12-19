import React, { useState } from 'react';
import {
  Col,
  Row,
} from 'reactstrap';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import './App.css';

import cookieSquare from './assets/cookie-square.jpeg'

import Lock from './Lock';
import CookieDropComponent from './CookieDropComponent';

export default function Cookies () {
  const [shapeDone, setShapeDone] = useState(false);
  const [bakeryDone, setBakeryDone] = useState(false);

  return (
    <div className="cookies">
      <Row>
        <Col md={3}>
          <img src={cookieSquare} />
        </Col>
        <Col>
          <br/>
          <h4 className='row'>
            Now that you know about the season, let's learn about the cookies.
          </h4>
          <h4 className='row'>
            Let's learn about the missing cookies to know how to find them.
          </h4>
        </Col>
      </Row>
      <br />
      <br />
      <br />
      <Row>
        <iframe 
          width="560" 
          height="315" 
          src="https://www.youtube.com/embed/BWp5WAFGV60" 
          frameBorder={0} 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </Row>
      <br />
      <br />
      <Lock
        answer={['flower', 'daisy', 'flowers', 'daisies', 'flower-like', 'flower like']}
        question='What shape are the Caramel DeLites'
        clickFunction={() => setShapeDone(true)}
      />
      <Lock
        answer={['abc bakers', 'abc baker', 'abc']}
        question='What cookie bakery do we use?'
        clickFunction={() => setBakeryDone(true)}
      />
      <br />
      <br />
      <h3>Place the cookies with their color and name.</h3>
      <br />
      <DndProvider backend={HTML5Backend}>
        {shapeDone && bakeryDone &&
          <CookieDropComponent />
        }
      </DndProvider>
      <br />
      <br />
      
      <br />
      <br />
    </div>
  );
}
