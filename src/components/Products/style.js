import styled from 'styled-components';

export const Product = styled.section`
    padding: 80px 0;

    .pr-content {
        .pr-img {
            border-bottom: 2px solid #f4f4f4;
        }
        .pr-price {
            
            .new-price {
                font-weight: 700;
                font-size: 20px;
                color: crimson;
            }
            .old-price {
                text-decoration: line-through;
                font-size: 18px;
            }
        }
        &:hover {
            cursor: pointer;
        }
    }
` 