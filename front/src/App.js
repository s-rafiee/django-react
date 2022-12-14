import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import {useAuthState} from "./Contexts/AuthCountext/AuthCountext";
import Signin from './Pages/Auth/Signin';
import Signup from './Pages/Auth/Signup';
import ForgetPassword from './Pages/Auth/ForgetPassword';
import DashboardHome from './Pages/Dashboard/DashboardHome';

function App() {
    const {token} = useAuthState();
    return (<>
        {token ? <DashboardHome/> : <Signin/>}
         {/*<Signup/>*/}
         {/*<ForgetPassword/>*/}
         {/*<DashboardHome/>*/}
    </>);
}

export default App;
