import React from 'react'
import InputWithLabel from '../../shared/components/inputWithLabel'

function RegisterPageInput(props) {
    const { mail, setMail, username, setUsername, password, setPassword } = props
    return (
        <>
            <InputWithLabel
                value={mail}
                setValue={setMail}
                label="E-mail address"
                type="email"
                placeholder="Enter e-mail address"
            />
            <InputWithLabel
                value={username}
                setValue={setUsername}
                label="Enter username"
                type="text"
                placeholder="Enter a username"
            />
            <InputWithLabel
                value={password}
                setValue={setPassword}
                label="Enter password"
                type="password"
                placeholder="Enter password"
            />
        </>

    )
}

export default RegisterPageInput