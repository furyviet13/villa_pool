/* ==============================
   MAIN.JS
   Website: 호치민풀빌라
============================== */

document.addEventListener("DOMContentLoaded", function () {
  initHeroSlider();
  initRandomHomeItems();
  initVillaPhotoSlider();
  initVillaTabs();
  initImageModal();
  initSmoothScroll();
});

/* ==============================
   HERO SLIDER
============================== */

function initHeroSlider() {
  const slides = document.querySelectorAll(".hero-slide");

  if (!slides.length) return;

  let currentIndex = 0;

  setInterval(function () {
    slides[currentIndex].classList.remove("active");

    currentIndex = (currentIndex + 1) % slides.length;

    slides[currentIndex].classList.add("active");
  }, 4000);
}

/* ==============================
   HOME RANDOM ITEMS
   Villa nổi bật: tối đa 6
   Blog: tối đa 4
============================== */

function initRandomHomeItems() {
  limitRandomItems("#featuredVillaGrid", ".villa-card", 6);
  limitRandomItems("#latestBlogGrid", ".blog-card", 4);
}

function limitRandomItems(containerSelector, itemSelector, limit) {
  const container = document.querySelector(containerSelector);

  if (!container) return;

  const items = Array.from(container.querySelectorAll(itemSelector));

  if (items.length <= limit) return;

  shuffleArray(items);

  container.innerHTML = "";

  items.slice(0, limit).forEach(function (item) {
    container.appendChild(item);
  });
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));

    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }

  return array;
}

/* ==============================
   VILLA CARD PHOTO SLIDER
============================== */

function initVillaPhotoSlider() {
  const villaCards = document.querySelectorAll(".villa-card");

  villaCards.forEach(function (card) {
    const photos = card.querySelectorAll(".villa-photos img");
    const dots = card.querySelectorAll(".dot");

    if (!photos.length || !dots.length) return;

    dots.forEach(function (dot, index) {
      dot.addEventListener("click", function (event) {
        event.preventDefault();
        event.stopPropagation();

        photos.forEach(function (photo) {
          photo.classList.remove("active");
        });

        dots.forEach(function (item) {
          item.classList.remove("active");
        });

        photos[index].classList.add("active");
        dot.classList.add("active");
      });
    });
  });
}

/* ==============================
   VILLA TABS
============================== */

function initVillaTabs() {
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".villa-tab-content");

  if (!tabButtons.length || !tabContents.length) return;

  tabButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const target = button.dataset.tab;

      if (!target) return;

      tabButtons.forEach(function (btn) {
        btn.classList.remove("active");
      });

      tabContents.forEach(function (content) {
        content.classList.remove("active");
      });

      button.classList.add("active");

      const activeContent = document.getElementById(target);

      if (activeContent) {
        activeContent.classList.add("active");
      }
    });
  });
}

/* ==============================
   IMAGE MODAL
============================== */

function initImageModal() {
  const modal = document.querySelector(".modal-overlay");
  const modalImage = document.querySelector(".modal-inner img");
  const modalClose = document.querySelector(".modal-close");

  if (!modal || !modalImage || !modalClose) return;

  const images = document.querySelectorAll(
    ".villa-photos img, .detail-main-image, .blog-card img"
  );

  if (!images.length) return;

  images.forEach(function (image) {
    image.addEventListener("click", function (event) {
      const imageSrc = image.getAttribute("src");
      const imageAlt = image.getAttribute("alt") || "Villa image";

      if (!imageSrc) return;

      event.preventDefault();

      modalImage.setAttribute("src", imageSrc);
      modalImage.setAttribute("alt", imageAlt);
      modal.classList.add("open");
      document.body.style.overflow = "hidden";
    });
  });

  modalClose.addEventListener("click", closeModal);

  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      closeModal();
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeModal();
    }
  });

  function closeModal() {
    modal.classList.remove("open");
    modalImage.setAttribute("src", "");
    document.body.style.overflow = "";
  }
}

/* ==============================
   SMOOTH SCROLL
============================== */

function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(function (link) {
    link.addEventListener("click", function (event) {
      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") return;

      const targetElement = document.querySelector(targetId);

      if (!targetElement) return;

      event.preventDefault();

      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  });
}

/* ==============================
   SCROLL REVEAL ANIMATION
============================== */

document.addEventListener("DOMContentLoaded", function () {
  initScrollReveal();
});

function initScrollReveal() {
  const revealItems = document.querySelectorAll(
    ".villa-card, .blog-card, .feature-item, .detail-text, .detail-list li, .faq-item, .room-option"
  );

  if (!revealItems.length) return;

  revealItems.forEach(function (item) {
    item.classList.add("reveal");
  });

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12
    }
  );

  revealItems.forEach(function (item) {
    observer.observe(item);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  initVillaFilterLoadMore();
});

function initVillaFilterLoadMore() {
  const filterButtons = document.querySelectorAll(".villa-filter-btn");
  const villaCards = Array.from(document.querySelectorAll("#villaGrid .villa-card"));
  const loadMoreBtn = document.getElementById("loadMoreVillas");

  if (!filterButtons.length || !villaCards.length || !loadMoreBtn) return;

  const perPage = 9;
  let currentFilter = "all";
  let visibleCount = perPage;

  function getFilteredCards() {
    if (currentFilter === "all") {
      return villaCards;
    }

    return villaCards.filter(function (card) {
      return card.dataset.location === currentFilter;
    });
  }

  function renderCards() {
    const filteredCards = getFilteredCards();

    villaCards.forEach(function (card) {
      card.style.display = "none";
    });

    filteredCards.slice(0, visibleCount).forEach(function (card) {
      card.style.display = "";
    });

    if (filteredCards.length > visibleCount) {
      loadMoreBtn.style.display = "inline-flex";
    } else {
      loadMoreBtn.style.display = "none";
    }
  }

  filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      currentFilter = button.dataset.filter;
      visibleCount = perPage;

      filterButtons.forEach(function (btn) {
        btn.classList.remove("active");
      });

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