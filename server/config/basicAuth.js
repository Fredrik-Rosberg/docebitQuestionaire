
function authUser(req, res, next){
    let user=req.session.user

    if(user==null){
        res.status(403)
        return res.send("you need to sign in")
    }
    next()
    // else{
        
    //     res.status(200)
    //     return res.send(user)
        
    // }
}
module.exports={authUser}