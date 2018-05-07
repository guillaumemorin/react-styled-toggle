import React from 'react';
import PropTypes from 'prop-types';
import {GlobalContainer, InputContainer, Label, Slider, Input} from './style';

const Toggle = props => {
    const {
        onChange,
        checked,
        disabled,
        width,
        height,
        translate,
        backgroundColorChecked,
        backgroundColorUnchecked,
        backgroundColorButton,
        name,
        value,
        labelRight,
        labelLeft,
        sliderWidth,
        sliderHeight
    } = props;
    return (
        <GlobalContainer>
            {labelLeft && <Label>{labelLeft}</Label>}
            <InputContainer onChange={onChange} width={width} height={height}>
                <Input
                    type="checkbox"
                    name={name}
                    value={value}
                    checked={checked}
                    disabled={disabled}
                    translate={translate}
                    backgroundColorChecked={backgroundColorChecked}
                />
                <Slider
                    sliderWidth={sliderWidth}
                    sliderHeight={sliderHeight}
                    backgroundColorUnchecked={backgroundColorUnchecked}
                    backgroundColorButton={backgroundColorButton}
                />
            </InputContainer>
            {labelRight && <Label>{labelRight}</Label>}
        </GlobalContainer>
    );
};

Toggle.propTypes = {
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    backgroundColorChecked: PropTypes.string,
    backgroundColorUnchecked: PropTypes.string,
    backgroundColorButton: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    labelRight: PropTypes.string,
    labelLeft: PropTypes.string,
    sliderWidth: PropTypes.number,
    sliderHeight: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
    translate: PropTypes.number
};

Toggle.defaultProps = {
    backgroundColorChecked: '#2193F3',
    backgroundColorUnchecked: '#ccc',
    backgroundColorButton: '#fff',
    sliderWidth: 26,
    sliderHeight: 26,
    width: 60,
    height: 34,
    translate: 26
};

export default Toggle;
