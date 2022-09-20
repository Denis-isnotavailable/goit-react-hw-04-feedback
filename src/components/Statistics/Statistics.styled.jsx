import styled from "styled-components";

export const StatisticsStyled = styled.ul`
    width: 220px;
    font-size: 18px;
    li:not(:last-child) {
        margin-bottom: 8px;

        :nth-child(3) {
            border-bottom: 2px solid black;
            padding-bottom: 8px;
        }
    }
    span {
        padding-left: 10px;
        padding-right: 10px;
        border-radius: 5px;
        background-color: #fffdd0;
    }
`;