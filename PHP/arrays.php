<?php
// An array is a special variable, which can hold more than one value at a time.
// In PHP, there are three types of arrays:
    // Indexed arrays - Arrays with a numeric index
        // example:
        $cars = array("Volvo", "BMW", "Toyota");
        echo "I like " . $cars[0] . ", " . $cars[1] . " and " . $cars[2] . ".";
        echo "<br>";
    // Associative arrays - Arrays with named keys
        // example:
        $age = array("Peter"=>"35", "Ben"=>"37", "Joe"=>"43");
        echo "Peter is " . $age['Peter'] . " years old." . "and ". "Ben is " . $age['Ben'] . " years old." . "and". "Joe is " . $age['Joe'] . " years old.";
    // Multidimensional arrays - Arrays containing one or more arrays
        // example:
        $cars = array(
            array("Volvo",22,18),
            array("BMW",15,13),
            array("Saab",5,2),
            array("Land Rover",17,15)
        );
        echo "I like " . $cars[0][0] . ", " . $cars[1][0] . ", " . $cars[2][0] . " and " . $cars[3][0] . ".";
        echo "<br>";
        echo "I like " . $cars[0][0] . " and " . $cars[0][1] . " and " . $cars[0][2] . ".";
        echo "<br>";
        echo "I like " . $cars[1][0] . " and " . $cars[1][1] . " and " . $cars[1][2] . ".";
        echo "<br>";
        echo "I like " . $cars[2][0] . " and " . $cars[2][1] . " and " . $cars[2][2] . ".";
        echo "<br>";
        echo "I like " . $cars[3][0] . " and " . $cars[3][1] . " and " . $cars[3][2] . ".";
        echo "<br>";
    
    // Loop through an Indexed array
    $cars = array("Volvo", "BMW", "Toyota");
    foreach($cars as $car){
        print "$car <br>";
    };