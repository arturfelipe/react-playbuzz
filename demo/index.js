import React from 'react';
import ReactDOM from 'react-dom';
import PlayBuzz from '../src/PlayBuzz.jsx';

ReactDOM.render(
  <PlayBuzz
    url='http://www.playbuzz.com/peepersc10/who-is-your-favorite-super-hero'
    load={true}
  />,
  document.getElementById('root')
);
