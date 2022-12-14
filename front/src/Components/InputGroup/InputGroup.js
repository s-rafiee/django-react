import React from 'react';
import {FaKey} from "react-icons/fa";

export default function InputGroup({
                                       Icon,
                                       inputType,
                                       value ,
                                       placeholder = '',
                                       onChangeHandler = null,
                                   }) {
    return <>
        <div className="input-group mb-3">
            <span className="input-group-text">
                <Icon/>
            </span>
            <input
                className="form-control"
                type={inputType}
                placeholder={placeholder}
                value={value}
                onChange={onChangeHandler}
            />
        </div>

    </>;
}