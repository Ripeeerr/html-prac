/* =============================================
   СКРИПТ ТУРАГЕНТСТВА «ПУТЬ ПО СНГ»
   ============================================= */

/* --- Данные туров --- */
const TOURS = [
  {
    id: 1,
    name: "Алтайские приключения",
    country: "Россия",
    days: 8,
    price: 34900,
    emoji: "🏔️",
    desc: "Горный Алтай, плато Укок, Телецкое озеро. Треккинг и рафтинг в сердце Сибири."
  },
  {
    id: 2,
    name: "Байкал зимой",
    country: "Россия",
    days: 6,
    price: 29500,
    emoji: "🧊",
    desc: "Прогулки по льду Байкала, нерпы, ледяные гроты и бурятская кухня."
  },
  {
    id: 3,
    name: "Камчатка: вулканы",
    country: "Россия",
    days: 10,
    price: 68000,
    emoji: "🌋",
    desc: "Долина гейзеров, Авачинский вулкан, Курильское озеро с медведями."
  },
  {
    id: 4,
    name: "Золотое кольцо",
    country: "Россия",
    days: 5,
    price: 18900,
    emoji: "⛪",
    desc: "Суздаль, Владимир, Ростов Великий. Белокаменные храмы и старинные монастыри."
  },
  {
    id: 5,
    name: "Кавказские маршруты",
    country: "Россия",
    days: 7,
    price: 32000,
    emoji: "🏕️",
    desc: "Домбай, Архыз, Приэльбрусье. Высокогорные луга и ледники."
  },
  {
    id: 6,
    name: "Казахстан: каньоны и степи",
    country: "Казахстан",
    days: 9,
    price: 41000,
    emoji: "🏜️",
    desc: "Чарынский каньон, озеро Каинды, горы Алатау и ночь в степной юрте."
  },
  {
    id: 7,
    name: "Алматы и горы",
    country: "Казахстан",
    days: 5,
    price: 22500,
    emoji: "⛷️",
    desc: "Медео, Шымбулак, горное ущелье Тургень. Активный отдых в горах."
  },
  {
    id: 8,
    name: "Мангистау: марсианские пейзажи",
    country: "Казахстан",
    days: 7,
    price: 38500,
    emoji: "🪐",
    desc: "Плато Устюрт, меловые горы Актау, подземные мечети Бекет-Ата."
  },
  {
    id: 9,
    name: "Горы Кыргызстана",
    country: "Кыргызстан",
    days: 8,
    price: 36000,
    emoji: "⛺",
    desc: "Иссык-Куль, горное ущелье Джеты-Огуз, ночи у костра под небом кочевников."
  },
  {
    id: 10,
    name: "Иссык-Куль: лето у озера",
    country: "Кыргызстан",
    days: 7,
    price: 28000,
    emoji: "🏊",
    desc: "Отдых на «азиатском море», водопады и треккинг в Центральном Тянь-Шане."
  },
  {
    id: 11,
    name: "Самарканд и Бухара",
    country: "Узбекистан",
    days: 7,
    price: 31500,
    emoji: "🕌",
    desc: "Регистан, мавзолей Гур-Эмир, базары Бухары. Шёлковый путь живьём."
  },
  {
    id: 12,
    name: "Хива: город-крепость",
    country: "Узбекистан",
    days: 5,
    price: 24000,
    emoji: "🏰",
    desc: "Ичан-Кала — средневековый город внутри крепостных стен. Живая история."
  },
  {
    id: 13,
    name: "Ташкент и окрестности",
    country: "Узбекистан",
    days: 4,
    price: 18000,
    emoji: "🌇",
    desc: "Столица Средней Азии: метро советской эпохи, базар Чорсу, плов в чайхане."
  },
  {
    id: 14,
    name: "Армения: история и природа",
    country: "Армения",
    days: 7,
    price: 33500,
    emoji: "🏛️",
    desc: "Гарни, Гегард, монастыри Хор Вирап и Нораванк. Коньяк и хаш в горном селе."
  },
  {
    id: 15,
    name: "Озеро Севан",
    country: "Армения",
    days: 4,
    price: 19000,
    emoji: "🦅",
    desc: "Высокогорное озеро, монастырь Севанаванк, форель на берегу."
  },
  {
    id: 16,
    name: "Грузия: горы и море",
    country: "Грузия",
    days: 9,
    price: 42000,
    emoji: "🍷",
    desc: "Тбилиси, Казбеги, Батуми. Хинкали, хачапури и вино Кахетии."
  },
  {
    id: 17,
    name: "Сванетия: недоступные башни",
    country: "Грузия",
    days: 6,
    price: 35000,
    emoji: "🗼",
    desc: "Средневековые башни Местии, ледники, горные деревни и тропы в облаках."
  },
  {
    id: 18,
    name: "Тбилиси и Кахетия",
    country: "Грузия",
    days: 5,
    price: 26000,
    emoji: "🏘️",
    desc: "Старый Тбилиси, серные бани, винные погреба Кахетии."
  },
  {
    id: 19,
    name: "Беларусь: замки и пущи",
    country: "Беларусь",
    days: 5,
    price: 21000,
    emoji: "🦌",
    desc: "Мирский и Несвижский замки, Беловежская пуща, зубры в диком лесу."
  },
  {
    id: 20,
    name: "Брестская крепость и Гродно",
    country: "Беларусь",
    days: 4,
    price: 16500,
    emoji: "🛡️",
    desc: "Исторический тур по западной Беларуси. Крепость, костёлы, Августовский канал."
  },
  {
    id: 21,
    name: "Азербайджан: Баку и Гобустан",
    country: "Азербайджан",
    days: 6,
    price: 30000,
    emoji: "🔥",
    desc: "Баку, горящая гора Янардаг, грязевые вулканы Гобустана и чай в чайхане."
  },
  {
    id: 22,
    name: "Шеки и горный Азербайджан",
    country: "Азербайджан",
    days: 5,
    price: 26500,
    emoji: "🏯",
    desc: "Шекинский дворец ханов, средневековые крепости, высокогорные сёла."
  },
  {
    id: 23,
    name: "Нахчыван: на краю карты",
    country: "Азербайджан",
    days: 4,
    price: 22000,
    emoji: "🗺️",
    desc: "Мавзолей Момине Хатун, горные дороги, гранатовые сады и соляные озёра."
  },
  {
    id: 24,
    name: "Лето в Иссык-Ата",
    country: "Кыргызстан",
    days: 5,
    price: 23500,
    emoji: "🌿",
    desc: "Горный курорт с термальными источниками, конные прогулки, юрточный лагерь."
  },
  {
    id: 25,
    name: "Малая Колыма и Якутия",
    country: "Россия",
    days: 10,
    price: 74000,
    emoji: "🌌",
    desc: "Полюс холода в Оймяконе, северное сияние, якутская кухня и шаманские обряды."
  }
];

/* =============================================
   ИНИЦИАЛИЗАЦИЯ
   ============================================= */
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

/* =============================================
   ШАПКА: фикс при скролле и бургер
   ============================================= */
function initHeader() {
  const header = document.getElementById('header');
  const burger = document.querySelector('.burger');
  const nav    = document.querySelector('.nav');

  // Изменение фона при прокрутке
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 60);
    updateScrollTop();
  }, { passive: true });

  // Бургер меню
  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    nav.classList.toggle('mobile-open');
  });

  // Закрытие меню при клике на ссылку
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      burger.classList.remove('active');
      nav.classList.remove('mobile-open');
    });
  });
}

/* =============================================
   СЛАЙДЕР ПРЕИМУЩЕСТВ
   ============================================= */
function initSlider() {
  const track    = document.querySelector('.slider-track');
  const slides   = document.querySelectorAll('.slide');
  const prevBtn  = document.getElementById('slider-prev');
  const nextBtn  = document.getElementById('slider-next');
  const dotsWrap = document.querySelector('.slider-dots');

  if (!track || !slides.length) return;

  let current = 0;
  let timer   = null;

  // Создаём точки
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

  prevBtn.addEventListener('click', () => { goTo(current - 1); autoPlay(); });
  nextBtn.addEventListener('click', () => { goTo(current + 1); autoPlay(); });

  autoPlay();
}

/* =============================================
   РЕНДЕР КАРТОЧЕК ТУРОВ
   ============================================= */
function renderTours() {
  const grid = document.getElementById('tours-grid');
  if (!grid) return;

  grid.innerHTML = TOURS.map(t => `
    <article class="tour-card reveal" data-country="${t.country}">
      <div class="tour-img">
        <span aria-hidden="true">${t.emoji}</span>
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
  `).join('');

  // Запускаем анимации для новых карточек
  observeReveal();
}

/* =============================================
   ФИЛЬТР ПО СТРАНАМ
   ============================================= */
function initFilter() {
  const buttons = document.querySelectorAll('.filter-btn');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Снимаем активный класс со всех
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const country = btn.dataset.country;
      const cards   = document.querySelectorAll('.tour-card');

      cards.forEach(card => {
        const match = country === 'Все' || card.dataset.country === country;
        card.classList.toggle('hidden', !match);
      });
    });
  });
}

/* =============================================
   МОДАЛЬНОЕ ОКНО БРОНИРОВАНИЯ
   ============================================= */
function initModal() {
  const overlay = document.getElementById('modal-overlay');
  const form    = document.getElementById('booking-form');
  const success = document.querySelector('.booking-success');

  // Закрытие по клику на оверлей
  overlay.addEventListener('click', e => {
    if (e.target === overlay) closeModal();
  });

  // Отправка формы
  form.addEventListener('submit', e => {
    e.preventDefault();
    form.style.display = 'none';
    success.style.display = 'block';

    // Сброс через 3 секунды при повторном открытии
    setTimeout(() => {
      form.reset();
      form.style.display = 'grid';
      success.style.display = 'none';
      closeModal();
    }, 3000);
  });

  // Закрытие по Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });
}

function openModal(tourName = '') {
  const overlay = document.getElementById('modal-overlay');
  const select  = document.getElementById('tour-select');

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';

  // Если передали название тура — выбираем его в селекте
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

/* =============================================
   ФОРМА ПОДПИСКИ
   ============================================= */
function initSubscribeForm() {
  const form = document.getElementById('subscribe-form');
  const msg  = document.querySelector('.subscribe-msg');

  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    form.style.display = 'none';
    msg.style.display  = 'block';

    // Показываем сообщение 4 секунды
    setTimeout(() => {
      form.reset();
      form.style.display  = 'flex';
      msg.style.display   = 'none';
    }, 4000);
  });
}

/* =============================================
   КНОПКА «НАВЕРХ»
   ============================================= */
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

/* =============================================
   АНИМАЦИЯ ПОЯВЛЕНИЯ ПРИ СКРОЛЛЕ
   ============================================= */
function initReveal() {
  observeReveal();
}

function observeReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => {
    if (!el.classList.contains('visible')) io.observe(el);
  });
}
