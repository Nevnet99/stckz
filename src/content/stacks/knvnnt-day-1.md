---
title: 'Kvnnt Day 1'
description: 'The first day of Kvnnt'
pubDate: 'Aug 25 2025'
heroImage: '/alpine.webp'
category: ['blog']
tags: ['personal']
author: "Luke Brannagan"
status: 'in-progress'
techStack: ['React', 'TypeScript', 'Tailwind CSS']
readTime: 5
---

Todays the first day of Kvnnt. 

I woke up this morning of the idea for Kvnnt, and thought this is the day I start building something for me. 

## Why choose the name Kvnnt?

It was off the cuff and quick to type, it's a play on the word "covenant" and I like the dark, cult-like energy it suggests. But it also links to the idea of a small group of people who are committed to each other.

## What is Kvnnt?

Kvnnt is a small group accountability platform. It is not a massive social network. It is not another noisy community. It is a place for small circles, or "pods," of people who want to set goals, check in each week, and support each other as they make progress. It should feel simple and focused, with just enough structure to help people stay committed without overwhelming them.

## What is the goal of Kvnnt?

The goal of Kvnnt is to help people stay committed to their goals and to support each other as they make progress.

## What is the tech stack?

So far I've setup a monorepo with turborepo containing 2 apps. 

```bash
apps
├── marketing
├── dashboard
```

### Marketing 

The marketing app is a simple website that will be used to promote Kvnnt. It will be built with Next.js and Tailwind CSS.

### Dashboard

The dashboard app is a simple dashboard that will be used to manage Kvnnt. It will be built with Next.js and Tailwind CSS whilst relying on supabase for authentication and database.

## What the fuck are we building for the MVP? 

The MVP needs to be simple and prove that Kvnnt is useful even at its smallest scale. That means:

- Pods: the core unit. Create a pod, give it a name and description, and invite a few others to join.
- Goals: each member sets 1–3 goals for the week. Nothing fancy, just a title and status.
- Check-ins: once a week, everyone updates their progress with ✅ / ❌ / 🟡.

- Activity feed: a lightweight stream of updates, comments, and kudos so people can encourage each other.

- Reminders: a simple email nudge before or on check-in day.

No chat. No complex task boards. No public discovery. Just pods, goals, check-ins, and the smallest amount of ceremony to make accountability feel real.

## Why am I building this?

The truth is I’m building Kvnnt for myself first. I’ve started and stopped too many projects because no one was there to hold me to account. I don’t just want another productivity tool, I want a structure that forces me to show up. If Kvnnt helps even one other person feel less alone in their journey, that will already be a win.

### Design and Branding

The vibe I want is dark and mysterious. Kvnnt should feel more like a secret circle than a shiny SaaS dashboard. Black backgrounds, muted colors, sharp serif fonts, maybe even symbols that feel ritualistic. Not in a gimmicky way, but in a way that sets the tone: this is serious. You’re here to commit.

### Roadmap (next few weeks)

Week 1: Set up the Supabase schema, finish auth, and get the first pod + goals flow working.

Week 2: Add check-ins and the activity feed so progress feels visible.

Week 3: Add email reminders so people don’t drift away.

Week 4: Polish the UI, seed a test pod, and see how it feels with real humans.

Risks and Unknowns

I don’t know if people will actually want to commit week after week. I don’t know if I’ll be able to keep momentum long enough to see this through. I also don’t know if the whole “cult-like” vibe will attract people or push them away. These are the kinds of questions I’ll only be able to answer by building and testing.

### Hopes

Six months from now, I’d love to see a few pods actively running. Maybe some friends, maybe some strangers, maybe even a group of solopreneurs in Manchester. People showing up every week, setting goals, and actually making progress together. That’s the dream for now.

## Conclusion

This is Day 1 of Kvnnt. It feels good to finally stop circling ideas and actually start building. I don’t know exactly what this will become, but I know I want to see it through. If I can stick with it, even when it gets tough, that alone will feel like progress. Here’s to showing up, one day at a time.











