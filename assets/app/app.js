/* eslint-env browser */

import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import CodeRace from 'containers/CodeRace';

const App = () => (
  <div>
    <CodeRace />
  </div>
);

ReactDOM.render(<App />, document.getElementById('react-app'));
