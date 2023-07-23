// api/auth.js

// Dummy users and their roles
const users = [
  {
    id: 1,
    username: "admin",
    password: "admin123",
    des: "Hi, I am the admin here.",
    img: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
    role: "admin",
  },
  {
    id: 2,
    username: "user",
    password: "user123",
    des: "Hi, I am the user here.",
    img: "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=785&q=80",
    role: "user",
  },
];

export function login(username, password) {
  // Simulate an asynchronous API call
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find(
        (u) => u.username === username && u.password === password
      );

      if (user) {
        resolve(user);
      } else {
        reject(new Error("Invalid credentials"));
      }
    }, 1000);
  });
}
