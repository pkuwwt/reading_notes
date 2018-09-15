
# Requirement Analysis

## Full content search
A database with indices will be built from all the text content, and user can easily search from it by keywords.

## Customized search

### File search and navigation
User can navigate through a tree of file names, and filter from it.

### Title search
User can search titles from the markdown files.

### Keywords search
User can search keywords in the markdown files, i.e. those emphasized contents.

### Topics search
A topic is a collection of keywords. User can maintain a collection of topics, and the website can build some automatically.

### Date search
If the user add timestamp in markdown, we can search the file by date and time.

If `gh-pages` supports `Last-Modified` field in response, the timestamp for each markdown will generated automatically.

## Analysis

### Topic and keywords management
The website automatically collects all keywords and generates topics. All the related positions in markdown files are recorded too.

### Relationship analysis
There are a few kinds of relationships.

  * file relation: if there are shared keywords and topics
  * keyword relation: if there are shared locations 
  * topic relation: if there are shared locations
  
A relationship graph consists of nodes and edges, with a weight and other properties on each edge.

### Statistics analysis

  * occurence: keywords, topics
  * time series: files, keywords, topics

## View and Visualization

### Markdown display

A basic markdown viewer.

### Statistics display
Diagrams for required statistics.

### Knowledge Graph display

A graph interface that supports navigation and search interactively.



