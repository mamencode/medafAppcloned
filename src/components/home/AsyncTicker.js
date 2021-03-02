import { List, ListItem, makeStyles } from "@material-ui/core";
import React, {useState, useEffect} from "react"
import Axios from "../../axios"
import Ticker from "react-ticker";



const GetItemsFromAPI = ()=> {
const [items, setItems] = useState("")

useEffect(()=> {
async function fetchData() {
const result = await Axios.get("/products/listticker");
setItems(result.data)
console.log(result.data)
}
fetchData()
}, []);

return items ? (
<div style={{display: "flex"}}>
{items.map((item)=> (
<img style={{ whiteSpace: "nowrap", maxHeight: "200px", objectFit: "contain" }} key={item.id} src={item.image} alt=""/>
))}
  </div>
) : (
<p style={{ visibility: "hidden" }}>Placeholder</p>
)


}


function AsyncTicker(){
  return(
    <Ticker  offset="run-in" speed={5}>
{()=> <GetItemsFromAPI/>}
      </Ticker>
  )
}

export default AsyncTicker