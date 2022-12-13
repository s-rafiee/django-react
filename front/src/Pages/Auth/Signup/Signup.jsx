import React from 'react';
import './Signup.css';
import {FaRegUser, FaKey} from 'react-icons/fa';
import InputGroup from "../../../Components/InputGroup";
import Button from "../../../Components/Button";
import Link from "../../../Components/Link";
import AuthLayout from "../../../Layouts/AuthLayout";

export default function Signup() {
    return <>
        <AuthLayout>
            <div className="card p-4">
                <div className="card-body">
                    <form>
                        <h1>Sign up</h1>
                        <p className="text-medium-emphasis">
                            Sign up to create account
                        </p>
                        <InputGroup
                            Icon={FaRegUser}
                            inputType={"text"}
                            placeholder={"First Name"}/>
                        <InputGroup
                            Icon={FaRegUser}
                            inputType={"text"}
                            placeholder={"Last Name"}/>
                        <InputGroup
                            Icon={FaRegUser}
                            inputType={"text"}
                            placeholder={"Username"}/>
                        <InputGroup
                            Icon={FaKey}
                            inputType={"password"}
                            placeholder={"Password"}/>
                        <InputGroup
                            Icon={FaKey}
                            inputType={"password"}
                            placeholder={"Confirm Password"}/>
                        <div className="row">
                            <div className="col-6">
                                <Button
                                    className={"btn-primary px-4"}
                                    btnType={"button"}
                                    btnText={"Register"}/>
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
                        linkText={"Sign in!"}
                    />
                </div>
            </div>
        </AuthLayout>
    </>;
}