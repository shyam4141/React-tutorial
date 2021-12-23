import logo from "./../logo.png";

function handleEmployee(){
   

}

function handleJobSeeker(){
    console.log("you are hovering");

}
export default function Nav(props) {
    return (

        <div>
           
            <nav className="navbar ">
                <a className="navbar-brand" href="#">

                    <img src={logo} width="auto" height="100" className="d-inline-block align-top" alt="" />

                </a>
                <div> 
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <a className="nav-link text-black" href="/home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-black" href="/about">About</a>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-dark"  onClick = {handleEmployee}>Employeers</button>
                        </li>
                        <li className="nav-item ">
                            <button className="btn btn-primary" style ={{marginLeft:"10px"}} onClick = {handleJobSeeker}>Job Seekers</button>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
