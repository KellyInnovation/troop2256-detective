import React, { useState } from 'react';
import {
  Button,
  Row,
} from 'reactstrap';
import { useHistory } from 'react-router-dom';

import Lock from './Lock';

export default function Detective () {
  const history = useHistory();

  const [hasDate, setHasDate] = useState(false);
  const [hasGirlGuide, setHasGirlGuide] = useState(false);
  const [hasBadges, setHasBadges] = useState(false);
  const [hasSign, setHasSign] = useState(false);
  const [hasMotto, setHasMotto] = useState(false);
  const [hasCircle, setHasCircle] = useState(false);

  return (
    <div className="detective">
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
        clickFunction={() => setHasDate(true)}
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
      {hasDate && hasGirlGuide &&
        <div>
          <Row>
            <h5>
              Badges
            </h5>
          </Row>
          <Row>
            <p>
              A cornerstone of Girl Scouting, the seven legacy badges build on over 100 years of Girl Scout history. Each of these badges (Artist, Athlete, Citizen, Cook, First Aid, Girl Scout Way, and Naturalist) is available at five levels of Girl Scouting, from Brownie to Ambassador.
            </p>
          </Row>
          <Row>
            <h5>
              Girl Scout Sign
            </h5>
            <p>
              Girl Scouts make the Girl Scout sign—raising three fingers of the right hand with the thumb holding down the pinky—when they say the Girl Scout Promise. The three fingers represent the three parts of the Promise.
            </p>
          </Row>
          <Row>
            <h5>
              Motto
            </h5>
          </Row>
          <Row>
            <p>
              The Girl Scout motto is "Be prepared." In the 1947 Girl Scout Handbook, the motto was explained this way: "A Girl Scout is ready to help out wherever she is needed. Willingness to serve is not enough; you must know how to do the job well, even in an emergency." The same holds true today.
            </p>
          </Row>
          <Row>
            <h5>
              Friendship Circle
            </h5>
          </Row>
          <Row>
            <p>
              Representing the unbroken chain of friendship among Girl Scouts and Girl Guides around the world, the Friendship Circle involves Girl Scouts standing in a circle, crossing their right arms over their left, and clasping hands with their friends on both sides. Everyone then makes a silent wish as a friendship squeeze is passed from hand to hand around the circle.  Many meetings end with this circle.
            </p>
          </Row>
          <Lock
            answer={['badge', 'badges']}
            question='What do we earn?'
            clickFunction={() => setHasBadges(true)}
          />
          <Lock
            answer={'3'}
            question='How many fingers do we hold up for our sign?'
            clickFunction={() => setHasSign(true)}
          />
          <Lock
            answer={'be prepared'}
            question='What our motto?'
            clickFunction={() => setHasMotto(true)}
          />
          <Lock
            answer={'friendship circle'}
            question='How do we end our meetings (2 words)?'
            clickFunction={() => setHasCircle(true)}
          />
        </div>
      }
      {hasBadges && hasSign && hasMotto && hasCircle &&
        <Button
          className='btn'
          onClick={() => history.push('/christmas')}
        >
          Keep Solving
        </Button>
      }
    </div>
  );
}


