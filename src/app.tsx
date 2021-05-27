import * as React from 'react';
import * as ReactDOM from 'react-dom';
import CSS from 'csstype';

import Map from './components/map';

function render() {

  const background: CSS.Properties = {
    position: "absolute",
    display: "flex",
    backgroundColor: "DodgerBlue",
    top: "0",
    bottom: "0",
    left: "0",
    right: "0",
  };

  ReactDOM.render(
    <div style={background}>
      <Map/>
    </div>, 
    document.body
  );
}

render();