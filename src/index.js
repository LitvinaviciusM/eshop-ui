import React from 'react';
import ReactDOM from 'react-dom';
import Feed from './feed';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Feed />, document.getElementById('root'));

serviceWorker.unregister();
