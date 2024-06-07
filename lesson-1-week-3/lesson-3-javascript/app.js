// Single Line Comments
//    Multiple Line Comments /* Nested Comments */
/*
    What Will Cover in this Lesson
    a. Introduction to JavaScript
        -- It is a lightweight interpreted or just-in-time compiled programming language with first-class functions.
        -- Javacript is a must for anyone intrested in getting into webdevelopment.
        -- Uses and Applications of JavaScript in Web Applications
            1. Client Side Validation: verify any inputs in a form
            2. DOM Manipulation
            3. User Notifications
            4. Animations
    1. Variables
     --JavaScript has three types of variables:
        a. var
            In the initial version/edition of JavaScript, the only way to declare a variable was by using the var keyword.
            */
            var x = 10;
            console.log(x);
        /*
        b. let
        */
            let y = 20;
            y = 30;
            console.log(`y=${y}`);
        /*
        c. const
        */
            const z = 30;
            // Incrementing the value of z will throw an error
                p = z+1;
                // z=40; // This will throw an error
            console.log(p);
        /*
        d. Primitive Data Types
            1. Number
            */
            let num = 10;
            num = 10.5;
            console.log(typeof num);
        /*
            2. String
        */
            let str = "Hello World";
            let age = "80";
            console.log(typeof age);
            console.log(typeof str);
        /*
            3. Boolean
            -- Boolean simply represents true or false values.
        */
            let isTrue = true;
            let isFalse = false;
            let speed = 150;
            let allowedSpeed = 80;
            let alcoholLevel = 0.09;
            let isDrunk = alcoholLevel > 0.08;
            console.log(isDrunk);
            let isSpeeding = speed > allowedSpeed;
            console.log(isSpeeding);
            // console.log(typeof isFalse);
            // console.log(typeof isTrue);
        /*
            4. Null
            -- The value null represents the intentional absence of any object value.
        */
            let empty = null;
            console.log(typeof empty);
        /*
            5. Undefined
        */
            let notDefined;
            let gender = undefined;
            console.log(typeof gender);
            let heigt;
            console.log(typeof heigt);
            console.log(typeof notDefined);
        /*
            6. Symbol
        */
            let sym1 = Symbol("foo");
            let sym2 = Symbol("foo");
            console.log(typeof sym1);
            console.log(sym1 === sym2);
        /*
            7. Object
            -- An object is a collection of key-value pairs. The key is a string, and the value can be any data type.
            -- An Object can contain objects
        */
            let person = {
                name: "John Doe",
                age: 30,
                isMarried: false,
                address: {
                    street: "123 Main St",
                    city: "Nairobi",
                    country: "Kenya"
                }
            };
            let ourWebsite = document.getElementsByTagName("body");
            console.log(typeof ourWebsite);
            console.log(person);
        // Create a car Object
      

        /*
        */
        /*
        e. Dynamic Typing
        f. Objects
        g. Arrays
        h. Functions
        i. Types of funtions
        j. Scope

    2. Data Types
    3. Operators
        a. Arithmetic Operators
        b. Comparison Operators
        c. Logical Operators
        d. Assignment Operators
        e. Conditional Operators
        f. Bitwise Operators
        g. Equality Operators
        h. Ternary Opetator
        i. Operator Precedence
        j. Summary
    4. Control Flow
        a. if...else statements
        b. switch statements
        c. for loops
        d. while loops
        e. do...while loops
        f. infinite loops
        g. break and continue
        h. Summary
    5. Functions
    6. Objects
        a. Object Literals
        b. Factory Functions
        c. Constructor Functions
        d. Object dynamic properties
        e. Object methods
    7. Arrays
    8. Scope
    9. Hoisting
    10. Closures
    11. Callbacks
    12. Promises
*/