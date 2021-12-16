# Chocolate city Artists

## Identified Issues
1. The tweet post api returns 200 but the sent payload was not persisted.
2. The tweet put api also does not function properly if the Id of the post api in 1 is used.
3. The delete API also has the same identified issue.

## Fallbacks
In order to make the artist services work as expected, the post, put and delete api were written to work with the browser storage.

## Project Time
A statisfied UI and all services were not implemented due to the project time frame which collides with the present job time frame.