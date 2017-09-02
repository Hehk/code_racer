/* eslint-env browser */

import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import CodeRace from 'containers/CodeRace';
import { initSocket } from 'utils/channels';

initSocket();
const App = () => (
  <div>
    <CodeRace />
  </div>
);

ReactDOM.render(<App />, document.getElementById('react-app'));
