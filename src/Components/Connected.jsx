import React from 'react'

const Connected=(props) =>{
    return (
        <div className='login-container'style={{backgroundImage:"url(/image/votingPage.jpg)",
        backgroundRepeat: 'no-repeat',
        backgroundSize:"cover",
        color:"whitesmoke"
        }}>
            <h1 className='connectedd-header'>You have successfully connected to Metamask</h1>
            <p className='connected-account'>Metamask Account : {props.account}</p>
            <p className='connected-account'>Remaining Time : {props.remainingTime}</p>
            {props.showButton?(
                <p className='connected-account'>You have already voted </p>
            ):(
                <div>
                    <input type="number" placeholder='Enter candidate Index' value={props.number} onChange={props.handleNumberChange}></input>
                <br></br>
                <center> <button className='login-button' onClick={props.voteFunction}>Vote</button></center>
                <br></br>
                </div>
            )}

                


            <table id="myTable" className="candidates-table">
                <thead>
                <tr>
                    <th style={{color:"black"}}>Candidate Number</th>
                    <th style={{color:"black"}}>Candidate name</th>
                    <th style={{color:"black"}}>Candidate votes</th>
                </tr>
                </thead>
                <tbody>
                {props.candidates.map((candidate, index) => (
                    <tr key={index}>
                    <td>{candidate.index}</td>
                    <td>{candidate.name}</td>
                    <td>{candidate.voteCount}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            
        </div>
    )
}

export default Connected;
