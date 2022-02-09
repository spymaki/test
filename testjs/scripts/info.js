class Userinfo {
    constructor() {
        this.timeOpened = new Date();
        this.timezone = (new Date()).getTimezoneOffset()/60  
    }
    
    pageon(){
        return window.location.pathname;
    }
    referrer(){
        return document.referrer
    }
    async ip(){
        let res = await( await fetch('https://api.db-ip.com/v2/free/self'));
        let data = await res.json();
        return data;
    }
    
}

