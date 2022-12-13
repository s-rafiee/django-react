import React from 'react';

export default function Link({className, href = 'button', linkText}) {
    return (
        <a href={href} className={className}>{linkText}</a>
    );
}