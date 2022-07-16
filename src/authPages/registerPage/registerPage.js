import React, { useEffect, useState } from 'react'
import { Typography } from '@mui/material'
import AuthBox from '../../shared/components/authBox'
import RegisterPageInput from './registerPageInput'
import RegisterPageFooter from './registerPageFooter'
import {validateRegisterForm} from '../../shared/utils/validators'

function RegisterPage() {
  const [mail, setMail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isFormValid, setIsFormValid] = useState(false)
  const handleRegister = () => {
    console.log(mail)
    console.log(username)
    console.log(password)
    console.log("registering")
  }

  useEffect(()=>{
    setIsFormValid(validateRegisterForm({
      mail, username, password
    }))
    console.log(password)
  },[mail, username, password, setIsFormValid])

  return (
    <AuthBox>
      <Typography variant='h5' sx={{ color: "white" }} >
        create account
      </Typography>
      <RegisterPageInput
        mail={mail}
        setMail={setMail}
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
      />
      <RegisterPageFooter 
        handleRegister={handleRegister}
        isFormValid={isFormValid}

      />
    </AuthBox>
  )
}

export default RegisterPage