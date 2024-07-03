import { useSelector, useDispatch } from 'react-redux';
import { decreaseQuantity, deleteFromCart, increaseQuantity } from '../features/cart/cartSlice';

const Cart = () => {
    const items = useSelector((state: any) => state.cart.items);
    const dispatch = useDispatch();

    return (
        <div>
            <h1 className='subhead-text'>Cart</h1>
            {/* Product Card Holder */}
            <div className="flex justify-around">
                <div className='flex flex-col justify-between items-center gap-5'>
                    {/* Product Cards */}
                    {items.map((item: any, index: number) => (
                        <div key={index} className='flex justify-between items-center gap-10 bg-slate-200 px-10 py-10 rounded-md'>
                            <div>
                                <img src={item.thumbnail} alt={item.title} height={100} width={100} />
                            </div>
                            <div>
                                <p>{item.title}</p>
                                <p>${item.price * item.quantity}</p>
                            </div>
                            <div className='flex flex-col gap-5'>
                                <div className='flex justify-between items-center gap-2'>
                                    <button className='bg-red-500 rounded-md px-2 text-white' onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
                                    <p>{item.quantity}</p>
                                    <button className='bg-green-500 rounded-md px-2 text-white' onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
                                </div>
                                <button className='bg-red-600 rounded-md px-3 text-white' onClick={() => dispatch(deleteFromCart(item.id))}>Delete</button>
                            </div>
                        </div>
                    ))}
                </div>
                <div>
                    <h1 className="subheadtext">
                        Total: ${items.reduce((total: number, item: any) => total + item.price * item.quantity, 0)}
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Cart;
