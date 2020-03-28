import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import './styles.css';
import api from '../../services/api';

export default function NewIncident() {
    const ongId = localStorage.getItem('ongId');

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const history = useHistory();

    async function handleNewIncident(evt) {
        evt.preventDefault();

        const data = {
            title,
            description,
            value
        };

        await api.post('/incidents', data, {
            headers: {
                Authorization: ongId
            }
        });

        history.push('/profile');
    }

    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero" />

                    <h1>Registar novo caso</h1>
                    <p>Faça o registo de um caso, em que a sua ONG necessite de ajuda.</p>

                    <Link to="/profile" className="back-link">
                        <FiArrowLeft size={16} color="#E02041" />Voltar para home
                    </Link>
                </section>

                <form onSubmit={handleNewIncident}>
                    <input
                        placeholder="Título do caso"
                        value={title}
                        onChange={e => setTitle(e.target.value)} />
                    <textarea
                        placeholder="Descrição"
                        value={description}
                        onChange={e => setDescription(e.target.value)} />
                    <input
                        placeholder="Valor em euros"
                        value={value}
                        onChange={e => setValue(e.target.value)} />
                    <button className="button" type="submit">Registar</button>
                </form>
            </div>
        </div>
    );
}
