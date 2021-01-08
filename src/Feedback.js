import React, { useEffect, useState } from "react";
import 'bulma/css/bulma.css'
import Fuse from 'fuse.js';
import axios from 'axios';
import Navbar from  "./Navbar"
function Feedback() {

const [listing_url,setListingurl] = useState({})

const [id,setId]=useState()

const [query, setQuery] = useState('');

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
<section>
  <div className="card">
    <header className="card-header">
      <p className="card-header-title">
        {item.address.address_line1} - {item.address.property_number} - {item.address.city} - {item.address.postal_code} - {item.address.country}
        <br/>
        Type: {item.property_type}   &
        Overall noise level: {item.noise_level} / 10
      </p>
    </header>
    <div className="card-content">
      <div className="content">
        <strong> Summary</strong>
        <br/>
        {item.summary}
        <br/>
        <strong>Interaction with neighboors :</strong> {item.interaction }
        <br/>
        <strong>Loud tv or  video games ? :</strong> {item.loud_tv_video }
        <br/>
        <strong>Any heavy walkers ? :</strong> {item.heavy_walkers }
        <br/>
        <strong>Any loud instrument ? :</strong> {item.do_they_play_an_instrument }
        <br/>
        <strong>Singing loud ? :</strong> {item.do_they_sing }
        <br/>
        <strong>Loud Pets ? :</strong> {item.do_they_have_loud_pets}
        <br/>
        <strong>Any loud hobbies ? :</strong> {item.do_they_have_loud_hobbies}
        <br/>
        <strong>Are the walls thin ? :</strong> {item.are_the_walls_thin}
        <br/>
        <strong>Is outside quiet ? :</strong> {item.is_outside_quiet}
        <br/>
        <strong>Do they party a lot ? :</strong> {item.party}
        <br/>
        
      </div>
    </div>
    <footer className="card-footer">
      Posted by: {item.nickname}  --
      Date: {item.date}
    </footer>
  </div><hr></hr>
</section>
)
:(
<div>
  <p>Loading</p>
</div>
)
return (
<section>
  <Navbar/>
  <div className="m-3">
    <div className="container is-max-desktop  ">
      <div className="field ">
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