// fronted/src/ValidationFolder/resetvalidation
function validation(values){
    let error ={}
    const email_pattern= /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if(values.email === ""){
        error.email = "Email should not be empty"
    }
    else if (!email_pattern.test(values.email)){
        error.email = "Email not legal"
    }else{
        error.email= ""
    }


    return error;
}

export default validation;