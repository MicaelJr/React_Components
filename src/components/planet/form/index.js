import React, {Fragment, useState} from "react";

const initialState = {
    name: '',    
}


const Form = (props) => {
    const [fields, setfields] = useState(initialState)

    const handleFieldsChange = (e) => setfields({
        ...fields,
        [e.currentTarget.name]: e.currentTarget.value
    });
    
    const handleSubmit = event => {
        props.addSatellite(fields)
        event.preventDefault();
        setfields(initialState)
    }
    
    return (
        <Fragment>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input id="name" type="text" name="name" value={fields.name} onChange={handleFieldsChange}/>
                </div>                
                <br/>
                <input type="submit"/>
            </form>
        </Fragment>
    )
}

export default Form;