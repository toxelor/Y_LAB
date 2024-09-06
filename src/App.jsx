import { useState, useEffect } from 'react'
import LoginFrom from './LoginForm/LoginFrom'
import RegForm from './RegForm/RegForm'
import './App.css'

function App() {

  const [ isLogin, setIsLogin ] = useState(true)
  const [ loginName, setLoginName ] = useState("")
  const [ loginPassword, setLoginPassword ] = useState("")
  const [ triedToLogIn, setTriedToLogIn ] = useState(false)
  const [ loggedIn, setLoggedIn ] = useState(false)

  const [ regName, setRegName ] = useState("")
  const [ regPassword1, setRegPassword1 ] = useState("")
  const [ regPassword2, setRegPassword2 ] = useState("")
  const [ triedToReg, setTriedToReg ] = useState(false)
  const [ reged, setReged ] = useState(false)

  const [ users, setUsers ] = useState({
    "admin": "admin"
  })
  const login = () => {
    setTriedToLogIn(true)
    if (users[loginName] && users[loginName] === loginPassword) {
      setLoggedIn(true)
    } else {
      setLoggedIn(false)
    }
  }

  const reg = () => {
    setTriedToReg(true)
    if ((regPassword1 === regPassword2) && (!(regName in users))) {
      let user = users
      user[regName] = regPassword1
      setReged(true)
      setUsers(user)
    } else {
      setReged(false)
    }
  }

  return (
    <>
      <div className='gradient'></div>
      <div className='wrapper'>
        {
          isLogin
          ?
          <LoginFrom setIsLogin={ setIsLogin } loginName = { loginName } setLoginName = { setLoginName } loginPassword = { loginPassword } setLoginPassword = { setLoginPassword } login={login} triedToLogIn={triedToLogIn} setTriedToLogIn={setTriedToLogIn} loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
          :
          <RegForm setIsLogin={ setIsLogin } regName ={regName} setRegName = {setRegName} regPassword1={regPassword1} setRegPassword1={setRegPassword1} regPassword2={regPassword2} setRegPassword2={setRegPassword2} reg={reg} triedToReg={triedToReg} setTriedToReg={setTriedToReg} reged={reged} setReged={setReged} />
        }
      </div>
    </>
    
  )
}

export default App
