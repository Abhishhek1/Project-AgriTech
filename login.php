<?php
session_start();

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

// Handle login form submission
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['login'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Retrieve user data from the database based on username
    $sql = "SELECT * FROM users WHERE username='$username'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        if (password_verify($password, $row['password'])) {
            // Password is correct, start a session
            $_SESSION['loggedin'] = true;
            $_SESSION['username'] = $username;
            echo "Login successful!";
            // Redirect to homepage or dashboard
            header("Location: index.html");
            exit;
        } else {
            echo "Incorrect password!";
        }
    } else {
        echo "No user found with that username!";
    }
}

$conn->close();
?>
