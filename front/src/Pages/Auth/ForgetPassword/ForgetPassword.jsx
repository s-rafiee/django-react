import React from 'react';
import './ForgetPassword.css';
import {FaRegUser} from 'react-icons/fa';
import InputGroup from "../../../Components/InputGroup";
import Button from "../../../Components/Button";
import Link from "../../../Components/Link";
import AuthLayout from "../../../Layouts/AuthLayout";

export default function ForgetPassword() {
    return <>
        <AuthLayout>
            <div className="card p-4">
                <div className="card-body">
                    <form>
                        <h1>Forget Password</h1>
                        <p className="text-medium-emphasis">
                            Enter Your Username or Email to Recover Your Password.
                        </p>
                        <InputGroup Icon={FaRegUser} inputType={"text"} placeholder={"Username"}/>
                        <div className="row">
                            <div className="col-6">
                                <Button
                                    className={"btn-primary px-4"}
                                    btnType={"button"}
                                    btnText={"Recover"}/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="card text-white bg-primary py-5">
                <div className="card-body text-center">
                    <h2>Sign in</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.</p>
                    <Link
                        className={"btn btn-primary mt-3 active"}
                        href={'#'}
                        linkText={"Signin"}
                    />
                </div>
            </div>
        </AuthLayout>
    </>;
}