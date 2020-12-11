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
console.log(propertyResults)

const templateCard=(
  <div className="card">
  <header className="card-header">
    <p className="card-header-title">
      item
    </p>
    <a href="#" className="card-header-icon" aria-label="more options">
      <span className="icon">
        <i className="fas fa-angle-down" aria-hidden="true"></i>
      </span>
    </a>
  </header>
  <div className="card-content">
    <div className="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
      <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
      <br/>
      <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
    </div>
  </div>
  <footer className="card-footer">
    <a href="#" className="card-footer-item">Save</a>
    <a href="#" className="card-footer-item">Edit</a>
    <a href="#" className="card-footer-item">Delete</a>
  </footer>
</div>
);


return (
  <section>
  <Navbar/>
<div className="container is-max-desktop">
<div className="field">
  <label className="label">Enter The Adress</label>
  <div className="control">
    <input className="input" type="text" value={query} onChange={onSearch} placeholder="Woodside Ave"/>
  </div>
</div>
{templateCard}k
</div>

</section>

  );
}

export default Feedback;