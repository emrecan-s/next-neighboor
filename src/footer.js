import guthubLogo from "./images/GitHub-Mark-32px.png"

function Footer (){
const links= ["alabama",
"alaska",
"arizona",
"arkansas",
"california",
"colorado",
"connecticut",
"delaware",
"florida",
"georgia",
"hawaii",
"idaho",
"illinois",
"indiana",
"iowa",
"kansas",
"kentucky",
"louisiana",
"maine",
"maryland",
"massachusetts",
"michigan",
"minnesota",
"mississippi",
"missouri",
"montana",
"nebraska",
"nevada",
"new-hampshire",
"new-jersey",
"new-mexico",
"new-york",
"north-carolina",
"north-dakota",
"ohio",
"oklahoma",
"oregon",
"pennsylvania",
"rhode-island",
"south-carolina",
"south-dakota",
"tennessee",
"texas",
"utah",
"vermont",
"virginia",
"washington",
"west-virginia",
"wisconsin",
"wyoming"]

const footerLinks= links.map((link,id)=> 
<ul key={id}><a key={id} href={link}>{link}</a></ul>
)
const footLinks = new Array(Math.ceil(footerLinks.length / 3))
  .fill()
  .map(_ => footerLinks.splice(0, 15))

return(
<footer className="footer">
  <div className="content has-text-centered">
    <p>
      <strong>NexNeighbour </strong> is a open source property noise directory & listing site<a href="https://github.com/emrecan-s/next-neighboor"><img src= {guthubLogo}/></a>. The source code is licensed
      <a href="http://opensource.org/licenses/mit-license.php"> MIT</a>. The website content
      is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
    </p>
  <hr/>
    <p><strong>Find quiet apartments in  </strong></p>

 

  
  <div className="columns">
  <div className="column is-3">
  {footLinks[0]}
  </div>
  <div className="column is-3">
  {footLinks[1]}
  </div>
  <div className="column is-3">
  {footLinks[2]}
  </div>
  <div className="column is-3">
  {footLinks[3]}
  </div>

  </div>
  </div>
</footer>
	)
	}
	export default Footer