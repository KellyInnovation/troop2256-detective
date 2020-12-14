import React from 'react';
import {
  Col,
  Row,
} from 'reactstrap';
import {
  useHistory,
} from 'react-router-dom';

import sadSanta from './assets/sad-santa.jpg'
import reindeerCookies from './assets/reindeer-cookie.jpg'
import detective from './assets/detectives.jpg'

import Lock from './Lock';

export default function Home () {
  const history = useHistory();

  return (
    <div className="home">
      <Row>
        <Col md={4}>
          <img src={reindeerCookies} />
        </Col>
        <Col>
          <h4 className='row'>
            Santa always starts delivering presents at Sally's house.
          </h4>
          <h4 className='row'>
            He found many years ago that Girl Scout cookies help his reindeer fly through the night.
          </h4>
        </Col>
      </Row>
      <br/>
      <br/>
      <Row>
        <Col>
          <h4 className='row'>
            This year, when Santa arrived at Sally's house, there was a cold glass of milk, and a plate full of ...
          </h4>
          <h4 className='row'>
            nothing.  The plate was empty
          </h4>
          <br/>
          <h4 className='row'>
            Santa knows his reindeer depend on these cookies to help them deliver the presents to all the girls and boys.
          </h4>
          <h4 className='row'>
            Without them, Santa fears he many not be able to deliver them all.
          </h4>
        </Col>
        <Col md={3}>
          <img src={sadSanta} />
        </Col>
      </Row>
      <br/>
      <br/>
      <br/>
      <Row>
        <Col md={2}>
          <img src={detective} />
        </Col>
        <Col>
          <h4 className='row'>
            Santa needs a detective to solve the mystery of his missing Trefoil cookies. 
          </h4>
          <h4 className='row'>
            Work with your team to solve the case and save Christmas. 
          </h4>
        </Col>
      </Row>
      <br/>
      <hr/>
      <br/>
      
      <Lock
        answer=''
        question='What team are you on?'
        clickFunction={() => history.push('/detective')}
        required={false}
      />
    </div>
  );
}
