import React from 'react';
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import Logo from "../../assets/png/logo.png";
import {logoutApi} from "../../api/auth";
import {FontAwesomeIcon} from  "@fortawesome/react-fontawesome";
import {
    faHome,
    faUser,
    faUsers,
    faPowerOff
} from "@fortawesome/free-solid-svg-icons";

import "./LeftMenu.scss";

export default function LeftMenu(props) {
    const {setRefreshCheckLogin} = props;

    const logout = () =>{
        logoutApi();
        setRefreshCheckLogin(true);
    }

    return (
        <div className="left-menu">
            <img className="logo" src={Logo} alt="TwitFoc" />

            <Link to="/">
                 <FontAwesomeIcon icon={faHome} /> Inicio
            </Link>
            <Link to="/users">
                 <FontAwesomeIcon icon={faUser} /> Usuarios
            </Link>
            <Link to="/profile">
                 <FontAwesomeIcon icon={faUsers} /> Perfil
            </Link>
            <Link to="" onClick={logout}>
                 <FontAwesomeIcon icon={faPowerOff} /> Cerrar sesión
            </Link>

            <Button>Foc-ear</Button>
        </div>
    )
}
