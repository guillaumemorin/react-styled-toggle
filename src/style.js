import styled from 'styled-components';

const GlobalContainer = styled.label`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const InputContainer = styled.label`
    position: relative;
    display: inline-block;
    width: ${props => props.width}px;
    height: ${props => props.height}px;
    > input {
        display: none;
    }
`;

const Input = styled.input`
    &:checked + span {
        background-color: ${props => props.backgroundColorChecked};
    }
    &:disabled + span {
        background-color: ${props => props.backgroundColorUnchecked};
        opacity: 0.4;
        cursor: not-allowed;
    }
    &:disabled:checked + span {
        background-color: ${props => props.backgroundColorChecked};
        opacity: 0.4;
        cursor: not-allowed;
    }
    &:focus + span {
        box-shadow: 0 0 1px #2196f3;
    }
    &:checked + span:before {
        -webkit-transform: translateX(${props => props.translate}px);
        -ms-transform: translateX(${props => props.translate}px);
        transform: translateX(${props => props.translate}px);
    }
`;

const Slider = styled.span`
    position: absolute;
    cursor: pointer;
    display: flex;
    align-items: center;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${props => props.backgroundColorUnchecked};
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 34px;
    &:before {
        position: relative;
        border-radius: 50%;
        content: '';
        height: ${props => props.sliderHeight}px;
        width: ${props => props.sliderWidth}px;
        left: 4px;
        background-color: ${props => props.backgroundColorButton};
        -webkit-transition: 0.4s;
        transition: 0.4s;
    }
`;

const Label = styled.span`
    color: #777;
    font-size: 15px;
    padding: 0 10px;
`;

export {GlobalContainer, InputContainer, Input, Label, Slider};
