import React, { useEffect, useState } from "react";
import 'bulma/css/bulma.css'
import Fuse from 'fuse.js';
import axios from 'axios';
import Helmet from "react-helmet";

function Feedback(props) {

const [listing_url,setListingurl] = useState({})

const [id,setId]=useState()

const [query, setQuery] = useState(props.state||"");

useEffect(() => {

const fetchData = async () => {

await  axios.get('/data').then(response => {

setListingurl(response.data);

})

}

fetchData();

}, [id] )

function onSearch({ currentTarget }) {

setQuery(currentTarget.value);

}

const fuse = new Fuse(listing_url, {
keys: [
'address.address_line1'
],
includeScore: true
});

const results = fuse.search( query);
const propertyResults =  query ? results.map(listing_url => listing_url.item) : listing_url;


const displayProperties =  propertyResults.length>0 ?
propertyResults.map((item, index) =>
<section key ={index}>
  <div className="card">
    <header className="card-header">
      <p className="card-header-title">
        {item.address.address_line1} | Property Num: {item.address.property_number === '' ? "Not provided" : item.address.property_number}
        <br/>
        Type: {item.property_type}   |
        Overall noise level: {item.noise_level} / 10
      </p>
    </header>
    <div className="card-content">
      <div className="content">
        <strong> Summary</strong>
        <br/>
        {item.summary === 'undefined' ? "Not provided ": item.summary }
        <br/>
        <strong>Interaction with neighboors :</strong> {item.interaction === 'undefined' ? "Not provided ": item.interaction }
        <br/>
        <strong>Loud TV/music or video games ? :</strong> {item.loud_tv_video === 'undefined' ? "Not provided": item.loud_tv_video}
        <br/>
        <strong>Any heavy walkers ? :</strong> {item.heavy_walkers  === 'undefined' ? "Not provided": item.heavy_walkers }
        <br/>
        <strong>Any loud instrument ? :</strong> {item.do_they_play_an_instrument === 'undefined' ? "Not provided" :item.do_they_play_an_instrument}
        <br/>
        <strong>Singing loud ? :</strong> {item.do_they_sing === 'undefined' ? "Not provided" : item.do_they_sing }
        <br/>
        <strong>Loud Pets ? :</strong> {item.do_they_have_loud_pets === 'undefined' ? "Not provided" : item.do_they_have_loud_pets}
        <br/>
        <strong>Any loud hobbies ? :</strong> {item.do_they_have_loud_hobbies === 'undefined' ? "Not provided" : item.do_they_have_loud_hobbies}
        <br/>
        <strong>Are the walls thin ? :</strong> {item.are_the_walls_thin === 'undefined' ? "Not provided" : item.are_the_walls_thin}
        <br/>
        <strong>Is outside quiet ? :</strong> {item.is_outside_quiet === 'undefined' ? "Not provided" : item.is_outside_quiet}
        <br/>
        <strong>Do they party a lot ? :</strong> {item.party === 'undefined' ? "Not provided" : item.party }
        <br/>
        
      </div>
    </div>
    <footer className="card-footer">
      Posted by: {item.nickname === 'undefined' ? "Unkown Person" : item.nickname }  --
      Date: {item.date}
    </footer>
  </div><hr></hr>
</section>
)
:(
<div>
  <p>Sorry there is no result for this adress. If you want to help others you can leave a review <a href="https://nextneighbour.com#formSection">here.</a> </p>
</div>
)
const title="Open Source Propery Noise Listing & Directory site"
const description = "Search apartment and houses noise reviews. Avoid to move to a noisy house or apartment"


const metaData = window.location.href.includes("listing") ?  <Helmet>
<html lang="en" />
<meta charSet="utf-8" />
<title>{title}</title>
<meta name="description" content=" "/>
<link rel="canonical" href="https://nextneighbour.com/listing" />
<meta name="twitter:card" content="summary" />
<meta name="twitter:site" content="@nextNeighbour" />
<meta name="twitter:title" content={title} />
<meta name="twitter:description" content={description} />
<meta name="description" content={description} />
<meta property="og:title" content={title} />
<meta property="og:url" content="https://nextneighbour.com/listing" />
<meta property="og:description" content={description} />
</Helmet> : ""


return (
<section>
  <div className="m-3">
    <div className="container is-max-desktop  ">
      <div className="field ">
      {metaData}
        <label className="label">Enter The Adress</label>
        <div className="control">
          <input className="input" type="text" value={query} onChange={onSearch} placeholder="Woodside Ave"/>
        </div>
      </div>
      {displayProperties}
    </div>
    </div>
  </section>
  );
  }
  export default Feedback;