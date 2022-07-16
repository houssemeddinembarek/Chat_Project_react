
import React from 'react'
import CustomPrimaryButton from '../../shared/components/customPrimaryButton'
import RedirectInfo from '../../shared/components/redirectInfo'
import { useNavigate } from 'react-router-dom'
import { Tooltip } from '@mui/material'

const getFormNotValidMessage = () => {
    return 'Usename should contain 3 and 12 characers and password should contains betwee 6 and 12 character. Also correct e-mail address should provided'
}

const getFormValidMessage = () => {
    return 'Press to register'
}

function RegisterPageFooter({ handleRegister, isFormValid }) {
    const navigate = useNavigate()
    const handlePushToLoginPage = () => {
        navigate("/login")
    }
    return (
        <>
            <Tooltip
                title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
            >
                <div>
                    <CustomPrimaryButton
                        label="Register"
                        additionalStyles={{ marginTop: '30px' }}
                        disabled={!isFormValid}
                        onClick={handleRegister}
                    />
                </div>
            </Tooltip>
            <RedirectInfo
                text=''
                redirectText='Aleady have a account ?'
                additionalStyles={{ marginTop: '5px' }}
                redirectHandler={handlePushToLoginPage}
            />
        </>
    )
}

export default RegisterPageFooter