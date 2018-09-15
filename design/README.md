
# Project Design

## Goal

Implement a static website based on github `gh-pages` similar to `jekyll` with features:

  * **Analysis** of the content including titles, dates, keywords, BibTeXs
  * Rich **search** functionality
  * **Visualization** of statistics and relations

so that we can easily enhance the **knowledge graph** in our forgetful brain.

## Why we need another static website?

The `jekyll` is fine. But most `jekyll` templates simply list the documents and just give the basic navigation. 
They lack the **analysis** and then don't provide better **search** and **visualization** functionalities.

Actually, we can indeed build things based on `jekyll` framework by adding some javascript libraries. 
However, as the frontend trend shows, dynamic websites is more and more popular. It just doesn't make sense to fit
those dynamic workflows into old static templates.

Moreover, as we can build a website from scratch, with a few javascript libraries and a text editor, 
why we need other heavy 3rd-party dependencies?

## Design documentation
  * [Requirements](./requirements.md)
  * [Overall design](./overall-design.md)
  * [Detail design](./detail-design.md)
