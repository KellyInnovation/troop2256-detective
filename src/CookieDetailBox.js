import React from 'react';
import { useDrag } from 'react-dnd';
import * as _ from 'lodash';

import './App.css';

const style = {
  border: '1px dashed gray',
  backgroundColor: 'white',
  padding: '0.5rem 1rem',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  cursor: 'move',
  float: 'left',
};

export const CookieDetailBox = ({
  cookie,
  detailClass,
  name,
}) => {
  const cookieType = _.get(cookie, 'type');

  const [{ isDragging }, drag] = useDrag({
    item: {
      cookie: _.get(cookie, 'name'), 
      name,
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
      key={`cookie-${_.get(cookie, 'name')}`}
      className={detailClass}
      ref={drag}
      style={{ ...style, opacity }}
    >
      {_.get(cookie, 'name')}
    </div>
  );
};