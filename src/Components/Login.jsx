import React from 'react'

const Login=(props) =>{
    return (
        <div className='login-container' style={{backgroundImage:"url(/image/landingPage.jpg)",
        backgroundRepeat: 'no-repeat',
        backgroundSize:"cover"
        }}><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <h1 className='welcome-message' style={{color:"white"}}>Welcome to decentralised voting application</h1>
            <button className='login-button' onClick={props.connectWallet}>Login Metamask</button>
        </div>
    )
}

export default Login;
