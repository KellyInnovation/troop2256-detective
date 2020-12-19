import React, { useCallback, useEffect, useState } from 'react';
import {
  Button,
  Col,
  Row,
} from 'reactstrap';
import * as _ from 'lodash';
import {
  useHistory,
} from 'react-router-dom';

import './App.css';

import thinMint from './assets/thin-mint.jpg'
import caramelDelite from './assets/caramel-delite.jpg'
import peanutButterPatty from './assets/peanut-butter-patty.jpg'
import peanutButterSandwich from './assets/peanut-butter-sandwich.jpg'
import lemonade from './assets/lemonade.jpg'
import smore from './assets/smore.jpg'
import shortbread from './assets/shortbread.jpg'
import toastYay from './assets/toast-yay.jpg'
import gluten from './assets/gluten.jpg'

import { Types } from './CookieTypes';
import { CookieDrop } from './CookieDrop';
import { CookieDetailBox } from './CookieDetailBox';
import { CookieImageBox } from './CookieImageBox';

export default function CookieDropComponent () {
  const history = useHistory();

  const cookieNames = {
    GLUTEN: {
      type: Types.GLUTEN,
      name: 'Caramel Chocolate Chips',
      key: 'GLUTEN',
    },
    CARAMEL: {
      type: Types.CARAMEL,
      name: 'Caramel DeLites',
      key: 'CARAMEL',
    },
    SHORTBREAD: {
      type: Types.SHORTBREAD,
      name: 'Shortbreads',
      key: 'SHORTBREAD',
    },
    PATTIES: {
      type: Types.PATTIES,
      name: 'Peanut Butter Patties',
      key: 'PATTIES',
    },
    TOAST: {
      type: Types.TOAST,
      name: 'Toast-Yays',
      key: 'TOAST',
    },
    SMORES: {
      type: Types.SMORES,
      name: 'Smores',
      key: 'SMORES',
    },
    LEMON: {
      type: Types.LEMON,
      name: 'Lemonades',
      key: 'LEMON',
    },
    MINT: {
      type: Types.MINT,
      name: 'Thin Mints',
      key: 'MINT',
    },
    SANDWICH: {
      type: Types.SANDWICH,
      name: 'Peanut Butter Sandwiches',
      key: 'SANDWICH',
    },
  };

  const cookieImages = {
    MINT: {
      type: Types.MINT,
      image: thinMint,
      key: 'MINT',
    },
    CARAMEL: {
      type: Types.CARAMEL,
      image: caramelDelite,
      key: 'CARAMEL',
    },
    PATTIES: {
      type: Types.PATTIES,
      image: peanutButterPatty,
      key: 'PATTIES',
    },
    SANDWICH: {
      type: Types.SANDWICH,
      image: peanutButterSandwich,
      key: 'SANDWICH',
    },
    SHORTBREAD: {
      type: Types.SHORTBREAD,
      image: shortbread,
      key: 'SHORTBREAD',
    },
    LEMON: {
      type: Types.LEMON,
      image: lemonade,
      key: 'LEMON',
    },
    SMORES: {
      type: Types.SMORES,
      image: smore,
      key: 'SMORES',
    },
    TOAST: {
      type: Types.TOAST,
      image: toastYay,
      key: 'TOAST',
    },
    GLUTEN: {
      type: Types.GLUTEN,
      image: gluten,
      key: 'GLUTEN',
    },
  };

  const cookieColors = {
    MINT: {
      key: 'MINT',
      type: Types.MINT, 
      color: '#4da960', 
      droppedItem: null,
      acceptedTypes: Types.MINT
    },
    CARAMEL: {
      key: 'CARAMEL',
      type: Types.CARAMEL, 
      color: '#653187', 
      droppedItem: null,
      acceptedTypes: Types.CARAMEL
    },
    PATTIES: {
      key: 'PATTIES',
      type: Types.PATTIES, 
      color: '#db4333', 
      droppedItem: null,
      acceptedTypes: Types.PATTIES
    },
    SANDWICH: {
      key: 'SANDWICH',
      type: Types.SANDWICH, 
      color: '#ec9a3f', 
      droppedItem: null,
      acceptedTypes: Types.SANDWICH
    },
    SHORTBREAD: {
      key: 'SHORTBREAD',
      type: Types.SHORTBREAD, 
      color: '#347fbf', 
      droppedItem: null,
      acceptedTypes: Types.SHORTBREAD
    },
    LEMON: {
      key: 'LEMON',
      type: Types.LEMON, 
      color: '#edcc45', 
      droppedItem: null,
      acceptedTypes: Types.LEMON
    },
    SMORES: {
      key: 'SMORES',
      type: Types.SMORES, 
      color: '#7c4516', 
      droppedItem: null,
      acceptedTypes: Types.SMORES
    },
    TOAST: {
      key: 'TOAST',
      type: Types.TOAST, 
      color: '#afcc54', 
      droppedItem: null,
      acceptedTypes: Types.TOAST
    },
    GLUTEN: {
      key: 'GLUTEN',
      type: Types.GLUTEN, 
      color: '#1b4d8f', 
      droppedItem: null,
      acceptedTypes: Types.GLUTEN
    },
  };

  const [cookieBoxes, setCookieBoxes] = useState(cookieColors);
  const [cookieRemainingNames, setCookieRemainingNames] = useState(cookieNames);
  const [cookieRemainingImages, setCookieRemainingImages] = useState(cookieImages);
  const [imageComplete, setImageComplete] = useState([]);
  const [matchDone, setMatchDone] = useState(false);

  const cookieNameBoxes = _.map(
    cookieRemainingNames,
    (cookie) => <CookieDetailBox
      cookie={cookie}
      key={`cookie-detail-${cookie.name}`}
      detailClass='cookie-name'
      name={cookie.name}
    />
  );

  const cookieImageBoxes = _.map(
    cookieRemainingImages,
    (cookie) => <CookieImageBox
      cookie={cookie}
      key={`cookie-detail-${cookie.image}`}
      detailClass='cookie-image'
      image={cookie.image}
    />
  );

  const handleDrop = useCallback((item) => {
    if (_.get(item, 'name')) {
      setCookieBoxes({
        ...cookieBoxes,
        [item.key]: {
          ..._.get(cookieBoxes, `${item.key}`),
          droppedItem: {
            ..._.get(cookieBoxes, `${item.key}.droppedItem`),
            name: _.get(item, 'name'),
          },
        },
      });

      setCookieRemainingNames(_.filter(
        cookieRemainingNames,
        (remain) => remain.name !== item.name,
      ));
    } else {
      setCookieBoxes({
        ...cookieBoxes,
        [item.key]: {
          ..._.get(cookieBoxes, `${item.key}`),
          droppedItem: {
            ..._.get(cookieBoxes, `${item.key}.droppedItem`),
            image: _.get(item, 'image'),
          },
        },
      });
  
      setImageComplete([...imageComplete, item]);
      setCookieRemainingImages(_.filter(
        cookieRemainingImages,
        (remain) => remain.key !== item.key,
      ));
    }
  }, [cookieRemainingNames, cookieBoxes]);

  const dropAreas = _.map(
    cookieBoxes,
    (color) => <CookieDrop
      color={color} 
      key={`cookie-drop-${color.color}`}
      droppedItem={color.droppedItem}
      onDrop={(item) => handleDrop(item)}
      boxes={cookieBoxes}
    />
  );

  useEffect(() => {
    if (
      cookieRemainingNames.length === 0 &&
      imageComplete.length >= 6
    ) {
      setMatchDone(true);
    }
  }, [cookieRemainingNames, cookieRemainingImages]);

  return (
    <div className="cookie-drop-component">
      <Row md={4} style={{ overflow: 'hidden', clear: 'both' }}>
        {dropAreas}
      </Row>
      <Row md={6} style={{ overflow: 'hidden', clear: 'both' }}>
        {cookieNameBoxes}
        {cookieImageBoxes}
      </Row>
      <br />
      <br />
      <Row>
        <Col md={{ size: 4, offset: 4 }}>
          {matchDone &&
            <Button
              className='btn'
              onClick={() => history.push('/final')}
            >
              Keep Solving
            </Button>
          }
        </Col>
      </Row>
    </div>
  );
}
