# Movie Store

The below describes the implementation of a movie store that lets users find the latest blockbuster movies.

## Features

- The movies page
- Pagination
- Filtering by title
- Sorting by release year

## Components

The following components are independent from this specific implementation and can be reused elsewhere.
- Footer
- Header
- Card
- Pagination
- HttpService
- OrderBy
- SearchFilter

These components are specific for the flow of this application: 
- Movie Store
- Movie Interface

## Footer and Header

The footer component consists of just html and scss content , it doesn't emit event or take input values.

The header componenent has no input values but emit the value on title input.

## Card
The card has 5 input values:
- url- Movie imege url 
- title - Movie title
- description - Movie Description 
- releaseYear - Year of release
- movieUrl - Url of the movie

## Pagination

The pagination component is in charge of managing the links for the pagination.
- Button to go on the previous page 
- Button to go on the next page 
- Buttons to go on a specific page 

Each of the previous button emit an event outside the component.
The following input values con be specified: 

- Current page
- Total pages 

#### HttpService

This is an angular service in charge of sending a get request to the specified url. The class contains two methods , the getResponse method send the get request while the handleError method logs an error in case of an error.

## OrderBy and SearchFilter
These are two angular pipe , the OrderBy pipe is in charge of ordering a list of element by the specified property and with the specified order (ASC|DESC) , while the SearchFilter can filter a list of elements by the specified property using the specified value to filter.
## Movie Store 
This is the main component and puts together all the previous component in order to implement the specific flow of this application.

