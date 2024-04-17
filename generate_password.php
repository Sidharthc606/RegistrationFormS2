<?php
// Execute the shell script to generate a password
$generatedPassword = shell_exec('./generate_password.sh');

// Return the generated password
echo $generatedPassword;
?>
