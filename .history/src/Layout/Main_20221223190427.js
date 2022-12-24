import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Pages/Shared/Header/Header';
import F from '../Pages/Shared/F/F';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;