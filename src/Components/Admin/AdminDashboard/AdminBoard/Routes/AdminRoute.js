import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Blog from "../BoardComp/Blog/Blog";
import BoardDetailBlog from "../BoardComp/Blog/BoardDetailBlog";
import CreateBlog from "../BoardComp/Blog/CreateBlog";
import UpdateBlog from "../BoardComp/Blog/UpdateBlog";
import Customers from "../BoardComp/Customers/Customers";
import OrderDetail from "../BoardComp/Orders/OrderDetail";
import Orders from "../BoardComp/Orders/Orders";
import Overview from "../BoardComp/Overview/Overview";
import BoardProductDes from "../BoardComp/Products/BoardProductDes";
import Products from "../BoardComp/Products/Products";
import UpdateProduct from "../BoardComp/Products/UpdateProduct";
import ProductUpload from "../BoardComp/ProductsUpload/ProductUpload";
import NewStoreModal from "../BoardComp/Stocklist/NewStoreModal";
import Stocklist from "../BoardComp/Stocklist/Stocklist";
import UpdateStocklist from "../BoardComp/Stocklist/UpdateStocklist";
import Board from "../BoardHold/Board";

const AdminRoute = () => {
  const admin = useSelector((state) => state.currentAdmin);
  return (
    <>
      {admin?.isAdmin === true ? (
        <Container>
          <Board />
          <Routes>
            <Route path="/overview" element={<Overview />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/uploadproducts" element={<ProductUpload />} />
            <Route path="/boardproducts" element={<Products />} />
            <Route
              path="/boardproducts/update/:id"
              element={<UpdateProduct />}
            />
            <Route
              path="/boardproducts/detail/:id"
              element={<BoardProductDes />}
            />
            <Route path="/orders" element={<Orders />} />
            <Route path="/orders/orderdetail/:id" element={<OrderDetail />} />
            <Route path="/boardblogs" element={<Blog />} />
            <Route path="/boardblogs/newblog" element={<CreateBlog />} />
            <Route path="/boardblogs/updateblog/:id" element={<UpdateBlog />} />
            <Route
              path="/boardblogs/detail/:id"
              element={<BoardDetailBlog />}
            />
            <Route path="/boardstocklist" element={<Stocklist />} />
            <Route
              path="/boardstocklist/update/:id"
              element={<UpdateStocklist />}
            />
            <Route
              path="/boardstocklist/newstore"
              element={<NewStoreModal />}
            />
          </Routes>
        </Container>
      ) : null}
    </>
  );
};

export default AdminRoute;

const Container = styled.div`
  display: flex;
`;
