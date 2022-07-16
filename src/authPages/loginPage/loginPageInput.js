import React from 'react'
import InputWithLabel from '../../shared/components/inputWithLabel'

function LoginPageInput({ mail, setMail, password, setPassword }) {
    return (
        <>
            <InputWithLabel
                value={mail}
                setValue={setMail}
                label='E-mail'
                type='text'
                placeholder="Enter e-mail address"
            />
            <InputWithLabel
                value={password}
                setValue={setPassword}
                label='Password'
                type='password'
                placeholder="Enter your password"
            />
        </>
    )
}

export default LoginPageInput