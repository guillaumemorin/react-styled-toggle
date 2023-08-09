import React from 'react'

import { GlobalContainer, InputContainer, Label, Slider, Input } from './style'

export type ToggleProps = {
    name?: string
    value?: string
    checked?: boolean
    disabled?: boolean
    labelRight?: string
    labelLeft?: string
    width?: number
    height?: number
    translate?: number
    sliderWidth?: number
    sliderHeight?: number
    backgroundColorChecked?: string
    backgroundColorUnchecked?: string
    backgroundColorButton?: string
    onChange?: () => void
}

const Toggle = ({
    name,
    value,
    checked,
    disabled,
    labelRight,
    labelLeft,
    width = 60,
    height = 34,
    translate = 26,
    sliderWidth = 26,
    sliderHeight = 26,
    backgroundColorChecked = '#2193F3',
    backgroundColorUnchecked = '#ccc',
    backgroundColorButton = '#fff',
    onChange,
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

export default Toggle
