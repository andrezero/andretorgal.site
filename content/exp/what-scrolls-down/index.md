---
title: 'What scrolls down'
created: '2020-05-23'
tags: ['web-development']
---

An exploration on how to embed independent static HTML files - and this time I really mean static, as in 1994 - within an &lt;Iframe&gt; - so that I can build, deploy, and embed silly experiments in my website.

<!-- abstract -->

The challenge was simply to pick up the Iframe from the markdown content, have it rendered by a specific React component, and resize the Iframe as per messages sent by the framed document via [window.postMessage()](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage).

<iframe src="https://statics.andretorgal.com/exp/what-scrolls-down/index.html" width="100%" height="auto"></iframe>

The content of the frame is quite arbitrary. It's a photo of [Alphonse Mucha](https://www.alfonsmucha.org/biography.html)'s stained glass at [Katedrála Sv. Víta](https://goo.gl/maps/c4JYpkXfWUDFg2d99), taken with cheap phone, summer of 2019.

Fooled around a bit with [CSS: text-orientation](https://developer.mozilla.org/en-US/docs/Web/CSS/text-orientation) and how to [get average color of image](https://stackoverflow.com/questions/2541481/get-average-color-of-image-via-javascript), while seriously procrastinating any serious commitment to design something intentionally. Click anywhere on the image.

The quote by [Timtothy Samara](https://www.goodreads.com/author/quotes/69050.Timothy_Samara) is a random inspiration I picked up at [Sarah Drasner's workshop "Design for developers"](https://github.com/sdras/design-for-developers) during 2019 Full Stack Fest in Sitges, Barcelona.

I guess this is all connected somehow.



