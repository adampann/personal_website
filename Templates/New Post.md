<%*
// 1. Open the popup to ask for the name
let title = await tp.system.prompt("What is the title of this post?");

// 2. If you hit 'Esc' or leave it blank, it defaults to a timestamp
if (!title) { 
  title = "New Post " + tp.date.now("YYYY-MM-DD-HHmm"); 
}

// 3. Rename the current file to your input
await tp.file.rename(title);

// 4. Move it to the correct folder automatically
// Note: Ensure this path matches your folder exactly
await tp.file.move("/content/posts/" + title);
-%>
---
title: "<% title %>"
date: <% tp.date.now("YYYY-MM-DD") %>
draft: true
tags: 
  - post

---

# <% title %>

<% tp.file.cursor() %>
