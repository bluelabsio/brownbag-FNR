import { connect } from "react-redux";
import "./data.scss";
import { getName } from "../../../state/selectors";
import { useEffect, useState } from "react";
import axios from "axios";

const mapStateToProps = (state) => ({
  name: getName(state)
});
  
const Data = ({name}) => {

  const [allRoutes, setAllRoutes] = useState([]);

  const getRoutes = () => {
    axios.get('/api')
      .then(result => {
        console.log(result.data);
        setAllRoutes(result.data);
      })
      .catch(err => {
        console.log("Unable to show routes");
      });
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
          {allRoutes}
        </div>
      </div>
    </section>
    </>
  );
}
export default connect(
    mapStateToProps
)(Data);
