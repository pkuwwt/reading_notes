
# Overall design

## Website architecture

  * State tree
  * Frontend
  * Database: in-browser database, IndexDB?
  
  
## State tree

There are a maintained global state tree, with getters, mutations and actions. 
All the inter-component frontend operations are through the state tree.

The state tree is hierarchical, so that we can organize it as modules corresponding to the components 
of frontend.

The state tree is also responsible to maintain the database.

## Frontend

The frontend consists of a collection of components.

## Database
The persitant data is stored in in-browser database. Although the database exists only temporarily in browser, 
however, it can radically reduce the rebuilding efforts.
