import React, {  useState } from 'react';
import { Navigate } from 'react-router-dom';
// import LoginPage from '../login/LoginPage';
// import './Signup.css';
import validation from './validation';

function SignupPage() {

    // Storing Form Field Values
    const [formValues, setFormValues] = useState({ username: "", email: "", password: "" });

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
        setFormErrorValues(validation(formValues));
        setIsSubmit(true);
    }

    // useEffect(() => {
    //     if (Object.keys(formErrorValues).length === 0 && isSubmit) {
    //         // alert("success");
    //         return(
    //             <LoginPage/>
    //         )
    //     }
    // }, [formErrorValues]);

    return (
        <div>
            <div className="main">
                {/* <input type="checkbox" id="chk" aria-hidden="true" /> */}
                {Object.keys(formErrorValues).length === 0 && isSubmit ? (<Navigate to='/login' />) : (<div>Please Signup</div>)}
                {/* ?<pre className='pretext'>{JSON.stringify(formValues, undefined, 2)}</pre> */}
                <div className="signup">
                    <form onSubmit={handleSubmit}>
                        <label for="chk" aria-hidden="true">Sign up</label>
                        <input  type="text" name="username" placeholder="User name" required="" value={formValues.username} onChange={handleChange} />
                        <p className='error'>{formErrorValues.username}</p>
                        <input  type="email" name="email" placeholder="Email" required="" value={formValues.email} onChange={handleChange} />
                        <p className='error'>{formErrorValues.email}</p>
                        <input  type="password" name="password" placeholder="Password" required="" value={formValues.password} onChange={handleChange} />
                        <p className='error'>{formErrorValues.password}</p>
                        <button >Sign up</button>

                    </form>
                </div>

        
           
            </div>
        </div>
    );
}

export default SignupPage;


// import React , {useState} from 'react'
// import axios from "axios";


// const Register = () => {
//     const [user,setUser] = useState({
//         name:"",
//         email:"",
//         password: ""
//     })
//     const handleChange = e =>{
//     const {name,value} = e.target
//     setUser({
//     ...user,//spread operator 
//     [name]:value
//     })
//     }
// //register function 
//    const egister = ()=>{
//    const {name,email,password} = user
//    if (name && email && password){
//     axios.post("http://localhost:8000/Register",user )
//     .then(res=>console.log(res))
//    }
//    else{
//        alert("invalid input")
//    };

//     return (
//         <>    
// <div class="flex flex-col max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
//     <div class="self-center mb-2 text-xl font-light text-gray-800 sm:text-2xl dark:text-white">
//         Create a new account
//     </div>
//     <span class="justify-center text-sm text-center text-gray-500 flex-items-center dark:text-gray-400">
//         Already have an account ?
//         <button class="text-sm text-blue-500 underline hover:text-blue-700">
//             Sign in
//         </button>
//     </span>
//     <div class="p-6 mt-8">
//         <form action="#">
//             <div class="flex flex-col mb-2">
//                 <div class=" relative ">
//                     <input type="text" id="create-account-pseudo" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="name" value={user.name} onChange={handleChange} placeholder="FullName"/>
//                     </div>
//                 </div>
//                 <div class="flex gap-4 mb-2">
//                     <div class=" relative ">
//                         <input type="text" id="create-account-first-name" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="email" value={user.email} onChange={handleChange} placeholder="Email"/>
//                         </div>

//                         </div>
//                         <div class="flex flex-col mb-2">
//                             <div class=" relative ">
//                                 <input type="password" id="create-account-email" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="password" value={user.password} onChange={handleChange}    placeholder="password"/>
//                                 </div>
//                             </div>
//                             <div class="flex w-full my-4">
//                                 <button type="submit" class="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg " onClick={egister} >
//                                     Register
//                                 </button>
//                             </div>
//                         </form>


//                                                         </div>
//                                                     </div>

//         </>
//     )
// }
// }
// export default Register


