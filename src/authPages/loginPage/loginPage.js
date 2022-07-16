import React, { useState, useEffect } from 'react';
import AuthBox from '../../shared/components/authBox';
import LoginPageFooter from './loginPageFooter';
import LoginPageHeader from './loginPageHeader';
import LoginPageInput from './loginPageInput';
import { validateLoginForm } from '../../shared/utils/validators';

function LoginPage() {

  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsFormValid(validateLoginForm({ mail, password }))
  }, [mail, password, setIsFormValid])

  const handleLogin = () => {
    console.log(mail);
    console.log(password);
    console.log("log in");
  }

  return (
    <AuthBox>
      <LoginPageHeader />
      <LoginPageInput
        mail={mail}
        setMail={setMail}
        password={password}
        setPassword={setPassword}
      />
      <LoginPageFooter
        isFormValid={isFormValid} handleLogin={handleLogin}
      />
    </AuthBox>
  )
}

export default LoginPage