import { Project, ExperienceItem, SkillCategory } from './types';

export const NAV_LINKS = [
  { name: 'Hakkımda', href: '#about' },
  { name: 'Yetenekler', href: '#skills' },
  { name: 'Projeler', href: '#projects' },
  { name: 'Deneyim', href: '#experience' },
  { name: 'İletişim', href: '#contact' },
];

export const SKILLS: SkillCategory[] = [
  {
    title: 'AI & Otomasyon',
    icon: 'cpu',
    skills: [
      'Vektör Arama & Embeddings',
      'Semantik Sıralama',
      'Cloudflare Workers AI',
      'RAG Sistemleri',
      'OpenAI / Gemini API',
      'Python Otomasyonu',
    ],
  },
  {
    title: 'Geliştirme Yığını',
    icon: 'code',
    skills: [
      'PHP & Laravel',
      'TypeScript & React',
      'Cloudflare Workers',
      'Serverless Mimari',
      'Python & FastApi',
      'Webhook Sistemleri',
      'SQL & NoSQL',
    ],
  },
  {
    title: 'Pazarlama Teknolojileri',
    icon: 'barChart',
    skills: [
      'Dönüşüm Takibi (CAPI)',
      'Google Ads API',
      'Çevrimdışı Dönüşümler',
      'SEO Veri Madenciliği',
      'CRM Entegrasyonları',
      'Arama İstihbaratı',
    ],
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: 3,
    role: 'Web Developer',
    company: 'MODD/group',
    period: 'Ocak 2022 — Nisan 2022',
    description: [
      'Figma, Adobe XD ve Photoshop tasarımlarını web projelerine dönüştürdüm.',
      'Reklam kampanyaları için yüksek dönüşümlü landing page’ler geliştirdim.',
      'Google Search Console, Google Analytics ve Bing Webmaster araçlarında hata düzeltme ve analiz yaptım.',
      'Sağlık turizmi ve inşaat sektörüne özel web çözümleri tasarladım.',
      'Trello ile proje yönetimi ve iş akışı optimizasyonu sağladım.',
    ],
  },

  {
    id: 4,
    role: 'Sr. Web Developer, SEO Manager & Tracking Specialist',
    company: 'Vera Clinic',
    period: 'Kasım 2022 — Günümüz',
    description: [
      // Sr. Web Developer & SEO Manager
      'Website tasarımı, bakımı ve içerik güncellemelerini yönettim (Figma, XD, Photoshop → Web).',
      'Yüksek dönüşüm odaklı landing page’ler geliştirdim ve A/B testleri kurguladım.',
      'Teknik SEO iyileştirmeleri, içerik stratejisi ve anahtar kelime araştırmaları yaptım.',
      'Semrush, Screaming Frog, Ahrefs, Moz, Ubersuggest ve Seodity gibi araçlarla analizler gerçekleştirdim.',
      'Mail marketing (Mailjet/Mailchimp) için şablon oluşturma ve kampanya yönetimi yaptım.',
      'Google Search Console hata düzeltmeleri ve analytics ölçümlemeleri yaptım.',
      'Everton Sports Club için landing page ve rezervasyon sistemi geliştirdim.',
      'Workflow otomasyonları için Workiom entegrasyonlarını tasarladım.',

      // Tracking Specialist / Data Engineer
      'Client-side ve server-side event tracking sistemleri kurdum.',
      'Meta, Google, TikTok ve Reddit için CAPI / Offline Conversions mimarileri geliştirdim.',
      'Google Tag Manager, Server-side GTM ve Stape.io ile gelişmiş sinyal işleme altyapıları kurdum.',
      'HubSpot, Workiom ve Ruler Analytics ile veri eşleme ve event match rate optimizasyonu sağladım.',
      'Event Match Quality (EMQ) artırımı için sinyal doğruluğu süreçlerini geliştirdim.',
    ],
  },

  {
    id: 5,
    role: 'Software Developer',
    company: 'Freelance',
    period: 'Eylül 2024 — Ağustos 2025',
    description: [
      'Sağlık turizmi doktorları için CRM Entegrasyonlu çevrimiçi tanı uygulaması geliştirdim.',
      'Form → CRM → Otomatik PDF üretimi → Hasta takibi süreçlerini kodladım.',
    ],
  },

  {
    id: 6,
    role: 'Google Ads Manager',
    company: 'Asnorm',
    period: 'Aralık 2019 — Aralık 2020',
    description: [
      'E-ticaret reklam kampanyalarını yönettim ve optimize ettim.',
      'Performans analizleri ile ROI’yi artıracak stratejiler geliştirdim.',
      'Google Tag Manager ve Google Analytics üzerinde detaylı ölçümleme kurguları oluşturdum.',
      'AdWords hesap kurulumları ve optimizasyonları gerçekleştirdim.',
      'Veri analizleri ile trend tespiti, bütçe dağılımı ve stratejik öneriler sundum.',
    ],
  },

  {
    id: 7,
    role: 'Webmaster',
    company: 'TÜMKİAD Kahramanmaraş',
    period: 'Şubat 2018 — Nisan 2019',
    description: [
      'Websitelerdeki içeriklerin düzenli kontrolü, güncellenmesi ve doğruluğunun sağlanması.',
      'Yeni içerik geliştirme ve yayınlama süreçlerini yönettim.',
      'SEO uyumluluğu için anahtar kelime araştırmaları ve optimizasyon çalışmaları yaptım.',
      'Görsel ve multimedya entegrasyonları ile içerik etkileşimini artırdım.',
      'Düzenli yayın takvimi oluşturarak blog ve site güncellemelerini yönettim.',
    ],
  },
];


export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'SEO için AI Arama Motoru',
    summary: 'Cloudflare AutoRAG kullanan semantik arama motoru.',
    description: 'Rakip siteleri tarayan, içerik parçaları için vektör yerleştirmeleri oluşturan ve SEO ekibinin anlamsal boşluk analizi yapmasına olanak tanıyan kapsamlı bir araç. Tamamen Cloudflare Workers AI ve Vectorize kullanılarak uç noktada (edge) oluşturuldu.',
    techStack: ['Cloudflare Workers', 'Vectorize', 'Gemini API', 'React'],
    imageUrl: 'https://picsum.photos/id/1/600/400',
  },
  {
    id: 2,
    title: 'Pazarlama CAPI Ağ Geçidi',
    summary: 'Özel CRM → Meta → Google çevrimdışı dönüşüm hattı.',
    description: 'Potansiyel müşterileri CRM\'den alan, kullanıcı verilerini hashleyen (SHA-256) ve reklam hedeflemesini iyileştirmek için dönüşüm sinyallerini gerçek zamanlı olarak Meta Dönüşüm API\'sine ve Google Ads Gelişmiş Dönüşümlerine ileten gizlilik odaklı bir ara katman yazılımı.',
    techStack: ['Node.js', 'Redis', 'Meta Graph API', 'Google Ads API'],
    imageUrl: 'https://picsum.photos/id/20/600/400',
  },
  {
    id: 3,
    title: 'Gerçek Zamanlı Dashboard',
    summary: 'Canlı reklam harcaması vs. gelir görselleştirme.',
    description: '5 farklı reklam platformundan verileri birleşik bir gösterge tablosunda toplar. Canlı satış verilerini yayınlamak ve saniye saniye ROAS\'ı (Reklam Harcamasının Getirisi) hesaplamak için WebSocket kullanır.',
    techStack: ['Next.js', 'D3.js', 'WebSockets', 'PostgreSQL'],
    imageUrl: 'https://picsum.photos/id/3/600/400',
  },
  {
    id: 4,
    title: 'Otomatik Kreatif Test Aracı',
    summary: 'Yapay zeka destekli reklam kreatif analiz aracı.',
    description: 'Reklam kreatiflerini (resim/video) özelliklerle (ör. "parlak renkler", "insan yüzü") etiketlemek için bilgisayarlı görü API\'sini kullanır ve gelecekteki tasarımları önermek için bunları yüksek TO performansı ile ilişkilendirir.',
    techStack: ['Python', 'OpenCV', 'Pandas', 'FastAPI'],
    imageUrl: 'https://picsum.photos/id/4/600/400',
  },
];