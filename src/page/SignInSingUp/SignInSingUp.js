import React, {useState} from 'react';
import {Container, Row, Col, Button} from "react-bootstrap";
import {FontAwasomeIcon, FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch, faUsers, faComment} from "@fortawesome/free-solid-svg-icons";
import BasicModal from "../../components/Modal/BasicModal";
import SignUpForm from "../../components/SignUpForm";
import SignInForm from "../../components/SignInForm";
import LogoFoc from "../../assets/png/logo.png";
import LogoFoc2 from "../../assets/png/logo2.png";
import "./SignInSingUp.scss";

export default function SignInSingUp(props) {
    const {setRefreshCheckLogin} = props;
    const [showModal, setShowModal] = useState(false)
    const [contentModal, setContentModal] = useState(null);
    const openModal = content => {
        setShowModal(true);
        setContentModal(content);
    }
    return (
        <>
        <Container className="signin-signup" fluid>
            <Row>
                <LeftComponent />
                <RightComponent 
                    openModal = {openModal}
                    setShowModal = {setShowModal}
                    setRefreshCheckLogin={setRefreshCheckLogin}
                />
            </Row>
        </Container>
        <BasicModal 
            show= {showModal}
            setShow = {setShowModal}
            >
            {contentModal}
        </BasicModal>
        </>
    )
}

function LeftComponent() {
    return (
        <Col className="signin-signup__left" xs={6}>
            <img src={LogoFoc} alt="TwitFoc" />
            <div>
                <h2>
                    <FontAwesomeIcon icon={faSearch} />
                     Sigue a profesores y alumnos
                </h2>
                <h2>
                    <FontAwesomeIcon icon={faUsers} />
                     Entétate de que está hablando la gente
                </h2>
                <h2>
                    <FontAwesomeIcon icon={faComment} />
                     Unete a la conversacion
                </h2>
            </div>
        </Col>
    )
}

function RightComponent(props) {
    const {openModal, setShowModal, setRefreshCheckLogin} = props;
    return (
        <Col className="signin-signup__right" xs={6}>
            <div>
                <img src={LogoFoc2} alt="TwitFoc" />
                <h2>Habla con otras personas sobre FOC</h2>
                <h3>Únete a TwitFoc.</h3>
                <Button 
                    variant="primary"
                    onClick={()=> openModal(<SignUpForm setShowModal={setShowModal}/>)}
                    >
                Regístrate
                </Button>
                <Button 
                variant="outline-primary"
                    onClick={()=> openModal(<SignInForm setRefreshCheckLogin={setRefreshCheckLogin}/>)}
                >
                    Iniciar sesión
                </Button>
            </div>
        </Col>
    )
}