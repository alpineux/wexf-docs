---
title: 'Projects'
description: 'Projects'
order: 2
section: cms
---

# Projects

## What This Is

This is your Projects collection, which works like a digital filing cabinet for storing information about all your projects. Think of it as a database that holds details about each project you want to showcase on your website.

<details open="true" title="Accordion title"><summary><b>Accordion title</b></summary><div class="accordion-content"><p data-id="2dae10a2-e832-4575-b341-2b216cc5d442">This is great</p></div></details>

## Form Code

```javascript
const logger = (() => {
  const log = (msg, data = null, color = "#42b983") => {
    if (!DEBUG) return;
    console.log(`%c[VueApp] ${msg}`, `color:${color};font-weight:bold;`);
    if (data !== null) console.log(data);
  };

  return {
    info: (msg, data) => log(msg, data, "#42b983"),
    warn: (msg, data) => log(msg, data, "#ff9800"),
    error: (msg, data) => log(msg, data, "#ff5555"),
  };
})();

const isValidNumber = (value) => {
  const num = Number(value);
  return Number.isFinite(num) && num > THRESHOLDS.minGuests;
};
```

## What It Does

This collection stores and organizes your project information so you can display them consistently across your website. When visitors go to pages that show your projects, the content comes from this collection. Currently, you have 26 projects stored here.

The collection creates URLs using the pattern `/projects/project-name` for individual project pages.

## Key Details

• **Collection Name**: Projects (displayed as "Projects" on your website) • **Individual Items**: Each item is called a "Project" • **URL Pattern**: `/projects/` followed by each project's unique name • **Current Content**: 26 projects are stored in this collection • **Fields**: No custom fields are currently set up for this collection

## Things to Know

> **Important**: This collection currently has no custom fields defined, which means you can't add specific information like project descriptions, images, or dates. You'll need to add fields before you can store meaningful project details.

The collection is ready to use but needs fields added to become functional. Common fields for projects might include title, description, images, completion date, and client information.

Since you have 26 projects already, they exist but likely only have basic information until proper fields are configured.
