# MyReads Project
Udacity React course project by Pim van Schayik

## The Application
MyReads is a virtual bookcase on which the user can place book on different shelves to keep track of their virtual
books in a structured manner. There are three shelves: Currently Reading, Want to Read, and Read. By placing books
on each of these shelves, user keeps track of for example their reading history. The book can easily be switched
between shelves once a book is finished or started.

Besides that, MyReads comes with build in search page, where the user can search for new books to put into the
bookcase. Search can be done by title, author(s), or topic.

## Development
### to start development
* install all project dependencies with `npm install`
* start the development server with `npm start`

### technologies used
* NodeJS & ReactJS: Required for a standard React app.
* React Router: For navigation between pages and compatibility with the web browser.
* Prop Types: To assure that the right kind of data is passed to the components.
* Debounce Input: For reducing the amount of API calls on the search page by delaying search.

## Content
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    ├── index.js # You should not need to modify this file. It is used for DOM rendering only.
    ├── Bookcase.js # Contains the different shelves of chosen books
    ├── BookSearch.js # Contains the search page on the app.
    ├── BookList.js # Lists all the books on the shelves or on the search-page
    └── MoveBook.js # Creates the list to move books from and to shelves.
```
