import { ShoppingCart } from 'lucide-react';
import { useEffect, useState } from 'react';
import {useDispatch} from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';

interface Product {
    id: string;
    title: string;
    thumbnail: string;
    price: number;
}

const Products: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]); 
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://dummyjson.com/products');
                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }
                const data = await response.json();
                setProducts(data.products);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <section>
            <h1 className='text-2xl'>Products</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 justify-between items-center'>
                {products.map((product) => (
                    <div key={product.id} className='flex justify-center items-start flex-col bg-gray-100 p-5 rounded-md'>
                        <div className='flex items-center justify-center'>
                            <img src={product.thumbnail} alt={product.title} height={100} width={100} />
                        </div>
                        <div>
                            <h2 className='text-xl'>{product.title}</h2>
                        </div>
                        <div>
                            <p className='text-xl'>${product.price}</p>
                        </div>
                        <div>
                            <button className='flex justify-between gap-2 bg-blue-500 text-white p-2 rounded-md'
                            onClick={() => dispatch(addToCart(product))}
                            >
                                <ShoppingCart />
                                Add To Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Products;
