function CheckValidData(email,password,name){
let emailRegex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
let passwordRegex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)
let nameRegex=/^[a-zA-Z\\s]+$/.test(name);

if(!emailRegex) return "invalid Email Id";
if(!passwordRegex) return "please check the Password";
if(!nameRegex) return"invalid Name" ;
}

export default CheckValidData;