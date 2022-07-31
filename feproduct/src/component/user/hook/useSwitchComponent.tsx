import React from 'react'
import InForUserChange from "../InforUser/InForUserChange/InForUserChange";
import InForUserChangePassword from "../InforUser/InForUserChangePassword/InForUserChangePassword";
import ListProductBouth from "../InforUser/ListProductBougth/ListProductBouth";
import Login from "../login/login";
import Forgot from "../../../component/user/Forgot/ForgotPassword";
import Register from "../register/Register";
import TopProduct from "../../../component/user/TopProduct/TopProduct";
import ProductDetail from "../../../component/user/ProductDetail/ProductDetail";
import Cart from "../../../component/user/ProductBought/ProductBought";
import NewsDetail from "../../../component/user/NewsDetail/NewsDetail";

export default function useSwitchComponent(id: string | undefined) {
    const renderSwitch = () => {
        switch(id) {
            case 'inforperson':
                return  <InForUserChange />;
            case 'list':
                  return  <ListProductBouth />;
            case 'changepassword':
                return  <InForUserChangePassword />;
            case 'account':
              return  <Login />;
            case 'forgot':
              return  <Forgot />;
            case 'register':
              return  <Register />;
            case 'topproduct':
              return  <TopProduct />;
            case 'productdetail':
              return  <ProductDetail />;
            case 'cart':
              return  <Cart />;
            case 'newsdetail':
                return  <NewsDetail />;
        }
      }
    return { renderSwitch }
}