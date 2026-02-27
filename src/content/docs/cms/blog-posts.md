---
title: 'Blog Posts'
description: 'What This Is'
order: 1
section: cms
---

## What This Is

The Blog Posts collection is your website's article database where all your blog content is stored and organized. Think of it like a digital filing cabinet that holds all your blog articles.

## Video Tutorial with Bunny

<iframe src="https://player.mediadelivery.net/embed/604041/c0106780-d397-4c69-963e-1466659d1a48" width="100%" height="400" frameborder="0" allowfullscreen="true" allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture" loading="lazy" style="border: none; aspect-ratio: 16 / 9; width: 100%;"></iframe>

## Screenshot

![Screenshot 2](https://i.ibb.co/rRHPD7vW/Screenshot-2025-11-13-at-9-59-23-AM.png)

## Javascript

This is how to use the on-page Javascript code

```javascript
function hello() {
  const main = document.getElementById("main");
  console.log(main);
}
```

## CSS

This is how to use the on page css

```css
.swiper-button-next,
.swiper-button-prev {
  color: white;
}

.autoplay-progress {
  position: absolute;
  right: 16px;
  bottom: 16px;
  z-index: 10;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: white;
}

.autoplay-progress svg {
  --progress: 0;
  position: absolute;
  left: 0;
  top: 0px;
  z-index: 10;
  width: 100%;
  height: 100%;
  stroke-width: 4px;
  stroke: white;
  fill: none;
  stroke-dashoffset: calc(125.6px * (1 - var(--progress)));
  stroke-dasharray: 125.6;
  transform: rotate(-90deg);
}

.swiper-pagination-bullet-active {
  background: white;
}
```

## How to add a new Blog Post

1.  Click on the **Pages Tab** in the left hand [@webflow\_toolbar](https://projectspace.b-cdn.net/webflow-icons/webflow_toolbar.png)
    
2.  Click on the **Plus Button** in the top right of the @webflow\_pages\_tab
    

## bWhat It Does

This collection manages all the individual blog posts on your website. Each post becomes its own webpage that visitors can read and share. The collection automatically organizes your posts and makes them available at web addresses like `yoursite.com/post/article-name`.

## Key Details

*   **Collection Name**: Blog Posts
    
*   **Individual Item**: Blog Post
    
*   **Web Address Pattern**: `/post/article-title` (for example: `/post/how-to-bake-cookies`)
    
*   **Current Articles**: 5 blog posts are currently published
    
*   **Content Structure**: This collection appears to have a basic setup without custom fields defined yet
    

> **CREATE BLOG POST**
> 
> Click on the CMS button
> 
> ![](https://projectspace.b-cdn.net/webflow-icons/Frame%20223.svg)
> 
> in the top left of the website editor.
