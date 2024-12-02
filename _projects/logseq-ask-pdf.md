---
layout: page
title: Logseq Ask PDF
description: A Logseq plugin that allows you to ask questions about PDF highlights (text or images) using Large Language Models (LLMs).
img: assets/projects/logseq-ask-pdf/logseq-ask-pdf.webp
importance: 3
category: fun
---

A Logseq plugin that allows you to ask questions about PDF highlights (text or images) using Large Language Models (LLMs).

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/projects/logseq-ask-pdf/logseq-ask-pdf.webp" title="Logseq ask pdf Demo" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The demo video uses the paper <a href="https://arxiv.org/abs/2402.17135">Frans, K., Park, S., Abbeel, P., & Levine, S. (2024). Unsupervised Zero-Shot Reinforcement Learning via Functional Reward Encodings.</a> as an example.
</div>

<br>
<br>

### Background

The 2nd-brain app Logseq is a powerful tool for knowledge management.  
It allows users to highlight the texts or images in the PDF and save them as blocks in Logseq.  
But, `Logseq lacks a feature that access the content of highlights directly`. (because, highlights are just simply a block of uuid pointing the text or image in the PDF)  

Logseq Ask PDF is a plugin that `allows users to ask questions about PDF highlights directly within Logseq`.  
With this plugin, users don't need to switch to the PDF file to find the highlights to ask questions.  
`This plugin also supports RAG (Retrieval Augmented Generation)` to answer questions based on the content of the PDF.

<br>
<br>

### Features

- Ask questions about PDF highlights directly within Logseq
- Supports asking both text and image highlights
- Use the entire PDF as context
- Seamless integration with Logseq's UI
- Compatible with OpenAI API and local models that are OpenAI API-compatible

<br>
<br>

### Technical Details

- Typescript
- Langchain

<br>
<br>

### Links

- [Logseq Ask PDF on GitHub](https://github.com/hi-jin/logseq-ask-pdf)
