import React, {useState} from 'react';
import './Signin.css';
import {FaRegUser, FaKey} from 'react-icons/fa'
import InputGroup from "../../../Components/InputGroup";
import Button from "../../../Components/Button";
import Link from "../../../Components/Link";
import AuthLayout from "../../../Layouts/AuthLayout";

export default function Signin() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    function onUserNameChangeHandler(event) {
        setUserName(event.target.value);
    }

    const signinSubmitHandler = (e) => {
        e.preventDefault();
        alert('Signin')
    }
    return <>
        <AuthLayout>
            <div className="card p-4">
                <div className="card-body">
                    <form onSubmit={signinSubmitHandler}>
                        <h1>Sign in</h1>
                        <p className="text-medium-emphasis">
                            Sign In to your account
                        </p>
                        <InputGroup
                            Icon={FaRegUser}
                            inputType={"text"}
                            value={userName}
                            placeholder={"Username"}
                            onChangeHandler={(e) => {
                                setUserName(e.target.value);
                            }}/>
                        <InputGroup
                            Icon={FaKey}
                            inputType={"password"}
                            value={password}
                            placeholder={"Password"}
                            onChangeHandler={(e) => {
                                setPassword(e.target.value);
                            }
                            }/>
                        <div className="row">
                            <div className="col-6">
                                <Button
                                    className={"btn-primary px-4"}
                                    btnType={"submit"}
                                    btnText={"Login"}
                                />
                            </div>
                            <div className="col-6 text-right">
                                <Button
                                    className={"btn-link px-0"}
                                    btnType={"button"}
                                    btnText={"Forgot password?"}
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="card text-white bg-primary py-5">
                <div className="card-body text-center">
                    <h2>Sign up</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.</p>
                    <Link
                        className={"btn btn-primary mt-3 active"}
                        href={'#'}
                        linkText={"Register Now!"}
                    />
                </div>
            </div>
        </AuthLayout>
    </>;
}