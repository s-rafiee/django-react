import React from 'react';

export default function Button({className, btnType = 'button', btnText}) {
    return (
        <button
            className={`btn ${className}`}
            type={btnType}>
            {btnText}
        </button>
    );
}