import styled from "styled-components";
import { Form, Field } from "formik";

export const StyledFormContacts = styled(Form)`
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: start;
    border: 1px solid black;
    width: 400px;
    padding: 10px;
`;

export const StyledInput = styled(Field)`
    width: 170px;
`;

export const StyledFromLabel = styled.label`
    display: flex;
    flex-direction: column;
    gap: 5px;
    font-size: 18px;
    font-weight: 600;
`;

export const StyledFormButton = styled.button`
    background-color: transparent;
    border-radius: 5px;
    border: 1px solid gray;
    cursor: pointer;

    &:hover,
    &:focus {
        background-color: aqua;
    }

`;

export const StyledErrorText = styled.p`
    color: red;
    font-size: 14px;
    margin: 0;
`