import { Project, Testimonial, ServiceItem } from '../types';

export const INITIAL_PROJECTS: Project[] = [
  // 1. REELS & SHORTS (НА ПЕРВОМ МЕСТЕ)
  {
    id: 'reel-english',
    title: 'Экспертный Reels: Где пригодился Английский',
    category: 'reels',
    categoryLabel: 'Reels / Shorts',
    client: 'Языковая онлайн-школа / Блогер',
    clientType: 'Блогер',
    aspectRatio: '9:16',
    duration: '0:23',
    description: 'Динамичный разговорный Reels с трендовой кинетической типографикой, зумами, акцентами и звуковыми эффектами для максимального удержания внимания.',
    highlights: [
      'Кинетическая типографика с подсветкой ключевых слов',
      'Динамичные зумы и кадрирование на спикере',
      'Синхронизированный саунд-дизайн (SFX)',
      'Высокое удержание аудитории с первых секунд'
    ],
    software: ['Premiere Pro', 'After Effects'],
    thumbnailUrl: '/thumbnails/reel_english.jpg',
    videoUrl: '/videos/reel_english.mp4',
    driveUrl: 'https://drive.google.com/file/d/1sMOb11E7KlBYIywX1AwKD6fEkFFzv3JH/view',
    driveFileId: '1sMOb11E7KlBYIywX1AwKD6fEkFFzv3JH',
    soundDesignIncluded: true
  },
  {
    id: 'reel-zavisimosti',
    title: 'Подкаст-Reels: Зависимости и духовная точка зрения',
    category: 'reels',
    categoryLabel: 'Reels / Подкаст',
    client: 'Экспертный подкаст',
    clientType: 'Блогер',
    aspectRatio: '9:16',
    duration: '0:28',
    description: 'Монтаж нарезки подкаста в вертикальный формат: цветокоррекция, динамичные субтитры с подсветкой ключевых слов, саунд-дизайн и ритмичный темпоритм.',
    highlights: [
      'Вычистка пауз и слов-паразитов',
      'Акцентная анимация ключевых фраз',
      'Глубокий атмосферный саунд-дизайн',
      'Адаптировано под тренды соцсетей'
    ],
    software: ['Premiere Pro', 'After Effects'],
    thumbnailUrl: '/thumbnails/reel_zavisimosti.jpg',
    videoUrl: '/videos/reel_zavisimosti.mp4',
    driveUrl: 'https://drive.google.com/file/d/128z4UUwMDt2u8bdk6-uHgBW0OP6EQVKx/view',
    driveFileId: '128z4UUwMDt2u8bdk6-uHgBW0OP6EQVKx',
    soundDesignIncluded: true
  },
  {
    id: 'reel-creator-promo',
    title: 'Креативный промо-Reels для инфлюенсера',
    category: 'reels',
    categoryLabel: 'Reels / Промо',
    client: 'Инфлюенсер & Креатор',
    clientType: 'Блогер',
    aspectRatio: '9:16',
    duration: '0:41',
    description: 'Комплексный вертикальный монтаж с динамичной сменой планов, анимацией плашек, звуковым оформлением и удержанием внимания.',
    highlights: [
      'Взрывной хук в первые секунды',
      'Анимированные графические элементы',
      'Плотный многодорожечный саунд-дизайн',
      'Идеальный темпоритм для соцсетей'
    ],
    software: ['Premiere Pro', 'After Effects'],
    thumbnailUrl: '/thumbnails/reel_creator_promo.jpg',
    videoUrl: '/videos/reel_creator_promo.mp4',
    driveUrl: 'https://drive.google.com/file/d/16BOx82vFyDn_Bk28HuLtsWQsCxWDZ-in/view',
    driveFileId: '16BOx82vFyDn_Bk28HuLtsWQsCxWDZ-in',
    soundDesignIncluded: true
  },
  {
    id: 'reel-dynamic-cut',
    title: 'Динамичный Reels: Монтаж под бит & Графика',
    category: 'reels',
    categoryLabel: 'Reels / Shorts',
    client: 'Lifestyle Блогер',
    clientType: 'Блогер',
    aspectRatio: '9:16',
    duration: '0:12',
    description: 'Ультрадинамичный монтаж со скоростным рампингом (speed ramping), резкими хуками и звуковыми переходами.',
    highlights: [
      'Монтаж строго по сетке бита',
      'Бесшовные переходы между планами',
      'Акцентные звуковые эффекты (SFX)',
      'Высокая виральность'
    ],
    software: ['Premiere Pro', 'After Effects'],
    thumbnailUrl: '/thumbnails/reel_dynamic_cut.jpg',
    videoUrl: '/videos/reel_dynamic_cut.mp4',
    driveUrl: 'https://drive.google.com/file/d/1ARmo1_3lxzY3muTboALENsaC2g11qIzf/view',
    driveFileId: '1ARmo1_3lxzY3muTboALENsaC2g11qIzf',
    soundDesignIncluded: true
  },
  {
    id: 'reel-khurshed-top3',
    title: 'Экспертный Reels: Топ-3 совета от предпринимателя',
    category: 'reels',
    categoryLabel: 'Reels / Эксперт',
    client: 'Хуршед — Предприниматель & Полиглот',
    clientType: 'Бизнес',
    aspectRatio: '9:16',
    duration: '0:08',
    description: 'Интерактивный хук через стикер «Задайте мне вопрос: Топ-3 совета от вас?», брендированная всплывающая плашка спикера, кинетическая типографика и чистый саунд-дизайн.',
    highlights: [
      'Хук через интерактивный стикер «Топ-3 совета»',
      'Брендированная плашка спикера (Хуршед)',
      'Динамичные субтитры с подсветкой ключевых слов',
      'Высокое удержание внимания с первых секунд'
    ],
    software: ['Premiere Pro', 'After Effects'],
    thumbnailUrl: '/thumbnails/reel_khurshed_top3.jpg',
    videoUrl: '/videos/reel_khurshed_top3.mp4',
    driveUrl: 'https://drive.google.com/file/d/1FS3s1_TsMFZmPQ_W4Q3NK23rg0uqLSd_/view',
    driveFileId: '1FS3s1_TsMFZmPQ_W4Q3NK23rg0uqLSd_',
    soundDesignIncluded: true
  },
  {
    id: 'reel-speaker-hook',
    title: 'Экспертный разговорный Reels со спикером',
    category: 'reels',
    categoryLabel: 'Reels / Эксперт',
    client: 'Бизнес-спикер',
    clientType: 'Бизнес',
    aspectRatio: '9:16',
    duration: '0:16',
    description: 'Четкая дикторская речь, динамичные зумы на ключевые мысли, эмоциональные звуки и яркие плашки.',
    highlights: [
      'Монтаж без пауз и затяжек',
      'Анимированные текстовые подсказки',
      'Повышение вовлеченности аудитории',
      'CTA в конце ролика'
    ],
    software: ['Premiere Pro', 'After Effects'],
    thumbnailUrl: '/thumbnails/reel_speaker_hook.jpg',
    videoUrl: '/videos/reel_speaker_hook.mp4',
    driveUrl: 'https://drive.google.com/file/d/1c3emC4ZuLQKE8nebeLUTOcqqz9o0RNCq/view',
    driveFileId: '1c3emC4ZuLQKE8nebeLUTOcqqz9o0RNCq',
    soundDesignIncluded: true
  },
  {
    id: 'reel-comp-16',
    title: 'Креативный вирусный Reels с маскингом',
    category: 'reels',
    categoryLabel: 'Reels / Shorts',
    client: 'Инфлюенсер',
    clientType: 'Блогер',
    aspectRatio: '9:16',
    duration: '0:12',
    description: 'Быстрый ритмичный монтаж под бит с маскингом, переходами, звуковыми хуками и цветокоррекцией.',
    highlights: [
      'Точный монтаж под микро-доли бита',
      'Бесшовные переходы и маскинг объектов',
      'Сочные звуковые акценты (SFX)',
      'Высокое удержание и вовлеченность'
    ],
    software: ['Premiere Pro', 'After Effects'],
    thumbnailUrl: '/thumbnails/reel_comp16.jpg',
    videoUrl: '/videos/reel_comp16.mp4',
    driveUrl: 'https://drive.google.com/file/d/1USx0iqaSTC_34h1UiGWHg-H5YYemmoT9/view',
    driveFileId: '1USx0iqaSTC_34h1UiGWHg-H5YYemmoT9',
    soundDesignIncluded: true
  },
  {
    id: 'reel-comp-20',
    title: 'Динамичный промо-ролик для соцсетей',
    category: 'reels',
    categoryLabel: 'Reels / Промо',
    client: 'Личный бренд / Эксперт',
    clientType: 'Бизнес',
    aspectRatio: '9:16',
    duration: '0:15',
    description: 'Анимация плашек, интеграция графики, удержание внимания с первых 2 секунд для конверсии в подписку.',
    highlights: [
      'Хук в первые 1.5 секунды',
      'Анимированные плашки и элементы в After Effects',
      'Гармоничная цветокоррекция',
      'Финальный призыв к действию (CTA)'
    ],
    software: ['After Effects', 'Premiere Pro'],
    thumbnailUrl: '/thumbnails/reel_comp20.jpg',
    videoUrl: '/videos/reel_comp20.mp4',
    driveUrl: 'https://drive.google.com/file/d/18hG9ZR8Pj-dy1xM-HxEasvZc_NewzPiO/view',
    driveFileId: '18hG9ZR8Pj-dy1xM-HxEasvZc_NewzPiO',
    soundDesignIncluded: true
  },
  {
    id: 'reel-0903',
    title: 'Трендовый экспертный Reels: 0903',
    category: 'reels',
    categoryLabel: 'Reels / Эксперт',
    client: 'Авторский блог',
    clientType: 'Блогер',
    aspectRatio: '9:16',
    duration: '0:58',
    description: 'Удержание внимания, чистка пауз, динамичные акцентные зумы, синхронизированные титры и профессиональная цветокоррекция.',
    highlights: [
      'Чистый монтаж без затяжек и слов-паразитов',
      'Высокое удержание аудитории на протяжении минуты',
      'Акцентная подсветка ключевых мыслей спикера',
      'Оригинальное звуковое оформление'
    ],
    software: ['Premiere Pro', 'After Effects'],
    thumbnailUrl: '/thumbnails/reel_0903.jpg',
    videoUrl: '/videos/reel_0903.mp4',
    driveUrl: 'https://drive.google.com/file/d/1BEYy3P_cKpmzl66Fu3yxPVd6HFLjV7x4/view',
    driveFileId: '1BEYy3P_cKpmzl66Fu3yxPVd6HFLjV7x4',
    soundDesignIncluded: true
  },
  {
    id: 'reel-img2016',
    title: 'Динамичный Reels: Ритм, стиль & саунд-дизайн',
    category: 'reels',
    categoryLabel: 'Reels / Стиль',
    client: 'Креативный проект',
    clientType: 'Блогер',
    aspectRatio: '9:16',
    duration: '0:18',
    description: 'Трендовый короткий ролик: монтаж по сетке бита, скоростной рампинг, кинематографичный цвет и сочный звук.',
    highlights: [
      'Точная посадка кадров на сильные доли бита',
      'Speed-ramping и плавные переходы',
      'Качественная цветокоррекция и резкость',
      'Энергичный темпоритм для соцсетей'
    ],
    software: ['Premiere Pro', 'After Effects'],
    thumbnailUrl: '/thumbnails/reel_img2016.jpg',
    videoUrl: '/videos/reel_img2016.mp4',
    driveUrl: 'https://drive.google.com/file/d/1t3ZytG1Z3ALaDQQtiqjJoK2M6m8i7U2c/view',
    driveFileId: '1t3ZytG1Z3ALaDQQtiqjJoK2M6m8i7U2c',
    soundDesignIncluded: true
  },
  {
    id: 'reel-trailer',
    title: 'Горизонтальный Reels: Кинематографичный трейлер',
    category: 'reels',
    categoryLabel: 'Reels (16:9)',
    client: 'Медиа проект / Шоу',
    clientType: 'Блогер',
    aspectRatio: '16:9',
    duration: '1:01',
    description: 'Горизонтальный ролик из подборки Reels: эпичный саунд-дизайн, кинематографичный цвет, нарастающий темп и кинематографичный сторителлинг.',
    highlights: [
      'Многослойный кинематографичный саунд-дизайн',
      'Глубокая кинематографичная цветокоррекция',
      'Нарастающий темпоритм и раскадровка',
      'Горизонтальный формат из папки Reels'
    ],
    software: ['Premiere Pro', 'After Effects'],
    thumbnailUrl: '/thumbnails/reel_trailer.jpg',
    videoUrl: '/videos/reel_trailer.mp4',
    driveUrl: 'https://drive.google.com/file/d/1afZv5UpqR5wpD_FQ8-Xv1xNjo2bj0Rxp/view',
    driveFileId: '1afZv5UpqR5wpD_FQ8-Xv1xNjo2bj0Rxp',
    soundDesignIncluded: true
  },

  // 2. SAAS & МОУШН-ДИЗАЙН (ВТОРОЕ МЕСТО)
  {
    id: 'motion-design-show',
    title: 'Моушн-дизайн: Креативная промо-графика',
    category: 'saas',
    categoryLabel: 'Моушн Дизайн',
    client: 'Motion Design / Brand',
    clientType: 'Бренд',
    aspectRatio: '16:9',
    duration: '0:15',
    description: 'Динамичный моушн-ролик с кинетической анимацией, стильной графикой, эффектными переходами и проработанным звуковым сопровождением.',
    highlights: [
      'Кастомный шейповый моушн-дизайн в After Effects',
      'Плавная физика движения и кинетическая динамика',
      'Синхронизированный многодорожечный саунд-дизайн',
      'Высокое качество рендера для презентаций и рекламы'
    ],
    software: ['After Effects', 'Premiere Pro'],
    thumbnailUrl: '/thumbnails/motion_design_show.jpg',
    videoUrl: '/videos/motion_design_show.mp4',
    driveUrl: 'https://drive.google.com/file/d/19oFH3b1P6zzmGOj8lA5HrQfGcLnA1F91/view',
    driveFileId: '19oFH3b1P6zzmGOj8lA5HrQfGcLnA1F91',
    soundDesignIncluded: true
  },
  {
    id: 'motion-web-demo',
    title: 'SaaS Анимация: Демонстрация веб-платформы',
    category: 'saas',
    categoryLabel: 'SaaS & Моушн',
    client: 'Tech Стартап / Web Platform',
    clientType: 'SaaS Стартап',
    aspectRatio: '16:9',
    duration: '0:20',
    description: 'Плавный скролл, акцентные зумы курсора, показ фичей интерфейса и интерактивные UI элементы в After Effects.',
    highlights: [
      'Плавные графики скорости (Speed Graph curves)',
      'Интерактивные зумы на ключевые элементы UI',
      'Плавный скролл и переходы между страницами',
      'Идеально для лендинга или рекламы продукта'
    ],
    software: ['After Effects'],
    thumbnailUrl: '/thumbnails/motion_webdemo.jpg',
    videoUrl: '/videos/motion_webdemo.mp4',
    driveUrl: 'https://drive.google.com/file/d/1YriesgOhEKt6BrXBKj0UUFIxdOD4ff9V/view',
    driveFileId: '1YriesgOhEKt6BrXBKj0UUFIxdOD4ff9V',
    soundDesignIncluded: true
  },
  {
    id: 'motion-animation',
    title: 'Моушн-дизайн: Айдентика & Бренд-анимация',
    category: 'saas',
    categoryLabel: 'Моушн Дизайн',
    client: 'Креативное агентство',
    clientType: 'Бренд',
    aspectRatio: '16:9',
    duration: '0:30',
    description: 'Плавная векторная анимация, перетекающие формы и акцентные переходы для презентации бренда.',
    highlights: [
      'Сложная векторная шейповая анимация',
      'Морфинг и плавные кинетические переходы',
      'Синхронизация движения с музыкальным ритмом',
      'Финальный рендер в высоком качестве'
    ],
    software: ['After Effects'],
    thumbnailUrl: '/thumbnails/motion_animation.jpg',
    videoUrl: '/videos/motion_animation.mp4',
    driveUrl: 'https://drive.google.com/file/d/1Cvv8D1IroZcpOgjd0ww5LxYjmTNTgzwk/view',
    driveFileId: '1Cvv8D1IroZcpOgjd0ww5LxYjmTNTgzwk',
    soundDesignIncluded: true
  },

  // 3. ОСТАЛЬНЫЕ РАБОТЫ (3D В BLENDER, YOUTUBE & ИНФОГРАФИКА)
  {
    id: 'blender-structural',
    title: '3D Моушн & Анатомия: Structural Concept',
    category: 'blender',
    categoryLabel: 'Blender 3D',
    client: 'Концепт-арт / Моушн',
    clientType: 'Бренд',
    aspectRatio: '16:9',
    duration: '0:17',
    description: 'Кинематографичная 3D-сцена и анатомическая визуализация в Blender с детальным освещением, золотистым градиентом и композитингом.',
    highlights: [
      '3D-моделирование и анатомический рендер в Blender',
      'Кинематографичный светотеневой рисунок и глубина сцены',
      'Анимированная типографика Structural Concept',
      'Композитинг и финальная цветокоррекция'
    ],
    software: ['Blender', 'After Effects'],
    thumbnailUrl: '/thumbnails/blender_structural.jpg',
    videoUrl: '/videos/blender_structural.mp4',
    driveUrl: 'https://drive.google.com/file/d/1Yzu8ClNR4DrGT83jF4YloODIfgJfiTLG/view',
    driveFileId: '1Yzu8ClNR4DrGT83jF4YloODIfgJfiTLG',
    soundDesignIncluded: true
  },
  {
    id: 'explainer-marketplaces',
    title: 'Коммерческий промо-ролик: Wildberries vs Ozon',
    category: 'youtube',
    categoryLabel: 'Эксплейнер / YouTube',
    client: 'E-commerce бренд',
    clientType: 'Бренд',
    aspectRatio: '16:9',
    duration: '1:00',
    description: 'Динамичное рекламное видео со сравнением маркетплейсов WB и Ozon, фирменной анимацией логотипов, графикой цен и инфографикой карточек.',
    highlights: [
      'Сравнение интерфейсов и цен Wildberries & Ozon',
      'Брендированная векторная графика и 2D-плашки',
      'Динамичный монтаж и звуковое оформление',
      'Финальная плашка IVK и продающий CTA'
    ],
    software: ['After Effects', 'Premiere Pro'],
    thumbnailUrl: '/thumbnails/explainer_marketplaces.jpg',
    videoUrl: '/videos/explainer_marketplaces.mp4',
    driveUrl: 'https://drive.google.com/file/d/1O47uIov75pt5ZcldjQuO-iku9bF7PaL_/view',
    driveFileId: '1O47uIov75pt5ZcldjQuO-iku9bF7PaL_',
    soundDesignIncluded: true
  },
  {
    id: 'youtube-market-cycles',
    title: 'YouTube Эксплейнер: Аналитика экономических циклов',
    category: 'youtube',
    categoryLabel: 'Эксплейнер / YouTube',
    client: 'Финансово-аналитический канал',
    clientType: 'Блогер',
    aspectRatio: '16:9',
    duration: '9:27',
    description: 'Полноформатный YouTube-эксплейнер об инвестициях и 18-летнем цикле рынков с анимированными графиками, трендами и визуализацией данных.',
    highlights: [
      'Анимированные графики 18-летнего цикла рынков',
      'Пошаговая визуальная подача списков и тезисов',
      'Темная аналитическая цветовая палитра',
      'Звуковой саунд-дизайн и удержание внимания'
    ],
    software: ['Premiere Pro', 'After Effects'],
    thumbnailUrl: '/thumbnails/youtube_market_cycles.jpg',
    videoUrl: '/videos/youtube_market_cycles.mp4',
    driveUrl: 'https://drive.google.com/file/d/1Cgs_hsEOrC0Jb77ejBIk1kd6DYu1ENHQ/view',
    driveFileId: '1Cgs_hsEOrC0Jb77ejBIk1kd6DYu1ENHQ',
    soundDesignIncluded: true
  },
  {
    id: 'motion-scene-01',
    title: '3D Элементы & Сцена в Blender',
    category: 'blender',
    categoryLabel: 'Blender 3D',
    client: 'Digital бренд',
    clientType: 'Бренд',
    aspectRatio: '16:9',
    duration: '0:05',
    description: 'Интеграция реалистичных 3D элементов в видеоряд с физическим освещением, текстурами и композитингом.',
    highlights: [
      'Настройка реалистичного освещения и материалов',
      'Интеграция 3D объекта в композицию',
      'Финальная связка с After Effects',
      'Гармоничное дополнение видеоряда'
    ],
    software: ['Blender', 'After Effects'],
    thumbnailUrl: '/thumbnails/motion_scene01.jpg',
    videoUrl: '/videos/motion_scene01.mp4',
    driveUrl: 'https://drive.google.com/file/d/1c3M0HjYsoGaFWFZJQSbAKHLY25Se2aCt/view',
    driveFileId: '1c3M0HjYsoGaFWFZJQSbAKHLY25Se2aCt',
    soundDesignIncluded: true
  },
  {
    id: 'explainer-metro',
    title: 'Инфографика & Эксплейнер: Метрополитен',
    category: 'youtube',
    categoryLabel: 'Эксплейнер / YouTube',
    client: 'Познавательный медиа-канал',
    clientType: 'Блогер',
    aspectRatio: '16:9',
    duration: '0:05',
    description: 'Понятный визуальный сторителлинг с анимированными схемами, инфографикой, плашками и звуковым оформлением.',
    highlights: [
      'Анимированная векторная инфографика',
      'Понятная подача сложных данных',
      'Качественный композитинг и акценты',
      'Адаптировано для YouTube'
    ],
    software: ['After Effects', 'Premiere Pro'],
    thumbnailUrl: '/thumbnails/explainer_metro.jpg',
    videoUrl: '/videos/explainer_metro.mp4',
    driveUrl: 'https://drive.google.com/file/d/1l_QJc6cRqx2MHEs70wl6ZYEYbX08fZwN/view',
    driveFileId: '1l_QJc6cRqx2MHEs70wl6ZYEYbX08fZwN',
    soundDesignIncluded: true
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'reels-service',
    title: 'Монтаж Reels, Shorts & TikTok',
    icon: 'Smartphone',
    badge: 'Самый частый запрос',
    description: 'Вертикальные видео с высокой досматриваемостью. Полная упаковка: хуки, яркие субтитры, саунд-дизайн, трекинг и мем-культура.',
    points: [
      'Удержание с первых 2 секунд',
      'Кастомные трендовые субтитры (After Effects)',
      'Саунд-дизайн (whoosh, pop, risers, impacts)',
      'Быстрый turnaround (от 24 часов)'
    ],
    software: ['Premiere Pro', 'After Effects'],
    timeline: '1-2 дня',
    recommendedFor: 'Блогеры, эксперты, e-commerce бренды'
  },
  {
    id: 'motion-saas-service',
    title: 'SaaS & UI/UX Моушн Дизайн',
    icon: 'Layers',
    badge: 'Для бизнеса',
    description: 'Анимированные промо-ролики интерфейсов, эксплейнеры для продуктов, презентации функций веб-сервисов и мобильных приложений.',
    points: [
      'Плавная анимация экранов и кликов',
      'Кинетическая типографика и векторная графика',
      'Высокий конверсионный потенциал для лендингов',
      'Экспорт в MP4, WebM, Lottie (по запросу)'
    ],
    software: ['After Effects'],
    timeline: '3-5 дней',
    recommendedFor: 'SaaS стартапы, IT компании, финтех'
  },
  {
    id: 'blender-3d-service',
    title: 'Интеграция реалистичных 3D элементов (Blender)',
    icon: 'Box',
    badge: '3D акценты к видео',
    description: 'Дополнение видеоряда реалистичными 3D элементами: мокапы смартфонов/ноутбуков, летающие карточки, 3D текст, предметные сцены и легкие пролеты камеры.',
    points: [
      'Интеграция реалистичных 3D объектов в готовый видеоряд',
      'Мокапы гаджетов и презентация продуктов',
      'Настройка света и материалов для гармонии с видео',
      'Связка с After Effects для финального композитинга'
    ],
    software: ['Blender', 'After Effects'],
    timeline: 'По договоренности',
    recommendedFor: 'Reels, YouTube и промо, где нужен объемный 3D визуал'
  },
  {
    id: 'youtube-full-service',
    title: 'YouTube выпуски, Интервью & Подкасты',
    icon: 'Video',
    badge: 'Long-form',
    description: 'Профессиональная сборка многокамерного видео, чистка аудиодорожек от шумов, цветокоррекция, динамичные b-roll перебивки.',
    points: [
      'Синхронизация многокамерной съемки',
      'Студийная чистка звука по стандартам LUFS',
      'Цветокоррекция LOG исходников (Sony, Canon, Blackmagic)',
      'Разработка инфографики и плашек'
    ],
    software: ['Premiere Pro', 'After Effects'],
    timeline: '2-4 дня',
    recommendedFor: 'YouTube-каналы, медиа, подкасты'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Иван Соболев',
    role: 'Эксперт & Автор контента',
    company: 'Личный блог',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
    stats: 'Высокое удержание аудитории',
    text: 'Фарход — один из редких специалистов, которому не нужно объяснять, что такое чувство ритма и темпоритм. Вырезает всё лишнее, расставляет правильные акценты и добавляет крутой саунд-дизайн. Работаем на постоянной основе.',
    tag: 'Reels & Подкасты'
  },
  {
    id: 't-2',
    name: 'Компания RBS',
    role: 'Корпоративный клиент',
    company: 'RBS Group',
    avatar: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=200&q=80',
    stats: 'Сдача строго в дедлайн',
    text: 'Заказывали серию корпоративных и презентационных роликов для компании. Уровень проработки анимации, инфографики и аккуратность монтажа превзошли наши ожидания. Строгое соблюдение ТЗ и корпоративного стиля.',
    tag: 'Корпоративное промо'
  },
  {
    id: 't-3',
    name: 'Компания Orbis Lingua',
    role: 'Международная языковая школа',
    company: 'Orbis Lingua',
    avatar: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=200&q=80',
    stats: 'Рост вовлеченности студентов',
    text: 'Сотрудничаем с Фарходом по созданию анимированных эксплейнеров и рекламных креативов. Сложную информацию упаковывает в понятную шейповую графику и чистый монтаж. Ролики смотрятся на одном дыхании!',
    tag: 'SaaS & Моушн-эксплейнеры'
  },
  {
    id: 't-4',
    name: 'Диана Листопад',
    role: 'Fashion & Lifestyle криэйтор',
    company: 'Lifestyle блог',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    stats: 'Эстетика & цветокоррекция',
    text: 'У Фархода безупречное визуальное чутье: цветокоррекция, плавные переходы и музыка подобраны идеально. Видео получаются невероятно кинематографичными, стильными и цепляющими с первых секунд.',
    tag: 'Reels & Shorts'
  },
  {
    id: 't-5',
    name: 'Слепой Бью',
    role: 'Музыкальный артист & Продюсер',
    company: 'Музыкальный проект',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    stats: 'Кинематографичный монтаж',
    text: 'Монтаж сниппетов, тизеров и промо к трекам доверяю только Фарходу. Безупречный синхрон с битом, сочные эффекты и драйв, который заставляет аудиторию пересматривать ролик снова и снова.',
    tag: 'Музыкальные тизеры & Сниппеты'
  },
  {
    id: 't-6',
    name: 'Рок группа Retroit',
    role: 'Музыкальная группа',
    company: 'Retroit Band',
    avatar: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=200&q=80',
    stats: 'Драйв & мощный саунд-дизайн',
    text: 'Делали с Фарходом промо-ролики для концертов и релизов. Мощная энергетика, рок-н-ролльный драйв, агрессивные склейки и глубокий звуковой дизайн. Настоящий мастер своего дела!',
    tag: 'Live & Рок-клипы'
  }
];

export const STATS = [
  { value: '7 лет', label: 'В видеомонтаже & моушн-дизайне' },
  { value: '500+', label: 'Смонтированных и сданных роликов' },
  { value: '50+', label: 'Довольных брендов и клиентов' },
  { value: '99.4%', label: 'Проектов сдано точно в дедлайн' },
];

export const TOOLKIT = [
  {
    name: 'Adobe Premiere Pro',
    category: 'Монтаж & Саунд-дизайн',
    level: '99%',
    experience: '7 лет опыта',
    desc: 'Динамичный черновой и чистовой монтаж, работа с многокамерным материалом 4K/6K, выравнивание саундтрека, speed ramps, саунд-дизайн и синхронизация по таймкоду.',
    color: '#00005b',
    iconLetter: 'Pr',
    accent: 'border-indigo-500/40 text-indigo-400 bg-indigo-950/30'
  },
  {
    name: 'Adobe After Effects',
    category: 'Моушн-дизайн & VFX',
    level: '95%',
    experience: '6 лет опыта',
    desc: 'Сложные SaaS анимации интерфейсов, кинетическая типографика, трекинг объектов (Mocha), шейповая графика, кастомные переходы, частицы и композитинг.',
    color: '#34005b',
    iconLetter: 'Ae',
    accent: 'border-purple-500/40 text-purple-400 bg-purple-950/30'
  },
  {
    name: 'Blender 3D',
    category: '3D элементы для видео',
    level: 'Базовый+',
    experience: 'Практика под задачи',
    desc: 'Владею базовыми навыками в Blender и использую его для сочного дополнения видеомонтажа: внедрение реалистичных 3D объектов, мокапов девайсов, летающих карточек, 3D текста и легких пролетов камеры.',
    color: '#d66800',
    iconLetter: 'Bl',
    accent: 'border-amber-500/40 text-amber-400 bg-amber-950/30'
  }
];
