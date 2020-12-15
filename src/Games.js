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
        <h2>Rurus Christmas Run</h2>
      </Row>
      <Row>
        <h4>Press Space bar to jump</h4>
      </Row>
      <Row>
        <iframe 
          src="https://itch.io/embed/106674" 
          height="167" 
          width="552" 
          frameBorder="0"
        >
          <a href="https://tech-dog.itch.io/rurus-christmas-run">
            Ruru&#039;s Christmas Run by Tech Dog
          </a>
        </iframe>
      </Row>
      <br/>
      <br/>
      <Row>
        <iframe 
          src="https://www.jigsawplanet.com/?rc=play&amp;pid=04e5dbe31af1&amp;view=iframe&amp;pieces=100" 
          style={{width:'100%', height:'600px'}} 
          frameBorder={0}
          allowFullScreen
        />
      </Row>
      <br/>
      <br/>
      <h4>Use space to jump and arrows to move</h4>
      <Row>
        <iframe 
          src="https://itch.io/embed/454110" 
          height="167" 
          width="552" 
          frameBorder={0}
        >
          <a href="https://anasarshad.itch.io/unicorn">
            Unicorn by anasarshad
          </a>
        </iframe>
      </Row>
      <br/>
      <br/>
      <Row>
        <iframe 
          src="https://www.jigsawplanet.com/?rc=play&amp;pid=2391681ff172&amp;view=iframe" 
          style={{width:'100%', height:'600px'}} 
          frameBorder={0} 
          allowFullScreen
        ></iframe>
      </Row>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
  );
}
