import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import HelloWorld from 'containers/HelloWorld';

const App = () => (
  <div>
    <HelloWorld />
  </div>
);

ReactDOM.render(<App/>, document.getElementById('react-app'));
