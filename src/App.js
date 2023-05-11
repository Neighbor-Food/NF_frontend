import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Js/Home/Home.js";
import Make from "./Js/Meeting/Make.js";
import Board from "./Js/Meeting/Board.js";
import Check from "./Js/Restaurant/Check.js";
import NotFound from "./Js/NotFound/NotFound.js";
import MenuView from "./Js/Shoppingbasket/MenuView";
import MenuDetail from "./Js/Shoppingbasket/MenuDetail";
import BasketViewHost from "./Js/Shoppingbasket/BascketViewHost";
import BasketView from "./Js/Shoppingbasket/BasketView";
import MyPosts from "./Js/Meeting/MyPosts";
import Login from "./Js/Member/Login";
import SignUp from "./Js/Member/SignUp";
import MyPage from "./Js/Member/MyPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/make" element={<Make />}></Route>
        <Route path="/check" element={<Check />}></Route>
        <Route path="/board" element={<Board />}></Route>
        <Route path="*" element={<NotFound />}></Route>

        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/myposts" element={<MyPosts />} />

        <Route path="/menuview" element={<MenuView />} />
        <Route path="/menudetail/:resname/:foodname" element={<MenuDetail />} />
        <Route path="/basketviewhost" element={<BasketViewHost />} />
        <Route path="/basketview" element={<BasketView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
