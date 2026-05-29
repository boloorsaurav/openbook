// Openbook Wiki — sidebar nav highlight + PM/eng track toggle.
(function () {
  // Highlight active sidebar nav link
  const path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".sidebar nav a").forEach((a) => {
    const href = a.getAttribute("href");
    if (href === path) a.classList.add("active");
  });

  // Track toggle — persist via localStorage so the choice carries across pages
  const STORAGE_KEY = "wiki-track";
  const saved = localStorage.getItem(STORAGE_KEY) || "pm";
  document.body.classList.add("track-" + saved);

  document.querySelectorAll(".track-toggle button").forEach((btn) => {
    const track = btn.getAttribute("data-track");
    if (track === saved) btn.classList.add("active");
    btn.addEventListener("click", () => {
      document.body.classList.remove("track-pm", "track-eng");
      document.body.classList.add("track-" + track);
      document.querySelectorAll(".track-toggle button").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      localStorage.setItem(STORAGE_KEY, track);
    });
  });
})();
