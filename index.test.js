import React from 'react'
import Toggle from './src'
import renderer from 'react-test-renderer'

it('Standard output', () => {
    const tree = renderer.create(<Toggle />).toJSON()
    expect(tree).toMatchSnapshot()
})

it('Disabled status', () => {
    const tree = renderer.create(<Toggle disabled={true} />).toJSON()
    expect(tree).toMatchSnapshot()
})

it('Checked status', () => {
    const tree = renderer.create(<Toggle checked={true} />).toJSON()
    expect(tree).toMatchSnapshot()
})

it('Display right label', () => {
    const tree = renderer.create(<Toggle labelRight={'Label'} />).toJSON()
    expect(tree).toMatchSnapshot()
})

it('Display left label', () => {
    const tree = renderer.create(<Toggle labelLeft={'Label'} />).toJSON()
    expect(tree).toMatchSnapshot()
})

it('Display left label', () => {
    const tree = renderer.create(<Toggle labelLeft={'Label'} />).toJSON()
    expect(tree).toMatchSnapshot()
})

it('Display custom background colors', () => {
    const tree = renderer
        .create(
            <Toggle
                backgroundColorChecked={'papayawhip'}
                backgroundColorUnchecked={'aquamarine'}
            />
        )
        .toJSON()
    expect(tree).toMatchSnapshot()
})

it('Set input name and value', () => {
    const tree = renderer
        .create(<Toggle name={'toggle'} value={'toggleValue'} />)
        .toJSON()
    expect(tree).toMatchSnapshot()
})

it('Display custom sizes', () => {
    const tree = renderer
        .create(
            <Toggle
                width={40}
                height={20}
                sliderWidth={12}
                sliderHeight={12}
                translate={19}
            />
        )
        .toJSON()
    expect(tree).toMatchSnapshot()
})
