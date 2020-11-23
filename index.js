var userLoggedIn = true;

function checkUserLoggedIn() {
var promise = new Promise((resolve,reject)=>{
    
    //wait for a second
    setTimeout(()=>{

        //check is user login or not
        if (userLoggedIn){
            
            //Promise is resolved
            resolve("Login Success");
        }else{
            //promise is rejest
            reject("Login Faild");
        }
        
    }, 1000);

});

    return promise;
}




checkUserLoggedIn().then((successMsg)=>{
    console.log(successMsg);
    


}).catch((errorMsg)=>{
    console.log(errorMsg);
});


