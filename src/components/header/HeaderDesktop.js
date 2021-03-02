import { makeStyles, Badge, AppBar, Grid, Toolbar } from "@material-ui/core";
import React, { useState } from "react";
import "./Header.css";
import { signout } from "../../actions/userActions";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import { useDispatch, useSelector } from "react-redux";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import FavoriteIcon from "@material-ui/icons/Favorite";
import AdminDraw from "./AdminDraw";
import SearchDraw from "../SearchDraw";

import { fetchProducts } from "../../axios";
import Product from "../Product";
const useStyles = makeStyles((theme) => ({
  appbar: {
    background: "#fafafa"
  },
  header: {
    height: "60px",
    display: "flex",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    // justifyContent: "space-evenly",
    position: "sticky",
    top: 0,
    zIndex: 100
  },
  headerLogo: {
    width: 100,
    objectFit: "contain"
  },
  headerOption: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "10px",
    marginRight: "10px",
    color: "black"
  },
  headerSearch: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    borderRadius: "24px"
  },
  headerSearchInput: {
    height: "12px",
    padding: "10px",
    borderRadius: "15px",
    border: "1px solid lightgray",
    width: "100%"
  },
  headerSearchIcon: {
    padding: "5px",
    height: "22px !important",
    alignSelf: "flex-end",
    backgroundColor: "black",
    borderRadius: "15px"
  },
  headerNav: {
    display: "flex",
    justifyContent: "space-evenly"
  },
  headerbasketCount: {
    marginLeft: "10px",
    marginRight: "10px"
  },
  headeroptionBasket: {
    display: "flex",
    alignItems: "center",
    color: "black"
  },
  headeroptionLineOne: {
    fontSize: "10px"
  },
  headeroptionLineTwo: {
    fontSize: "13px",
    fontWeight: "800"
  },
  tools: {
    ...theme.mixins.toolbar
  }
}));
function HeaderDesktop() {
  const classes = useStyles();
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [open, setOpen] = useState(false);
  const cart = useSelector((state) => state.cart);
  const wishList = useSelector((state) => state.wishList);
  const { wishItems } = wishList;
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };
  const handleToggle = () => {
    setOpen(true);
  };
  const handleToggleClose = () => {
    setOpen(false);
  };
  const search = async (e) => {
    if (e.key === "Enter") {
      const data = await fetchProducts(query);
      console.log(data);
      setProducts(data);
      handleToggle();
      setQuery("");
    }
  };
  return (
    <AppBar position="absolute" className={classes.appbar}>
      <Toolbar className={classes.tools}>
        <Grid
          spacing={2}
          container
          justify="space-between"
          alignItems="center"
          direction="row"
        >
          <Grid item xs={2}>
            <Link to="/">
              <img
                className={classes.headerLogo}
                src="https://i.imgur.com/hFCkV18.png"
                alt="logo"
              />
            </Link>
          </Grid>
          <Grid item xs={5}>
            <SearchDraw />
          </Grid>
          <Grid item xs>
            <div className={classes.headerNav}>
              <Link to={!userInfo && "/signin"}>
                <div onClick={signoutHandler} className={classes.headerOption}>
                  <span className={classes.headeroptionLineOne}>
                    Hello {!userInfo ? "Guest" : userInfo.name}
                  </span>
                  <span className={classes.headeroptionLineTwo}>
                    {userInfo ? "Sign Out" : "Sign In"}
                  </span>
                </div>
              </Link>
              <Link to={userInfo ? "/orderhistory" : "/signin"}>
                <div className={classes.headerOption}>
                  <span className={classes.headeroptionLineOne}>Returns</span>
                  <span className={classes.headeroptionLineTwo}>& Orders</span>
                </div>
              </Link>

              <div className={classes.headerOption}>
                {userInfo && userInfo.isAdmin ? <AdminDraw /> : ""}
              </div>

              <Link to="">
                <div className={classes.headeroptionBasket}>
                  <Badge
                    style={{ paddingRight: "3px" }}
                    color="secondary"
                    badgeContent={cartItems?.length}
                    anchorOrigin={{ vertical: "top", horizontal: "right" }}
                  >
                    <ShoppingBasketIcon />
                  </Badge>
                </div>
              </Link>
            </div>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default HeaderDesktop;
