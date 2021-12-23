import React from 'react'

export default function Form() {

    function onChangeHandler(event) {
        console.log(event);
      }

    return (
        <div>
            <form className ="form-group" onChange={(event) => { onChangeHandler(event.target.value);}}>  
            <div className = "row">
                <div className ="col-sm-10 col-xs-12">
                <input className = "form-control-lg col-xs-12" placeholder = "Job title, keywords, or company" type = "text" style = {{width:"100%"}}></input>
                </div>
                <div className = "col-sm-2 col-xs-12">
                <buttom className = "btn btn-primary btn-lg">Search</buttom>
                </div>
            </div>
            </form>
        </div>
    )
}
