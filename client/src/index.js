//this file is the last end, like APP gets all teh componesnt and we take those from APP and 
// then this file connects to the react container in our index.html 

import App from './components/App.js'
import {createRoot} from 'react-dom/client'

//creating the root and keeping it in a varibile name root
const root = createRoot(document.getElementById("react-container"));

