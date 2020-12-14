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

export default function Christmas () {
  const history = useHistory();

  return (
    <div className="home">
      Hello
    </div>
  );
}
