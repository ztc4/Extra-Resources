# Welcome to Java: An Object-Oriented Programming Language

In Java, most code is encapsulated within classes. Let's explore some key OOP concepts in Java.

## What Makes Up OOP in Java

- **Class**: There are two types we'll cover:
  - Factories/ Regular classes
  - Interfaces
- **Concepts** (examples coming up):
  - Abstraction
  - Inheritance
  - Polymorphism
  - Encapsulation

## Declaring Variables

Java requires specifying the data type before the variable name.

```java
int age = 19; // Example of declaring an integer variable
String name = "Zachary"; // Example of declaring a string variable
```
If you happen to be declaring a class/instance of an class, you would then use that class name before it!

```java
Classname zachary = new Classname();
```
## Advanced data types
### Java Data Structures Overview

- **HashMap:** A key-value pair collection where each key is unique, providing fast lookup and retrieval operations based on the key's hash code.
```java
HashMap<String, Integer> hashMap = new HashMap<>(); //String represents username, while int represents level
hashMap.put("Celia", 30);
```
Another thing of advice the following values`<String, Integer>  ` would never be `<String, int>` it doesn't allow primitive data types which are usually lowercase!
- **Array:** A fixed-size data structure that stores elements of the same type sequentially in memory, accessed using an index.
```java
int[] numbers = {10, 20, 30, 40, 50};
numbers[0] = 44;
```
- **ArrayList:** A dynamic array-like structure that can grow or shrink as elements are added or removed, providing flexibility in managing collections of objects.
```java 
ArrayList<String> colors = new ArrayList<>();
colors.add("red")
```

## Conditionals still look pretty much the same

```java
int i = 0
while(i < 5){ i++}
for(int i = 0; i < 5; i++){}
do{i++ } while(i < 5)
```

## Function are different by a bit
- They are always encapsulated in a class
- You also have to identify what variable is expected to be returned before the function name


Returning a integer
```java
int multiplyTwoNumbers(int x, int y){
    int i = x * y;
    return i ;
}
```
vs
Returning a String
```java 
String getFullName( String firstName, String lastName){
    return firstname + lastname;
}
```
vs
Returning nothing
```java
void printName( String firstname, String lastname){
    System.out.print(firstname + lastname);
}
```


## Class
There are types of classes singleton and factories, they look real similar


### Factories
- Usually want to create multiply of these
- Creation is usually called a instance or object, I will be calling them instances
- Have an constructor that usually sets the initial properties or running any code that you want to run when an instance is created
- Constructor are the initial properties you want to give the instance
- An class can have 2 constructors, which is shown below

```java
class Person{
    // variables the object is gonna have
    String name;
    String email;
    String firstname;
    String lastname;
    int age;
    private int ssn;


    // Constructor 1
    // Set the initial properties with these, code that runs when you create an instance
    void Person(String firstname, String lastname, int a){ 
        name = firstname + lastname;
        email = mail;
        age = a;
        System.out.print("I have created an instance that uses the basic values")

    }
    // Constructor 2
    void Person(String mail, String firstname, String lastname, int a){ 
        name = firstname + lastname;
        fname = firstname;
        lname = lastname;
        email = mail;
        age = a;
        System.out.print("I have created an instance that used some extra values")
    }

    String[] getProperties(){
        String[] info = { name, email,Integer.toString(age)}
        return info
    }
    
    void changeName(String first, String last){
        fname = first;
        lname = last
        name = fname + last // might not need this code
    }
    void addSSN(int number){
        ssn = number;
    }
    
}
```
Below I create two instances, one that uses the more basic constructor and one that uses the one with more properties:

`Person zachary = new Person(,"Jermarco","Burton",36);` || 
`Person zachary = new Person("123launchcode@gmail.com","John","Henry",25);`


## Singleton
You've used Singleton for examples; the inbuilt Math keyword in JavaScript is an example of singleton.

Some traits of singletons:

- Won't have/use the constructor.
- You don't have to make an instance to use the functions on it or access the values on it.
- If I were to type Math.PI, I would get the value of PI. It would be an error if I did something like const math = new Math() then got pi math.PI due to the class being a singleton.
- In Java, a class can function as a class and object at the same time, so you have to distinguish if a function or variable is part of the singleton or instance by looking if it has static in front of the declaration (static int peopleCreated), while things that are factory don't have static at the front (int person). The same goes for functions.

Example of a singleton :


```java
class Math{
    static int operationsAttempted = 0;

    public static int add(int a, int b) {
        operationsAttempted++
        return a + b;
    }

    public static int subtract(int a, int b) {
        operationsAttempted++
        return a - b;
    }

    public static int multiply(int a, int b) {
        operationsAttempted++
        return a * b;
    }

    public static double divide(double a, double b) {
        if (b != 0) {
            operationsAttempted++
            return a / b;
        } else {
            throw new IllegalArgumentException("Cannot divide by zero.");
        }
    }
}
```

I would access the following without creating an instance
```java
int combineNumbers = Math.add(26,40); // will get 66
int findAverage = Math.divide(combineNumbers,2); // will get 33
int operations = Math.operationsAttempted; // Should get 2
```
See How I didn't have to call the new keyword `Math mathFormulas = new Math()`!

### Now lets see a class thats an combination of both: 
```java
class Person{
    // singleton variables
    static ArrayList<String> peopleCreated = new ArrayList<>();

    static void findAndChangeName(String oldName,String name){
        String lowerCasedOldName = oldName.toLowerCase();
        String lowerCaseNewName = name.toLowerCase()
        int index = peopleCreated.indexOf(lowerCasedOldName) // get the index I want
        peopleCreated.set(index, lowerCaseNewName)


    }
   static void addName(String name){
        String lowercasedName = name.toLowerCase(); 
        peopleCreated.add(lowercasedName);

    }

    // factory variables / variables the instance is gonna have
    String name;
    String email;
    String firstname;
    String lastname;
    int age;
    private int ssn;

    // Constructor 1
    // Set the initial properties with these, code that runs when you create an instance
    void Person(String firstname, String lastname, int a){ 
        name = firstname + lastname;
        email = mail;
        age = a;
        System.out.print("I have created an instance that uses the basic values")

    }
    // Constructor 2
    void Person(String mail, String firstname, String lastname, int a){ 
        name = firstname + lastname;
        fname = firstname;
        lname = lastname;
        email = mail;
        age = a;
        System.out.print("I have created an instance that used some extra values")
    }

    String[] getProperties(){
        String[] info = { name, email,Integer.toString(age)}
        return info
    }
    
    void changeName(String first, String last){
        fname = first;
        lname = last
        name = fname + last // might not need this code
    }
    private void addSSN(int number){
        ssn = number;
    }
}
```


let show an coding example of making an instance and using the variables
```java
// Making instances
Person jermarco = new Person("Jermarco","Burton",36); 
Person john = new Person("123launchcode@gmail.com","John","Henry",25);

// Doing some of the singleton variables
Person.addName(jermarco.name)
Person.addName(john.name)

//I can print that array of names now
System.out.println(Person.peopleCreated)
```

See how when accessing the singleton values I do `Person.peopleCreated` while when access instance values I do the name I assigned to the variable like `jermaco.name`.

## Our concepts so far

Looking at the four concepts we pointed out earlier so far we have done two of them
- **Concepts** (examples coming up):
  - Abstraction
  - Inheritance
  - Polymorphism
  - Encapsulation 

Looking at the four concepts we pointed out earlier so far we have done two of them
- **Encapsulation** we've alrady done above, it just the bundling of data, and methods(functions to make a class)
- **Polymorphism**  - Done by having 2 constructors just to `void Person(String firstname, String lastname, int a)` && `void Person(String mail, String firstname, String lastname, int a)`, see how one of them needs 4 parameters/arguments instead of 3?
    - I also can opt to call them different, but they both work `Person john = new Person("123launchcode@gmail.com","John","Henry",25)` || `Person jermarco = new Person("Jermarco","Burton",36);`

ps - It usually called parameters when making the function, but arguments when you actually call a function/method.

## Now what about Abstraction and Inheritance?


#### Inheritance
When you want a class to inherit all the functions/methods from a different class


Scenario: In the the coding examples before I created an Person class with many methods and properties, lets say I want to create two similar classes one for `Employee` and  `Student`, and in these classes I want have a few more variable, and some methods/functions. In a situation without inheritance I would go about creating two new classes and I would go to the `Person` class and start copying code to past into those new classes.

This isn't recommended, your using alot of the same code, which is a big NO in programming, you could do something like Inheritance to allow for your new class go get all those methods from the `Person` class.

Example of Inheritance:

```java
class Employee extends Person {
    // The new variables this class would have
    String position; 
    double salary;

    Employee(String firstname, String lastname, int age, String position, double salary) {
        super(firstname, lastname, age);// Represents the constructor of the class you inherit from, which is Person
        position = position;
        salary = salary;
    }

    
    // New method 
    void promote(String newPosition, double newSalary) {
        position = newPosition;
        salary = newSalary;
        System.out.println("Employee promoted to " + newPosition + " with salary $" + newSalary);
    }

    // The getProperties method that it inherits from the Person class is being updated here by using Override
    @Override
    String[] getProperties() {
        String[] info = { name, email, Integer.toString(age), position, Double.toString(salary) };
        return info;
    }
}
```
If I were to make an instance of this class, I could access all the variables and methods that happen to be apart of  `Person` class

```Java
Employee zachary = new Employee("Zachary","Coats", 19, "Web developer IA","$0")
zachary.changeName("Zack","Coats") // method that belonged to Person
System.out.println(zachary.name)// Variable that belonged to Person
```







## Ignore for Now!
## Interfaces
Well before I teach that lets go into something called an Interface

In a scenario I want a way to list out the most basic things a smartphone should be able to do, in this situation I would use something called an Interface
Interfaces are mainly used to tell a class what methods it should have for example

```Java
interface Phone{
    void connectInternet();
    void makeCall(String phoneNumber);
    void browseInternet();
}


``` 

