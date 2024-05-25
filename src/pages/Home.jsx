import { Link } from "react-router-dom";
export default function Home({ data, isPublic }) {
  return (
    <div className="bg-gray-100 row">
      {/* Nếu isPublic && là kiểm tra điều kiện đúng
      Nếu nó có giá trị thì mới map mảng data
      */}
      {isPublic &&
        data.map((product) => (
          <div
            className="col col-sm-6 col-md-4 col-lg-3 products "
            key={product.id}
          >
            <h2>{product.title}</h2>
            <h2>{product.price}</h2>
            <Link to={`/product-detail/${product.id}`}>
              <img src={product.thumbnail} alt="" />
            </Link>
            <button className="btn btn-primary">Add to cart</button>
          </div>
        ))}
    </div>
  );
}
