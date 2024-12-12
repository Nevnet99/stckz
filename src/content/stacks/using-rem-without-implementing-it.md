---
title: 'Using REM without implementing it'
description: 'How using REM without a plan to implement it can be detrimental to your project'
pubDate: 'Thur 12 Dec'
heroImage: '/rem-post-img.png'
category: ['blog']
tags: ['CSS']
author: "Luke Brannagan"
---

## What is REM?

`rem` is a unit available in CSS it also has a brother called `em`. First, lets talk about the properties of both
`rem` and `em` are both relative units which is a fancy way of saying they rely on the value of another property or
an easier way of explaining would be they inherit their value from elsewhere.

`em` inherits its value from its parent for example:

```css
.parent {
  font-size: 16px;
}

.paragraph-child {
  font-size: 1em; /* <-- This will be 16px */
}
```

rem inherits its value from either `html` selector or `:root` pseudo class

```css 
html {
  font-size: 18px;
}

h1 {
  font-size: 1rem; /* <-- This will be 18px */
}
```

in my experience `rem` is used more than `em` due to being able to define the value in a global css sheet at the top level of your app, 
making it more scalable than having to set the font-size on every parent element for the children you want to style.

## An example

Below is an example of implementing `rem` with the aim to make it responsive, this is just an example so this code most likely wont be the wont responsive.

<iframe  src="https://stackblitz.com/edit/vitejs-vite-n5jsoukj?embed=1&file=src%2Findex.css" style="height: 600px; width: 100%;" loading="lazy" > </iframe>

## Using REM without a plan

Now that we understand what `rem` is and have a good understanding of what a typical implementation of some responsive typography looks like we can look deeper into problems that arise when using `rem` without a plan.

`rem` doesn't have to be used exclusively just for font-size it's just a relative unit so 1rem will be 16px if set in the html. Most developers will
using rems for everything to try to ensure consistency within a codebase. Think spacing, font-sizes and positions.

Whilst this is great for responsive development and design it can prove for some unexpected results if you plan to jam using rem correctly later into your project.

for example lets take our example for above but lets add a square absolutely positioned on the top right of the screen:

<mark>for this example I'd suggest going into stackblitz and popping the view out on the top right.</mark>
<iframe  src="https://stackblitz.com/edit/vitejs-vite-p94x4t9p?embed=1&file=src%2FApp.css" style="height: 600px; width: 100%;" loading="lazy" > </iframe>

on scaling up and down the example did you expect the height, width and the position to change of the cube our design spec says it should have a 16px padding between the border and the cube.

`rem` is not great for every situation and even worse if you don't know how to implement it with a future implementation in mind.

A couple of suggestions from this short post:
1. Don't use `rem` for everything if you want it to scale relative with the font-size is the only time it should be used (Think should my border always be 2px or do I want it to scale with the font-size).
2. In my experience REM has always been hard to retrofit into a codebase typically requiring reviewing each component leverage a tool like chromatic to help with this process, It's not a great look when your flyout is stuck to the bottom right of the screen because you positioned it with `rem`.
3. `px` is fine, I feel that `px` is demonized and everyone should use `rem` all the time. which I find is not the case if you understand how to use the units correctly.





