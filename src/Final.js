import React, { useState } from 'react';
import {
  Col,
  Row,
  Tooltip,
} from 'reactstrap';
import { Link } from 'react-router-dom';

import info from './assets/info.png';
import morse from './assets/morse.jpg';
import santaFlying from './assets/santa-flying.jpg';
import lock from './assets/lock.png';
import detective from './assets/detectives.jpg';
import reindeer from './assets/reindeer.png';
import caramelDelite from './assets/caramel-delite.jpg'
import gamer from './assets/gamer.jpg';
import santaQuest from './assets/santa-quest.png';

import Lock from './Lock';

export default function Final () {
  const [finalAnswerDone, setFinalAnswerDone] = useState(false);
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggle = () => setTooltipOpen(!tooltipOpen);

  return (
    <div className="final">
      <Row>
        <h4 className='row'>
          Great job.  Now, one last mystery to solve:
        </h4>
      </Row>
      <br />
      <br />
      <Row>
        <Col>
        <h4 className='row'>
          ...&nbsp;&nbsp;&nbsp;.-&nbsp;&nbsp;&nbsp;.-..&nbsp;&nbsp;&nbsp;.-..&nbsp;&nbsp;&nbsp;-.-- / 
          &nbsp;....&nbsp;&nbsp;&nbsp;.-&nbsp;&nbsp;&nbsp;-.. / 
          &nbsp;-&nbsp;&nbsp;&nbsp;....&nbsp;&nbsp;&nbsp;. /
          &nbsp; -.-.&nbsp;&nbsp;&nbsp;---&nbsp;&nbsp;&nbsp;---&nbsp;&nbsp;&nbsp;-.-&nbsp;&nbsp;&nbsp;..&nbsp;&nbsp;&nbsp;.&nbsp;&nbsp;&nbsp;... / 
          &nbsp; -...&nbsp;&nbsp;&nbsp;-.-- /
          &nbsp; ....&nbsp;&nbsp;&nbsp;.&nbsp;&nbsp;&nbsp;.-. /
          &nbsp; -...&nbsp;&nbsp;&nbsp;.&nbsp;&nbsp;&nbsp;-..
        </h4>
        </Col>
        <Col md={1}>
          <img
            src={info}
            style={{width: '50%'}}
            id="TooltipExample"
          />
        </Col>
      </Row>
      <Tooltip placement="left" isOpen={tooltipOpen} target="TooltipExample" toggle={toggle}>
        <img src={morse} />
      </Tooltip>
      <br />
      <Lock
        answer='sally had the cookies by her bed'
        question='Where does the message say?'
        clickFunction={() => setFinalAnswerDone(true)}
      />
      <br />
      <hr />
      <br />
      {finalAnswerDone &&
        <div>
          <Row>
            <h1>
              Congratulations! You solved the mystery!
            </h1>
          </Row>
          <br />
          <Row>
            <h3>
              You found the cookies to help the reindeer fly.  
            </h3>
          </Row>
          <Row>
            <h3>
              Now Santa and his reindeer are off to deliver toys.
            </h3>
          </Row>
          <br />
          <img src={santaFlying} style={{height: '250px'}} />
          <br />
          <br />
          <Row>
            <h3>
              To get yours, open your gift.
            </h3>
          </Row>
          <br />
          <Row>
            <h3>
              For your final lock, find your code below:
            </h3>
          </Row>
          <br />
          <Row>
            <Col md={6}>
              <Row>
                <Col md={6}><b>Blue</b></Col>
                <Col md={6}>783</Col>
              </Row>
              <Row>
                <Col md={6}><b>Dark Green</b></Col>
                <Col md={6}>157</Col>
              </Row>
              <Row>
                <Col md={6}><b>Silver</b></Col>
                <Col md={6}>804</Col>
              </Row>
              <Row>
                <Col md={6}><b>Pink</b></Col>
                <Col md={6}>926</Col>
              </Row>
              <Row>
                <Col md={6}><b>Black</b></Col>
                <Col md={6}>175</Col>
              </Row>
              <Row>
                <Col md={6}><b>Light Green</b></Col>
                <Col md={6}>206</Col>
              </Row>
              <Row>
                <Col md={6}><b>Red</b></Col>
                <Col md={6}>384</Col>
              </Row>
              <Row>
                <Col md={6}><b>Purple</b></Col>
                <Col md={6}>521</Col>
              </Row>
            </Col>
            <Col md={2}>
              <img src={lock} />
            </Col>
          </Row>
          <br />
          <br />
          <br />
          <Row>
            <Col md={7}>
              <Row>
                <Col>
                  <img src={detective} style={{height: '100px'}} />
                </Col>
                <Col>
                  <img src={reindeer} style={{height: '100px'}} />
                </Col>
                <Col>
                  <img src={caramelDelite} style={{height: '100px'}} />
                </Col>
                <Col>
                  <img src={gamer} style={{height: '100px'}} />
                </Col>
              </Row>
            </Col>
            <Col>
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
            </Col>
          </Row>
          <br />
          <br />
          <br />
          <br />
          <Row>
            <Col>
              <h1>NOW YOU CAN PLAY GAMES</h1>
              <h1><Link to='/games'>GAMES</Link></h1>
            </Col>
            <Col md={3}>
              <img src={santaQuest} />
            </Col>
          </Row>
        </div>
      }
      <br />
      <br />
      <br />
    </div>
  );
}


