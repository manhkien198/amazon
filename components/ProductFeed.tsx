import { ProductProps } from '../models/index';
import Product from './Product';
function ProductFeed({products}:{products:ProductProps[]}) {
  return <div className='grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto'>
    {products.map(({id,title,price,description,category,image,rating}:ProductProps)=><Product key={id} id={id} title={title} description={description} price={price} category={category} image={image} rating={rating}/>)}
  </div>;
}

export default ProductFeed;
