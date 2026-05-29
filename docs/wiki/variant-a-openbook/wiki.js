// Variant A — highlights the active sidebar link based on the current file.
(function () {
  const path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".sidebar nav a").forEach((a) => {
    const href = a.getAttribute("href");
    if (href === path) a.classList.add("active");
  });
})();
