import React, { useState } from 'react';
import {
  Button,
  Col,
  Row,
} from 'reactstrap';
import {
  useHistory,
} from 'react-router-dom';

import detectiveSanta from './assets/detective-santa.jpg';
import hat from './assets/hat.jpg';
import peppermint from './assets/peppermint.jpg';
import snowglobe from './assets/snowglobe.png';
import tree from './assets/tree.png';
import gift from './assets/gift.png';
import elfOnShelf from './assets/elf-on-shelf.jpg';
import rebus from './assets/rebus.jpg';
import reindeer from './assets/reindeer.png';

import Lock from './Lock';

export default function Christmas () {
  const history = useHistory();

  const [puzzleDone, setPuzzleDone] = useState(false);
  const [elfCodeDone, setElfCodeDone] = useState(false);
  const [fruitCakeDone, setFruitCakeDone] = useState(false);
  const [DecorateDone, setDecorateDone] = useState(false);
  const [candyCaneDone, setCandyCaneDone] = useState(false);
  const [StockingDone, setStockingDone] = useState(false);
  const [reindeerDone, setReindeerDone] = useState(false);
  const [OrnamentDone, setOrnamentDone] = useState(false);
  const [NorthPoleDone, setNorthPoleDone] = useState(false);
  const [MistletoeDone, setMistletoeDone] = useState(false);
  const [RibbonDone, setRibbonDone] = useState(false);
  const [PineConeDone, setPineConeDone] = useState(false);
  const [SantaClausDone, setSantaClausDone] = useState(false);
  const [naughtyOrNiceDone, setNaughtyOrNiceDone] = useState(false);

  const canGo = puzzleDone &&
    elfCodeDone &&
    fruitCakeDone &&
    DecorateDone &&
    candyCaneDone &&
    StockingDone &&
    reindeerDone &&
    OrnamentDone &&
    NorthPoleDone &&
    MistletoeDone &&
    RibbonDone &&
    PineConeDone &&
    SantaClausDone &&
    naughtyOrNiceDone;

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
          <br/>
          <br/>
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
        answer={['25233', '2 5 2 3 3', '2-5-2-3-3']}
        question='Find the number code (numbers only)'
        clickFunction={() => setPuzzleDone(true)}
      />
      <br/>
      <br/>
      <h4 className='row'>
        What do the elves have to say about this mystery?
      </h4>
      <Row>
        <Col md={{ size: 8, offset: 1 }}>
          <img src={elfOnShelf} />
        </Col>
      </Row>
      <br/>
      <Lock
        answer='tis the season to be jolly'
        question='Secret message'
        clickFunction={() => setElfCodeDone(true)}
      />
      <br/>
      <br/>
      <h4 className='row'>
        You're doing great!
      </h4>
      <h4 className='row'>
        Work with your team and answer these word puzzles.  
      </h4>
      <br/>
      <Row>
        <Col md={{ size: 8, offset: 1 }}>
          <img src={rebus} />
        </Col>
      </Row>
      <br/>
      <Lock
        answer={['fruit cake', 'fruitcake', 'fruit cakes']}
        question='#1'
        clickFunction={() => setFruitCakeDone(true)}
      />
      <Lock
        answer='decorate'
        question='#2'
        clickFunction={() => setDecorateDone(true)}
      />
      <Lock
        answer='candy cane'
        question='#3'
        clickFunction={() => setCandyCaneDone(true)}
      />
      <Lock
        answer='stocking'
        question='#4'
        clickFunction={() => setStockingDone(true)}
      />
      <Lock
        answer='reindeer'
        question='#5'
        clickFunction={() => setReindeerDone(true)}
      />
      <Lock
        answer='ornament'
        question='#6'
        clickFunction={() => setOrnamentDone(true)}
      />
      <Lock
        answer='north pole'
        question='#7'
        clickFunction={() => setNorthPoleDone(true)}
      />
      <Lock
        answer={['mistletoe', 'mistle toe']}
        question='#8'
        clickFunction={() => setMistletoeDone(true)}
      />
      <Lock
        answer='ribbon'
        question='#9'
        clickFunction={() => setRibbonDone(true)}
      />
      <Lock
        answer={['pine cone', 'pinecone']}
        question='#10'
        clickFunction={() => setPineConeDone(true)}
      />
      <Lock
        answer='santa claus'
        question='#11'
        clickFunction={() => setSantaClausDone(true)}
      />
      <Lock
        answer='naughty or nice'
        question='#12'
        clickFunction={() => setNaughtyOrNiceDone(true)}
      />

      <br/>
      <br/>
      <Row>
        <Col md={3}>
          <img src={reindeer} />
        </Col>
        <Col>
          <h4 className='row'>
            Great job solving Christmas puzzles.
          </h4>
          <br/>
          <h4 className='row'>
            You're getting closer to solving this mystery and helping the reindeer fly.
          </h4>
          <h4 className='row'>
            Are you ready to keep going?
          </h4>
        </Col>
      </Row>
      <br/>
      <br/>
      <Row>
        <Col md={{ size: 4, offset: 4 }}>
          {canGo &&
            <Button
              className='btn'
              onClick={() => history.push('/cookies')}
            >
              Keep Solving
            </Button>
          }
        </Col>
      </Row>
      <br/>
    </div>
  );
}
