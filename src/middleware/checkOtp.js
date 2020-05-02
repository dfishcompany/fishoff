const jwt = require("jsonwebtoken");

const checkOtp = async function(req,res,next) {
  try{

     let token = req.headers['x-access-token'] || req.headers['authorization']; // Express headers are auto converted to lowercase
     if (token.startsWith('bearer ')) {
      // Remove Bearer from string
      token = token.slice(7, token.length);
      if(token){

        var data  = jwt.verify(token, "fishoff-Dibin_Anna-project");

        if(req.body.otp && req.body.otp == data.otp){
            next();
        }
        else{
            throw new Error("incorrect OTP");
        }
      
      }else {
        throw new Error("Auth token is not supplied")
      }
    }else {
      throw new Error("Auth token is not supplied")
    }
  }catch(e){
    res.status(401).json({
      status : false,
      errorMessage : e.message,
      message : "NOT AUTHORIED"
    });
  }
}


module.exports = checkOtp;