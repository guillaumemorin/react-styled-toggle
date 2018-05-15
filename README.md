<h1 align="center">
	React styled toggle
</h1>
<p align="center">
	<a href="https://badge.fury.io/js/react-styled-toggle"><img src="https://badge.fury.io/js/react-styled-toggle.svg" alt="npm version" height="18"></a>
    <a href='https://semaphoreci.com/guillaumemorin/react-styled-toggle'> <img src='https://semaphoreci.com/api/v1/guillaumemorin/react-styled-toggle/branches/master/badge.svg' alt='Build Status'></a>
    <a href='https://github.com/prettier/prettier'> <img src='https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square' alt='code style: prettier'></a>
    <a href='https://github.com/styled-components/styled-components'> <img src='https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e' alt='style: styled-components'></a>
</p>

<div align="center">
	<p align="center">
		Toggle button made with styled-components
	</p>
	<img src="https://raw.githubusercontent.com/guillaumemorin/react-styled-toggle/master/screenshot.png" width="100" />
</div>

## Demo

<iframe src="https://codesandbox.io/embed/1vpwpm4nyl" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

[![Edit 1vpwpm4nyl](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/1vpwpm4nyl)

## Storybook

[https://guillaumemorin.github.io/react-styled-toggle/](https://guillaumemorin.github.io/react-styled-toggle/)

## Installation

```
npm i --save react-styled-toggle
```

## Usage

```
import Toggle from 'react-styled-toggle';

render(){
	return <Toggle />
}
```

## Props

<table class="css-1ytzlk7"><thead><tr><th class="css-d52hbj">property</th><th class="css-d52hbj">propType</th><th class="css-d52hbj">required</th><th class="css-d52hbj">default</th><th class="css-d52hbj">description</th></tr></thead><tbody><tr><td class="css-1ygfcef">checked</td><td class="css-1ygfcef"><span>bool</span></td><td class="css-d52hbj">-</td><td class="css-d52hbj">-</td><td class="css-d52hbj"></td></tr><tr><td class="css-1ygfcef">disabled</td><td class="css-1ygfcef"><span>bool</span></td><td class="css-d52hbj">-</td><td class="css-d52hbj">-</td><td class="css-d52hbj"></td></tr><tr><td class="css-1ygfcef">onChange</td><td class="css-1ygfcef"><span>func</span></td><td class="css-d52hbj">-</td><td class="css-d52hbj">-</td><td class="css-d52hbj"></td></tr><tr><td class="css-1ygfcef">backgroundColorChecked</td><td class="css-1ygfcef"><span>string</span></td><td class="css-d52hbj">-</td><td class="css-d52hbj"><span style="color: rgb(34, 34, 170); word-break: break-word;">"'#2193F3'"</span></td><td class="css-d52hbj"></td></tr><tr><td class="css-1ygfcef">backgroundColorUnchecked</td><td class="css-1ygfcef"><span>string</span></td><td class="css-d52hbj">-</td><td class="css-d52hbj"><span style="color: rgb(34, 34, 170); word-break: break-word;">"'#ccc'"</span></td><td class="css-d52hbj"></td></tr><tr><td class="css-1ygfcef">backgroundColorButton</td><td class="css-1ygfcef"><span>string</span></td><td class="css-d52hbj">-</td><td class="css-d52hbj"><span style="color: rgb(34, 34, 170); word-break: break-word;">"'#fff'"</span></td><td class="css-d52hbj"></td></tr><tr><td class="css-1ygfcef">name</td><td class="css-1ygfcef"><span>string</span></td><td class="css-d52hbj">-</td><td class="css-d52hbj">-</td><td class="css-d52hbj"></td></tr><tr><td class="css-1ygfcef">value</td><td class="css-1ygfcef"><span>string</span></td><td class="css-d52hbj">-</td><td class="css-d52hbj">-</td><td class="css-d52hbj"></td></tr><tr><td class="css-1ygfcef">labelRight</td><td class="css-1ygfcef"><span>string</span></td><td class="css-d52hbj">-</td><td class="css-d52hbj">-</td><td class="css-d52hbj"></td></tr><tr><td class="css-1ygfcef">labelLeft</td><td class="css-1ygfcef"><span>string</span></td><td class="css-d52hbj">-</td><td class="css-d52hbj">-</td><td class="css-d52hbj"></td></tr><tr><td class="css-1ygfcef">sliderWidth</td><td class="css-1ygfcef"><span>number</span></td><td class="css-d52hbj">-</td><td class="css-d52hbj"><span style="color: rgb(34, 34, 170); word-break: break-word;">"26"</span></td><td class="css-d52hbj"></td></tr><tr><td class="css-1ygfcef">sliderHeight</td><td class="css-1ygfcef"><span>number</span></td><td class="css-d52hbj">-</td><td class="css-d52hbj"><span style="color: rgb(34, 34, 170); word-break: break-word;">"26"</span></td><td class="css-d52hbj"></td></tr><tr><td class="css-1ygfcef">width</td><td class="css-1ygfcef"><span>number</span></td><td class="css-d52hbj">-</td><td class="css-d52hbj"><span style="color: rgb(34, 34, 170); word-break: break-word;">"60"</span></td><td class="css-d52hbj"></td></tr><tr><td class="css-1ygfcef">height</td><td class="css-1ygfcef"><span>number</span></td><td class="css-d52hbj">-</td><td class="css-d52hbj"><span style="color: rgb(34, 34, 170); word-break: break-word;">"34"</span></td><td class="css-d52hbj"></td></tr><tr><td class="css-1ygfcef">translate</td><td class="css-1ygfcef"><span>number</span></td><td class="css-d52hbj">-</td><td class="css-d52hbj"><span style="color: rgb(34, 34, 170); word-break: break-word;">"26"</span></td><td class="css-d52hbj"></td></tr></tbody></table>

## Development

```
npm run storybook
```

## Build

```
npm run build
```
