import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import instance from "../axios";

const ProductDetail = () => {
  // useParams của react router dom sẽ lấy id của đường dẫn
  const { id } = useParams();
  console.log(id);
  const [products, setProducts] = useState({});

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
        const { data } = await instance.get(`/products/${id}`);
        console.log(data);
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <div>
      <h1>Chi tiết sản phẩm</h1>
      <p>{products.title}</p>
    </div>
  );
};

export default ProductDetail;
