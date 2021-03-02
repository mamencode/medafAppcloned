import { Grid, fade, makeStyles, CircularProgress } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import Axios from "../axios";
import Design from "../components/Design";

function DesignScreenTwo() {
  const [designs, setDesigns] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  //   const myParam = location.name;
  // console.log("this is", myParam)
  useEffect(() => {
    const category = location.name;
    const fetchDesigns = async () => {
      setIsLoading(true);
      const result = await Axios.post("/designs/category", { category });
      setDesigns(result.data);
      setIsLoading(false);
    };
    fetchDesigns();
  }, []);
  return (
    <div>
      {isLoading ? (
        <div>
          {" "}
          <center>
            {" "}
            <CircularProgress />{" "}
          </center>{" "}
        </div>
      ) : (
        <>
          <Grid style={{ justifyContent: "center" }} container spacing={2}>
            {designs.map((design) => (
              <Design
                key={design._id}
                id={design._id}
                designName={design.designName}
                mockTemplate={design.mockTemplate}
              />
            ))}
          </Grid>
        </>
      )}
    </div>
  );
}

export default DesignScreenTwo;
