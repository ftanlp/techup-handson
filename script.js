var age = 20;
age = 65;
console.log(age);

var username = "userID";
var password = "p@ssw0rd";
var isFemale = true;
var isLoggedIn = false
var blog_posts = ["Testing123", "Testingabc", "Testing!@#"]

console.log(username);
console.log(password);
console.log(isFemale);
console.log(isLoggedIn);
console.log(blog_posts);

if (isFemale == true) {
    console.log("You are female")
} else {
    console.log("You are not female")
}

while (age < 70) {
    console.log("Your age is " + age);
    age = age + 1;
}

function sayHello () {
    var x = 1;
    while(x < 5) {
    alert("Hello everyone");
    x++;   
    /* x++  replaces x = x + 1 */
    }
}

function showAge() {
    var user_input = document.getElementById("user-input").value;
    document.getElementById("header-age").textContent = user_input;
}

