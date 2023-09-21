

const jwt=require('jsonwebtoken')

const Authorization=(req,res,next)=>{
    const token= req.headers.authorization;
console.log("dsdssddsds",token)
    if(token){
        jwt.verify(token, 'BOAT', function(err, decoded) {
            if(decoded){
                req.body.UserId=decoded.UserId
                next()
            }else{
                res.send({"msg":"Token didn't match, Please Login First!"})
            }
          });  
    }else{
        res.send({"msg":"Please Login First!"})
    }

}


module.exports={
    Authorization
}