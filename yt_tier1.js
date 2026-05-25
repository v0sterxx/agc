"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const imageUrl = "https://roll1.embrolle.my.id/bulk/yt.png";
  const targetUrl =
    "https://examinerashtrayquizmaster.com/j5mipb56te?key=7f4ee35654fdb7df2a3998b445e3580e";

  // Create container
  const container = document.createElement("div");
  container.id = "youtube-premium-banner-container";

  Object.assign(container.style, {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "20px auto"
  });

  // Create clickable link
  const link = document.createElement("a");
  link.href = targetUrl;
  link.target = "_blank";
  link.rel = "noopener noreferrer sponsored";
  link.setAttribute("aria-label", "Open promotional offer in a new tab");

  // Create banner image
  const image = document.createElement("img");
  image.src = imageUrl;
  image.alt = "Claim Free 14-Days YouTube Premium - Limited-time offer";
  image.width = 728;
  image.height = 90;

  Object.assign(image.style, {
    display: "block",
    width: "728px",
    height: "auto",
    maxWidth: "100%",
    border: "0"
  });

  link.appendChild(image);
  container.appendChild(link);

  // Place banner at the top-center of the page
  document.body.prepend(container);
});
