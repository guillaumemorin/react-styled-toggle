<h1 align="center">
	React styled toggle
</h1>
<p align="center">
React Toggle component written in TypeScript and powered by styled-components.
</p>
<p align="center">
	<a href="https://badge.fury.io/js/react-styled-toggle"><img src="https://badge.fury.io/js/react-styled-toggle.svg" alt="npm version" height="18"></a>
	<img src="https://badges.frapsoft.com/typescript/code/typescript.svg?v=101" alt="npm version" height="18">
    <a href='https://github.com/prettier/prettier'> <img src='https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square' alt='code style: prettier'></a>
    <a href='https://github.com/styled-components/styled-components'> <img src='https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e' alt='style: styled-components'></a>
</p>

<p align="center">
	<img src="https://raw.githubusercontent.com/guillaumemorin/react-styled-toggle/master/screenshot.png" width="300" />
</p>

## Demo

<a href="https://codesandbox.io/s/react-styled-toggle-grl6dh"> <img src="https://codesandbox.io/static/img/play-codesandbox.svg" alt="codesandebox" height="40"></a>

<a href="https://guillaumemorin.github.io/react-styled-toggle/?path=/docs/toggle-button--docs"> <img src="https://cdn.jsdelivr.net/gh/storybookjs/brand@master/badge/badge-storybook.svg" alt="storybook" height="40"></a>

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

<table width="100%">
   <thead>
      <tr>
         <th >property</th>
         <th >Type</th>
         <th >default</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td >name</td>
         <td ><span>string</span></td>
         <td ></td>
      </tr>
      <tr>
         <td >value</td>
         <td ><span>string</span></td>
         <td ></td>
      </tr>
      <tr>
         <td >checked</td>
         <td ><span>boolean</span></td>
         <td ></td>
      </tr>
      <tr>
         <td >disabled</td>
         <td ><span>boolean</span></td>
         <td ></td>
      </tr>
	  <tr>
      	<td >labelRight</td>
      	<td ><span>string</span></td>
      	<td ></td>
      </tr>
      <tr>
         <td >labelLeft</td>
         <td ><span>string</span></td>
         <td ></td>
      </tr>
	  <tr>
         <td >width</td>
         <td ><span>number</span></td>
         <td ><span style="color: aquamarine; word-break: break-word;">60</span></td>
      </tr>
      <tr>
         <td >height</td>
         <td ><span>number</span></td>
         <td ><span style="color: aquamarine; word-break: break-word;">34</span></td>
      </tr>
      <tr>
         <td >translate</td>
         <td ><span>number</span></td>
         <td ><span style="color: aquamarine; word-break: break-word;">26</span></td>
      </tr>
      <tr>
         <td >sliderWidth</td>
         <td ><span>number</span></td>
         <td ><span style="color: aquamarine; word-break: break-word;">26</span></td>
      </tr>
      <tr>
         <td >sliderHeight</td>
         <td ><span>number</span></td>
         <td ><span style="color: aquamarine; word-break: break-word;">26</span></td>
      </tr>
      <tr>
         <td >backgroundColorChecked</td>
         <td ><span>string</span></td>
         <td ><span style="color: aquamarine; word-break: break-word;">#2193F3</span></td>
      </tr>
      <tr>
         <td >backgroundColorUnchecked</td>
         <td ><span>string</span></td>
         <td ><span style="color: aquamarine; word-break: break-word;">#ccc</span></td>
      </tr>
	  <tr>
        <td >backgroundColorButton</td>
      	<td ><span>string</span></td>
     	<td ><span style="color: aquamarine; word-break: break-word;">#fff</span></td>
      </tr>
      <tr>
         <td >onChange</td>
         <td ><span>() => void</span></td>
         <td ></td>
      </tr>
   </tbody>
</table>
