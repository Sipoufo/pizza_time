import React from "react";

const Body = () => {
    return(
        <div className="mt-16 flex justify-center w-full mb-40">
            <div className="flex flex-col gap-10 w-6/12 sm:w-8/12 lg:w-10/12 justify-center text-center">
                <h1 className="text-3xl font-semibold">Recommended menu</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full h-full mb-10">
                    {/* block 1 */}
                    <div className="h-full w-full flex justify-center items-center">
                        <div className="flex flex-col w-full border border-gray-500 rounded-t-full justify-center items-center px-8 py-6 shadow-lg hover:shadow-slate-500">
                            <img src={process.env.PUBLIC_URL + '/images/pizza/pizza1.png'} className='object-contain w-full h-full' alt="pizza1" />
                            <h1 className="text-3xl mt-4 font-semibold">Cheese Lovers</h1>
                            <p className="text-sm font-normal text-gray-600 mt-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                            </p>
                            {/* Price */}
                            <label className="text-4xl font-semibold mt-4 text-green-600">$20.00</label>
                            <select className="w-full mt-4 rounded-l-full rounded-r-full text-md p-2 border border-black bg-white">
                                <option>Regular</option>
                            </select>
                            <button className="w-full mt-4 rounded-l-full rounded-r-full text-md p-2 text-center text-white bg-[#EC0000]">Add to cart</button>
                        </div>
                    </div>
                    {/* block 2 */}
                    <div className="h-full w-full flex justify-center items-center">
                        <div className="flex flex-col w-full border border-gray-500 rounded-t-full justify-center items-center px-8 py-6 shadow-lg hover:shadow-slate-500">
                            <img src={process.env.PUBLIC_URL + '/images/pizza/pizza1.png'} className='object-contain w-full h-full' alt="pizza1" />
                            <h1 className="text-3xl mt-4 font-semibold">Cheese Lovers</h1>
                            <p className="text-sm font-normal text-gray-600 mt-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                            </p>
                            {/* Price */}
                            <label className="text-4xl font-semibold mt-4 text-green-600">$20.00</label>
                            <select className="w-full mt-4 rounded-l-full rounded-r-full text-md p-2 border border-black bg-white">
                                <option>Regular</option>
                            </select>
                            <button className="w-full mt-4 rounded-l-full rounded-r-full text-md p-2 text-center text-white bg-[#EC0000]">Add to cart</button>
                        </div>
                    </div>
                    {/* block 3 */}
                    <div className="h-full w-full flex justify-center items-center">
                        <div className="flex flex-col w-full border border-gray-500 rounded-t-full justify-center items-center px-8 py-6 shadow-lg hover:shadow-slate-500">
                            <img src={process.env.PUBLIC_URL + '/images/pizza/pizza1.png'} className='object-contain w-full h-full' alt="pizza1" />
                            <h1 className="text-3xl mt-4 font-semibold">Cheese Lovers</h1>
                            <p className="text-sm font-normal text-gray-600 mt-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                            </p>
                            {/* Price */}
                            <label className="text-4xl font-semibold mt-4 text-green-600">$20.00</label>
                            <select className="w-full mt-4 rounded-l-full rounded-r-full text-md p-2 border border-black bg-white">
                                <option>Regular</option>
                            </select>
                            <button className="w-full mt-4 rounded-l-full rounded-r-full text-md p-2 text-center text-white bg-[#EC0000]">Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Body;