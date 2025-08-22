// script.js

// Register new user
function register() {
  const username = document.getElementById("newUsername").value;
  const password = document.getElementById("newPassword").value;

  if (!username || !password) {
    document.getElementById("registerMessage").textContent = "Please fill both fields.";
    return;
  }

  localStorage.setItem("user", JSON.stringify({ username, password }));
  document.getElementById("registerMessage").textContent = "✅ Registration successful!";
}

// Login existing user
function login() {
  const inputUser = document.getElementById("username").value;
  const inputPass = document.getElementById("password").value;
  const storedUser = JSON.parse(localStorage.getItem("user"));

  if (!storedUser) {
    document.getElementById("message").textContent = "❌ No user registered.";
    return;
  }

  if (inputUser === storedUser.username && inputPass === storedUser.password) {
    localStorage.setItem("session", "active");
    document.getElementById("message").textContent = "✅ Login successful!";
  } else {
    document.getElementById("message").textContent = "❌ Invalid credentials.";
  }
}
function logout() {
  localStorage.removeItem("session");
  alert("Logged out!");
}
if (localStorage.getItem("session") === "active") {
  console.log("User is logged in");
}
function login() {
  const inputUser = document.getElementById("username").value;
  const inputPass = document.getElementById("password").value;
  const storedUser = JSON.parse(localStorage.getItem("user"));

  if (!storedUser) {
    document.getElementById("message").textContent = "❌ No user registered.";
    return;
  }

  if (inputUser === storedUser.username && inputPass === storedUser.password) {
    localStorage.setItem("session", "active");
    document.getElementById("message").textContent = "✅ Login successful! Redirecting...";

      // 🔁 Redirect to your car seller site after 1 second
    setTimeout(() => {
      window.location.href = "https://alax0915.github.io/car-seller";
    }, 1000);
  } else {
    document.getElementById("message").textContent = "❌ Invalid credentials.";
  }
