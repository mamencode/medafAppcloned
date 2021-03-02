import { makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import DesignCate from "../components/DesignCate"
import Axios from "../axios";

const useStyles = makeStyles((theme) => ({}));

function DesignCateScreen() {
const [designs, setDesigns] = useState([])
const [isLoading, setIsLoading] = useState(false);

useEffect(()=> {
const fetchDesigns = async () => {
setIsLoading(true);
const result = await Axios.get("/designs/listdesigns")
setDesigns(result.data)
console.log(result.data)
setIsLoading(false)
}
fetchDesigns()
}, [])
  const classes = useStyles();
  return (
    <div>
      {designs.map((design) => (
       <DesignCate key={design.category}
category={design.category}
image={design.imageSrc}
/>
      ))}
    </div>
  );
}

export default DesignCateScreen;
