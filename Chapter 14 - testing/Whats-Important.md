 **Importance - Less importantant topic**
- do basic exercises of input values into function in seperate test and checking if the result evaluates to what you want
    - does it return true or false as a result
-  checking if variables are an array, string or Number
    - then change that variable within the test and check if its an array, string or object
- Make a function that gets a random number then check if the result is between the range you choose?

 **Preferred way you should learn** 
 - create your first react application, then follow the  [Youtube Net Ninja course](https://www.youtube.com/watch?v=7dTTFW7yACQ&list=PL4cUxeGkcC9gm4_-5UsNmLqMosM-dzuvQ)
  - make simple test on check if elements have certain text
 
 
 This is mainly important later, testing is one of the key things in a professional environment, you will be using different testing software for different 
 
 **Mainly use**
 - Over time code in a application will change, allow you find errors that these changes might cause in old code
 - On the frontend is everything loading properly
 - test different cases

**Some of the following will be** 

    Node.js -  Jest
    Next.js - Comes with Cypress
    React - react testing
    Java -  JUnit
    Kotlin - JUnit


**testing is different between backend and front**

**Frontend**
Mainly focuses on testing the following
- testing of forms and making sure user input works properly, and the variable is stored
- Make sure html elements exist on a page
- Trigger events( onclick), and checking if the function has changed a variable has changed

**Backend**
- Testing if function that handles logic works properly with different inputs 
    - for examplea function that check if a email is valid on the input
- check if a database is working properly
- if a function is supposed to fetch multiply things in the database is there an array coming back?
- also includes using things like postman to test api endpoints

**Test Driven Development**
 - The goal of testing driven development is to plan out a project to the point where you can write what you expect the different functions should return using the test, then create the function itself
- **preferred way to try this**
    - Attempt this on your second website, or project
    - expect everything to not properly align
    - wireFrame your website using Figma, might allow for more thought out test, that dont require much to changes for the frontend

**Types of test**
-  Unit test that test small parts of code like a function, or part of a form input
-  Integration test
    - Does three functions that rely on each other work properly together
    - Does the entire form work properly for the inputs
- End 2 End Test
    - Test the whole application
    - less used due to if you chnage one thing in the code base, you have to rewrite this one!