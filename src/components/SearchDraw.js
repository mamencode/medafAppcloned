import React, { useState } from "react";

import { fade, AppBar, makeStyles, Toolbar, Grid } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import InputBase from "@material-ui/core/InputBase";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import { fetchProducts } from "../axios";
import Product from "./Product";
import ProductCard from "./ProductCard";

const useStyles = makeStyles((theme) => ({
  headerSearch: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    borderRadius: "24px",
    padding: "0 10px 0 10px"
  },
  headerSearchInput: {
    height: "12px",
    padding: "10px",
    border: "1px solid gray",
    width: "100%"
  },
  headerSearchIcon: {
    padding: "5px",
    height: "22px !important",
    backgroundColor: "#cd9042"
  }
}));
function SearchDraw() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const handleToggle = () => {
    setOpen(true);
  };
  const handleToggleClose = () => {
    setOpen(false);
  };
  const search = async (e) => {
    if (e.key === "Enter") {
      setIsLoading(true);
      const data = await fetchProducts(query);
      console.log(data);
      setIsLoading(false);
      setProducts(data);
      handleToggle();
      setQuery("");
    }
  };
  const list = (
    <div onClick={handleToggleClose} onKeyDown={handleToggleClose}>
      <Grid
        spacing={2}
        container
        justify="center"
        alignItems="center"
        direction="row"
      >
        {products.map((product) => (
          <ProductCard
            key={product._id}
            modelName={product.modelName}
            id={product._id}
            image={product.image}
          />
        ))}
      </Grid>
      {/* <List style={{ display: "flex" }}>
        {products.map((product) => (
          <ListItem key={product._id}>
            <Product
              modelName={product.ModelName}
              id={product._id}
              image={product.image}
            />
          </ListItem>
        ))}
      </List> */}
    </div>
  );
  return (
    <div className={classes.grow}>
      <div className={classes.headerSearch}>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={search}
          className={classes.headerSearchInput}
          type="text"
        />
        <SearchIcon className={classes.headerSearchIcon} />
      </div>
      {isLoading ? (
        <div>
          <center>
            <CircularProgress />
          </center>
        </div>
      ) : (
        <SwipeableDrawer
          anchor="top"
          open={open}
          onClose={handleToggleClose}
          onOpen={handleToggle}
        >
          {list}
        </SwipeableDrawer>
      )}
    </div>
  );
}

export default SearchDraw;
