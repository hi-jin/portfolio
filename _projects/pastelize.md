---
layout: page
title: Pastelize (WIP)
description: RAG-based 2nd Brain Application
img: assets/projects/pastelize/pastelize.webp
importance: 1
category: work
---

### TL;DR

`Pastelize` is a RAG-based 2nd Brain application that allows users to create a personal knowledge base by creating mindmaps.
All mindmaps are stored in a `local Vector Database` and are queried automatically when users edit mindmaps.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/projects/pastelize/pastelize.webp" title="pastelize vector search" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The part on the right side of the photo shows the results of searching for similar contexts from all vectors stored based on the current work content.
</div>

### PDF Viewer

Users can upload PDF files and view them in the application.
All uploaded PDF files are processed by `local Embedding Model` and stored in a `local Vector Database` as vectors.
(vectors would be used for RAG, and similarity search)

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/projects/pastelize/pdf-viewer.webp" title="pastelize pdf viewer" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    When a PDF fragment is found through similarity search, users can easily navigate to the corresponding location to see the original content.
</div>

### Technical Details

- Langchain
- Hugging Face
- Typescript
- React
- Electron
- Tailwind CSS

### Technical Challenges

- `Mindmap Performance`: It was important to make mindmap editing smooth and responsive.
    - For better performance, we normalized the redux states.
- `Embedding Model is quite heavy`: We used a `local Embedding Model` to process PDF files and extract text, images, and other content for embedding and storage. 
    - When the electron app calls the embedding model, it was really heavy and made the app freeze for a while.
    - To avoid this, we used `Web Worker` to run the embedding model in the background.
- `Seamless UX`: It was hard to move away from development-level UI/UX details.
    - We tried to make the UX seamless by adjusting the animation and transition details.
