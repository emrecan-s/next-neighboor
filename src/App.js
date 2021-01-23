import logo from './logo.png';
import Form from './Form';
import Helmet from 'react-helmet'


require('dotenv').config()
const title= 'Next-Neighbour Open Source Propery Noise Review Site'
const description= 'No more noise complaint! Get to know your neighbors before moving to your next place. Help others to avoid noisy flats/houses'

function App() {
return (
<div>
  <Helmet>
  <html lang="en"/>
  <meta charSet="utf-8" />
  <title>{title}</title>
  <meta name="description" content={description}/>
  <link rel="canonical" href="https://nextneighbour.com" />
  <meta name="twitter:card" content="summary"/>
  <meta name="twitter:site" content="@nextNeighbour"/>
  <meta name="twitter:title" content={title}/>
  <meta name="twitter:description" content={description}/>
  <meta name="description" content={description}/>
  <meta property="og:title" content={title}/>
  <meta property="og:url" content="https://nextneighbour.com"/>
  <meta property="og:description" content={description}/>

  </Helmet>
  
    <div className="stage">
      <div className="has-text-white  has-text-weight-bold has-text-centered" >
        <h1 className="title is-spaced is-size-1-mobile has-text-weight-bold">Next-Neighbour <br></br>Property Noise Review Site</h1>
        
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
          <Form/>
          </div>
        </div>
      </div>
      </div>
      );
      }
      export default App;