import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from 'sweetalert2'
import { updateProfile } from "firebase/auth";



const Register = () => {

    const {newUser}=useContext(AuthContext)
    const [errorMessage, setErrorMessage ]=useState('')
   
    

    const handleRegister=(e)=>{
        e.preventDefault();
        // console.log('register')

        const form=new FormData(e.currentTarget);
        const name =form.get('name');
        
        // const photo=form.get('photo');
        const email =form.get('email');
        const password =form.get('password');
        // console.log(name, photo, email, password)
        


        if(password.length <6){
          Swal.fire({
            icon: 'error',
            title: 'Your password should be up to 6 characters',
            
          
          })
      }
      else if(!/[A-Z]/.test(password)){
        Swal.fire({
          icon: 'error',
          title: 'Your Password Should have at least one upper case character',
          
        
        })
          return;
      }else if(!/[!@#$%^&*()_+]/.test(password)){
        Swal.fire({
          icon: 'error',
          title: 'Your Password Should have at least one special character',
          
        
        })
          return;
      }


        // new user
        newUser(email, password)
        .then(result=>{
            console.log(result.user)

            updateProfile(result.user,{
              displayName:name
            }).then()
            .catch(error=>{
              console.log(error)
            })

            Swal.fire({
              icon: 'success',
              title: 'user created successfully',
              
            
            })

            e.target.reset()
        })

        .catch(error=>{
            console.log(error)
            setErrorMessage(error.message)
            
        })

        
        
    }

    return (
        <div className="md:mb-28">
        
      <h2 className="text-3xl my-10 text-center">Please Register</h2>
      <form onSubmit={handleRegister} className=" mx-auto md:w-3/4 lg:w-1/2">
      <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="your name"
                    className="input input-bordered"
                    name="name"
                    required
                  />
                </div>
      <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Photo url"
                    className="input input-bordered"
                    name="photo"
                   
                  />
                </div>
      <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    name="email"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    name="password"
                    required
                  />
                  
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-accent">Register</button>
                </div>
               
      </form>
      
      

     <div>
     
      <p className="text-center mt-4">Alreday have an account ?<Link className="text-blue-700 font-bold" to='/login'>Please Signin</Link></p>
     </div>
  
      {
        errorMessage && <p className="text-red-600 text-center pt-3 ">Error: {errorMessage}</p>
      }
      </div>
    );
};


export default Register;