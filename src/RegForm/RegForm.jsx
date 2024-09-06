const RegForm = ({ setIsLogin, regName, setRegName, regPassword1, setRegPassword1, regPassword2, setRegPassword2, reg, triedToReg, setTriedToReg, reged, setReged }) => {

    const handleNameChange = (e) => {
        setRegName(e.target.value)
        setTriedToReg(false)
        setReged(false)
    }

    const handlePass1Change = (e) => {
        setRegPassword1(e.target.value)
        setTriedToReg(false)
        setReged(false)
    }

    const handlePass2Change = (e) => {
        setRegPassword2(e.target.value)
        setTriedToReg(false)
        setReged(false)
    }

    const switchToLog = () => {
        setIsLogin(true)
        setRegName("")
        setRegPassword1("")
        setRegPassword2("")
        setTriedToReg(false)
        setReged(false)
    }

    return (
        <div className="form-wrapper">
            <input value={regName} onChange={handleNameChange} placeholder="Введите логин"></input>
            <input type="password" value={regPassword1} onChange={handlePass1Change} placeholder="Введите пароль"></input>
            <input type="password" value={regPassword2} onChange={handlePass2Change} placeholder="Подтвердите пароль"></input>
            <button onClick={reg}>Зарегистрироваться</button>
            {
                triedToReg
                &&
                (reged
                ?
                <span className="success">Вы зарегистрировались</span>
                :
                <span className="failure">Что-то пошло не так</span>)
            }
            <span onClick={switchToLog} className="switch">← Войти</span>
        </div>
    )
}

export default RegForm