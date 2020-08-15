import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './Components/Game';
import * as serviceWorker from './serviceWorker';
import VoltorbFlip from '@dracoctix/voltorb-flip';

import 'bootstrap/dist/css/bootstrap.min.css';

const tempLevel = localStorage.getItem('level');
const startingLevel = (tempLevel && Number.isSafeInteger(+tempLevel) && +tempLevel <= 8 && +tempLevel > 0) ? +tempLevel : 1;
const tempScore = localStorage.getItem('score');
const score = (tempScore && Number.isSafeInteger(+tempScore) && +tempScore >= 0) ? +tempScore : 0;

ReactDOM.render(
  <React.StrictMode>
    <Game game={new VoltorbFlip({
      startingLevel,
      score,
    })} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
