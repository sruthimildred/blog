// import React from 'react';
import { Navigate } from 'react-router-dom';
import validateLogin from './validateLogin';
import React, {  useState } from 'react';



function LoginPage() {

        // Storing Form Field Values
        const [formValues, setFormValues] = useState({  email: "", password: "" });

        // Manage Form Error Values
        const [formErrorValues, setFormErrorValues] = useState({});
    
        // Flag for Form Submission Status
        const [isSubmit, setIsSubmit] = useState(false); 
    
        // Manage Field Change
        const handleChange = (event) => {
            // console.log(event.target);
            const { name, value } = event.target; //destructuring
            setFormValues({ ...formValues, [name]: value });
            // console.log(formValues);
        }
    
        // Manage Form Refresh
        const handleSubmit = (event) => {
            event.preventDefault();
            setFormErrorValues(validateLogin(formValues));
            setIsSubmit(true);
        }


    return (
                <div >
                    <form onSubmit={handleSubmit}>
                    {Object.keys(formErrorValues).length === 0 && isSubmit ? (<Navigate to='/articles-list' />) : (<div>Please Login</div>)}

                        <label for="chk" aria-hidden="true">Login</label>
                        <input type="email" name="email" placeholder="Email" required=""value={formValues.email} onChange={handleChange}/>
                        <input type="password" name="password" placeholder="Password" required="" value={formValues.password} onChange={handleChange}/>
                        <button>Login</button>
                    </form>
                </div>
          
    );
}

export default LoginPage;




