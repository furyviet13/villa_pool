/* ==============================
   HOME.JS — 호치민풀빌라
   Trang chủ: random hiển thị 6 villa nổi bật từ toàn bộ danh sách.
============================== */

var homeVillas = [
  {
    "name": "J2-199",
    "rooms": "침실 6개 • 침대 7개 • 욕실 7개",
    "desc": "호치민 2군 응우옌티딘에 위치한 프리미엄 풀빌라. 1층+4개 층·엘리베이터, 6개 침실 모두 개별 욕실을 갖춘 럭셔리 빌라입니다.",
    "tags": [
      "호치민",
      "프라이빗 수영장",
      "엘리베이터"
    ],
    "img": "picter/picter-villa/119/1.jpg",
    "url": "villa/villa-detail-199.html"
  },
  {
    "name": "J2-18",
    "rooms": "침실 8개 • 침대 8개 • 욕실 7개",
    "desc": "호치민 2군 안카인의 프리미엄 정원 빌라. 8개 침실·7개 욕실, 현대적이고 동선이 좋은 대형 빌라로 단체 모임에 적합합니다.",
    "tags": [
      "호치민",
      "정원 빌라",
      "단체 모임"
    ],
    "img": "picter/picter-villa/villa-san-vuon-q2/1.jpg",
    "url": "villa/villa-detail-sanvuon-q2.html"
  },
  {
    "name": "J2-9",
    "rooms": "침실 6개 • 침대 6개 • 욕실 7개",
    "desc": "투득시 하도 단지의 약 700㎡ 빌라. 전용 엘리베이터, 노래방, 자쿠지, 스톤 사우나를 갖춘 고급 빌라입니다.",
    "tags": [
      "호치민",
      "자쿠지",
      "사우나"
    ],
    "img": "picter/picter-villa/villa-ruby09/1.jpg",
    "url": "villa/villa-ruby-09.html"
  },
  {
    "name": "J2-TD",
    "rooms": "침실 7개 • 침대 7개 • 욕실 6개",
    "desc": "타오디엔의 다층 프리미엄 풀빌라. 7개 침실, 프라이빗 수영장과 전용 노래방 시설을 갖춘 럭셔리 빌라입니다.",
    "tags": [
      "호치민",
      "프라이빗 수영장",
      "노래방"
    ],
    "img": "picter/picter-villa/villa-thao-dien/1.jpg",
    "url": "villa/thao-dien-villa.html"
  },
  {
    "name": "J2-TT",
    "rooms": "침실 8개 • 침대 9개 • 욕실 7개",
    "desc": "호치민 2군의 약 700㎡ 빌라. 지하1·지상3층, 8개 침실·9개 침대로 단체 모임과 가족 여행에 적합합니다.",
    "tags": [
      "호치민",
      "단체 모임",
      "프리미엄"
    ],
    "img": "picter/picter-villa/villa-center/1.jpg",
    "url": "villa/central-villa.html"
  },
  {
    "name": "J2-TD-2",
    "rooms": "침실 7개 • 침대 8개 • 욕실 7개",
    "desc": "안푸의 프리미엄 풀빌라. 당구대 거실, 전용 노래방, 루프탑 수영장(2x4m)을 갖춘 럭셔리 빌라입니다.",
    "tags": [
      "호치민",
      "루프탑 수영장",
      "노래방"
    ],
    "img": "picter/picter-villa/299/10.jpg",
    "url": "villa/villa-detail-299.html"
  },
  {
    "name": "J2-97",
    "rooms": "침실 6개 • 침대 6개 • 욕실 5개",
    "desc": "2군 중심의 약 700㎡ 풀빌라. 노래방·당구대·가든 BBQ·수영장·자쿠지를 갖췄으며 1군까지 약 7분, 메트로역과 가깝습니다.",
    "tags": [
      "호치민",
      "자쿠지",
      "BBQ"
    ],
    "img": "picter/picter-villa/villa-d2-center/1.JPG",
    "url": "villa/villa-detail-d2-center.html"
  },
  {
    "name": "J2-10",
    "rooms": "침실 7개 • 침대 7개 • 욕실 6개",
    "desc": "타인미러이의 리조트형 빌라. 루프탑 수영장, 방음 노래방·당구대·BBQ, 대형 공원이 보이는 입지를 갖췄습니다.",
    "tags": [
      "호치민",
      "루프탑 수영장",
      "노래방"
    ],
    "img": "picter/picter-villa/villa-luxe-verde/1.JPEG",
    "url": "villa/villa-luxe-verde.html"
  },
  {
    "name": "J2-18-3",
    "rooms": "침실 8개 • 침대 9개 • 욕실 5개",
    "desc": "네오클래식 스타일 빌라. 8개 침실, 층별 노래방·로비 당구대·프라이빗 수영장·넓은 가든 BBQ를 갖춘 빌라입니다.",
    "tags": [
      "호치민",
      "당구대",
      "BBQ"
    ],
    "img": "picter/picter-villa/villa-diamond-8br/1.jpg",
    "url": "villa/villa-diamond.html"
  },
  {
    "name": "J2-7",
    "rooms": "침실 9개 • 침대 9개 • 욕실 9개",
    "desc": "풀럭셔리 네오클래식 빌라. 9개 마스터룸(개별 욕실), 수영장·방음 노래방·당구대·BBQ·피아노를 갖췄습니다.",
    "tags": [
      "호치민",
      "피아노",
      "럭셔리"
    ],
    "img": "picter/picter-villa/villa-harmony/1.JPG",
    "url": "villa/villa-harmony.html"
  },
  {
    "name": "J2-22",
    "rooms": "침실 10개 • 침대 10개 • 욕실 7개",
    "desc": "사이공 미스터리의 대형 풀빌라. 10개 침실, 헬스장·노래방·당구대·대형 수영장·엘리베이터를 갖춘 빌라입니다.",
    "tags": [
      "호치민",
      "헬스장",
      "엘리베이터"
    ],
    "img": "picter/picter-villa/villa-garden-oais/1.jpg",
    "url": "villa/villa-garden-oasis.html"
  },
  {
    "name": "J2-40",
    "rooms": "침실 6개 • 침대 8개 • 욕실 5개",
    "desc": "안카인의 리조트형 풀빌라. 6개 침실, 노래방·당구대·가든 BBQ, 넓은 수영장과 현대적 디자인을 갖췄습니다.",
    "tags": [
      "호치민",
      "노래방",
      "BBQ"
    ],
    "img": "picter/picter-villa/villa-paradise/1.jpg",
    "url": "villa/villa-paradise.html"
  },
  {
    "name": "BC-92",
    "rooms": "침실 9개 • 침대 9개 • 욕실 6개",
    "desc": "쭝선 단지의 리버사이드 빌라. 루프탑 인피니티풀, 노래방·당구대·BBQ·사우나, 강·공원 전망을 갖췄습니다.",
    "tags": [
      "호치민",
      "인피니티풀",
      "사우나"
    ],
    "img": "picter/picter-villa/villa-mia/1.JPG",
    "url": "villa/villa-mia-riverside.html"
  },
  {
    "name": "J1-87",
    "rooms": "침실 6개 • 침대 7개 • 욕실 6개",
    "desc": "호치민 1군 중심의 풀빌라. 6개 침실, 1층 노래방·대형 수영장·사우나, 현대적이고 세련된 인테리어를 갖췄습니다.",
    "tags": [
      "호치민",
      "1군",
      "사우나"
    ],
    "img": "picter/picter-villa/villa-benthanh/1.jpg",
    "url": "villa/villa-ben-thanh.html"
  },
  {
    "name": "J7-5",
    "rooms": "침실 9개 • 침대 11개 • 욕실 8개",
    "desc": "7군 힘람의 빌라. 9개 침실·11개 침대, 자쿠지·건식/습식 사우나·엘리베이터·BBQ·당구대를 갖춘 빌라입니다.",
    "tags": [
      "호치민",
      "자쿠지",
      "사우나"
    ],
    "img": "picter/picter-villa/villa-sunrise-q7/1.png",
    "url": "villa/villa-sunrise-q7.html"
  },
  {
    "name": "J7-7",
    "rooms": "침실 9개 • 침대 10개 • 욕실 6개",
    "desc": "7군 힘람의 풀럭셔리 빌라. 노래방·당구대·BBQ·사우나·자쿠지와 피아노 스튜디오를 갖춘 빌라입니다.",
    "tags": [
      "호치민",
      "피아노",
      "자쿠지"
    ],
    "img": "picter/picter-villa/villa-luna/1.jpg",
    "url": "villa/villa-luna-casa.html"
  },
  {
    "name": "J7-13",
    "rooms": "침실 9개 • 침대 10개 • 욕실 6개",
    "desc": "7군 힘람의 풀빌라. 9개 침실, 노래방·당구대·BBQ·수영장을 갖춘 럭셔리 인테리어의 빌라입니다.",
    "tags": [
      "호치민",
      "수영장",
      "노래방"
    ],
    "img": "picter/picter-villa/villa-sanorita/1.jpeg",
    "url": "villa/villa-sanorita.html"
  },
  {
    "name": "Y5",
    "rooms": "침실 4개 • 욕실 4개",
    "desc": "타오디엔 욜로(Yolo) 단지의 4룸·4욕실 프라이빗 풀빌라입니다. (상세 정보 준비 중)",
    "tags": [
      "호치민",
      "타오디엔",
      "욜로"
    ],
    "img": "picter/picter-villa/Yolo/4BR-4WC-thaodien/1.jpg",
    "url": "villa/villa-Y5.html"
  },
  {
    "name": "Y3",
    "rooms": "침실 5개 • 욕실 5개",
    "desc": "타오디엔 욜로(Yolo) 단지의 5룸 프라이빗 풀빌라입니다. (상세 정보 준비 중)",
    "tags": [
      "호치민",
      "타오디엔",
      "욜로"
    ],
    "img": "picter/picter-villa/Yolo/5BR-thaodien/1.jpg",
    "url": "villa/villa-Y3.html"
  },
  {
    "name": "Y6",
    "rooms": "침실 5개 • 욕실 5개",
    "desc": "타오디엔 욜로(Yolo) 단지의 5룸 프라이빗 풀빌라(B동)입니다. (상세 정보 준비 중)",
    "tags": [
      "호치민",
      "타오디엔",
      "욜로"
    ],
    "img": "picter/picter-villa/Yolo/5BR-2-thaodien/1.jpg",
    "url": "villa/villa-Y6.html"
  },
  {
    "name": "Y4",
    "rooms": "침실 6개 • 욕실 6개",
    "desc": "타오디엔 욜로(Yolo) 단지의 6룸·6욕실 프라이빗 풀빌라입니다. (상세 정보 준비 중)",
    "tags": [
      "호치민",
      "타오디엔",
      "욜로"
    ],
    "img": "picter/picter-villa/Yolo/6BR-6WC-thaodien/1.jpg",
    "url": "villa/villa-Y4.html"
  },
  {
    "name": "Y7",
    "rooms": "침실 6개 • 욕실 6개",
    "desc": "타오디엔 욜로(Yolo) 단지의 6룸 프라이빗 풀빌라(B동)입니다. (상세 정보 준비 중)",
    "tags": [
      "호치민",
      "타오디엔",
      "욜로"
    ],
    "img": "picter/picter-villa/Yolo/6BR-N-thaodien/1.jpg",
    "url": "villa/villa-Y7.html"
  },
  {
    "name": "Y2",
    "rooms": "침실 7개 • 욕실 6개",
    "desc": "타오디엔 욜로(Yolo) 단지의 7룸 풀빌라입니다. (상세 정보 준비 중)",
    "tags": [
      "호치민",
      "타오디엔",
      "욜로"
    ],
    "img": "picter/picter-villa/Yolo/7BR-thaodien/1.jpg",
    "url": "villa/villa-Y2.html"
  },
  {
    "name": "Y1",
    "rooms": "침실 10개 • 욕실 8개",
    "desc": "타오디엔 욜로(Yolo) 단지의 10룸 대형 풀빌라입니다. (상세 정보 준비 중)",
    "tags": [
      "호치민",
      "타오디엔",
      "욜로"
    ],
    "img": "picter/picter-villa/Yolo/10BR-thaodien/1.jpg",
    "url": "villa/villa-Y1.html"
  },
  {
    "name": "대형 풀빌라",
    "rooms": "침실 27개 • 욕실 20개",
    "desc": "타오디엔 욜로(Yolo) 단지의 27룸 초대형 빌라입니다. (상세 정보 준비 중)",
    "tags": [
      "호치민",
      "타오디엔",
      "욜로"
    ],
    "img": "picter/picter-villa/Yolo/27BR-thaodien/1.jpg",
    "url": "villa/villa-대형 풀빌라.html"
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
          '<p class="villa-desc">' + v.desc + '</p>' +
          '<div class="villa-amenities">' + tags + '</div>' +
          '<a href="' + v.url + '" class="villa-cta">자세히 보기</a>' +
        '</div>' +
      '</article>';
  }).join("");
}

document.addEventListener("DOMContentLoaded", renderFeaturedVillas);
