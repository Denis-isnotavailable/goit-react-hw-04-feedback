import styled from "styled-components";

export const FeedbackOptionsStyled = styled.ul`
    display: flex;
    li:not(:last-child) {
        margin-right: 15px;         
    }

    button {
        border-radius: 5px;
        font-size: 16px;
        background-color: #e0e0e0;
        cursor: pointer;        
    }    
`;