const user ={
    username : "daksh",
    loginCount :3,
    signedIn : true,

    getDeatils : function(){
        //console.log("got detalis from databse");
        console.log(`userame : ${this.username}`);
        
        
    }
}

console.log(user.username);
