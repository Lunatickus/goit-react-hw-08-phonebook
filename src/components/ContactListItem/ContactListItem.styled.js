import styled from "styled-components";

export const StyledContactListItem = styled.li`
    font-size: 18px;
`;

export const StyledDeleteButton = styled.button`
    background-color: transparent;
    border-radius: 5px;
    border: 1px solid gray;
    cursor: pointer;
    margin-left: 10px;

    &:hover,
    &:focus {
        background-color: aqua;
    }

`