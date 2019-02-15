import React from 'react';
import ReactDOM from 'react-dom';

import App from './App'

const MOUNT_NODE = document.getElementById('app')
// console.log(process.env.BUILD_ENV)

ReactDOM.render(<App />, MOUNT_NODE);