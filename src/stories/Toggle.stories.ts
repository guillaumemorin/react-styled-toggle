import type { Meta, StoryObj } from '@storybook/react'

import Toggle from '../index'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    title: 'Toggle button',
    component: Toggle,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: { onChange: { action: 'onChange' } },
} satisfies Meta<typeof Toggle>

export default meta
type Story = StoryObj<typeof meta>

export const Standard: Story = {
    args: {},
}

export const Controlled: Story = {
    args: { disabled: false, checked: true },
}

export const CustomizedColors: Story = {
    args: {
        backgroundColorChecked: 'papayawhip',
        backgroundColorUnchecked: 'aquamarine',
    },
}

export const CustomizedSize: Story = {
    args: {
        width: 40,
        height: 20,
        sliderWidth: 12,
        sliderHeight: 12,
        translate: 19,
    },
}

export const LabelRight: Story = {
    args: {
        labelRight: 'Label',
    },
}

export const LabelLeft: Story = {
    args: {
        labelLeft: 'Label',
    },
}
