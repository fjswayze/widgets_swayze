import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './frontend/clock'; 
import Tabs from './frontend/tabs'; 
import Weather from './frontend/weather'; 
const content = [{title: 'one', body: 'I am the first'}, {title: 'two', body: 'Second plane here'}, {title: 'three', body: 'Third plane here'}]; 

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<div>
    <Clock></Clock>
    <Tabs tabs={content}></Tabs>
    <Weather></Weather>
  </div>, root);
});
