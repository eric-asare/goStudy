

const generateSTYLYING = () =>{
    return `
    
    <style>
    @import url(https://fonts.googleapis.com/css?family=Gilda+Display);

    html {
       background: radial-gradient(#000, #111);
       background-image: url("https://source.unsplash.com/T26KCgCPsCI");
       background-size: cover; 
       color: white;
       background-color: black;
       overflow: hidden;
       height: 100%;
       user-select: none;
    }
    
    
    /* Animations */
    
    @keyframes noise-1 {
        0%,
        20%,
        40%,
        60%,
        70%,
        90% {
           opacity: 0;
        }
        10% {
           opacity: 0.1;
        }
        50% {
           opacity: 0.5;
           left: -6px;
        }
        80% {
           opacity: 0.3;
        }
        100% {
           opacity: 0.6;
           left: 2px;
        }
     }
     
     @keyframes noise-2 {
        0%,
        20%,
        40%,
        60%,
        70%,
        90% {
           opacity: 0;
        }
        10% {
           opacity: 0.1;
        }
        50% {
           opacity: 0.5;
           left: 6px;
        }
        80% {
           opacity: 0.3;
        }
        100% {
           opacity: 0.6;
           left: -2px;
        }
     }
     
     @keyframes noise {
        0%,
        3%,
        5%,
        42%,
        44%,
        100% {
           opacity: 1;
           transform: scaleY(1);
        }
        4.3% {
           opacity: 1;
           transform: scaleY(1.7);
        }
        43% {
           opacity: 1;
           transform: scaleX(1.5);
        }
     }
     
    
     .astronaut img{
       width:100px;
       position:absolute;
       top:55%;
       animation:astronautFly 6s infinite linear;
     }
     @keyframes astronautFly{
       0%{
         left:-100px;
       }
       25%{
         top:50%;
         transform:rotate(30deg);
       }
       50%{
         transform:rotate(45deg);
         top:55%;
       }
       75%{
         top:60%;
         transform:rotate(30deg);
       }
       100%{
         left:110%;
         transform:rotate(45deg);
       }
     }
     
    
     /* Page Content */
    
    .page-content{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
     }
    
    
     .page-content footer{
        font-family: "Gilda Display", serif;
        position: absolute;
        margin-top: 90vh;
    }
    
    
    .page-content .action{
        text-align: center;
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif, serif;
        margin-left: 50px;
        font-size: 25px;
        font-style: italic;
        animation: noise-2 2.5s linear infinite; 
        color: white;
     }
    
     .page-main .motivation {
        
        font-family: Papyrus;
        font-size: 20px;
        font-style:italic;
        text-align: center;
     }
     
    
    
    .page-main .error {
        text-align: center;
        font-family: "Gilda Display", serif;
        font-size: 95px;
        font-style: italic;
        text-align: center;
        line-height: 60px;
        animation: noise 2s linear infinite;
        overflow: default;
     }
     
     .page-main .error:before {
        content: "Oops!";
        font-family: "Gilda Display", serif;
        font-size: 100px;
        font-style: italic;
        text-align: center;
        margin: auto;
        position: absolute;
        color: red;
        animation: noise-2 0.2s linear infinite;
     }
     
     .page-main .error:after {
        content: "Oops!";
        font-family: "Gilda Display", serif;
        font-size: 100px;
        font-style: italic;
        text-align: center;
        height: 100px;
        margin: auto;
        position: absolute;
        color: blue;
        animation: noise-1 0.2s linear infinite;
     }

     #pName {
         color:#e0aaff;
     }
     </style>
    `
}

const generateHTML = (pageName) =>{
    return`
        <div class="page-content">
            <section class="page-main">
                <div class="error">Oops!</div>
                <br/><br/>
                <span class="action">GO STUDY!</span>
                <br /><br />
                <p class="motivation"> Enjoy  <span id = "pName" > ${pageName} </span>  Later </p>
            </section>
            <div class="astronaut">
                <img src="https://images.vexels.com/media/users/3/152639/isolated/preview/506b575739e90613428cdb399175e2c8-space-astronaut-cartoon-by-vexels.png"
                    alt="" class="src">
            </div>
            <footer class="footer">
                <p>Eric Asare Copyright &copy; 2021</p>
            </footer>
        </div>`
}


// LOGIC

switch(window.location.hostname){
    case "web.whatsapp.com":
        document.head.innerHTML = generateSTYLYING();
        document.body.innerHTML = generateHTML("WhatsApp");
        break;
    case "web.telegram.org":
        document.head.innerHTML = generateSTYLYING();
        document.body.innerHTML = generateHTML("Telegram");
        break;
    case "www.linkedin.com":
        document.head.innerHTML = generateSTYLYING();
        document.body.innerHTML = generateHTML("LinkedIn");
        break;

    case "facebook.com":
        document.head.innerHTML = generateSTYLYING();
        document.body.innerHTML = generateHTML("Facebook");
        break;

    case "discord.com":
        document.head.innerHTML = generateSTYLYING();
        document.body.innerHTML = generateHTML("Discord");
        break;

    case "www.reddit.com":
        document.head.innerHTML = generateSTYLYING();
        document.body.innerHTML = generateHTML("Reddit");
        break;

}