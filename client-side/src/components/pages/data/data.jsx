import { connect } from "react-redux";
import "./data.scss";
import { getName } from "../../../state/selectors";
import { useEffect, useState } from "react";
import axios from "axios";

const mapStateToProps = (state) => ({
  name: getName(state)
});
  
const Data = ({name}) => {

  const [allRoutes, setAllRoutes] = useState({});

  const getRoutes = () => {
    axios.get('/api')
      .then(result => {
        console.log(result.data);
        const endpoints = Object.entries(result.data.data.endpoints);
        const mapped = endpoints.map((items) => items[1].join(" | "));
        setAllRoutes(mapped);
      })
      .catch(err => {
        console.log("Unable to show routes");
      });
  };

  const listRoutes = (routesObj) => {
    return Object.entries(routesObj).map(items => items.join("| ")).join("\n");
  };

  useEffect(() => {
    getRoutes();
  }, []);


  return(
    <>
    <section>
        <div>Welcome {name}!</div>
      <div id="title">Available Routes</div>
      <div id="routes-container">
        <div id="routes-wrapper">
          {allRoutes ? allRoutes : "No routes"}
        </div>
      </div>
    </section>
    </>
  );
}
export default connect(
    mapStateToProps
)(Data);
