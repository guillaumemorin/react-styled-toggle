import React from 'react';
import {withInfo, setDefaults} from '@storybook/addon-info';
import {withKnobs, text, boolean, number} from '@storybook/addon-knobs/react';
import {storiesOf} from '@storybook/react';

import Toggle from '../src';

setDefaults({
    header: false, // Toggles display of header with component name and description,
    inline: true, // Displays info inline vs click button to view
    source: true // Displays the source of story Component
});

const stories = storiesOf('react-styled-toggle', module);
stories
    .addDecorator((story, context) => withInfo('common info')(story)(context))
    .addDecorator(withKnobs)

    .add('Standard', () => <Toggle />)
    .add('Controlled component', () => (
        <Toggle
            disabled={boolean('disabled', false)}
            checked={boolean('checked', true)}
        />
    ))
    .add('Customized colors', () => (
        <Toggle
            backgroundColorChecked={'papayawhip'}
            backgroundColorUnchecked={'aquamarine'}
        />
    ))
    .add('Customized size', () => (
        <Toggle
            width={40}
            height={20}
            sliderWidth={12}
            sliderHeight={12}
            translate={19}
        />
    ))
    .add('Set name and value of input', () => (
        <Toggle name={'toggle'} value={'toggleValue'} />
    ))
    .add('Label right', () => <Toggle labelRight={'Label'} />)
    .add('Label left', () => <Toggle labelLeft={'Label'} />);
