// Openbook Wiki — scroll-spy sidebar highlight + PM/eng track toggle.
(function () {
  // ── Scroll-spy: highlight the sidebar link for whichever section is in view.
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll(".sidebar nav a");

  function setActive(id) {
    navLinks.forEach((a) => {
      a.classList.toggle("active", a.getAttribute("href") === "#" + id);
    });
  }

  if (sections.length && "IntersectionObserver" in window) {
    // rootMargin shifts the trigger band so a section counts as "active" once
    // its top crosses ~30% down the viewport and stays active until it scrolls past ~60%.
    const observer = new IntersectionObserver(
      (entries) => {
        // Prefer the topmost visible section
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length) {
          visible.sort((a, b) => a.target.offsetTop - b.target.offsetTop);
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    sections.forEach((s) => observer.observe(s));

    // Initialise highlight from URL hash (or first section).
    const initial = window.location.hash ? window.location.hash.slice(1) : sections[0].id;
    setActive(initial);
  }

  // ── PM / Engineers track toggle — persist via localStorage.
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
