import React, { useState } from 'react';
import {
  Col,
  Row,
} from 'reactstrap';
import {
  useHistory,
} from 'react-router-dom';

import detectiveSanta from './assets/detective-santa.jpg'
import hat from './assets/hat.jpg'
import peppermint from './assets/peppermint.jpg'
import snowglobe from './assets/snowglobe.png'
import tree from './assets/tree.png'
import gift from './assets/gift.png'

import Lock from './Lock';

export default function Christmas () {
  const history = useHistory();

  const [puzzleDone, setPuzzleDone] = useState(false);

  return (
    <div className="home">
      <Row>
        <Col md={2}>
          <img src={detectiveSanta} />
        </Col>
        <Col md={1} />
        <Col>
          <h4 className='row'>
            You've practiced your detective skills.  I think you're ready.
          </h4>
          <h4 className='row'>
            Let's investigate this seasonal mystery.
          </h4>
          <h4 className='row'>
            Pay attention and find the patterns.
          </h4>
        </Col>
      </Row>
      <br/>
      <br/>
      <Row>
        <iframe
          src="https://www.jigsawplanet.com/?rc=play&amp;pid=2549ebf5aa40&amp;view=iframe&amp;savegame=0&amp;pieces=64"
          style={{width:'100%', height:'600px'}}
          frameBorder={0}
          allowFullScreen
          ></iframe>
      </Row>
      <br/>
      <br/>
      <br/>
      <br/>
      <Row>
        <Col md={1} />
        <Col md={2}>
          <img src={hat} />
        </Col>
        <Col md={2}>
          <img src={peppermint} />
        </Col>
        <Col md={2}>
          <img src={snowglobe} />
        </Col>
        <Col md={2}>
          <img src={tree} />
        </Col>
        <Col md={2}>
          <img src={gift} />
        </Col>
      </Row>
      <br/>
      <br/>
      <Lock
        answer='25233'
        question='Find the number code'
        clickFunction={() => setPuzzleDone(true)}
      />
      <br/>
      <br/>
      <Row>
      </Row>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
  );
}
