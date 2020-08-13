import styled from 'styled-components';

export const Header = styled.header`
    background-color:crimson;
    .navbar {
        padding:0;
        /*Logo*/
        .navbar-brand {
            font-size: 32px;
            color: white;
            font-weight: 700;
            letter-spacing: 1.5px;
            .logo-brand {
                display: inline-block;
                width: 30px;
                height: 30px;
                border: 3px solid white;
                border-radius: 50%;
                margin-bottom: -3px;
                margin-right: 4px;
                position:relative;
                &::before {
                    content: '';
                    width: 10px;
                    height:10px;
                    display:block;
                    background-color:white;
                    position: absolute;
                    border-radius: 50%;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%,-50%);
                }
            }
        }
        /*navbar-toggler*/
        .navbar-toggler {
            border: 2px solid white;
            padding: 3px 12px;
            &:focus {
                box-shadow:none !important;
            }
            .icon {
                color:white;
                font-size: 25px;
            }
        }
        .navbar-nav .nav-item {
            /*Links*/
            .nav-link {
                color: white !important;
                padding: 15px 16px;
                line-height: 30px;
                font-size: 16px;
                opacity: .8;
                transition:color .4s;
                font-weight: 500;
                &.active, 
                &:hover{
                    opacity: 1;
                }
            }
        }
    }
` 