//Get user experience and environment variables
//then aggregate it with the previously collected
//values 

function getVisitorDetails(){
    let agent = '';
    if(window.navigator.userAgent){
        agent = window.navigator.userAgent;
    }
    else{
        agent = window.navigator.appName;
    };
    let w = window.innerWidth;
    let h = window.innerHeight;
    let platform = navigator.platform;
    return {width:w,height:h,agent:agent,platform:platform}
};

function storeVisitorDetails(){
    fetch('/sendVisitorDetails')
    .then((reply)=>{
        console.log(reply);
    })
    .catch((err)=>{
        console.log(err);
    });
};