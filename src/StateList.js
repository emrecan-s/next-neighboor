//Create state template
import { link } from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Redirect, useParams } from "react-router-dom";
import Feedback from "./Feedback";
import Helmet from "react-helmet";

function StateList(props) {
  //Get the current Path
  const { state, city } = useParams();
 

  const [usStates, setUsStates] = useState();
  const [id, setId] = useState();
  const [loading, setLoading] = useState(true);
  const [cleanUrl, setCleanUrl] = useState();

  //State data returns
  useEffect(() => {

    const fetchData = async () => {
      const query = `/${state}${city ? `/${city}` : ""}`;

      await axios.get("/get-places/state/full",{params: {
        validateQuery: query
      }}).then((response) => {
        setUsStates(response.data);
        setLoading(false);
        setCleanUrl(query.toLowerCase());
      });
    };

    fetchData();
  }, [id]);


  if (loading) {
    return <div className="App">Loading...</div>;
  }

  if (!loading && !usStates.length) return <Redirect push to="/404" />;

  const cleanState=state.charAt(0).toUpperCase() + state.slice(1).replace(/-/g, " ")
  const cleanCity= city ? `${city.charAt(0).toUpperCase() + city.slice(1).replace(/-/g, " ")}` : ""

  const title = `Quiet Houses & Apartments in ${cleanState} ${cleanCity}`;
  const description = `No more noise complaint! Get to know your future neighbors in ${cleanState} ${cleanCity}. Leave a anonymous review to help others.`;
  const host = "https://nextneighbour.com/";

  return (
    <div className="m-3">
    <div className="container is-max-desktop  ">
        <Helmet>
          <html lang="en" />
          <meta charSet="utf-8" />
          <title>{title}</title>
          <meta name="description" content={description} />
          <link rel="canonical" href={host + cleanUrl} />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@nextNeighbour" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          <meta name="description" content={description} />
          <meta property="og:title" content={title} />
          <meta property="og:url" content={host + cleanUrl} />
          <meta property="og:description" content={description} />
        </Helmet>
        <h1>
          Best Place to find quiet places in {cleanState} {cleanCity}
        </h1>
        <p>&nbsp;</p>
        <p>
          Unless you live in remote rural place, neighbors are part of your life
          in busy city life. Most common issue between the neighbors is noise
          complaint. As there are some legal actions you can take, most of the
          time they are not enough to end the dispute.
        </p>
        <p>&nbsp;</p>
        <p>
          Nextneighbour aims to help people to get to know their neighbors
          before they rent or buy their properties
        </p>
        <p>Please use the adress bar below to find your quiet place in {" "}
        {cleanState} {cleanCity} </p>
        <Feedback state={cleanState} />
      </div>
    </div>
  );
}

export default StateList;
