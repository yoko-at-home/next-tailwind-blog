---
title: 'Kotaro the Hiro'
subtitle: 'Two Forms of Pre-rendering'
date: '2021-04-05'
---

<div style='position: relative;
    padding-bottom: 56.25%;
    padding-top: 30px;
    height: 0;
    overflow: hidden;
    margin-bottom: 2rem;'>
<iframe src="https://www.youtube.com/embed/u7Px3-2lmXc"
frameborder="0"
allowfullscreen style="
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin: 3rem auto;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;"></iframe>
</div>

Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.

- **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.
- **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.

Importantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.

<div style='width:80vw; height: 60vh; margin: 0 auto 5rem'>
<iframe width="100%" height="100%" src='https://source.unsplash.com/random/800x700'frameborder="0" allowfullscreen style="margin: 3rem auto; box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;"></iframe>
</div>
