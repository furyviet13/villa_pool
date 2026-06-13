/* ==============================
   MAIN.JS  —  호치민풀빌라 (dùng chung mọi trang)
============================== */

document.addEventListener("DOMContentLoaded", function () {
  initHeroSlider();
  initVillaPhotoSlider();
  initVillaTabs();
  initImageModal();
  initSmoothScroll();
  initScrollReveal();
  initVillaFilterLoadMore();
});

/* ============ HERO SLIDER ============ */
function initHeroSlider() {
  const slides = document.querySelectorAll(".hero-slide");
  if (slides.length < 2) return;

  let current = 0;
  setInterval(function () {
    slides[current].classList.remove("active");
    current = (current + 1) % slides.length;
    slides[current].classList.add("active");
  }, 4000);
}

/* ============ VILLA CARD PHOTO SLIDER (dot) ============ */
function initVillaPhotoSlider() {
  document.querySelectorAll(".villa-card").forEach(function (card) {
    const photos = card.querySelectorAll(".villa-photos img");
    const dots = card.querySelectorAll(".dot");
    if (!photos.length || !dots.length) return;

    dots.forEach(function (dot, index) {
      dot.addEventListener("click", function (event) {
        event.preventDefault();
        event.stopPropagation();
        photos.forEach(function (p) { p.classList.remove("active"); });
        dots.forEach(function (d) { d.classList.remove("active"); });
        photos[index].classList.add("active");
        dot.classList.add("active");
      });
    });
  });
}

/* ============ TABS ============ */
function initVillaTabs() {
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".villa-tab-content");
  if (!tabButtons.length || !tabContents.length) return;

  tabButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const target = button.dataset.tab;
      if (!target) return;
      tabButtons.forEach(function (b) { b.classList.remove("active"); });
      tabContents.forEach(function (c) { c.classList.remove("active"); });
      button.classList.add("active");
      const active = document.getElementById(target);
      if (active) active.classList.add("active");
    });
  });
}

/* ============ IMAGE MODAL ============ */
function initImageModal() {
  const modal = document.querySelector(".modal-overlay");
  const modalImage = document.querySelector(".modal-inner img");
  const modalClose = document.querySelector(".modal-close");
  if (!modal || !modalImage || !modalClose) return;

  const images = document.querySelectorAll(".detail-main-image, .detail-gallery img");
  if (!images.length) return;

  images.forEach(function (image) {
    image.addEventListener("click", function (event) {
      const src = image.getAttribute("src");
      if (!src) return;
      event.preventDefault();
      modalImage.setAttribute("src", src);
      modalImage.setAttribute("alt", image.getAttribute("alt") || "Villa image");
      modal.classList.add("open");
      document.body.style.overflow = "hidden";
    });
  });

  function closeModal() {
    modal.classList.remove("open");
    modalImage.setAttribute("src", "");
    document.body.style.overflow = "";
  }

  modalClose.addEventListener("click", closeModal);
  modal.addEventListener("click", function (e) { if (e.target === modal) closeModal(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeModal(); });
}

/* ============ SMOOTH SCROLL ============ */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (event) {
      const id = link.getAttribute("href");
      if (!id || id === "#") return;
      const el = document.querySelector(id);
      if (!el) return;
      event.preventDefault();
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

/* ============ SCROLL REVEAL ============ */
function initScrollReveal() {
  const items = document.querySelectorAll(
    ".villa-card, .blog-card, .feature-item, .detail-text, .detail-list li, .faq-item, .room-option"
  );
  if (!items.length) return;

  items.forEach(function (item) { item.classList.add("reveal"); });

  if (!("IntersectionObserver" in window)) {
    items.forEach(function (item) { item.classList.add("active"); });
    return;
  }

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  items.forEach(function (item) { observer.observe(item); });
}

/* ============ FILTER + LOAD MORE (목록 페이지) ============ */
function initVillaFilterLoadMore() {
  const filterButtons = document.querySelectorAll(".villa-filter-btn");
  const villaCards = Array.prototype.slice.call(document.querySelectorAll("#villaGrid .villa-card"));
  const loadMoreBtn = document.getElementById("loadMoreVillas");
  const emptyMsg = document.getElementById("villaEmpty");

  if (!filterButtons.length || !villaCards.length || !loadMoreBtn) return;

  const perPage = 9;
  let currentFilter = "all";
  let visibleCount = perPage;

  function getFilteredCards() {
    if (currentFilter === "all") return villaCards;
    return villaCards.filter(function (card) { return card.dataset.location === currentFilter; });
  }

  function renderCards() {
    const filtered = getFilteredCards();

    villaCards.forEach(function (card) { card.style.display = "none"; });
    filtered.slice(0, visibleCount).forEach(function (card) { card.style.display = ""; });

    if (emptyMsg) emptyMsg.hidden = filtered.length !== 0;
    loadMoreBtn.style.display = filtered.length > visibleCount ? "inline-flex" : "none";
  }

  filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      currentFilter = button.dataset.filter;
      visibleCount = perPage;
      filterButtons.forEach(function (b) { b.classList.remove("active"); });
      button.classList.add("active");
      renderCards();
    });
  });

  loadMoreBtn.addEventListener("click", function () {
    visibleCount += perPage;
    renderCards();
  });

  renderCards();
}
