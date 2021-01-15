import guthubLogo from "./images/GitHub-Mark-32px.png"

function Footer (){
return(
<footer className="footer">
  <div className="content has-text-centered">
    <p>
      <strong>NexNeighbour </strong> is a open source property noise directory & listing site<a href="https://github.com/emrecan-s/next-neighboor"><img src= {guthubLogo}/></a>. The source code is licensed
      <a href="http://opensource.org/licenses/mit-license.php"> MIT</a>. The website content
      is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
    </p>
  </div>
</footer>
	)
	}
	export default Footer