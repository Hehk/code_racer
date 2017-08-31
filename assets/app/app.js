/* eslint-env browser */

import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import CodeSession from 'containers/CodeSession';

const App = () => (
  <div>
    <CodeSession />
  </div>
);

ReactDOM.render(<App />, document.getElementById('react-app'));
