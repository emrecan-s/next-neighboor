import React, { useEffect, useState } from "react";
import 'bulma/css/bulma.css'
import Fuse from 'fuse.js';
import axios from 'axios';




function Feedback() {

const [listing_url,setListingurl] = useState({})
const [id,setId]=useState()

  useEffect(() => {
      const fetchData = async () => {

    await  axios.get('/data').then(response => {
      setListingurl(response.data);

    })
    }
    fetchData();
  }, [id] )


console.log(listing_url)
const fuse = new Fuse(listing_url, {
  keys: [
    'address.address_line1'
  ]
});

  
const results = fuse.search('flory');
console.log(results)




return (
<div className="card">

<p>test</p>
</div>

  );
}

export default Feedback;