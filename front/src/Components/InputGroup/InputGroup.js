import React from 'react';
import {FaKey} from "react-icons/fa";

export default function InputGroup({Icon, inputType, placeholder = ''}) {
    return <>
        <div className="input-group mb-3">
            <span className="input-group-text">
                <Icon/>
            </span>
            <input
                className="form-control"
                type={inputType}
                placeholder={placeholder}/>
        </div>

    </>;
}