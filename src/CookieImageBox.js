import React from 'react';
import { useDrag } from 'react-dnd';
import * as _ from 'lodash';

import './App.css';

export const CookieImageBox = ({
  cookie,
  detailClass,
  image,
}) => {
  const style = {
    border: '1px dashed gray',
    backgroundColor: 'white',
    padding: '0.5rem 1rem',
    marginRight: '1.5rem',
    marginBottom: '1.5rem',
    cursor: 'move',
    float: 'left',
  };

  const cookieType = _.get(cookie, 'type');

  const [{ isDragging }, drag] = useDrag({
    item: {
      cookie: _.get(cookie, 'image'), 
      image,
      key: _.get(cookie, 'key'),
      type: cookieType,
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const opacity = isDragging ? 0.4 : 1;

  return(
    <div
      key={`image-${_.get(cookie, 'key')}`}
      className={detailClass}
      ref={drag}
      style={{ ...style, opacity }}
    >
      <img src={cookie.image} />
    </div>
  );
};