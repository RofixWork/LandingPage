(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[0],{28:function(e,t,a){e.exports=a(68)},33:function(e,t,a){},34:function(e,t,a){},37:function(e,t,a){e.exports=a.p+"static/media/watch-01.395a0a2a.png"},38:function(e,t,a){e.exports=a.p+"static/media/watch-02.6323c9cb.jpg"},57:function(e,t,a){var n={"./1.jpg":58,"./2.jpg":59,"./3.jpg":60,"./4.jpg":61,"./5.jpg":62};function i(e){var t=c(e);return a(t)}function c(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=c,e.exports=i,i.id=57},58:function(e,t,a){e.exports=a.p+"static/media/1.22915690.jpg"},59:function(e,t,a){e.exports=a.p+"static/media/2.140aab7d.jpg"},60:function(e,t,a){e.exports=a.p+"static/media/3.78e6fbeb.jpg"},61:function(e,t,a){e.exports=a.p+"static/media/4.a348aad4.jpg"},62:function(e,t,a){e.exports=a.p+"static/media/5.140aab7d.jpg"},63:function(e,t,a){var n={"./1.jpg":64,"./2.jpg":65,"./3.jpg":66};function i(e){var t=c(e);return a(t)}function c(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=c,e.exports=i,i.id=63},64:function(e,t,a){e.exports=a.p+"static/media/1.00d7213c.jpg"},65:function(e,t,a){e.exports=a.p+"static/media/2.31387364.jpg"},66:function(e,t,a){e.exports=a.p+"static/media/3.ec4ad7c5.jpg"},67:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(23),l=a.n(c),r=(a(33),a(34),a(24)),o=a(12),s=a(2),m=a(1);function d(){var e=Object(s.a)(["\n    background-color:crimson;\n    .navbar {\n        padding:0;\n        /*Logo*/\n        .navbar-brand {\n            font-size: 32px;\n            color: white;\n            font-weight: 700;\n            letter-spacing: 1.5px;\n            .logo-brand {\n                display: inline-block;\n                width: 30px;\n                height: 30px;\n                border: 3px solid white;\n                border-radius: 50%;\n                margin-bottom: -3px;\n                margin-right: 4px;\n                position:relative;\n                &::before {\n                    content: '';\n                    width: 10px;\n                    height:10px;\n                    display:block;\n                    background-color:white;\n                    position: absolute;\n                    border-radius: 50%;\n                    left: 50%;\n                    top: 50%;\n                    transform: translate(-50%,-50%);\n                }\n            }\n        }\n        /*navbar-toggler*/\n        .navbar-toggler {\n            border: 2px solid white;\n            padding: 3px 12px;\n            &:focus {\n                box-shadow:none !important;\n            }\n            .icon {\n                color:white;\n                font-size: 25px;\n            }\n        }\n        .navbar-nav .nav-item {\n            /*Links*/\n            .nav-link {\n                color: white !important;\n                padding: 15px 16px;\n                line-height: 30px;\n                font-size: 16px;\n                opacity: .8;\n                transition:color .4s;\n                font-weight: 500;\n                &.active, \n                &:hover{\n                    opacity: 1;\n                }\n            }\n        }\n    }\n"]);return d=function(){return e},e}var u=m.a.header(d()),p=function(){var e=Object(n.useState)([{titleNav:"Home",cName:"nav-link active",url:"#home"},{titleNav:"About",cName:"nav-link",url:"#about"},{titleNav:"Features",cName:"nav-link",url:"#feat"},{titleNav:"Products",cName:"nav-link",url:"#products"},{titleNav:"Testimonial",cName:"nav-link",url:"#testimonials"},{titleNav:"Faq",cName:"nav-link",url:"#faq"},{titleNav:"Contact",cName:"nav-link",url:"#contact"}]),t=Object(o.a)(e,1)[0],a=Object(n.useState)(!1),c=Object(o.a)(a,2),l=c[0],s=c[1];return Object(n.useEffect)((function(){var e=document.querySelectorAll(".nav-item .nav-link");return e.forEach((function(t){t.addEventListener("click",(function(){var a,n=Object(r.a)(e);try{for(n.s();!(a=n.n()).done;){a.value.classList.remove("active")}}catch(i){n.e(i)}finally{n.f()}t.classList.contains("active")?t.classList.remove("active"):t.classList.add("active")}))})),function(){e.forEach((function(e){e.removeEventListener("click")}))}}),[]),i.a.createElement(u,{className:"shadow-lg fixed-top"},i.a.createElement("div",{className:"container"},i.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light"},i.a.createElement("div",{className:"container-fluid"},i.a.createElement("a",{className:"navbar-brand text-uppercase",href:"#"},i.a.createElement("span",{className:"logo-brand"}),"shala"),i.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",onClick:function(){s(!l)}},i.a.createElement("i",{className:l?"fa fa-times icon":"fa fa-bars icon"})),i.a.createElement("div",{className:"collapse navbar-collapse text-center",id:"navbarNav"},i.a.createElement("ul",{className:"navbar-nav ml-auto"},t.map((function(e,t){return i.a.createElement("li",{key:t,className:"nav-item"},i.a.createElement("a",{className:e.cName,href:e.url},e.titleNav))}))))))))};function f(){var e=Object(s.a)(["\n    background-color:crimson;\n    height:100vh;\n    width:100%;\n    color:white;\n    position:relative;\n    padding: 250px 0;\n    @media (max-width: 767px){\n        padding: 150px 0;\n        height:auto;\n    }\n\n    .shapes div{\n        position: absolute;\n        opacity: .3;\n        background-color: white;\n        width: 50px;\n        height: 50px;\n        border-radius: 50%;\n    }\n    .shapes div:nth-child(1) {\n        top: 20%;\n        left: 80px;\n        animation: animate2 5s linear infinite;\n    }\n    .shapes div:nth-child(2) {\n        bottom: 20%;\n        right: 80px;\n        animation: animate2 7s linear infinite;\n    }\n    .shapes div:nth-child(3) {\n        top: 40%;\n        left: 55%;\n        animation: animate3 8s linear infinite;\n        width:80px;\n        height: 80px;\n    }\n    .home-section {\n        .home-title {\n            font-weight:700; \n            text-transform: capitalize;\n            font-size:50px;\n        }\n        .home-desc {\n            line-height:30px;\n        }\n        .btn {\n            border: 2px solid white !important;\n            font-size:17px;\n            padding: 10px 25px;\n            \n        }\n        @media (max-width: 767px){\n            .home-title {\n                font-size:30px;\n            }\n            .home-desc {\n                line-height:30px;\n                font-size: 15px;\n            }\n        }\n    }\n    .home-img {\n        position: relative;\n        img {\n            max-width: 400px;\n            width: 100%;\n            position: absolute;\n            top: -200px;\n            left: 120px;\n            animation: animate 5s linear infinite;\n            \n        }\n\n        @keyframes animate {\n            0%, 100% {\n                transform: translateY(-15px)\n            }\n            50% {\n                transform: translateY(15px)\n            }\n        }\n        @keyframes animate2 {\n            0%, 100% {\n                transform: translateX(50px),               \n                \n            }\n            50% {\n                transform: translateX(-50px)\n            }\n        }\n        @keyframes animate3 {\n            0%, 100% {\n                transform: translateY(50px),               \n                \n            }\n            50% {\n                transform: translateY(-50px)\n            }\n        }\n    }\n    \n"]);return f=function(){return e},e}var g=m.a.section(f());var E=function(){return i.a.createElement(g,{id:"home"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"shapes"},i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null)),i.a.createElement("div",{className:"row align-items-center"},i.a.createElement("div",{className:"col-lg-6 "},i.a.createElement("div",{className:"home-section "},i.a.createElement("h1",{className:"home-title"},"Present your awesome product"),i.a.createElement("p",{className:"home-desc"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."),i.a.createElement("button",{className:"mt-2 mb-3 mt-lg-4 btn btn-outline-light rounded-pill btn-lg"},"Buy For $150"))),i.a.createElement("div",{className:"col-md-6 d-none d-lg-block"},i.a.createElement("div",{className:"home-img"},i.a.createElement("img",{src:a(37),className:"img-fluid",alt:""}))))))};function h(){var e=Object(s.a)(["\n    padding: 80px 0;\n    .about-img {\n        margin:auto;\n            max-width: 350px;\n    }\n    .about-content {\n        .about-desc {\n            line-height: 1.9;\n            color: #5a5a5a;\n            font-weight: 300;\n        }\n        \n    }\n    .list {\n        li {\n            color: #5a5a5a;\n            font-weight: 300;\n            .icon {\n                color: crimson;\n                font-size: 20px;\n            }\n        }\n    }\n"]);return h=function(){return e},e}var v=m.a.section(h()),N=function(){return i.a.createElement(v,{id:"about"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row "},i.a.createElement("div",{className:"col-md-6"},i.a.createElement("div",{className:"about-img"},i.a.createElement("img",{src:a(38),className:"img-fluid",alt:""}))),i.a.createElement("div",{className:"col-md-6"},i.a.createElement("div",null,i.a.createElement("div",{className:"about-content"},i.a.createElement("span",{className:"title"},"About Product"),i.a.createElement("h2",{className:"subTitle"},"Awesome digital watch can make your life easier"),i.a.createElement("p",{className:"about-desc"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.")),i.a.createElement("ul",{className:"list-unstyled lh-lg list"},i.a.createElement("li",null," ",i.a.createElement("i",{className:"fa fa-check icon"})," Our all products are high qualitye"),i.a.createElement("li",null," ",i.a.createElement("i",{className:"fa fa-check icon"})," Lorem ipsum dolor sit amet, consectetur adipiscing elit."),i.a.createElement("li",null," ",i.a.createElement("i",{className:"fa fa-check icon"})," Our all products are high qualitye"),i.a.createElement("li",null," ",i.a.createElement("i",{className:"fa fa-check icon"})," Lorem ipsum dolor sit amet, consectetur adipiscing elit.")))))))};function b(){var e=Object(s.a)(["\n    padding: 80px 0;\n    background-color: #f5f5ff;\n    .feat-content {\n        .icon {\n            color: crimson;\n            font-size: 30px;\n        }\n        .feat-desc {\n            font-size: 17px;\n        }\n    }\n"]);return b=function(){return e},e}var x=m.a.section(b()),w=[{icon:"fa fa-bell",title:"Notification Alert",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."},{icon:"fa fa-bluetooth",title:"Bluetooth",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."},{icon:"fa fa-wifi",title:"Support Wifi",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."},{icon:"fa fa-map-marker",title:"GPS Tracking",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."},{icon:"fa fa-comments",title:"Live Chat",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."},{icon:"fa fa-camera",title:"Camera",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."}],y=function(){return i.a.createElement(x,{id:"feat"},i.a.createElement("div",{className:"container text-center"},i.a.createElement("h5",{className:"title"},"Features"),i.a.createElement("h3",{className:"subTitle"},"Lorem ipsum dolor sit amet"),i.a.createElement("div",{className:"row mt-5 gy-3"},w.map((function(e,t){return i.a.createElement("div",{key:t,className:"col-md-4"},i.a.createElement("div",{className:"bg-white py-3 px-3 shadow rounded feat-content"},i.a.createElement("i",{className:"".concat(e.icon," icon mt-1")}),i.a.createElement("h3",{className:"feat-title mb-2 mt-2"},e.title),i.a.createElement("p",{className:"feat-desc parag"},e.desc)))})))))};function k(){var e=Object(s.a)(["\n    padding: 80px 0;\n\n    .pr-content {\n        .pr-img {\n            border-bottom: 2px solid #f4f4f4;\n        }\n        .pr-price {\n            \n            .new-price {\n                font-weight: 700;\n                font-size: 20px;\n                color: crimson;\n            }\n            .old-price {\n                text-decoration: line-through;\n                font-size: 18px;\n            }\n        }\n        &:hover {\n            cursor: pointer;\n        }\n    }\n"]);return k=function(){return e},e}var j=m.a.section(k()),L=[{id:1,img:"1.jpg",newPrice:89,oldPrice:140,title:"Simple Product 1"},{id:2,img:"2.jpg",newPrice:99,oldPrice:120,title:"Simple Product 2"},{id:3,img:"3.jpg",newPrice:100,oldPrice:150,title:"Simple Product 3"},{id:4,img:"4.jpg",newPrice:78,oldPrice:102,title:"Simple Product 4"},{id:5,img:"5.jpg",newPrice:22,oldPrice:35,title:"Simple Product 5"},{id:6,img:"1.jpg",newPrice:130,oldPrice:200,title:"Simple Product 6"}],P=a(10),q=a.n(P),O=(a(21),a(22),function(){return i.a.createElement(j,{id:"products"},i.a.createElement("div",{className:"container text-center"},i.a.createElement("h5",{className:"title"},"Our Products"),i.a.createElement("h3",{className:"subTitle"},"We have lots of excellent and high quality "),i.a.createElement("div",{className:"row mt-5"},i.a.createElement(q.a,{className:"owl-theme",loop:!0,margin:10,nav:!0,dots:!1,responsive:{0:{items:1},600:{items:3},1e3:{items:4}}},L.map((function(e){return i.a.createElement("div",{key:e.id,className:"col-md-12 item "},i.a.createElement("div",{className:"pr-content border"},i.a.createElement("div",{className:"pr-img"},i.a.createElement("img",{src:a(57)("./".concat(e.img)),className:"img-fluid",alt:""})),i.a.createElement("div",{className:"pr-price py-1"},i.a.createElement("span",{className:"new-price mr-2"},"$",e.newPrice),i.a.createElement("span",{className:"old-price"},"$",e.oldPrice)),i.a.createElement("div",{className:"pr-name pt-1 pb-2"},i.a.createElement("h5",null,e.title))))}))))))});function z(){var e=Object(s.a)(["\n    padding: 80px 0;\n    background-color:crimson;\n    color:white;\n    .test-content {\n        color: #6d6d6d;\n        .test-comment {\n            font-size: 17px;\n        }\n        .user-name{\n            color:crimson;\n            font-size:17px;\n        }\n        .user-post {\n            font-size:15px;\n        }\n\n        .test-list {\n            li{\n                margin-right: 5px;\n                .icon {\n                    color:#ff9800;\n                }\n            }\n        }\n    }\n"]);return z=function(){return e},e}var S=m.a.section(z()),C=[{id:1,comment:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",img:"1.jpg",userName:"Soshiv Upreti",userPost:"CEO WebShala"},{id:2,comment:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",img:"2.jpg",userName:"Pin Apple",userPost:"CEO WebShala"}],T=function(){return i.a.createElement(S,{id:"testimonials"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"text-center"},i.a.createElement("h5",{className:"title"},"Testimonial"),i.a.createElement("h3",{className:"subTitle"},"Our Satisfied Customer Feedback")),i.a.createElement("div",{className:"row gy-3 mt-4"},C.map((function(e){return i.a.createElement("div",{key:e.id,className:"col-lg-6"},i.a.createElement("div",{className:"test-content bg-white py-3 px-4 rounded"},i.a.createElement("p",{className:"parag test-comment font-italic"},i.a.createElement("i",{className:"fa fa-quote-left"})," ",e.comment," ",i.a.createElement("i",{className:"fa fa-quote-right"})),i.a.createElement("ul",{className:"list-unstyled d-flex test-list"},i.a.createElement("li",null,i.a.createElement("i",{className:"fa fa-star icon"})),i.a.createElement("li",null,i.a.createElement("i",{className:"fa fa-star icon"})),i.a.createElement("li",null,i.a.createElement("i",{className:"fa fa-star icon"})),i.a.createElement("li",null,i.a.createElement("i",{className:"fa fa-star-half-o icon"})),i.a.createElement("li",null,i.a.createElement("i",{className:"fa fa-star-half icon"}))),i.a.createElement("div",{className:"test-info d-flex align-items-center"},i.a.createElement("img",{src:a(63)("./".concat(e.img)),className:"img-fluid rounded-pill",alt:"",width:"70px"}),i.a.createElement("div",{className:"ml-3"},i.a.createElement("h5",{className:"user-name mb-0"},e.userName),i.a.createElement("span",{className:"user-post"},e.userPost)))))})))))};function F(){var e=Object(s.a)(["\n    padding:80px 0;\n\n    .faq-link {\n        color:crimson;\n        font-size:18px;\n    }\n"]);return F=function(){return e},e}var A=m.a.section(F()),I=[{title:"How can I buy the watch?",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{title:"How can I buy the watch?",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{title:"How can I buy the watch?",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{title:"How can I buy the watch?",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{title:"How can I buy the watch?",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{title:"How can I buy the watch?",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}],U=function(){return i.a.createElement(A,{id:"faq"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"text-center"},i.a.createElement("h5",{className:"title"},"Faq"),i.a.createElement("h3",{className:"subTitle"},"Frequently Asked Questions")),i.a.createElement("div",{className:"row gy-3 mt-4"},I.map((function(e,t){return i.a.createElement("div",{key:t,className:"col-md-6"},i.a.createElement("div",null,i.a.createElement("h5",null,e.title),i.a.createElement("p",{className:"parag"},e.desc)))})),i.a.createElement("span",{className:"text-center"},"Any Question? ",i.a.createElement("a",{href:"#",className:" text-decoration-none faq-link"},"info@domain.com")))))};function H(){var e=Object(s.a)(["\n    padding: 80px 0;\n    .form-control {\n        border: none !important;\n        border-bottom : 1px solid crimson !important;\n        border-radius: 0 !important;\n    }\n    .form-control:focus {\n        box-shadow:none !important;\n    }\n\n    .contact-content {\n        .icon {\n            background: #f5f5ff;\n            color: crimson;\n            border-radius: 50%;\n            width: 45px;\n            height: 45px;\n            text-align: center;\n            line-height: 45px;\n            font-size: 18px;\n            display: inline-block;\n        }\n        p{\n            color:crimson;\n        }\n    }\n"]);return H=function(){return e},e}var Y=m.a.section(H()),D=function(){return i.a.createElement(Y,{id:"contact"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"text-center"},i.a.createElement("h5",{className:"title"},"Contact Us"),i.a.createElement("h3",{className:"subTitle"},"Lorem ipsum dolor sit amet.")),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-8"},i.a.createElement("form",null,i.a.createElement("div",{className:"mb-4 d-flex"},i.a.createElement("input",{type:"text",className:"form-control mr-2",placeholder:"Your Name"}),i.a.createElement("input",{type:"email",className:"form-control",placeholder:"Your Email"})),i.a.createElement("div",{className:"mb-4"},i.a.createElement("input",{type:"text",className:"form-control mr-1",placeholder:"Subject"})),i.a.createElement("div",{className:"mb-4"},i.a.createElement("textarea",{className:"form-control",placeholder:"Message",rows:"8"})),i.a.createElement("button",{type:"submit",className:"btn btn-outline-danger rounded-pill px-3 py-2"},"Send Message"))),i.a.createElement("div",{className:"col-md-4  pl-2 pl-lg-4 mt-3 mt-lg-0 "},i.a.createElement("div",{className:"d-flex align-items-center contact-content mb-4"},i.a.createElement("i",{className:"fa fa-map-marker icon mr-2"}),i.a.createElement("div",null,i.a.createElement("p",{className:"mb-0 font-weight-bold"},"Location"),i.a.createElement("span",{className:"parag"},"B261 aqua Park, New Delhi,122222"))),i.a.createElement("div",{className:"d-flex align-items-center contact-content mb-4"},i.a.createElement("i",{className:"fa fa-envelope icon mr-2"}),i.a.createElement("div",null,i.a.createElement("p",{className:"mb-0 font-weight-bold"},"Email"),i.a.createElement("span",{className:"parag"},"info@yourdomain.com"))),i.a.createElement("div",{className:"d-flex align-items-center contact-content mb-4"},i.a.createElement("i",{className:"fa fa-phone icon mr-2"}),i.a.createElement("div",null,i.a.createElement("p",{className:"mb-0 font-weight-bold"},"Call us on"),i.a.createElement("span",{className:"parag"},"9100-000-000")))))))},W=(a(67),function(){return i.a.createElement("footer",{className:"text-center"},i.a.createElement("div",{className:"container text-white"},i.a.createElement("h2",{className:"text-uppercase font-weight-bold"},"shala"),i.a.createElement("p",{className:"parag text-white"},"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt praesentium sapiente sequi enim iusto!"),i.a.createElement("ul",{className:"d-flex list-unstyled justify-content-center"},i.a.createElement("li",null," ",i.a.createElement("i",{className:"fa fa-facebook icon"})," "),i.a.createElement("li",null," ",i.a.createElement("i",{className:"fa fa-instagram icon"})," "),i.a.createElement("li",null," ",i.a.createElement("i",{className:"fa fa-twitter icon"})," "),i.a.createElement("li",null," ",i.a.createElement("i",{className:"fa fa-youtube icon"})," "),i.a.createElement("li",null," ",i.a.createElement("i",{className:"fa fa-google icon"})," ")),i.a.createElement("div",{className:"border border-danger my-4"}),i.a.createElement("p",{className:"mb-0"},"\xa9 CopyRight 2020 - Rofix Street Workout")))});var B=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(p,null),i.a.createElement(E,null),i.a.createElement(N,null),i.a.createElement(y,null),i.a.createElement(O,null),i.a.createElement(T,null),i.a.createElement(U,null),i.a.createElement(D,null),i.a.createElement(W,null))};l.a.render(i.a.createElement(B,null),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.67c74751.chunk.js.map