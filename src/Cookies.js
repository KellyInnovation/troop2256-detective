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
        <iframe 
          width="560" 
          height="315" 
          src="https://www.youtube.com/embed/BWp5WAFGV60" 
          frameBorder={0} 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </Row>
    </div>
  );
}
