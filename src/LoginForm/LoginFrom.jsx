const LoginForm = ({ setIsLogin, loginName, setLoginName, loginPassword, setLoginPassword, login, triedToLogIn, setTriedToLogIn, loggedIn, setLoggedIn }) => {

    const handleLoginChange = (e) => {
        setLoginName(e.target.value)
        setTriedToLogIn(false)
        setLoggedIn(false)
    }

    const handlePasswordChange = (e) => {
        setLoginPassword(e.target.value)
        setTriedToLogIn(false)
        setLoggedIn(false)
    }

    const switchToReg = () => {
        setIsLogin(false)
        setLoginName("")
        setLoginPassword("")
        setTriedToLogIn(false)
        setLoggedIn(false)
    }

    return (
        <div className="form-wrapper">
            <input value={loginName} onChange={handleLoginChange} placeholder="Введите логин"></input>
            <input type="password" value={loginPassword} onChange={handlePasswordChange} placeholder="Введите пароль"></input>
            <button onClick={login}>Войти</button>
            {
                triedToLogIn
                &&
                (loggedIn
                ?
                <span className="success">Вы вошли</span>
                :
                <span className="failure">Такого пользователя нет😥</span>)
            }
            <span>Нет аккаунта? <span onClick={switchToReg} className="switch">Зарегистрируйтесь →</span></span>
        </div>
    )
}

export default LoginForm