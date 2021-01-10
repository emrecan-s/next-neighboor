import React, { useEffect, useState } from 'react';
import logo from './logo.png';
import './App.scss';
import 'bulma/css/bulma.css';
import Navbar from  './Navbar';
import loadCaptcha from './recap';
import Form from './Form';


function App() {

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    loadCaptcha(() => {
      setLoaded(true);
    });
  });


function onSubmit(token) {
     document.getElementById("demo-form").submit();
   }

return (

<div>
<Navbar/>
<div className="stage">
    <div className="has-text-white  has-text-weight-bold has-text-centered  " >

      <h1 className="title is-spaced is-size-1-mobile has-text-weight-bold is-italic">Next-Neighbour <br></br>Property Noise Review Site</h1>
       
      <p className=" is-size-4 ">Do you want to know how your next house or apartment will be ?</p>
      <p className=" is-size-4 ">Would you like to help others to avoid to rent your previous noisy house or flat ?</p>
      <br></br>
    </div>
    <br></br>
    <div className ="buttons columns is-centered ">
   <a className="button" href="#formSection">I want to help</a><a className="button" href="/listing">Find a quiet place for me</a>
   </div>
   </div>
    <br></br>
    <br></br>
    <div className=" container ">
    <div className="margin">
    <div className="field ">
    <h2 id="formSection" className="has-text-weight-bold  is-size-3 ">Tell others about your previous flats / houses</h2>
    <br></br>
    <br></br>
    {loaded ? <Form/> : ''}
    </div>
    </div>
    </div>
    </div>

);
}

export default App;

