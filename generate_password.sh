#!/bin/bash

# Function to generate a password
generate_password() {
    # Generate a password using random characters
    password=$(openssl rand -base64 12 | tr -dc 'a-zA-Z0-9@#$%+' | head -c 12)
    echo "$password"
}

# Function to check if a password meets the validation criteria
check_password() {
    local password=$1
    if [[ $password =~ [[:upper:]] && $password =~ [[:lower:]] && $password =~ [[:digit:]] && $password =~ [@$#%+] && ${#password} -ge 8 ]]; then
        echo "true"
    else
        echo "false"
    fi
}

# Generate and validate password
generated_password=$(generate_password)
while [ $(check_password "$generated_password") != "true" ]; do
    generated_password=$(generate_password)
done

# Output the generated password
echo "Generated Password: $generated_password"

