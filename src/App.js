import React, { useEffect, useState } from "react";
import logo from './logo.svg';
import './App.scss';
import axios from 'axios';
function App() {
const [listing_url,setListingurl] = useState()
const [property_type,setProperty_type] = useState()
const [nickname,setNickname] = useState()
const [summary,setSummary] = useState()
const [interaction,setInteraction] = useState()
const [noise_level,setNoise_level] = useState()
const [loud_tv_video,setLoud_tv_video] = useState()
const [heavy_walkers,setHeavy_walkers] = useState()
const [do_they_play_an_instrument,setDo_they_play_an_instrument] = useState()
const [do_they_sing,setDo_they_sing] = useState()
const [do_they_have_loud_pets,setDo_they_have_loud_pets] = useState()
const [do_they_have_loud_hobbies,setDo_they_have_loud_hobbies] = useState()
const [are_the_walls_thin,setAre_the_walls_thin] = useState()
const [is_outside_quiet,setIs_outside_quiet] = useState()
const [party,setParty] = useState()
const [address,setAddress] = useState({"address_line1":"","address_line2":"","city":"","postal_code":"","country":"","property_number":""})
const [date,setDate] = useState(Date.now())

const handleSubmit = event => {

event.preventDefault()

const formData = new FormData();
  formData.append('listing_url', listing_url);
  formData.append('property_type', property_type);
  formData.append('nickname', nickname);
  formData.append('summary', summary);
  formData.append('interaction', interaction);
  formData.append('noise_level', noise_level);
  formData.append('loud_tv_video', loud_tv_video);
  formData.append('heavy_walkers', heavy_walkers);
  formData.append('do_they_play_an_instrument', do_they_play_an_instrument);
  formData.append('do_they_sing', do_they_sing);
  formData.append('do_they_have_loud_pets', do_they_have_loud_pets);
  formData.append('do_they_have_loud_hobbies', do_they_have_loud_hobbies);
  formData.append('are_the_walls_thin', are_the_walls_thin);
  formData.append('is_outside_quiet', is_outside_quiet);
  formData.append('party', party);
  formData.append('address', JSON.stringify(address));
  formData.append('date', date);

//Form data returns empty 

axios({
    method: 'post',
    url: '/add',
    data: formData,
    headers: {'Content-Type': 'multipart/form-data' }
    })
    .then(function (response) {
        //handle success
        console.log(response);
    })
    .catch(function (response) {
        //handle error
        console.log(response);
    })


}
return (
<div>
  <div className="fade"></div>
  <section className="star-wars">
    <div className="crawl">
      <div className="title">
        <h1>Who is your next neighbours ?</h1>
      </div>
      <p>Are noisy neighbours ruining your life ?</p>
      <p>Do you want to know how is your next house, apartment will be ?</p>
      <p>Would you like to help others to avoid to rent your problematic previous house or flat ?</p>
      <br></br>
      <button>I want to help</button><button>Find a quiet place for me</button>
    </div>
    <br></br>
    <form onSubmit={handleSubmit}>
      <label>
        Property Type
        <select onChange={e => setProperty_type(e.target.value)}>
          <option value="house">House</option>
          <option value="flat">Flat</option>
        </select>
      </label>
      <br></br>
      <br></br>
      <label>
        Nickname
        <input type="text"
        name ="nickname"
        type="text"
        value={nickname}
        onChange={e => setNickname(e.target.value)}/>
      </label>
      <br></br>
      <br></br>
      <label>
        Summary
        <input type="text"
        name ="summary"
        type="text"
        value={summary}
        onChange={e => setSummary(e.target.value)}/>
      </label>
      <br></br>
      <br></br>
      <label>
        Interaction
        <input type="text"
        name ="interaction"
        type="text"
        value={interaction}
        onChange={e => setInteraction(e.target.value)}/>
      </label>
      <br></br>
      <br></br>
      <label>
        Overall Noise level
        <input type="text"
        name ="interaction"
        type="range"
        min="0"
        max="10"
        value={noise_level}
        onChange={e => setNoise_level(e.target.value)}/>
      </label>
      <br></br>
      <br></br>
      <p>Loud tv or video games ?</p>
      <input type="radio"
      id="video"
      name="boolean_video"
      value="true"
      onChange={e => setLoud_tv_video(e.target.value)}/>
      <label for="true">Yes</label>
      <input type="radio"
      id="false"
      name="boolean_video"
      value="false"
      onChange={e => setLoud_tv_video(e.target.value)}/>
      <label for="false">No</label>
      <br></br>
      <br></br>
      <p>Any heavy walkers ?</p>
      <input type="radio"
      id="true"
      name="boolean_walkers"
      value="true"
      onChange={e => setHeavy_walkers(e.target.value)}/>
      <label for="true">Yes</label>
      <input type="radio"
      id="false"
      name="boolean_walkers"
      value="false"
      onChange={e => setHeavy_walkers(e.target.value)}/>
      <label for="false">No</label>
      <br></br>
      <br></br>
       <p>Do they play an instrument ?</p>
      <input type="radio"
      id="true"
      name="boolean_instrument"
      value="true"
      onChange={e => setDo_they_play_an_instrument(e.target.value)}/>
      <label for="true">Yes</label>
      <input type="radio"
      id="false"
      name="boolean_instrument"
      value="false"
      onChange={e => setDo_they_play_an_instrument(e.target.value)}/>
      <label for="false">No</label>
      <br></br>
      <br></br>
       <p>Do they sing ?</p>
      <input type="radio"
      id="true"
      name="boolean_sing"
      value="true"
      onChange={e => setDo_they_sing(e.target.value)}/>
      <label for="true">Yes</label>
      <input type="radio"
      id="false"
      name="boolean_sing"
      value="false"
      onChange={e => setDo_they_sing(e.target.value)}/>
      <label for="false">No</label>
      <br></br>
      <br></br>
       <p>Do they have loud pets ?</p>
      <input type="radio"
      id="true"
      name="boolean_pets"
      value="true"
      onChange={e => setDo_they_have_loud_pets(e.target.value)}/>
      <label for="true">Yes</label>
      <input type="radio"
      id="false"
      name="boolean_pets"
      value="false"
      onChange={e => setDo_they_have_loud_pets(e.target.value)}/>
      <label for="false">No</label>
      <br></br>
      <br></br>
       <p>Do they have loud hobbies ?</p>
      <input type="radio"
      id="true"
      name="boolean_hobbies"
      value="true"
      onChange={e => setDo_they_have_loud_hobbies(e.target.value)}/>
      <label for="true">Yes</label>
      <input type="radio"
      id="false"
      name="boolean_hobbies"
      value="false"
      onChange={e => setDo_they_have_loud_hobbies(e.target.value)}/>
      <label for="false">No</label>
      <br></br>
      <br></br>
      <p>Are the walls thin ? ?</p>
      <input type="radio"
      id="true"
      name="boolean_thin"
      value="true"
      onChange={e => setAre_the_walls_thin(e.target.value)}/>
      <label for="true">Yes</label>
      <input type="radio"
      id="false"
      name="boolean_thin"
      value="false"
      onChange={e => setAre_the_walls_thin(e.target.value)}/>
      <label for="false">No</label>
      <br></br>
      <br></br>
      <p>Is outside quiet ?</p>
      <input type="radio"
      id="true"
      name="boolean_quiet"
      value="true"
      onChange={e => setIs_outside_quiet(e.target.value)}/>
      <label for="true">Yes</label>
      <input type="radio"
      id="false"
      name="boolean_quiet"
      value="false"
      onChange={e => setIs_outside_quiet(e.target.value)}/>
      <label for="false">No</label>
      <br></br>
      <br></br>
      <p>Do they party ?</p>
      <input type="radio"
      id="true"
      name="boolean_party"
      value="true"
      onChange={e => setParty(e.target.value)}/>
      <label for="true">Yes</label>
      <input type="radio"
      id="false"
      name="boolean_party"
      value="false"
      onChange={e => setParty(e.target.value)}/>
      <label for="false">No</label>
      <br></br>
      <br></br>
      <label>
      Addres line 1
       <input 
        type="text"
        name = "setAddress_line1"
        value={address.address_line1}
        onChange={e => setAddress(prev => ({...prev, address_line1: e.target.value}))}/>
      </label>
       <label>
       Addres line 2
       <input 
        type="text"
        name = "setAddress_line2"
        value={address.address_line2}
        onChange={e => setAddress(prev => ({...prev, address_line2: e.target.value}))}/>
      </label>
       <label>
       Property number
       <input 
        type="text"
        name = "property number"
        value={address.property_number}
        onChange={e => setAddress(prev => ({...prev, property_number: e.target.value}))}/>
      </label>
       <label>
       City
       <input 
        type="text"
        name = "city"
        value={address.city}
        onChange={e => setAddress(prev => ({...prev, city: e.target.value}))}/>
      </label>
       <label>
       Post code
       <input 
        type="number"
        name = "post code"
        value={address.postal_code}
        onChange={e => setAddress(prev => ({...prev, postal_code: e.target.value}))}/>
      </label>
      <label>
       Country
       <input 
        type="text"
        name = "country"
        value={address.country}
        onChange={e => setAddress(prev => ({...prev, country: e.target.value}))}/>
      </label>
      <button >Submit</button>
    </form>
  </section>
</div>
);
}
export default App;

