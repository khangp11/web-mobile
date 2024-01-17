import React from 'react'
import { Link } from "react-router-dom";
import { Food } from './Type';
import { useState, useEffect } from 'react';
import { localStorageService } from './util/localStorageService';



const Cart = () => {
    const [cartList, setCartList] = useState<Food[]>([])

    const handleIncreaseAmount = (cart: any, quanlity: any) => {
        localStorageService({ ...cart }, quanlity + 1)
        console.log({ ...cart })
        getCart()
    }
    const handleDecreaseAmount = (cart: any, quanlity: any, index: number) => {
        if (quanlity > 1) {
            localStorageService(cart, quanlity - 1)
        } else {
            handleDeleteItem(index);
        }
        getCart()
    }
    const handleDeleteItem = (index: number) => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            const user = JSON.parse(storedUser);
            const updatedCart = [...user.cart];
            updatedCart.splice(index, 1);
            const newUser = { ...user, cart: updatedCart };
            localStorage.setItem('user', JSON.stringify(newUser));
            console.log(newUser);
            getCart();
        }
    };

    useEffect(() => {
        const start = () => {
            getCart()
        }
        start()
    }, [])
    const getCart = () => {
        if (localStorage.getItem('user')) {
            const user: any = localStorage.getItem('user')
            const getUser = JSON.parse(user)
            setCartList(getUser.cart)
        }
    }
    console.log('123', cartList);


    return (
        <>
            <header>
                <div>
                    <nav className="flex-no-wrap relative flex w-full justify-between bg-[#FBFBFB] py-2 shadow-black/5 dark:shadow-black/10 lg:flex-wrap lg:justify-start lg:py-4 relative h-20 bg-orange-700 ">
                        <div className="flex w-full flex-wrap px-3 text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-11 h-11">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                            <p className='flex-1 text-xl mt-2 ml-1'>Order</p>
                            <div className="relative flex mt-2">
                                <Link to={'/'}>Close</Link>
                            </div>
                        </div>
                        <div className='shadow-2xl rounded-lg w-11/12 absolute mt-12 ml-4 bg-white h-16'>
                            <div className="flex">
                                <div className="ml-3 mt-2.5">
                                    <img className="h-10 w-10 object-cover rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWsZf1qQn0a-KnkZMIxhttQO3el2ObknUldw&usqp=CAU" alt="Current profile photo" />
                                </div>
                                <div className='flex-1 basis-1/2 mt-1 ml-3'>
                                    <p className="text-lg"><b>Spice Hut Indian Restaurant</b></p>
                                    <p className="text-xs mt-1"> 2036 2ND AVE, NEW YORK, NY 10029</p>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </header> <br /><br /><br />

            {cartList && cartList?.map((cart, index) => {
                return (
                    <div className='shadow-2xl border-2 m-1 bg-white'>
                        <div className="box-border w-82 p-4 border-4 m-0 flex items-center">
                            <p className="flex-1">{cart.food_name}</p>
                            <button onClick={() => handleIncreaseAmount(cart, cart.quantity)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>
                            </button>
                            <input type="text items-center" value={cart.quantity} className="w-10 px-2 py-1" />
                            <button onClick={() => handleDecreaseAmount(cart, cart.quantity, index)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                                </svg>
                            </button>
                            <p className="text-gray-500 mb-0 float-right ml-4 ">{cart.price}$</p>
                            <button className='ml-2' onClick={() => { handleDeleteItem(index) }}>X</button>
                        </div>
                    </div>
                )
            })};

            <div className='shadow-2xl border-1 m-2'>
                <div className="flex items-center m-2">
                    <input placeholder="Enter promo code" type="text" className="w-80 p-2 border rounded-l focus:outline-none" />
                    <button id="button-addon2" type="button" className="w-20 bg-blue-500 text-white p-2 rounded-r focus:outline-none">
                        APPLY
                    </button>
                </div>
                <div className="flex items-center m-2">
                    <button id="button" type="button" className="w-14  bg-slate-200 text-white p-5 rounded-r focus:outline-none mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                        </svg>
                    </button>
                    <textarea placeholder="mot hai ba bon nam sau" className=" w-80 p-2 border rounded-l focus:outline-none mb-4 " />
                </div>
            </div>

            <div className='shadow-2xl border-2 m-2'>
                <div className="box-border w-82 p-0 border-0 m-2 flex items-center">
                    <p className="flex-1">Item total</p>
                    <p className="text-gray-500 mb-0 float-right ml-4 ">$3140</p>
                </div>
                <div className="box-border w-82 p-0 border-0 m-2 flex items-center">
                    <p className="flex-1">Restaurant Charges</p>
                    <p className="text-gray-500 mb-0 float-right ml-4 ">$62.8</p>
                </div>
                <div className="box-border w-82 p-0 border-0 m-2 flex items-center">
                    <p className="flex-1">Delivery Fee</p>
                    <p className="text-gray-500 mb-0 float-right ml-4 ">10$</p>
                </div>
                <div className="box-border w-82 p-0 border-0 m-2 flex items-center">
                    <p className="flex-1 text-blue-500">Total Discount</p>
                    <p className="text-blue-500 mb-0 float-right ml-4 ">1884$</p>
                </div>
                <hr />
                <div className="box-border w-82 p-0 border-0 m-2 flex items-center">
                    <p className="flex-1"><b>Total page</b></p>
                    <p className="text-dark-500 mb-0 float-right ml-4 "><b>$1329</b></p>
                </div>
            </div>

            <br /><br />
            <nav className="fixed bottom-0 left-0 right-0 z-50 bg-[#FBFBFB] py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 bg-lime-600 lg:py-4 h-12 ">
                <div className="flex items-center justify-center px-3">
                    <span className="text-neutral-500 dark:text-neutral-200 mt-2">
                        Pay $123456
                    </span>
                </div>
            </nav>


        </>
    )
}

export default Cart