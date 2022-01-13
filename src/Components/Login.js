import React from "react";

class Login extends React.Components{

    state={
        email:'',
        password:''
    }



    handleChange = (e) => {
        const  {name,value} = e.target;
        this.setState({[name]:value})

    }

    handleSubmit = (e) => {


    }

    render(){
        return(
            <div>
                <div>
                    <form>
                        <input type="email" name='email' placeholder="Enter Your email..." required onChange={this.handleChange} />
                        <input type="password" name='password' placeholder="Enter your password..." required onChange={this.handleChange} />

                        <button onSubmit={this.handleSubmit}>Log In</button>
                    </form>
                </div>
            </div>
        )
    }
}
export default Login;


