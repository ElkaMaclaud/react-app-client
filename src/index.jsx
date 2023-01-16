import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from '../src/App';

window.addEventListener('load', ()=> {
    ReactDOM.hydrate(<App />, document.getElementById('react_root'));
});