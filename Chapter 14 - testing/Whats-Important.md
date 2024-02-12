## Importance - Less Important Topic

- Perform basic exercises of inputting values into functions in separate tests and check if the result evaluates to what you want.
    - Does it return true or false as a result?
- Check if variables are an array, string, or number.
    - Then change that variable within the test and check if it's an array, string, or object.
- Create a function that generates a random number, then check if the result is within the range you choose.

## Preferred Way You Should Learn

- Create your first React application, then follow the [YouTube Net Ninja course](https://www.youtube.com/watch?v=7dTTFW7yACQ&list=PL4cUxeGkcC9gm4_-5UsNmLqMosM-dzuvQ).
  - Make simple tests to check if elements have certain text.

This is mainly important later; testing is one of the key aspects in a professional environment, and you will be using different testing software for different purposes.

## Mainly Use

- Over time, code in an application will change, allowing you to find errors that these changes might cause in old code.
- On the frontend, ensure everything is loading properly.
- Test different cases.

## Some of the Following Are Testing Libraries

- Node.js - Jest
- Next.js - Comes with Cypress
- React - React Testing
- Java - JUnit
- Kotlin - JUnit

## Testing Differs Between Backend and Frontend

### Frontend

Mainly focuses on testing the following:

- Testing forms and ensuring user input works properly and variables are stored correctly.
- Ensuring HTML elements exist on a page.
- Triggering events (onclick) and checking if the function has changed a variable.

### Backend

- Testing if functions that handle logic work properly with different inputs.
    - For example, a function that checks if an email is valid on input.
- Checking if a database is functioning properly.
- Verifying if a function that fetches multiple things in the database returns an array.
- Also includes using tools like Postman to test API endpoints. // postman

## Test Driven Development

- The goal of test-driven development is to plan out a project to the point where you can write what you expect the different functions should return using tests, then create the function itself.
- **Preferred Way to Try This**
    - Attempt this on your second website or project.
    - Expect everything to not properly align.
    - Wireframe your website using Figma, which might allow for more thought-out tests that don't require many changes to the frontend.

## Types of Tests

- Unit tests: Testing small parts of code like a function or part of a form input.
- Integration tests:
    - Checking if three functions that rely on each other work properly together.
    - Verifying if the entire form works properly for the inputs.
- End-to-End Tests:
    - Testing the whole application.
    - Less used due to the need to rewrite if one thing in the codebase changes.
