import * as React from 'react';
import { render } from 'react-dom';

function HelloWorld() {
    return <h1>Hello World</h1>
}

render(<HelloWorld/>, document.querySelector('#container'));