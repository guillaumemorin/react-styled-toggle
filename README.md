<h1 align="center">
	React styled toggle
</h1>
<p align="center">
	<a href="https://badge.fury.io/js/react-styled-toggle"><img src="https://badge.fury.io/js/react-styled-toggle.svg" alt="npm version" height="18"></a>
	<img src="https://badges.frapsoft.com/typescript/code/typescript.svg?v=101" alt="npm version" height="18">
    <a href='https://github.com/prettier/prettier'> <img src='https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square' alt='code style: prettier'></a>
    <a href='https://github.com/styled-components/styled-components'> <img src='https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e' alt='style: styled-components'></a>
	<a href='https://github.com/facebook/jest'> <img src='https://facebook.github.io/jest/img/jest-badge.svg' alt='jest'></a>
</p>

<p align="center">
	<img src="https://raw.githubusercontent.com/guillaumemorin/react-styled-toggle/master/screenshot.png" width="300" />
</p>

## Demo

<a href="https://codesandbox.io/s/1vpwpm4nyl"> <img src="https://codesandbox.io/static/img/play-codesandbox.svg" alt="codesandebox" height="40"></a>

<a href="https://guillaumemorin.github.io/react-styled-toggle/"> <img src="https://cdn.jsdelivr.net/gh/storybookjs/brand@master/badge/badge-storybook.svg" alt="storybook" height="40"></a>


## Installation

```
yarn add react-styled-toggle
```

## Usage

```
import Toggle from 'react-styled-toggle';

render(){
	return <Toggle />
}
```

## Development

```
yarn storybook
```

## Build

```
yarn build
```

## Props

<table class="css-1ytzlk7"><thead><tr><th class="css-d52hbj">property</th><th class="css-d52hbj">propType</th><th class="css-d52hbj">required</th><th class="css-d52hbj">default</th><th class="css-d52hbj">description</th></tr></thead><tbody><tr><td class="css-1ygfcef">checked</td><td class="css-1ygfcef"><span>bool</span></td><td class="css-d52hbj">-</td><td class="css-d52hbj">-</td><td class="css-d52hbj"></td></tr><tr><td class="css-1ygfcef">disabled</td><td class="css-1ygfcef"><span>bool</span></td><td class="css-d52hbj">-</td><td class="css-d52hbj">-</td><td class="css-d52hbj"></td></tr><tr><td class="css-1ygfcef">onChange</td><td class="css-1ygfcef"><span>func</span></td><td class="css-d52hbj">-</td><td class="css-d52hbj">-</td><td class="css-d52hbj"></td></tr><tr><td class="css-1ygfcef">backgroundColorChecked</td><td class="css-1ygfcef"><span>string</span></td><td class="css-d52hbj">-</td><td class="css-d52hbj"><span style="color: rgb(34, 34, 170); word-break: break-word;">"'#2193F3'"</span></td><td class="css-d52hbj"></td></tr><tr><td class="css-1ygfcef">backgroundColorUnchecked</td><td class="css-1ygfcef"><span>string</span></td><td class="css-d52hbj">-</td><td class="css-d52hbj"><span style="color: rgb(34, 34, 170); word-break: break-word;">"'#ccc'"</span></td><td class="css-d52hbj"></td></tr><tr><td class="css-1ygfcef">backgroundColorButton</td><td class="css-1ygfcef"><span>string</span></td><td class="css-d52hbj">-</td><td class="css-d52hbj"><span style="color: rgb(34, 34, 170); word-break: break-word;">"'#fff'"</span></td><td class="css-d52hbj"></td></tr><tr><td class="css-1ygfcef">name</td><td class="css-1ygfcef"><span>string</span></td><td class="css-d52hbj">-</td><td class="css-d52hbj">-</td><td class="css-d52hbj"></td></tr><tr><td class="css-1ygfcef">value</td><td class="css-1ygfcef"><span>string</span></td><td class="css-d52hbj">-</td><td class="css-d52hbj">-</td><td class="css-d52hbj"></td></tr><tr><td class="css-1ygfcef">labelRight</td><td class="css-1ygfcef"><span>string</span></td><td class="css-d52hbj">-</td><td class="css-d52hbj">-</td><td class="css-d52hbj"></td></tr><tr><td class="css-1ygfcef">labelLeft</td><td class="css-1ygfcef"><span>string</span></td><td class="css-d52hbj">-</td><td class="css-d52hbj">-</td><td class="css-d52hbj"></td></tr><tr><td class="css-1ygfcef">sliderWidth</td><td class="css-1ygfcef"><span>number</span></td><td class="css-d52hbj">-</td><td class="css-d52hbj"><span style="color: rgb(34, 34, 170); word-break: break-word;">"26"</span></td><td class="css-d52hbj"></td></tr><tr><td class="css-1ygfcef">sliderHeight</td><td class="css-1ygfcef"><span>number</span></td><td class="css-d52hbj">-</td><td class="css-d52hbj"><span style="color: rgb(34, 34, 170); word-break: break-word;">"26"</span></td><td class="css-d52hbj"></td></tr><tr><td class="css-1ygfcef">width</td><td class="css-1ygfcef"><span>number</span></td><td class="css-d52hbj">-</td><td class="css-d52hbj"><span style="color: rgb(34, 34, 170); word-break: break-word;">"60"</span></td><td class="css-d52hbj"></td></tr><tr><td class="css-1ygfcef">height</td><td class="css-1ygfcef"><span>number</span></td><td class="css-d52hbj">-</td><td class="css-d52hbj"><span style="color: rgb(34, 34, 170); word-break: break-word;">"34"</span></td><td class="css-d52hbj"></td></tr><tr><td class="css-1ygfcef">translate</td><td class="css-1ygfcef"><span>number</span></td><td class="css-d52hbj">-</td><td class="css-d52hbj"><span style="color: rgb(34, 34, 170); word-break: break-word;">"26"</span></td><td class="css-d52hbj"></td></tr></tbody></table>
