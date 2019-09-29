import React from 'react'

const Header =props =>{
    console.log(props);
    return (
        <div>
            <h1>hello header{props.name} new {props.heroName}</h1>
            {props.children}
        </div>
    )
}

export default Header;
