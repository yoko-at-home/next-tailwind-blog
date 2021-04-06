---
title: 'Two Forms of Pre-rendering'
date: '2021-04-05'
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/u7Px3-2lmXc" frameborder="0" allowfullscreen style="margin: 3rem auto; box-shadow: 0px 0px 15px -5px #777777; border-radius: 10px"></iframe>

Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.

- **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.
- **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.

Importantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.
