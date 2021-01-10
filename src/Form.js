import React, { useEffect, useState } from "react";
import logo from './logo.png';
import './App.scss';
import axios from 'axios';
import Autocomplete from 'react-google-autocomplete';


function Form() {
const [listing_url,setListingurl] = useState()
const [property_type,setProperty_type] = useState('house')
const [nickname,setNickname] = useState()
const [summary,setSummary] = useState()
const [interaction,setInteraction] = useState()
const [noise_level,setNoise_level] = useState(0)
const [loud_tv_video,setLoud_tv_video] = useState()
const [heavy_walkers,setHeavy_walkers] = useState()
const [do_they_play_an_instrument,setDo_they_play_an_instrument] = useState()
const [do_they_sing,setDo_they_sing] = useState()
const [do_they_have_loud_pets,setDo_they_have_loud_pets] = useState()
const [do_they_have_loud_hobbies,setDo_they_have_loud_hobbies] = useState()
const [are_the_walls_thin,setAre_the_walls_thin] = useState()
const [is_outside_quiet,setIs_outside_quiet] = useState()
const [party,setParty] = useState()
const [address,setAddress] = useState({"address_line1":"","city":"","postal_code":"","country":"","property_number":""})
const [date,setDate] = useState(Date.now())





function findPlace(place,value){
  console.log(place)
for(var i = 0; i != place.address_components.length ; i++){
  console.log(place.address_components[i].long_name)
  if ((place.address_components[i].types[0] === 'postal_code') && value ==='postal_code'){
    return place.address_components[i].long_name
}
   if ((place.address_components[i].types[0] === 'country') && value === 'country'){
    return place.address_components[i].long_name
  }
   if ((place.address_components[i].types[0] === 'administrative_area_level_1') && value === 'city'){
    return place.address_components[i].long_name
  }
}
}




const handleSubmit = event => {
  alert("form submitted")

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
console.log(formData)
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

window.handleSubmit = handleSubmit;

return (
 <div className="column is-one-fifth">

    <form  id="demo-form" onSubmit={handleSubmit}>
    <label>Adress</label>
     <Autocomplete
      className ="input wider"
      type="text"
      apiKey={'AIzaSyDErmb8AJybt43aG5yfj0gHljCDtyRW-vM'}
      onPlaceSelected={place => setAddress(prev => ({...prev, address_line1: place.formatted_address ,postal_code: findPlace(place,'postal_code'),country:findPlace(place,'country'),city:findPlace(place,'city')}))}
      onChange= {console.log(address)}
      types={['address']}
    />
      <br></br>
        <br></br>
       <label>
       Property number
       <input
        className ="input" 
        type="text"
        name = "property number"
        placeholder="Flat or house number"
        value={address.property_number}
        onChange={e => setAddress(prev => ({...prev, property_number: e.target.value}))}/>
      </label>
        <br></br>
          <br></br>
       <label>
       City / Region
       <input 
       className ="input"
        type="text"
        name = "city"
        placeholder="this will be automatically filled"
        readOnly value={address.city}
       />
      </label>
        <br></br>
          <br></br>
       <label>
       Post code
       <input 
       className ="input"
        type="text"
        name = "post code"
        placeholder="this will be automatically filled"
        readOnly value={ (typeof address.postal_code === "undefined") ? 0 : address.postal_code }
     />
      </label>
        <br></br>
          <br></br>
      <label>
       Country
       <input 
       className ="input"
        type="text"
        name = "country"
        placeholder="this will be automatically filled"
        readOnly value={address.country}
        />
      </label>
      <br></br>
      <br></br>
      <label >
        Select Property Type
        <select 
        className ="input"
        onChange={e => setProperty_type(e.target.value)}>
          <option value="house">House</option>
          <option value="flat">Flat</option>
        </select>
      </label>
      <br></br>
      <br></br>
      <label>
        Nickname
        <input type="text"
        className ="input "
        name ="nickname"
        type="text"
        placeholder="We appreciate anonymity"
        value={nickname}
        onChange={e => setNickname(e.target.value)}/>
      </label>
      <br></br>
      <br></br>
      <label>
        Summary
        <textarea
        className ="textarea wider"
        name ="summary"
        type="text"
        value={summary}
        onChange={e => setSummary(e.target.value)}/>
      </label>
      <br></br>
      <br></br>
      <label className="wider">
        Interaction with the neighbours
        <input 
        className ="input wider"
        type="text"
        name ="interaction"
        type="text"
        value={interaction}
        onChange={e => setInteraction(e.target.value)}/>
      </label>
      <br></br>
      <br></br>
      <label>
        Overall Noise level <br></br>
        <input
        type="text"
        name ="interaction"
        type="range"
        min="0"
        max="10"
        value={noise_level}
        onChange={e => setNoise_level(e.target.value)}/>
      </label>
      <br></br>
      <br></br>
      <label className="radio">Loud tv or video games ?</label>
      <br></br>
      <input 
      className="radio"
      type="radio"
      id="video"
      name="boolean_video"
      value="true"
      onChange={e => setLoud_tv_video(e.target.value)}/>
      <label  className="radio" htmlFor="true">Yes</label>
      <input 
      className="radio"
      type="radio"
      id="false"
      name="boolean_video"
      value="false"
      onChange={e => setLoud_tv_video(e.target.value)}/>
      <label  className="radio" htmlFor="false">No</label>
      <br></br>
      <br></br>
      <p className="radio">Any heavy walkers ?</p>
      <br></br>
      <input 
      className="radio"
      type="radio"
      id="true"
      name="boolean_walkers"
      value="true"
      onChange={e => setHeavy_walkers(e.target.value)}/>
      <label className="radio" htmlFor="true">Yes</label>
      <input
      className="radio"
      type="radio"
      id="false"
      name="boolean_walkers"
      value="false"
      onChange={e => setHeavy_walkers(e.target.value)}/>
      <label className="radio" htmlFor="false">No</label>
      <br></br>
      <br></br>
       <p className="radio">Do they play an instrument ?</p>
       <br></br>
      <input
      className="radio"
      type="radio"
      id="true"
      name="boolean_instrument"
      value="true"
      onChange={e => setDo_they_play_an_instrument(e.target.value)}/>
      <label className="radio" htmlFor="true">Yes</label>
      <input
      className="radio"
      type="radio"
      id="false"
      name="boolean_instrument"
      value="false"
      onChange={e => setDo_they_play_an_instrument(e.target.value)}/>
      <label className="radio" htmlFor="false">No</label>
      <br></br>
      <br></br>
       <p className="radio">Do they sing loud ?</p>
       <br></br>
      <input 
      className="radio"
      type="radio"
      id="true"
      name="boolean_sing"
      value="true"
      onChange={e => setDo_they_sing(e.target.value)}/>
      <label className="radio" htmlFor="true">Yes</label>
      <input 
      className="radio" 
      type="radio"
      id="false"
      name="boolean_sing"
      value="false"
      onChange={e => setDo_they_sing(e.target.value)}/>
      <label className="radio" htmlFor="false">No</label>
      <br></br>
      <br></br>
       <p className="radio"> Do they have loud pets ?</p>
       <br></br>
      <input 
      className="radio"
      type="radio"
      id="true"
      name="boolean_pets"
      value="true"
      onChange={e => setDo_they_have_loud_pets(e.target.value)}/>
      <label className="radio" htmlFor="true">Yes</label>
      <input
      className="radio"
      type="radio"
      id="false"
      name="boolean_pets"
      value="false"
      onChange={e => setDo_they_have_loud_pets(e.target.value)}/>
      <label className="radio" className="radio" htmlFor="false">No</label>
      <br></br>
      <br></br>
       <p className="radio"> Do they have loud hobbies ?</p>
       <br></br>
      <input 
      className="radio"
      type="radio"
      id="true"
      name="boolean_hobbies"
      value="true"
      onChange={e => setDo_they_have_loud_hobbies(e.target.value)}/>
      <label className="radio" htmlFor="true">Yes</label>
      <input 
      className="radio"
      type="radio"
      id="false"
      name="boolean_hobbies"
      value="false"
      onChange={e => setDo_they_have_loud_hobbies(e.target.value)}/>
      <label className="radio" htmlFor="false">No</label>
      <br></br>
      <br></br>
      <p className="radio">Are the walls thin ?</p>
      <br></br>
      <input
      className="radio"
      type="radio"
      id="true"
      name="boolean_thin"
      value="true"
      onChange={e => setAre_the_walls_thin(e.target.value)}/>
      <label className="radio" htmlFor="true">Yes</label>
      <input className="radio" type="radio"
      id="false"
      name="boolean_thin"
      value="false"
      onChange={e => setAre_the_walls_thin(e.target.value)}/>
      <label className="radio" htmlFor="false">No</label>
      <br></br>
      <br></br>
      <p className="radio">Is outside quiet ?</p>
      <br></br>
      <input 
      className="radio"
      type="radio"
      id="true"
      name="boolean_quiet"
      value="true"
      onChange={e => setIs_outside_quiet(e.target.value)}/>
      <label className="radio" htmlFor="true">Yes</label>
      <input 
      className="radio"
      type="radio"
      id="false"
      name="boolean_quiet"
      value="false"
      onChange={e => setIs_outside_quiet(e.target.value)}/>
      <label className="radio" htmlFor="false">No</label>
      <br></br>
      <br></br>
      <p className="radio">Do they party ?</p>
      <br></br>
      <input
      className="radio"
      type="radio"
      id="true"
      name="boolean_party"
      value="true"
      onChange={e => setParty(e.target.value)}/>
      <label  className="radio" htmlFor="true">Yes</label>
      <input  
      className="radio" 
      type="radio"
      id="false"
      name="boolean_party"
      value="false"
      onChange={e => setParty(e.target.value)}/>
      <label className="radio" htmlFor="false">No</label>
      <br></br>
      <br></br>
        <button className="g-recaptcha button" 
        data-sitekey="6LcMryYaAAAAAP5GfsGCOOV-7_URHEoLtssZBJwA" 
        data-callback='handleSubmit'
        data-action='submit'>Submit</button>
      <br></br>
      <br></br>
    </form>
    </div>

);
}
export default Form;

