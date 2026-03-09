# LocalStorage API – Basics

This project demonstrates the basic usage of the **localStorage API** in JavaScript.

## What is localStorage?

localStorage is a Web Storage API that allows websites to store data in the browser.  
The stored data does not expire and remains available even after the page is refreshed or the browser is closed.

Data is stored as **key-value pairs**.

Example:
localStorage.setItem("name", "John");

## Advantages of localStorage

- Data persists after page refresh
- Data remains even after closing the browser
- Simple key-value storage
- Easy to use with JavaScript

## Basic Methods

### 1. setItem()
it Stores data in localStorage.
Example:
localStorage.setItem("username", "Khushi");

### 2. getItem()

Retrieves data from localStorage.
Example:
let user = localStorage.getItem("username");
console.log(user);

### 3. removeItem()

Removes a specific item from localStorage.

Example:
localStorage.removeItem("username");

### 4. clear()

Removes all items stored in localStorage.

Example:
localStorage.clear();

## Learning Objective

Understand how to use the **localStorage API** to store, retrieve, and manage data in the browser.

## Technologies Used

- HTML
- JavaScript
