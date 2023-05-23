```shell
npm create vite@latest

```

```shell

npm install react-router-dom
```

### HashRouter contains a # symbol in the URL like http://localhost:3000/#/about  
### MemoryRouter: the routers are stored in memory, which will not be appeared in URL

 ```javascript
  <Route path="/books/:id" element={<Book />} />
  <Route path="/books/new" element={<NewBook />} />
  <Route path="*" element={<NotFound />} />
 ```
 