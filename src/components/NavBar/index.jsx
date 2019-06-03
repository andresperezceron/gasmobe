import React from 'react'
import {Ul, Li, A} from './style'

const NavBar = () => {
    return(
        <Ul>
            <Li><A to={"/"}>Home</A></Li>
            <Li><A to={"/kk"}>Quienes somos</A></Li>
            <Li><A to={"/kk"}>Productos</A></Li>
        </Ul>
    )
};
export default NavBar;
