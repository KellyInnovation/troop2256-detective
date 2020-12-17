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
      <iframe 
        src="https://wanted5games.com/games/html5/santas-quest-new-en-s-iga-cloud/index.html?pub=10" 
        name="cloudgames-com" 
        width="500" 
        height="600" 
        frameBorder="0" 
        scrolling="no"
      ></iframe>
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
      <iframe 
        src="https://wanted5games.com/games/html5/funny-pet-haircut-new-en-s-iga-cloud/index.html?pub=10" 
        name="cloudgames-com" 
        width="875" 
        height="467" 
        frameBorder="0" 
        scrolling="no"
      ></iframe>
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
      <iframe 
        src="https://wanted5games.com/games/html5/jewel-christmas-new-en-s-iga-cloud/index.html?pub=10" 
        name="cloudgames-com" 
        width="509" 
        height="606" 
        frameBorder="0" 
        scrolling="no"
      ></iframe>
      <br/>
      <br/>
      <iframe 
        src="https://wanted5games.com/games/html5/pop-pop-candies-new-en-s-iga-cloud/index.html?pub=10" 
        name="cloudgames-com" 
        width="500" 
        height="672" 
        frameBorder="0" 
        scrolling="no"
      ></iframe>
      <br/>
      <br/>
      <iframe 
        src="https://wanted5games.com/games/html5/zumba-mania-new-en-s-iga-cloud/index.html?pub=10" 
        name="cloudgames-com" 
        width="500" 
        height="760" 
        frameBorder="0" 
        scrolling="no"
      ></iframe>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
  );
}
