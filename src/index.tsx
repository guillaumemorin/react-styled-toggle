import React from 'react'
import { GlobalContainer, InputContainer, Label, Slider, Input } from './style'

export type ToggleProps = {
    checked: boolean
    disabled: boolean
    onChange: () => void
    backgroundColorChecked: string
    backgroundColorUnchecked: string
    backgroundColorButton: string
    name: string
    value: string
    labelRight: string
    labelLeft: string
    sliderWidth: number
    sliderHeight: number
    width: number
    height: number
    translate: any
}

const Toggle = ({
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
    sliderHeight,
}: ToggleProps) => {
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
                    backgroundColorUnchecked={backgroundColorUnchecked}
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
    )
}

Toggle.defaultProps = {
    backgroundColorChecked: '#2193F3',
    backgroundColorUnchecked: '#ccc',
    backgroundColorButton: '#fff',
    sliderWidth: 26,
    sliderHeight: 26,
    width: 60,
    height: 34,
    translate: 26,
}

export default Toggle
