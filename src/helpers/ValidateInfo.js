export default function validateInfo(values){
    let errors = {};

    if(!values.username.trim()){
        errors.username = "Username Required";
        console.log(errors.username);
    }

    const emailRegex = /^[ ]*([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})[ ]*$/i;
    if(!values.email){
        errors.email = "Email Required";
    }
    else if(!emailRegex.test(values.email)){
        errors.email = "Email address is invalid";
    }

    if(!values.password){
        errors.password = "Password Required";
        console.log(errors.password);
    }
    else if(values.password.length<6){
        errors.password = "Password must be at least 6 characters";
    }

    if(!values.confirmPassword){
        errors.confirmPassword = "Password is required";
    }
    else if(values.confirmPassword !== values.password){
        errors.confirmPassword = "Password do not match"; 
    }

    return errors;
}