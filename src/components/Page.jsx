import React, {useState} from 'react';
import {Header} from "./Header";
import {Content} from "./Content";
import {Footer} from "./Footer";


const Page = () => {

    return (
        <div className="page">
            <Header></Header>
            <Content></Content>
            <Footer></Footer>
        </div>
    );
}

export default Page;