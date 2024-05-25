import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";
import { useEffect, useState } from "react";
import Dashboard from "./pages/admin/Dashboard";
// import instance from "./axios";
import instance from "./axios/index";
import ProductDetail from "./pages/ProductDetail";

function App() {
  const [products, setProducts] = useState([]);
  const [show, setShow] = useState(false);
  // //! Cách 1
  // useEffect(() => {
  //   fetch("http://localhost:3000/products")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setProducts(data);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  function handleShow() {
    setShow(!show);
  }

  //! Cách 2

  useEffect(() => {
    // async function fetchData() {
    //   try {
    //     const { data } = await instance.get("/products");
    //     console.log(data);
    //     setProducts(data);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }
    // fetchData();
    // Rút gọn bằng cú pháp iife là 1 function được thực hiện ngay khi khai báo
    (async () => {
      try {
        const { data } = await instance.get("/products");
        console.log(data);
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div>
      <Header />
      <main className="container">
        <button onClick={handleShow} className="btn btn-warning">
          {show ? "hidden" : "Show"}
        </button>
        <Routes>
          <Route
            path="/"
            element={<Home isPublic={show} data={products} />}
          ></Route>
          <Route path="/home" element={<Navigate to="/" />}></Route>
          <Route path="/product-detail/:id" element={<ProductDetail />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/admin" element={<Dashboard data={products} />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
