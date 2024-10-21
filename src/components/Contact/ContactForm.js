import {useState} from 'react'

import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'

import styles from '../project/ProjectForm.module.css'

function ServiceForm({ handleSubmit, btnText, contactData }) {

    const [contact, setContact] = useState({})

    function submit(e) {
        e.preventDefault()
        handleSubmit(contact)
    }

    function handleChange(e) {
        setContact({...contact, [e.target.name]: e.target.value})
    }

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input
                type="text"
                text="Nome"
                name="name"
                placeholder="Digite seu nome"
                handleOnChange={handleChange}
            />

            <Input
                type="text"
                text="Assunto"
                name="subject"
                placeholder="Digite o assunto da mensagem"
                handleOnChange={handleChange}
            />

            <Input
                type="text"
                text="Email"
                name="email"
                placeholder="Digite um email válido para contato"
                handleOnChange={handleChange}
            />

            <Input
                type="text"
                text="Fone"
                name="fone"
                placeholder="Digite um telefone para contato"
                handleOnChange={handleChange}
            />

            <SubmitButton text={btnText} />
        </form>
    )
}

export default ServiceForm