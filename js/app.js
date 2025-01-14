document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll for navigation links
  document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      document.querySelector(link.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
    });
  });

  // Like button functionality
  document.querySelectorAll(".like-btn").forEach((button, index) => {
    button.addEventListener("click", () => {
      const likeCount = button.nextElementSibling;
      const currentLikes = parseInt(likeCount.textContent.split(": ")[1]);
      likeCount.textContent = `Likes: ${currentLikes + 1}`;
    });
  });
});
