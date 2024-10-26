import { useNavigate, useLocation } from 'react-router-dom'

import ContactForm from '../Contact/ContactForm'
import Message from '../layout/Message'

import styles from './NewProject.module.css'
import { useState } from 'react'

function Contact() {

    const navigate = useNavigate()
    const [contactMessage, setContactMessage] = useState('')

    const location = useLocation()
    let message = ''
    if (location.state) {
        message = location.state.message
    }

    function createPost(contact) {

        fetch('http://localhost:5000/contacts', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(contact),
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            //redirect
            navigate('/contact')
            setContactMessage('Contato salvo com sucesso!')
        })
        .catch((err) => console.log(err))
    }

    return (
        <div className={styles.newproject_container}>
            <h1>Deixe seu recado!</h1>
            <p>Diga o que está achando dos nossos serviços!</p>
            <ContactForm handleSubmit={createPost} btnText="Enviar Contato" />
        </div>
    )
}

export default Contact