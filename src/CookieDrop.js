import React from 'react';
import { useDrop } from 'react-dnd';
import * as _ from 'lodash';

import './App.css';

export function CookieDrop ({
  color,
  onDrop,
}) {
  const style = {
    height: '12rem',
    width: '12rem',
    marginRight: '1.5rem',
    marginBottom: '1.5rem',
    color: 'white',
    padding: '1rem',
    textAlign: 'center',
    fontSize: '1rem',
    lineHeight: 'normal',
    float: 'left',
  };

  const cookieType = _.get(color, 'type');

  const [, drop] = useDrop({
    accept: _.get(color, 'acceptedTypes'),
    drop: onDrop,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  return(
    <div
      key={`color-${cookieType}`}
      className='cookie-box'
      ref={drop}
      style={{ ...style, backgroundColor: _.get(color, 'color') }}
    >
      {_.get(color, 'droppedItem.name')}
      <img src={_.get(color, 'droppedItem.image')} />
    </div>
  );
};
