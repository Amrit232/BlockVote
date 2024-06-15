import React from 'react'

const Finished=(props) =>{
    return (
        <div className='login-container' style={{backgroundImage:"url(/image/votingPage.jpg)",
        backgroundRepeat: 'no-repeat',
        backgroundSize:"cover"
        }}>
            <h1 className='welcome-message' style={{color:"white"}}>Voting has finished</h1>
        </div>
    )
}

export default Finished;
