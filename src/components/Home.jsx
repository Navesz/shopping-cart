import { CartState } from "../context/Context";
import { SingleProduct } from "./SingleProduct";
import { Filters } from "./Filters";
import { Row } from "react-bootstrap";

export default function Home() {
  const {
    state: { products },
  } = CartState();
  // console.log(products)

  return (
    <div className="home">
      <Filters />

      <Row className="productContainer">
        {products.map((product) => {
          return <SingleProduct product={product} key={product.id} />;
        })}
      </Row>
    </div>
  );
}
