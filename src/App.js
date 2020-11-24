import logo from './logo.svg';
import './App.scss';
function App() {
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
      <button>I want to help</button><button>Find a quiet place for me</button>
    </div>
    <form>
      <label>
        Property Type
        <select >
          <option value="grapefruit">House</option>
          <option value="lime">Flat</option>
        </select>
      </label>
        <label>
        Nickname
        <input type="text"
        name ="Reviewer namee"
       placeHolder="Gambit"
/>     
  </label>

     <label>
        Nickname
        <input type="text"
        name ="Reviewer namee"
       placeHolder="Gambit"
/>     
  </label>

 <button>Submit</button>
    </form>
  </section>
</div>
);
}
export default App;