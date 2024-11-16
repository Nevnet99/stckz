---
title: 'Building with Alpine'
description: 'An overview of my experience with the AlpineJS framework'
pubDate: 'Nov 15 2024'
heroImage: '/alpine.webp'
category: ['blog']
tags: ['alpine']
author: "Luke Brannagan"
---

Alpine has been a breath of fresh air for me. This blog is the first time I've used it and I'm really enjoying it. It's a lot smaller than Vue or React and it's really easy to get started with. It's got a minimal API which makes it really easy to learn and it's really powerful.


I think in future projects I'll be using Alpine a lot more. It's perfect for small projects and given a chance I think it could be used for larger projects too. 



It has the same feel as Handlebars with some magic sprinkled in, I'm really enjoying the global store that it includes as well as the output of the JS is tiny in comparison to popular frameworks like Vue and React.


Alpine.js:
```html
<div x-data="{ open: false }">
    <button @click="open = !open">Toggle</button>
    <div x-show="open">Hello, World!</div>
</div>

```


React:
```jsx
export const Toggle = () => {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <button onClick={() => setOpen(!open)}>Toggle</button>
            {open && <div>Hello, World!</div>}
        </div>
    );
};
```


It's a considerable difference in size and complexity.

