document.addEventListener("DOMContentLoaded", () => {
    const signupForm = document.getElementById("signupForm");
    const profileDetails = document.getElementById("profileDetails");
    const message = document.getElementById("message");
    const logoutButton = document.getElementById("logoutButton");
  
    signupForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
  
      // Simulate generating an access token
      const accessToken = generateAccessToken();
  
      // Create user object and store in local storage
      const user = { username, accessToken };
      localStorage.setItem("user", JSON.stringify(user));
  
      // Show success message and redirect to profile page
      message.textContent = "Signup successful!";
      message.style.color = "green";
      setTimeout(() => {
        window.location.href = "profile.html";
      }, 1500);
    });
  
    logoutButton.addEventListener("click", () => {
      // Clear user data from local storage
      localStorage.removeItem("user");
      window.location.href = "index.html";
    });
  
    // Check if user is logged in
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user || !user.accessToken || window.location.pathname === "/index.html") {
      window.location.href = "index.html";
    } else {
      profileDetails.textContent = `Welcome, ${user.username}!`;
    }
  });
  
  function generateAccessToken() {
    // This is a simplified example, a real access token should be generated securely
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
  }
  