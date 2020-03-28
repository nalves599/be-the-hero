import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import Axios from 'axios';
import './styles.css';

export default function Error() {

    useEffect(() => {
        const axios = Axios.create({
            baseURL: 'http://localhost:8085'
        });

        axios.get('/check')
            .then(() => {
                window.location.replace("/");
            }).catch(() => {
                setTimeout(() => window.location.replace("/500"), 60000); //Try again in 60 seconds
            });
    }, []);

    return (
        <div className="error-container">
            <img src={logoImg} alt="Be The Hero" />

            <h1>500 Error</h1>
            <p>Os nossos servidores encontram-se em reparação.<br />Tente novamente mais tarde.</p>
        </div>
    );
}
