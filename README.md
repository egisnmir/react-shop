
#### To run it locally simply do:
1. yarn install
2. yarn start
3. run backend at /backend/app.js using "node app.js"
4. localhost:3000


#### Testing:
* yarn test
* yarn test:coverage


#### Bugs:
* Product update Notifications are a bit messy
* Favorites page. There is an error here with the keys when loading the favorites page directly.
  it's because we are fetching data from the backend for the products list but
  the favorites list is just a hardcoded value in the context


#### Things to add:
* Add product search input
* Add product creation form as a controlled component

* **React Testing Library** higher test coverage.

* Add themes using context
* Advanced TypeScript ?
* Async operations lack comprehensive error handling. Implement try-catch
  blocks and user-friendly error messages to handle failures gracefully.
  