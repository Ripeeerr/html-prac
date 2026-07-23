const TOURS = [
  {
    id: 1,
    name: 'Алтайские приключения',
    country: 'Россия',
    days: 8,
    price: 79900,
    photo:
      'https://adventure-guide.ru/upload/resize_cache/iblock/f63/2o4r5b9cjngucvregpnnl48dkviv6yrr/740_999999_1/Gorniy-Altay.jpg',
    alt: 'Горные пейзажи Алтая с рекой и хребтами',
    desc: 'Горный Алтай, плато Укок, Телецкое озеро. Треккинг и рафтинг в сердце Сибири.'
  },
  {
    id: 2,
    name: 'Байкал зимой',
    country: 'Россия',
    days: 6,
    price: 64900,
    photo: 'https://baikalvisa.ru/wp-content/uploads/2023/04/lb21_031.jpg',
    alt: 'Голубой лёд Байкала зимой',
    desc: 'Прогулки по льду Байкала, нерпы, ледяные гроты и бурятская кухня.'
  },
  {
    id: 3,
    name: 'Камчатка: вулканы',
    country: 'Россия',
    days: 10,
    price: 189000,
    photo: 'https://cdn.ingos.ru/images/blog/avachinskij-vulkan-kamchatka.jpg',
    alt: 'Вулкан на Камчатке с клубами пара',
    desc: 'Долина гейзеров, Авачинский вулкан, Курильское озеро с медведями.'
  },
  {
    id: 4,
    name: 'Золотое кольцо',
    country: 'Россия',
    days: 5,
    price: 32000,
    photo: 'https://darsik.com/wp-content/uploads/2017/02/untitled-26.jpg',
    alt: 'Белокаменная церковь в Суздале зимой',
    desc: 'Суздаль, Владимир, Ростов Великий. Белокаменные храмы и старинные монастыри.'
  },
  {
    id: 5,
    name: 'Кавказские маршруты',
    country: 'Россия',
    days: 7,
    price: 59900,
    photo:
      'https://icdn.lenta.ru/images/2026/02/04/18/20260204181319177/owl_wide_1200_1e103a6906c63abc3bd93397654bc8ed.jpg',
    alt: 'Горные вершины Кавказа с ледниками',
    desc: 'Домбай, Архыз, Приэльбрусье. Высокогорные луга и ледники.'
  },
  {
    id: 6,
    name: 'Казахстан: каньоны и степи',
    country: 'Казахстан',
    days: 9,
    price: 74900,
    photo:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2f/23/5f/76/the-charyn-canyon-often.jpg?w=1400&h=800&s=1',
    alt: 'Красные скалы каньона в Казахстане',
    desc: 'Чарынский каньон, озеро Каинды, горы Алатау и ночь в степной юрте.'
  },
  {
    id: 7,
    name: 'Алматы и горы',
    country: 'Казахстан',
    days: 5,
    price: 42900,
    photo:
      'https://blog.ostrovok.ru/wp-content/uploads/2025/11/1%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F-2.jpg',
    alt: 'Горнолыжный склон в Шымбулаке рядом с Алматы',
    desc: 'Медео, Шымбулак, горное ущелье Тургень. Активный отдых в горах.'
  },
  {
    id: 8,
    name: 'Мангистау: марсианские пейзажи',
    country: 'Казахстан',
    days: 7,
    price: 69900,
    photo:
      'https://mirsg.ru/shared/upload/IMAGES/Blog/Mangistau-Olga-May-2024/skalnaya-tropa-3.jpg',
    alt: 'Белые меловые горы Мангистау в Казахстане',
    desc: 'Плато Устюрт, меловые горы Актау, подземные мечети Бекет-Ата.'
  },
  {
    id: 9,
    name: 'Горы Кыргызстана',
    country: 'Кыргызстан',
    days: 8,
    price: 72900,
    photo: 'http://eurasia.travel/wp-content/uploads/2024/09/Jailoo-in-Kyrgyzstan-6-1024x683.jpg',
    alt: 'Горные пастбища Кыргызстана с юртами',
    desc: 'Иссык-Куль, горное ущелье Джеты-Огуз, ночи у костра под небом кочевников.'
  },
  {
    id: 10,
    name: 'Иссык-Куль: лето у озера',
    country: 'Кыргызстан',
    days: 7,
    price: 49900,
    photo:
      'https://blog.ostrovok.ru/wp-content/uploads/2025/07/1%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F-17.jpg',
    alt: 'Голубое озеро Иссык-Куль в окружении гор',
    desc: 'Отдых на «азиатском море», водопады и треккинг в Центральном Тянь-Шане.'
  },
  {
    id: 11,
    name: 'Самарканд и Бухара',
    country: 'Узбекистан',
    days: 7,
    price: 54900,
    photo: 'https://touristichka.ru/wp-content/uploads/2022/10/glav.jpg',
    alt: 'Площадь Регистан в Самарканде с голубыми мечетями',
    desc: 'Регистан, мавзолей Гур-Эмир, базары Бухары. Шёлковый путь живьём.'
  },
  {
    id: 12,
    name: 'Хива: город-крепость',
    country: 'Узбекистан',
    days: 5,
    price: 42900,
    photo: 'https://embassylife.ru/wp-content/uploads/2024/04/Khiva-Uzbekistan-702x459.jpg',
    alt: 'Узкие улочки и минареты средневековой Хивы',
    desc: 'Ичан-Кала — средневековый город внутри крепостных стен. Живая история.'
  },
  {
    id: 13,
    name: 'Ташкент и окрестности',
    country: 'Узбекистан',
    days: 4,
    price: 34900,
    photo: 'https://culttourism.ru/data/photos/a/6/a66dc0d6651bfc98c27d594435b57022.jpg',
    alt: 'Восточный базар Чорсу в Ташкенте',
    desc: 'Столица Средней Азии: метро советской эпохи, базар Чорсу, плов в чайхане.'
  },
  {
    id: 14,
    name: 'Армения: история и природа',
    country: 'Армения',
    days: 7,
    price: 62900,
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Garni_Temple_at_Sunset%2C_Armenia.jpg/960px-Garni_Temple_at_Sunset%2C_Armenia.jpg',
    alt: 'Монастырь Гарни на фоне армянских гор',
    desc: 'Гарни, Гегард, монастыри Хор Вирап и Нораванк. Коньяк и хаш в горном селе.'
  },
  {
    id: 15,
    name: 'Озеро Севан',
    country: 'Армения',
    days: 4,
    price: 36900,
    photo:
      'https://extraguide.ru/images/pthumb/sp/1640377d67fb8ee322324041ebfcadcbbe4c5f48.0f89f896.jpg',
    alt: 'Бирюзовые воды озера Севан и монастырь Севанаванк',
    desc: 'Высокогорное озеро, монастырь Севанаванк, форель на берегу.'
  },
  {
    id: 16,
    name: 'Грузия: горы и море',
    country: 'Грузия',
    days: 9,
    price: 74900,
    photo:
      'https://thumbs.dreamstime.com/b/%D0%B3%D0%BE%D1%80%D0%BE-%D0%BE%D0%BA-%D1%82%D0%B1%D0%B8-%D0%B8%D1%81%D0%B8-%D1%81%D1%82%D0%B0%D1%80%D1%8B%D0%B9-georgria-95312132.jpg?w=992',
    alt: 'Панорама Тбилиси — старый город и крепость',
    desc: 'Тбилиси, Казбеги, Батуми. Хинкали, хачапури и вино Кахетии.'
  },
  {
    id: 17,
    name: 'Сванетия: средневековые башни',
    country: 'Грузия',
    days: 6,
    price: 67900,
    photo: 'https://gotrip.ge/blog/wp-content/uploads/2023/01/shutterstock_1553047886.jpg',
    alt: 'Средневековые башни Сванетии в горах Грузии',
    desc: 'Средневековые башни Местии, ледники, горные деревни и тропы в облаках.'
  },
  {
    id: 18,
    name: 'Тбилиси и Кахетия',
    country: 'Грузия',
    days: 5,
    price: 46900,
    photo: 'https://www.advantour.com/img/georgia/tbilisi/old-tbilisi/old-tbilisi-banner.jpg',
    alt: 'Старые деревянные балконы старого Тбилиси',
    desc: 'Старый Тбилиси, серные бани, винные погреба Кахетии.'
  },
  {
    id: 19,
    name: 'Беларусь: замки и пущи',
    country: 'Беларусь',
    days: 5,
    price: 32900,
    photo: 'https://putidorogi-nn.ru/images/stories/evropa/belarus/mirskiy_zamok_2.jpg',
    alt: 'Мирский замок в Беларуси у озера',
    desc: 'Мирский и Несвижский замки, Беловежская пуща, зубры в диком лесу.'
  },
  {
    id: 20,
    name: 'Брестская крепость и Гродно',
    country: 'Беларусь',
    days: 4,
    price: 27900,
    photo: 'https://blog.ostrovok.ru/wp-content/uploads/2020/07/brest_4.jpg',
    alt: 'Памятник в Брестской крепости на рассвете',
    desc: 'Исторический тур по западной Беларуси. Крепость, костёлы, Августовский канал.'
  },
  {
    id: 21,
    name: 'Азербайджан: Баку и Гобустан',
    country: 'Азербайджан',
    days: 6,
    price: 57900,
    photo:
      'https://7d9e88a8-f178-4098-bea5-48d960920605.selcdn.net/5781b220-344a-4904-9b9b-f8b2055a8ac6/-/format/webp/-/resize/1300x/',
    alt: 'Огненные башни Баку на берегу Каспийского моря',
    desc: 'Баку, горящая гора Янардаг, грязевые вулканы Гобустана и чай в чайхане.'
  },
  {
    id: 22,
    name: 'Шеки и горный Азербайджан',
    country: 'Азербайджан',
    days: 5,
    price: 45900,
    photo: 'https://www.advantour.com/img/azarbaijan/sheki/sheki-khans-palace.jpg',
    alt: 'Дворец ханов в Шеки с витражными окнами',
    desc: 'Шекинский дворец ханов, средневековые крепости, высокогорные сёла.'
  },
  {
    id: 23,
    name: 'Нахчыван: на краю карты',
    country: 'Азербайджан',
    days: 4,
    price: 39900,
    photo:
      'https://tourweek.ru/file/image?path=uploads/gallery_media/180_180daa0bcb9b1272f64962c88fe6871f.jpg&s=19154d592847f3c05b05f07ddc19b96f',
    alt: 'Мавзолей Момине Хатун в Нахчыване на фоне гор',
    desc: 'Мавзолей Момине Хатун, горные дороги, гранатовые сады и соляные озёра.'
  },
  {
    id: 24,
    name: 'Лето в Иссык-Ата',
    country: 'Кыргызстан',
    days: 5,
    price: 43900,
    photo:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/50/5b/d2/photo2jpg.jpg?w=1400&h=800&s=1',
    alt: 'Юрточный лагерь в горной долине Кыргызстана',
    desc: 'Горный курорт с термальными источниками, конные прогулки, юрточный лагерь.'
  },
  {
    id: 25,
    name: 'Малая Колыма и Якутия',
    country: 'Россия',
    days: 10,
    price: 184900,
    photo: 'https://travel-ykt.ru/wp-content/uploads/severnoe-sijanie-v-jakutii-foto.jpg',
    alt: 'Северное сияние над тайгой в Якутии',
    desc: 'Полюс холода в Оймяконе, северное сияние, якутская кухня и шаманские обряды.'
  }
];
document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initSlider();
  renderTours();
  initFilter();
  initModal();
  initSubscribeForm();
  initScrollTop();
  initReveal();
});

function initHeader() {
  const header = document.getElementById('header');
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav');

  window.addEventListener(
    'scroll',
    () => {
      header.classList.toggle('scrolled', window.scrollY > 60);
      updateScrollTop();
    },
    { passive: true }
  );

  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    nav.classList.toggle('mobile-open');
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      burger.classList.remove('active');
      nav.classList.remove('mobile-open');
    });
  });
}
function initSlider() {
  const track = document.querySelector('.slider-track');
  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.getElementById('slider-prev');
  const nextBtn = document.getElementById('slider-next');
  const dotsWrap = document.querySelector('.slider-dots');

  if (!track || !slides.length) return;

  let current = 0;
  let timer = null;

  slides.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.className = 'dot' + (i === 0 ? ' active' : '');
    dot.addEventListener('click', () => goTo(i));
    dotsWrap.appendChild(dot);
  });

  function goTo(idx) {
    current = (idx + slides.length) % slides.length;
    track.style.transform = `translateX(-${current * 100}%)`;
    dotsWrap.querySelectorAll('.dot').forEach((d, i) => {
      d.classList.toggle('active', i === current);
    });
  }

  function autoPlay() {
    clearInterval(timer);
    timer = setInterval(() => goTo(current + 1), 4500);
  }

  prevBtn.addEventListener('click', () => {
    goTo(current - 1);
    autoPlay();
  });
  nextBtn.addEventListener('click', () => {
    goTo(current + 1);
    autoPlay();
  });

  autoPlay();
}

function renderTours() {
  const grid = document.getElementById('tours-grid');
  if (!grid) return;

  grid.innerHTML = TOURS.map(
    t => `
    <article class="tour-card reveal" data-country="${t.country}">
      <div class="tour-img">
        <img
          src="${t.photo}"
          alt="${t.alt}"
          width="600"
          height="400"
          loading="lazy"
        >
        <span class="tour-country-badge">${t.country}</span>
      </div>
      <div class="tour-body">
        <h3 class="tour-name">${t.name}</h3>
        <div class="tour-meta">
          <span>📅 ${t.days} дней</span>
          <span>👤 от 1 чел.</span>
        </div>
        <p class="tour-desc">${t.desc}</p>
        <div class="tour-footer">
          <div class="tour-price">
            ${t.price.toLocaleString('ru-RU')} ₽
            <small>/ чел.</small>
          </div>
          <button class="btn-book" onclick="openModal('${t.name}')">
            Забронировать
          </button>
        </div>
      </div>
    </article>
  `
  ).join('');
  observeReveal();
}

function initFilter() {
  const buttons = document.querySelectorAll('.filter-btn');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const country = btn.dataset.country;
      const cards = document.querySelectorAll('.tour-card');

      cards.forEach(card => {
        const match = country === 'Все' || card.dataset.country === country;
        card.classList.toggle('hidden', !match);
      });
    });
  });
}
function initModal() {
  const overlay = document.getElementById('modal-overlay');
  const form = document.getElementById('booking-form');
  const success = document.querySelector('.booking-success');

  overlay.addEventListener('click', e => {
    if (e.target === overlay) closeModal();
  });

  form.addEventListener('submit', e => {
    e.preventDefault();
    form.style.display = 'none';
    success.style.display = 'block';

    setTimeout(() => {
      form.reset();
      form.style.display = 'grid';
      success.style.display = 'none';
      closeModal();
    }, 3000);
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });
}

function openModal(tourName = '') {
  const overlay = document.getElementById('modal-overlay');
  const select = document.getElementById('tour-select');

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';

  if (tourName && select) {
    const option = [...select.options].find(o => o.value === tourName);
    if (option) select.value = tourName;
  }
}

function closeModal() {
  const overlay = document.getElementById('modal-overlay');
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

function initSubscribeForm() {
  const form = document.getElementById('subscribe-form');
  const msg = document.querySelector('.subscribe-msg');

  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    form.style.display = 'none';
    msg.style.display = 'block';

    setTimeout(() => {
      form.reset();
      form.style.display = 'flex';
      msg.style.display = 'none';
    }, 4000);
  });
}

function initScrollTop() {
  const btn = document.getElementById('scroll-top');
  if (!btn) return;
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

function updateScrollTop() {
  const btn = document.getElementById('scroll-top');
  if (!btn) return;
  btn.classList.toggle('visible', window.scrollY > 400);
}

function initReveal() {
  observeReveal();
}

function observeReveal() {
  const io = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll('.reveal').forEach(el => {
    if (!el.classList.contains('visible')) io.observe(el);
  });
}
