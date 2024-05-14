<?php
// Establish database connection
$db_host = 'localhost'; // Change this to your database host
$db_username = 'your_username'; // Change this to your database username
$db_password = 'your_password'; // Change this to your database password
$db_name = 'your_database_name'; // Change this to your database name

$conn = new mysqli($db_host, $db_username, $db_password, $db_name);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Handle registration form submission
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['signup'])) {
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Hash the password before saving it to the database
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    // Insert user data into the database
    $sql = "INSERT INTO users (email, password) VALUES ('$email', '$hashed_password')";

    if ($conn->query($sql) === TRUE) {
        echo "Registration successful!";
        // Redirect to login page after successful registration
        header("Location: login.html");
        exit;
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();
?>
