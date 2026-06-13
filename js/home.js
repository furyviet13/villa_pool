/* ==============================================================
   HOME.JS — 호치민풀빌라
   Trang chủ: random hiển thị 6 villa nổi bật từ toàn bộ 17 villa.
   Đặt tại: js/home.js   (index.html nạp <script src="js/home.js">)

   ⚠️ ẢNH — TẤT CẢ đã trỏ vào đúng thư mục trong picter/picter-villa/.
   - 6 villa đầu: đã có tên file thật.
   - 11 villa còn lại: đúng THƯ MỤC, tên file tạm để "1.jpg".
     👉 Mở từng folder, đổi "1.jpg" thành tên file ảnh cover thật.
        (hoặc gửi mình danh sách file, mình điền hết.)
   - Tên thư mục / tên file PHÂN BIỆT HOA–THƯỜNG trên Vercel.
============================================================== */

var homeVillas = [
  {
    name: "빌라 199",
    rooms: "침실 6개 • 욕실 7개",
    price: '1박 2일 <b>$400</b> · 주말 <b>$500</b>',
    desc: "호치민 2군 응우옌티딘의 프리미엄 풀빌라. 모든 침실 개별 욕실과 엘리베이터를 갖춘 럭셔리 빌라.",
    tags: ["호치민", "프라이빗 수영장", "엘리베이터"],
    img: "picter/picter-villa/119/gen-h-z7828535077979_d14c16c85d6747b677a606b1d545c333.jpg",
    url: "villa/villa-detail-199.html"
  },
  {
    name: "정원 빌라",
    rooms: "침실 8개 • 욕실 7개",
    price: '1박 2일 <b>$500</b>',
    desc: "호치민 2군 안카인의 프리미엄 정원 빌라. 대규모 인원이 편안하게 이용할 수 있는 럭셔리 빌라.",
    tags: ["호치민", "정원 빌라", "단체 모임"],
    img: "picter/picter-villa/villa-san-vuon-q2/gen-h-z7830981549943_0c44aa256402dd637c6defa034d581e2.jpg",
    url: "villa/villa-detail-sanvuon-q2.html"
  },
  {
    name: "VILLA RUBY 09",
    rooms: "침실 6개 • 욕실 7개",
    price: '1박 2일 <b>$400</b> · 주말 <b>$500</b>',
    desc: "투득시 하도 단지의 프리미엄 빌라. 자쿠지, 스톤 사우나, 전용 노래방을 갖춘 고급 빌라.",
    tags: ["호치민", "자쿠지", "사우나"],
    img: "picter/picter-villa/villa-ruby09/gen-n-z7831005117921_1948cb762ae3b2468584d59faeccb1ef.jpg",
    url: "villa/villa-ruby-09.html"
  },
  {
    name: "정원 빌라 2",
    rooms: "침실 7개 • 욕실 6개",
    price: '1박 2일 <b>$400</b> · 주말 <b>$500</b>',
    desc: "타오디엔의 다층 프리미엄 풀빌라. 프라이빗 수영장과 전용 노래방 시설을 갖춘 럭셔리 빌라.",
    tags: ["호치민", "프라이빗 수영장", "노래방"],
    img: "picter/picter-villa/villa-thao-dien/z7924765428811_860a354384a92569792512764f6637ca.jpg",
    url: "villa/thao-dien-villa.html"
  },
  {
    name: "센트럴 빌라",
    rooms: "침실 8개 • 욕실 7개",
    price: '1박 2일 <b>$400</b> · 주말 <b>$500</b>',
    desc: "호치민 2군의 약 700㎡ 빌라. 다층 구조로 단체 모임과 가족 여행에 적합.",
    tags: ["호치민", "단체 모임", "프리미엄"],
    img: "picter/picter-villa/villa-center/gen-h-z7861172495777_909bdd37fd414c41fd281e4ebfb68eaf.jpg",
    url: "villa/central-villa.html"
  },
  {
    name: "빌라 299",
    rooms: "침실 7개 • 욕실 7개",
    price: '1박 2일 <b>$400</b> · 주말 <b>$500</b>',
    desc: "안푸의 프리미엄 풀빌라. 루프탑 수영장, 전용 노래방, 당구대가 있는 넓은 거실의 럭셔리 빌라.",
    tags: ["호치민", "루프탑 수영장", "노래방"],
    img: "picter/picter-villa/299/gen-h-z7861231011588_6cdafdbb7db834bdebd2a49c159717bd.jpg",
    url: "villa/villa-detail-299.html"
  },
  {
    name: "D2 CENTER POOL VILLA",
    rooms: "침실 6개 • 욕실 5개",
    price: '1박 2일 <b>$430</b> · 주말 <b>$530</b>',
    desc: "2군 중심 약 700㎡ 풀빌라. 노래방·당구대·가든 BBQ·수영장·자쿠지, 메트로역 인근.",
    tags: ["호치민", "자쿠지", "BBQ"],
    img: "picter/picter-villa/villa-d2-center/IMG_6244.JPG",
    url: "villa/villa-detail-d2-center.html"
  },
  {
    name: "LUXE VERDE VILLA",
    rooms: "침실 7개 • 욕실 6개",
    price: '1박 2일 <b>$430</b> · 주말 <b>$480</b>',
    desc: "타인미러이의 리조트형 빌라. 루프탑 수영장, 방음 노래방·당구대·BBQ.",
    tags: ["호치민", "루프탑 수영장", "노래방"],
    img: "picter/picter-villa/villa-luxe-verde/IMG_1793.JPG",
    url: "villa/villa-luxe-verde.html"
  },
  {
    name: "VILLA DIAMOND",
    rooms: "침실 8개 • 욕실 5개",
    price: '1박 2일 <b>$430</b> · 주말 <b>$530</b>',
    desc: "네오클래식 스타일 빌라. 층별 노래방·로비 당구대·프라이빗 수영장·가든 BBQ.",
    tags: ["호치민", "당구대", "BBQ"],
    img: "picter/picter-villa/villa-diamond-8br/DSC02863.jpg",
    url: "villa/villa-diamond.html"
  },
  {
    name: "VILLA HARMONY",
    rooms: "침실 9개 • 욕실 9개",
    price: '1박 2일 <b>$530</b> · 주말 <b>$630</b>',
    desc: "풀럭셔리 네오클래식 빌라. 9개 마스터룸, 수영장·방음 노래방·당구대·BBQ·피아노.",
    tags: ["호치민", "피아노", "럭셔리"],
    img: "picter/picter-villa/villa-harmony/IMG_6512.JPG",
    url: "villa/villa-harmony.html"
  },
  {
    name: "GARDEN OASIS POOL VILLA",
    rooms: "침실 10개 • 욕실 7개",
    price: '1박 2일 <b>$550</b> · 주말 <b>$650</b>',
    desc: "사이공 미스터리의 대형 풀빌라. 헬스장·노래방·당구대·BBQ·엘리베이터.",
    tags: ["호치민", "헬스장", "엘리베이터"],
    img: "picter/picter-villa/villa-garden-oais/1 JBG07166-HDR.jpg",
    url: "villa/villa-garden-oasis.html"
  },
  {
    name: "VILLA PARADISE",
    rooms: "침실 6개 • 욕실 5개",
    price: '1박 2일 <b>$430</b> · 주말 <b>$530</b>',
    desc: "안카인의 리조트형 풀빌라. 노래방·당구대·가든 BBQ, 넓은 수영장.",
    tags: ["호치민", "노래방", "BBQ"],
    img: "picter/picter-villa/villa-paradise/F5618086-5553-4CCC-93F6-2627D955901B.jpg",
    url: "villa/villa-paradise.html"
  },
  {
    name: "MIA RIVERSIDE VILLA",
    rooms: "침실 9개 • 욕실 6개",
    price: '1박 2일 <b>$530</b> · 주말 <b>$630</b>',
    desc: "쭝선 단지의 리버사이드 빌라. 루프탑 인피니티풀, 노래방·당구대·BBQ·사우나.",
    tags: ["호치민", "인피니티풀", "사우나"],
    img: "picter/picter-villa/villa-mia/1-(59).jpg",
    url: "villa/villa-mia-riverside.html"
  },
  {
    name: "BEN THANH POOL VILLA",
    rooms: "침실 6개 • 욕실 6개",
    price: '1박 2일 <b>$530</b> · 주말 <b>$630</b>',
    desc: "호치민 1군의 풀빌라. 1층 노래방·대형 수영장·사우나, 현대적 인테리어.",
    tags: ["호치민", "1군", "사우나"],
    img: "picter/picter-villa/villa-benthanh/JBG03172-HDR.jpg",
    url: "villa/villa-ben-thanh.html"
  },
  {
    name: "SUNRISE VILLA Q7",
    rooms: "침실 9개 • 욕실 8개",
    price: '1박 2일 <b>$530</b> · 주말 <b>$630</b>',
    desc: "7군 힘람의 빌라. 자쿠지·건식/습식 사우나·엘리베이터·BBQ·당구대.",
    tags: ["호치민", "자쿠지", "사우나"],
    img: "picter/picter-villa/villa-sunrise-q7/1.png",
    url: "villa/villa-sunrise-q7.html"
  },
  {
    name: "LUNA CASA VILLA",
    rooms: "침실 9개 • 욕실 6개",
    price: '1박 2일 <b>$520</b> · 주말 <b>$620</b>',
    desc: "7군 힘람의 풀럭셔리 빌라. 노래방·당구대·BBQ·사우나·자쿠지, 피아노 스튜디오.",
    tags: ["호치민", "피아노", "자쿠지"],
    img: "picter/picter-villa/villa-luna/1-(1).jpg",
    url: "villa/villa-luna-casa.html"
  },
  {
    name: "SANORITA POOL VILLA",
    rooms: "침실 9개 • 욕실 6개",
    price: '1박 2일 <b>$480</b> · 주말 <b>$580</b>',
    desc: "7군 힘람의 풀빌라. 노래방·당구대·BBQ·수영장을 갖춘 럭셔리 인테리어의 빌라.",
    tags: ["호치민", "수영장", "노래방"],
    img: "picter/picter-villa/villa-sanorita/PES08904.1.jpeg",
    url: "villa/villa-sanorita.html"
  }
];

function shuffleArray(arr) {
  var a = arr.slice();
  for (var i = a.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var t = a[i]; a[i] = a[j]; a[j] = t;
  }
  return a;
}

function renderFeaturedVillas() {
  var grid = document.getElementById("featuredVillaGrid");
  if (!grid) return;

  var selected = shuffleArray(homeVillas).slice(0, 6);

  grid.innerHTML = selected.map(function (v) {
    var tags = v.tags.map(function (t) {
      return '<span class="amenity-tag">' + t + '</span>';
    }).join("");

    return '' +
      '<article class="villa-card">' +
        '<div class="villa-photos"><span class="villa-badge">HOT</span>' +
          '<img src="' + v.img + '" alt="' + v.name + '" loading="lazy"></div>' +
        '<div class="villa-info">' +
          '<h3 class="villa-name">' + v.name + '</h3>' +
          '<div class="villa-rooms">' + v.rooms + '</div>' +
          '<div class="villa-price">' + v.price + '</div>' +
          '<p class="villa-desc">' + v.desc + '</p>' +
          '<div class="villa-amenities">' + tags + '</div>' +
          '<a href="' + v.url + '" class="villa-cta">자세히 보기</a>' +
        '</div>' +
      '</article>';
  }).join("");
}

document.addEventListener("DOMContentLoaded", renderFeaturedVillas);