import React from 'react';
import './AuthLayout.css';

export default function AuthLayout({children}) {
    return <>
        <div className="bg-auth min-vh-100 d-flex flex-row align-items-center"
             style={{backgroundImage: "url(l/images/auth.jpg)"}}>
            <div className="container">
                <video autoPlay muted loop id="bg-video">
                    <source src="/videos/bg1.mp4" type="video/mp4"/>
                </video>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card-group">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>;
}