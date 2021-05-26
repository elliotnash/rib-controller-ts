import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Map from './components/map';

function render() {
  ReactDOM.render(
    <div>
      <Map/>
    </div>, 
    document.body
  );
}

render();