---
title: 'Implementing a Design System from Scratch'
description: 'Learnings from implementing a design system from scratch for a scale up'
pubDate: 'Nov 16 2024'
heroImage: '/design-system.webp'
category: ['blog']
tags: ['design systems', 'react', 'radix']
author: "luke"
---

I've recently been working on implementing a design system from scratch for a scale up. It's been a really interesting experience and I've learned a lot along the way. I thought I'd share some of my learnings in this blog post.

## The Stack

Most of the architecture for the company frontend was already in place when I joined. Most of our production apps are built with various flavours of React. I've also worked with React for a number of years so it was good fit for me as well as the company to build the design system with React.


Around the time I started to build the DS I came across the book <a href="https://www.amazon.co.uk/Design-That-Scales-Creating-Sustainable/dp/1959029215" target="_blank">Design that Scales</a> by Dan Mall.


<img src="/design-that-scales.webp">


It's a great book and I'd highly recommend it to anyone working or thinking about building a design system. It covers a lot of the theory behind design systems and how to build them in a way that scales with your company as well as great tips and ways of working.

## Getting started


It's worth prefacing this section with I already have dipped my toes into design systems before. I've built a few small ones for personal projects and I've worked with a few at previous companies. However, this was the first time I was building one from scratch for a company that was already in production.


I started by reading the book mentioned above and then I started to build out the components in a new repo. I decided to use Radix as the base for the components as it's a really nice library that allows you to build unstyled components and then add your own styles on top. This was perfect for the majority of components however for some of the more complex components I had to build them from scratch.


For toasts I used React Toastify that exports a CSS file that styles the toasts in the repo that is consuming the Design System. This was a nice way of doing it as it allowed me to keep the styles in the same repo as the components.


## Documentation

We used Storybook for the documentation of the components. It's a tool that allows you to see all the components in one place and interact with them. It also allows you to see the different states of the components which is really useful for testing. We have hopes in the future to implement
