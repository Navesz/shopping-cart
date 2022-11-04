import { CartState } from "../context/Context";
import { SingleProduct } from "./SingleProduct";
import { Filters } from './Filters'
import { CardGroup } from 'react-bootstrap'

export default function Home() {
  const {
    state: { products },
  } = CartState();
  // console.log(products)

  return (
    <div className="home">
      <Filters />

      <CardGroup className="productContainer">
        {products.map((product) => {
          return <SingleProduct product={product} key={product.id} />;
        })}
      </CardGroup>
    </div>
  );
}
