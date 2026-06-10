/* ==============================
   Home JS
   Website: 호치민풀빌라
   File path: js/home.js
============================== */

document.addEventListener("DOMContentLoaded", function () {
  renderFeaturedVillas();
  renderLatestBlogs();
});

/* ==============================
   FEATURED VILLAS
   Hiển thị ngẫu nhiên tối đa 6 villa
============================== */

const homeVillas = [
  {
    name: "빌라 199",
    rooms: "침실 6개 • 최대 15명",
    desc: "호치민 2군 응우옌티딘에 위치한 프리미엄 풀빌라.침실 6개, 욕실 7개를 갖춘 럭셔리 숙소입니다.",
    image: "../picter/picter-villa/119-nguyenthidinh/gen-h-z7828535077979_d14c16c85d6747b677a606b1d545c333.jpg",
    url: "villa/villa-detail-199.html",
    tags: ["호치민", "프라이빗 수영장", "엘리베이터"]
  },
  {
    name: "정원 빌라",
    rooms: "침실 8개 • 욕실 7개",
    desc: "호치민 2군 안카인에 위치한 프리미엄 정원 빌라. 대규모 인원이 편안하게 이용할 수 있는 럭셔리 빌라입니다.",
    image: "../picter/picter-villa/villa-san-vuon-q2/gen-h-z7830981549943_0c44aa256402dd637c6defa034d581e2.jpg",
    url: "villa/villa-detail-sanvuon-q2.html",
    tags: ["호치민", "정원 빌라", "단체 모임"]
  },
  {
    name: "VILLA RUBY 09",
    rooms: "침실 6개 • 욕실 7개",
    desc: "호치민 투득시 타오미로이 주거단지에 위치한 프리미엄 빌라. 자쿠지, 사우나, 노래방을 갖춘 고급 빌라입니다.",
    image: "../picter/picter-villa/villa-ruby09/gen-h-z7831005109634_b0abfd96f7136bc11cbeada784d98dd5.jpg",
    url: "villa-ruby-09.html",
    tags: ["호치민", "자쿠지", "사우나"]
  },
  {
    name: "정원 빌라 2",
    rooms: "침실 7개 • 욕실 6개",
    desc: "호치민 투득시 타오디엔에 위치한 프리미엄 풀빌라. 프라이빗 수영장과 전용 노래방 시설을 갖춘 럭셔리 빌라입니다.",
    image: "../picter/picter-villa/villa-san-vuon-2-q2/gen-h-z7830981570354_b876d10a0ee3b8e15f00661253c03765.jpg",
    url: "thao-dien-villa.html",
    tags: ["호치민", "프라이빗 수영장", "노래방"]
  },
  {
    name: "센트럴 빌라",
    rooms: "침실 8개 • 욕실 7개",
    desc: "호치민 2군에 위치한 프리미엄 빌라. 넓은 공간과 다층 구조로 단체 모임과 가족 여행에 적합합니다.",
    image: "../picter/picter-villa/villa-q2/gen-h-z7861172495777_909bdd37fd414c41fd281e4ebfb68eaf.jpg",
    url: "central-villa.html",
    tags: ["호치민", "단체 모임", "프리미엄 빌라"]
  },
  {
    name: "빌라 299",
    rooms: "침실 7개 • 욕실 7개",
    desc: "호치민 안푸 지역에 위치한 프리미엄 풀빌라. 루프탑 수영장, 전용 노래방, 넓은 거실을 갖춘 럭셔리 빌라입니다.",
    image: "../picter/picter-villa/villa299/a.png",
    url: "vila/villa-299.html",
    tags: ["호치민", "루프탑 수영장", "노래방"]
  }
];

function renderFeaturedVillas() {
  const grid = document.getElementById("featuredVillaGrid");

  if (!grid) return;

  const selectedVillas = shuffleArray(homeVillas).slice(0, 6);

  grid.innerHTML = selectedVillas.map(function (villa) {
    return `
      <article class="villa-card">
        <div class="villa-photos">
          <img src="${villa.image}" class="active" alt="${villa.name}">
        </div>

        <div class="villa-info">
          <h3 class="villa-name">${villa.name}</h3>

          <div class="villa-rooms">
            ${villa.rooms}
          </div>

          <p class="villa-desc">
            ${villa.desc}
          </p>

          <div class="villa-amenities">
            ${villa.tags.map(function (tag) {
              return `<span class="amenity-tag">${tag}</span>`;
            }).join("")}
          </div>

          <a href="${villa.url}" class="villa-cta">
            자세히 보기
          </a>
        </div>
      </article>
    `;
  }).join("");
}

/* ==============================
   LATEST BLOGS
   Hiển thị tối đa 4 bài viết mới
============================== */

const homeBlogs = [
  {
    title: "Kinh nghiệm thuê villa hồ bơi tại TP.HCM",
    date: "01/06/2026",
    desc: "Những điều cần lưu ý trước khi đặt villa cho gia đình hoặc nhóm bạn.",
    image: "picter/blog1.jpg",
    url: "blog/kinh-nghiem-thue-villa-ho-boi.html"
  },
  {
    title: "Top villa gần Sài Gòn cho kỳ nghỉ cuối tuần",
    date: "28/05/2026",
    desc: "Gợi ý các khu vực villa phù hợp để nghỉ ngắn ngày gần TP.HCM.",
    image: "picter/blog2.jpg",
    url: "blog/top-villa-gan-sai-gon.html"
  },
  {
    title: "Thuê villa tổ chức sinh nhật cần lưu ý gì?",
    date: "20/05/2026",
    desc: "Các tiêu chí chọn villa phù hợp cho tiệc sinh nhật và sự kiện riêng.",
    image: "picter/blog3.jpg",
    url: "blog/thue-villa-to-chuc-sinh-nhat.html"
  },
  {
    title: "Cách chọn villa phù hợp cho gia đình",
    date: "15/05/2026",
    desc: "Hướng dẫn chọn villa có hồ bơi riêng, sân vườn và không gian sinh hoạt.",
    image: "picter/blog4.jpg",
    url: "blog/cach-chon-villa-cho-gia-dinh.html"
  }
];

function renderLatestBlogs() {
  const grid = document.getElementById("latestBlogGrid");

  if (!grid) return;

  const selectedBlogs = homeBlogs.slice(0, 4);

  grid.innerHTML = selectedBlogs.map(function (blog) {
    return `
      <a href="${blog.url}" class="blog-card">
        <img src="${blog.image}" alt="${blog.title}">

        <div class="blog-info">
          <span class="blog-date">${blog.date}</span>

          <h3 class="blog-title">
            ${blog.title}
          </h3>

          <p class="blog-desc">
            ${blog.desc}
          </p>
        </div>
      </a>
    `;
  }).join("");
}

/* ==============================
   UTILS
============================== */

function shuffleArray(array) {
  return array
    .map(function (item) {
      return {
        item: item,
        sort: Math.random()
      };
    })
    .sort(function (a, b) {
      return a.sort - b.sort;
    })
    .map(function (object) {
      return object.item;
    });
}