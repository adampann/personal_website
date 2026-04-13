<%*
let title = await tp.system.prompt("What is the thought?");
if (!title) {
  title = "Thought " + tp.date.now("YYYY-MM-DD-HHmm");
}

await tp.file.rename(title);

// Change the destination to your thoughts folder
await tp.file.move("/content/thoughts/" + title);
-%>
---
title: "<% title %>"
date: <% tp.date.now("YYYY-MM-DD") %>
draft: true
tags:
  - thoughts
---

# <% title %>

<% tp.file.cursor() %>