/**
 * @format
 */

import {AppRegistry} from 'react-native';
// Start Movie App
// import App from './src/Movie/Index';

//Start Training with list & local json
// import App from './src/Week5/training/index';

// Start Login App
import App from './src/Week5/Login/Index';

// import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
