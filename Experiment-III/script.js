const loginForm = document.getElementById("loginForm"); 

loginForm.addEventListener ("submit", function(event) {
    event.preventDefault(); 
    
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    
    if (email === "")
    {
        alert("Please enter your email.");
        return;
    }
    
    if (email.includes(" ")) 
    {
         alert("Email cannot contain spaces.");
         return;
     }
        
    if (!email.includes("@")) 
    {
        alert("Email must contain @ symbol.");
        return;
    }
    if (!email.includes("."))
    {
         alert("Email must contain a dot (.) symbol.");
        return;
    }

    if (password === "")
    {
        alert("Please enter your password.");
        return;
    }

    if (password.length < 6)
    {
        alert("Password must contain at least 6 characters");
        return;
    }

    if (password.length > 10)
    {
        alert("Password must not exceed 10 characters");
        return;
    }
    if (password.includes(" "))
    {
        alert("Password cannot contain spaces.");
        return;
    }

    if (!/[A-Z]/.test(password))
    {
        alert("Password must contain at least one uppercase letter.");
        return;
    }

    if (!/[a-z]/.test(password))
    {
        alert("Password must contain at least one lowercase letter.");
        return;
    }
    if (!/[0-9]/.test(password))
    {
        alert("Password must contain at least one number.");
        return;
    }

    if (!/[!@#$%^&8]/.test(password))
    {
        alert("Password must contain at least one special character (!@#$%6&8).");
        return;
    }

    alert("Login form validation successful!");

}

);