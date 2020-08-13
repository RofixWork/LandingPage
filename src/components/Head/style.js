import styled from 'styled-components'

export const Home = styled.section`
    background-color:crimson;
    height:100vh;
    width:100%;
    color:white;
    position:relative;
    padding: 250px 0;
    @media (max-width: 767px){
        padding: 150px 0;
        height:auto;
    }

    .shapes div{
        position: absolute;
        opacity: .3;
        background-color: white;
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }
    .shapes div:nth-child(1) {
        top: 20%;
        left: 80px;
        animation: animate2 5s linear infinite;
    }
    .shapes div:nth-child(2) {
        bottom: 20%;
        right: 80px;
        animation: animate2 7s linear infinite;
    }
    .shapes div:nth-child(3) {
        top: 40%;
        left: 55%;
        animation: animate3 8s linear infinite;
        width:80px;
        height: 80px;
    }
    .home-section {
        .home-title {
            font-weight:700; 
            text-transform: capitalize;
            font-size:50px;
        }
        .home-desc {
            line-height:30px;
        }
        .btn {
            border: 2px solid white !important;
            font-size:17px;
            padding: 10px 25px;
            
        }
        @media (max-width: 767px){
            .home-title {
                font-size:30px;
            }
            .home-desc {
                line-height:30px;
                font-size: 15px;
            }
        }
    }
    .home-img {
        position: relative;
        img {
            max-width: 400px;
            width: 100%;
            position: absolute;
            top: -200px;
            left: 120px;
            animation: animate 5s linear infinite;
            
        }

        @keyframes animate {
            0%, 100% {
                transform: translateY(-15px)
            }
            50% {
                transform: translateY(15px)
            }
        }
        @keyframes animate2 {
            0%, 100% {
                transform: translateX(50px),               
                
            }
            50% {
                transform: translateX(-50px)
            }
        }
        @keyframes animate3 {
            0%, 100% {
                transform: translateY(50px),               
                
            }
            50% {
                transform: translateY(-50px)
            }
        }
    }
    
` 