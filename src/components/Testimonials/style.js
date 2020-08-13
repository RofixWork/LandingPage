import styled from 'styled-components'
export const Testimonial = styled.section`
    padding: 80px 0;
    background-color:crimson;
    color:white;
    .test-content {
        color: #6d6d6d;
        .test-comment {
            font-size: 17px;
        }
        .user-name{
            color:crimson;
            font-size:17px;
        }
        .user-post {
            font-size:15px;
        }

        .test-list {
            li{
                margin-right: 5px;
                .icon {
                    color:#ff9800;
                }
            }
        }
    }
` 