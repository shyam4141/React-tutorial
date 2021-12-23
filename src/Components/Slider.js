export default function Slider(props) 
{
    return (
        <div style = {{marginTop :"60px"}}>

             <h1>{props.title}</h1>
           <span><h3><button className = "btn btn-primary btn-lg btn-block">{props.title2}</button></h3></span> 
        </div>
    )
}
