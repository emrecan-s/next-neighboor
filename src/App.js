import React, { useEffect, useState } from "react";
import logo from './logo.svg';
import './App.scss';
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
const [address,setAddress] = useState()
const [date,setDate] = useState()

const handleSubmit = event => {
alert(loud_tv_video)
event.preventDefault()
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
      id="true"
      name="boolean"
      value="true"
      onChange={e => setLoud_tv_video(e.target.value)}/>
      <label for="true">Yes</label>
      <input type="radio"
      id="false"
      name="boolean"
      value="false"
      onChange={e => setLoud_tv_video(e.target.value)}/>
      <label for="false">No</label>
      <br></br>
      <br></br>
      <button >Submit</button>
    </form>
  </section>
</div>
);
}
export default App;