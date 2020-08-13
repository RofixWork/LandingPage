import styled from 'styled-components'

export const ContactUs = styled.section`
    padding: 80px 0;
    .form-control {
        border: none !important;
        border-bottom : 1px solid crimson !important;
        border-radius: 0 !important;
    }
    .form-control:focus {
        box-shadow:none !important;
    }

    .contact-content {
        .icon {
            background: #f5f5ff;
            color: crimson;
            border-radius: 50%;
            width: 45px;
            height: 45px;
            text-align: center;
            line-height: 45px;
            font-size: 18px;
            display: inline-block;
        }
        p{
            color:crimson;
        }
    }
`