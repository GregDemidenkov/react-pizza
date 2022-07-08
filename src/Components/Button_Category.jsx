import React from 'react';
import classNames from 'classnames';

function Button_Category({onClick, active, children}) {
    return (
        <li 
        onClick = {onClick}
        className ={classNames('button-category', {
            'active': active,
        })}>{children}</li>
    )
}

export default Button_Category;