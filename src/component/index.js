import React from "react";
import Body from "./body";
import Header from "./header";
import Navbar from "./navbar";

const Index = () => {
    return(
        <div className="flex flex-col w-full h-full max-w-[1400px]">
            <Navbar/>
            <Header/>
            <Body/>
        </div>
    )
};

export default Index;