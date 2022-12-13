import React from 'react';
import './Signin.css';
import {FaRegUser, FaKey} from 'react-icons/fa'
import InputGroup from "../../../Components/InputGroup";
import Button from "../../../Components/Button";
import Link from "../../../Components/Link";
import AuthLayout from "../../../Layouts/AuthLayout";

export default function Signin() {
    return <>
        <AuthLayout>
            <div className="card p-4">
                <div className="card-body">
                    <form>
                        <h1>Sign in</h1>
                        <p className="text-medium-emphasis">
                            Sign In to your account
                        </p>
                        <InputGroup Icon={FaRegUser} inputType={"text"} placeholder={"Username"}/>
                        <InputGroup Icon={FaKey} inputType={"password"} placeholder={"Password"}/>
                        <div className="row">
                            <div className="col-6">
                                <Button
                                    className={"btn-primary px-4"}
                                    btnType={"button"}
                                    btnText={"Login"}/>
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