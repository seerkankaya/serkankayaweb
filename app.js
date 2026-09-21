const projects=[
 {title:'SEO için AI Arama Motoru',type:'AI / SEMANTİK ARAMA',art:'search-art',visual:'<div class="search-ui"><div class="search-field">Anlamı ara, kelimeleri değil.<span>⌕</span></div><div class="result-line"><i>✳</i><span></span><b>01</b></div><div class="result-line"><i>✳</i><span style="width:50%"></span><b>02</b></div><div class="result-line"><i>✳</i><span style="width:58%"></span><b>03</b></div></div>',caption:'SEMANTIC SEARCH / VECTOR INTELLIGENCE',description:'Cloudflare AutoRAG kullanan semantik arama motoru. Anahtar kelime eşleşmesinin ötesinde, içeriklerin anlamına dayalı arama deneyimi sunmak için geliştirildi.',tags:['Cloudflare Workers','Vectorize','Gemini API','AutoRAG']},
 {title:'Pazarlama CAPI Ağ Geçidi',type:'TRACKING / ENTEGRASYON',art:'',visual:'<div class="diagram"><span class="node">CRM</span><span class="connector"></span><span class="node main">CAPI</span><span class="connector"></span><span class="node">ADS</span></div>',caption:'CONNECT THE SIGNALS. CLOSE THE LOOP.',description:'CRM verilerini Meta ve Google çevrimdışı dönüşüm süreçlerine bağlayan aktarım hattı. Pazarlama ve satış verilerini aynı akışta bir araya getirmeye odaklanır.',tags:['Node.js','Redis','Meta Graph API','Offline Conversions']},
 {title:'Gerçek Zamanlı Dashboard',type:'ANALİTİK / VERİ GÖRSELLEŞTİRME',art:'chart-art',visual:'<div class="chart"><i style="height:25%"></i><i style="height:40%"></i><i style="height:35%"></i><i style="height:62%"></i><i style="height:57%"></i><i style="height:80%"></i><i style="height:100%"></i></div>',caption:'AD SPEND × REVENUE / KAVRAMSAL GÖRÜNÜM',description:'Reklam harcaması ve gelir verilerini canlı olarak görselleştiren dashboard. Performans verilerini tek bir arayüzde izlemek için geliştirildi. Karttaki grafik temsili bir görseldir; gerçek kampanya sonuçlarını göstermez.',tags:['Next.js','D3.js','WebSockets']},
 {title:'Otomatik Kreatif Test Aracı',type:'AI / KREATİF ANALİZ',art:'creative-art',visual:'<div class="creative-grid"><div>◧<small>VARIANT A</small></div><div>✳<small>VARIANT B</small></div><div>▥<small>VARIANT C</small></div></div>',caption:'CREATIVE EXPLORATION / AI ANALYSIS',description:'Reklam kreatiflerini incelemek için geliştirilen yapay zeka destekli analiz aracı. Görüntü işleme ve veri analizini kreatif değerlendirme sürecinde bir araya getirir.',tags:['Python','OpenCV','Pandas']}
];
const grid=document.querySelector('#project-grid');
projects.forEach((p,i)=>{const button=document.createElement('button');button.className='project-card';button.setAttribute('aria-haspopup','dialog');button.setAttribute('aria-label',p.title+' — detayları aç');button.innerHTML=`<div class="project-art ${p.art}" aria-hidden="true"><span class="project-index">0${i+1} / ${p.type}</span>${p.visual}<span class="art-caption">${p.caption}</span></div><div class="project-meta"><div><h3>${p.title}</h3><p>${p.tags.slice(0,3).join(' · ')}</p></div><span class="project-arrow" aria-hidden="true">↗</span></div>`;button.addEventListener('click',()=>{document.querySelector('#project-detail').innerHTML=`<span class="eyebrow">${p.type}</span><h2 id="dialog-title">${p.title}</h2><p>${p.description}</p><div class="tags">${p.tags.map(t=>`<span>${t}</span>`).join('')}</div><a class="text-link" href="https://wa.me/905396714940" target="_blank" rel="noopener noreferrer">WhatsApp’ta bu çalışmayı konuşalım ↗</a>`;dialog.setAttribute('aria-labelledby','dialog-title');dialog.showModal();});grid.append(button);});
const jobs=[
  [
    "Dr. Cinik Hospital",
    "SEO & Performance Marketing Manager",
    "MART 2026 — GÜNÜMÜZ",
    "İstanbul",
    [
      "Türkiye merkezli sağlık turizmi ve medikal hizmetler markasında, uluslararası hasta kazanımı ile e-ticaretin dijital pazarlama süreçlerini uçtan uca yönetiyorum.",
      "Saç ekimi, diş tedavileri ve estetik cerrahi hizmetleri için Google Ads, Meta Ads, TikTok Ads, Snapchat Ads ve Reddit Ads kampanyalarını farklı pazarlara göre planlıyor ve optimize ediyorum.",
      "Uluslararası arama görünürlüğünü geliştirmek için teknik SEO stratejileri oluşturuyor; PR, editoryal içerik ve SEO çalışmalarını marka otoritesini destekleyecek şekilde koordine ediyorum.",
      "Farkındalıktan nitelikli başvuruya ve randevuya uzanan hasta kazanım sürecini takip ediyor, farklı hizmetlerin müşteri yolculuklarına uygun dönüşüm stratejileri geliştiriyorum.",
      "Shopify tabanlı Dr. Cinik Shop için Google ve Meta reklamlarını yönetiyorum. Saç bakımı, takviyeler, dermokozmetik ve medikal cihaz kategorilerinde müşteri kazanımı ve satış büyümesine odaklanıyorum.",
      "E-ticarette ürün keşfinden satın almaya uzanan reklam akışlarını ve ROAS performansını optimize ediyor; sağlık turizmi ile B2C e-ticaretin farklı dönüşüm modellerini birlikte yönetiyorum."
    ]
  ],
  [
    "Vera Clinic",
    "Performance Marketing Manager",
    "AĞUSTOS 2025 — ŞUBAT 2026",
    "",
    [
      "Google Ads odaklı performans pazarlaması çalışmalarında nitelikli lead kazanımı, doğru ilişkilendirme ve ölçeklenebilir kampanya performansına odaklandım.",
      "Smart Bidding ve dönüşüm optimizasyonunu desteklemek için tarayıcı ve sunucu tarafında event ve sinyal takibi altyapıları tasarlayıp uyguladım.",
      "Kayıp dönüşüm sinyallerini geri kazanmak ve kampanya ölçümünü güçlendirmek amacıyla Google, Meta, TikTok ve Reddit Conversion API entegrasyonları geliştirdim.",
      "Google Ads Offline Conversions, Enhanced Conversions ve Consent Mode v2 kurulumlarıyla çevrimdışı sonuçların aktarılmasını ve gizlilik kısıtları altında dönüşüm modellemesini destekledim.",
      "Google Tag Manager, Server-side GTM ve Stape.io altyapılarını kurdum ve sürdürdüm. Veri eşleşmesi ve Event Match Quality üzerinde çalışarak sinyal doğruluğunu iyileştirmeye odaklandım.",
      "HubSpot, Workiom ve Ruler Analytics entegrasyonlarıyla reklam harcamalarını CRM’deki gerçek iş sonuçlarına bağladım; teklif stratejileri için daha anlamlı veri akışları oluşturdum."
    ]
  ],
  [
    "Vera Clinic",
    "Sr. Web Developer & SEO Manager",
    "KASIM 2022 — EYLÜL 2025",
    "İstanbul",
    [
      "Pazarlama ekibinde web sitelerinin geliştirme, bakım ve güncelleme süreçlerini yönettim; Figma, Adobe XD ve Photoshop tasarımlarını çalışan web deneyimlerine dönüştürdüm.",
      "Reklam kampanyaları için dönüşüm odaklı açılış sayfaları geliştirdim ve A/B testleri kurguladım.",
      "Teknik SEO sorunlarını giderdim; içerik üretimine SEO desteği, anahtar kelime araştırması, rakip analizi ve organik büyüme stratejileri üzerinde çalıştım.",
      "Semrush, Screaming Frog, Ahrefs, Moz, Ubersuggest ve Seodity ile denetimler gerçekleştirdim. Search Console hatalarını düzelttim ve Google Analytics ölçümlemelerini takip ettim.",
      "Mailjet ve Mailchimp üzerinde e-posta şablonları hazırladım, mevcut şablonları düzenledim ve kampanya süreçlerinde görev aldım.",
      "Depozito ödemelerinin alınmasına yönelik bir sistem geliştirdim. Everton Sports Club için açılış sayfası ve rezervasyon sistemi oluşturdum.",
      "Workiom üzerinden iş akışlarını ve entegrasyonları düzenleyerek pazarlama operasyonlarını destekledim."
    ]
  ],
  [
    "Çevrimiçi tanı uygulaması",
    "Software Developer",
    "EYLÜL 2024 — AĞUSTOS 2025",
    "",
    [
      "Sağlık turizminde çalışan doktorların kullanımına yönelik çevrimiçi bir tanı uygulaması geliştirdim.",
      "Uygulamayı CRM ile entegre ederek form üzerinden alınan bilgilerin takip süreçlerine aktarılmasını sağladım.",
      "Form, CRM, otomatik PDF üretimi ve hasta takibi adımlarını birbirine bağlayan yazılım akışlarını geliştirdim."
    ]
  ],
  [
    "Hermest Hair Clinic",
    "SEO Expert · Dönemsel",
    "AĞUSTOS 2022 — KASIM 2022",
    "İstanbul · Uzaktan",
    [
      "Markanın organik görünürlüğünü desteklemek için SEO stratejilerini planladım, uyguladım ve optimize ettim.",
      "Backlink ve PR bağlantı çalışmaları yürüttüm; rakip analizi ve sektör araştırmalarıyla markanın arama sonuçlarındaki konumlandırılmasına yönelik öneriler geliştirdim.",
      "Web sitelerindeki teknik SEO sorunlarını tespit edip çözüm ürettim. Semrush, Screaming Frog, Ahrefs, Moz, Ubersuggest ve Seodity ile denetim ve analizler gerçekleştirdim.",
      "Google Search Console hatalarını düzelttim; GA4 verilerini analiz ettim ve Google Tag Manager ile trafik ölçümleme süreçlerinde çalıştım.",
      "Sağlık turizmine yönelik Google Ads hesaplarını ve kampanyalarını yönettim; görünürlük, müşteri kazanımı ve yatırım getirisi odağında optimizasyonlar yaptım.",
      "Finansal ve teknik performans verilerini değerlendirdim; eğilimleri belirleyerek kampanya ve pazarlama stratejilerine yönelik veriye dayalı öneriler sundum."
    ]
  ],
  [
    "Este Medical Group",
    "Sr. Web Developer & SEO Expert · Dönemsel",
    "NİSAN 2022 — AĞUSTOS 2022",
    "İstanbul · Uzaktan",
    [
      "Ajansla koordineli şekilde SEO stratejilerinin planlama, uygulama ve optimizasyon süreçlerini yürüttüm.",
      "Web sitelerindeki teknik SEO sorunlarını belirledim ve çözümler geliştirdim. Semrush, Screaming Frog, Ahrefs, Moz, Ubersuggest ve Seodity araçlarıyla analizler yaptım.",
      "Google Search Console hatalarının giderilmesi ve GA4 verilerinin değerlendirilmesi üzerinde çalıştım; Google Tag Manager ve Google Analytics ile web trafiğini takip ettim.",
      "Sağlık turizmi alanında Google Ads hesaplarının kurulum, yönetim ve optimizasyon süreçlerinde görev aldım.",
      "Kampanya performansını ve yatırım getirisini desteklemek için reklam verilerini analiz ettim; finansal ve teknik değerlendirmelerle optimizasyon alanlarını belirledim.",
      "Verilerdeki eğilimleri araştırarak markanın dijital pazarlama çalışmalarına yönelik stratejik öneriler geliştirdim."
    ]
  ],
  [
    "MODD/group",
    "Web Developer",
    "OCAK 2022 — NİSAN 2022",
    "İstanbul",
    [
      "30’dan fazla sağlık turizmi web sitesi geliştirdim; müşteri ihtiyaçlarına göre sağlık turizmi ve inşaat sektörlerine yönelik web çözümleri hazırladım.",
      "Figma, Adobe XD ve Photoshop tasarımlarını web sitelerine dönüştürdüm; bakım, düzenleme ve güncelleme çalışmalarını yürüttüm.",
      "Reklam kampanyaları için kullanıcı deneyimine ve dönüşüme odaklanan açılış sayfaları tasarladım ve geliştirdim.",
      "Google Search Console üzerinden hata düzeltmeleri, Google Analytics ile performans analizi ve Bing Webmaster Tools üzerinden arama görünürlüğü takibi yaptım.",
      "Trello ile proje görevlerini ve iş akışlarını organize ederek geliştirme süreçlerini koordine ettim."
    ]
  ],
  [
    "Asnorm",
    "Google Ads Manager",
    "ARALIK 2019 — ARALIK 2020",
    "",
    [
      "E-ticaret sektöründe Google Ads kampanyalarını yönettim; reklam hesaplarının kurulumunu, kampanya geliştirme ve optimizasyon süreçlerini yürüttüm.",
      "Görünürlük, müşteri etkileşimi ve yatırım getirisi hedefleri doğrultusunda reklam performansını analiz ettim.",
      "Google Tag Manager ve Google Analytics ile web sitesi trafiğini ve kampanya sonuçlarını takip ettim.",
      "Finansal ve teknik analizlerle e-ticaret performansını değerlendirdim; veri eğilimlerinden hareketle bütçe dağılımı ve pazarlama stratejilerine yönelik öneriler sundum.",
      "Excel, Word ve PowerPoint kullanarak veri analizi, raporlama ve sunum çalışmaları hazırladım."
    ]
  ],
  [
    "TÜMKİAD Kahramanmaraş",
    "Webmaster",
    "ŞUBAT 2018 — NİSAN 2019",
    "",
    [
      "Web siteleri ve bloglardaki mevcut içerikleri düzenli olarak kontrol ettim; doğruluk, güncellik ve kurum hedefleriyle uyum için düzenlemeler yaptım.",
      "Hedef kitlenin ilgi alanlarına ve güncel konulara yönelik yeni içerikler hazırladım ve yayınladım.",
      "Anahtar kelime araştırmaları ve içerik düzenlemeleriyle sayfaların SEO uyumluluğunu geliştirdim.",
      "Görsel ve multimedya öğelerini içeriklere entegre ederek sayfaların anlatımını ve etkileşimini destekledim.",
      "İçerik takvimi oluşturarak blog ve web sitesi yayınlarının düzenli biçimde sürdürülmesini sağladım."
    ]
  ]
];

document.querySelector('#timeline').innerHTML=jobs.map((j,i)=>`<details class="job" ${i===0?'open':''}><summary><div><span class="date">${j[2]}</span><h3>${j[0]}${i===0?'<span class="current-tag">GÜNCEL</span>':''}</h3><span class="role">${j[1]}</span></div><span class="plus" aria-hidden="true">+</span></summary><div class="job-body">${j[3]?`<p>${j[3]}</p>`:''}<ul>${j[4].map(t=>`<li>${t}</li>`).join('')}</ul></div></details>`).join('');
const dialog=document.querySelector('#project-dialog');document.querySelector('.close-dialog').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
document.querySelector('#year').textContent=new Date().getFullYear();function updateClock(){document.querySelector('#clock').textContent=new Intl.DateTimeFormat('tr-TR',{timeZone:'Europe/Istanbul',hour:'2-digit',minute:'2-digit'}).format(new Date());}updateClock();setInterval(updateClock,60000);
// Load the GLB viewer separately so the rest of the portfolio stays interactive.
const viewer = document.querySelector('#sculpture');
const motion = document.querySelector('#motion');
const status = document.querySelector('#model-status');
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
let paused = reducedMotion.matches;
let visible = true;
let ready = false;

function syncModelMotion() {
  const playing = ready && !paused && visible && !document.hidden;
  viewer.autoRotate = playing;
  if (ready && viewer.availableAnimations.length) {
    if (playing) viewer.play();
    else viewer.pause();
  }
  motion.setAttribute('aria-pressed', String(paused));
  motion.setAttribute('aria-label', paused ? 'Animasyonu oynat' : 'Animasyonu duraklat');
  motion.textContent = paused ? '▷' : 'Ⅱ';
}
function modelError() {
  ready = false;
  motion.disabled = true;
  status.hidden = false;
  status.textContent = '3D model yüklenemedi. Sayfayı yenileyerek tekrar deneyebilirsin.';
  syncModelMotion();
}
viewer.addEventListener('load', () => {
  ready = true;
  status.hidden = true;
  motion.disabled = false;
  syncModelMotion();
});
viewer.addEventListener('error', modelError);
motion.addEventListener('click', () => { paused = !paused; syncModelMotion(); });
reducedMotion.addEventListener('change', event => { paused = event.matches; syncModelMotion(); });
new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; syncModelMotion(); }).observe(viewer);
document.addEventListener('visibilitychange', syncModelMotion);
syncModelMotion();
import('@google/model-viewer').then(() => {
  // Vite includes and fingerprints the local model in production builds.
  viewer.src = new URL('./serkankaya.glb', import.meta.url).href;
}).catch(modelError);

// Accessible expertise tabs; animate only when the visitor chooses a discipline.
const expertiseTabs = [...document.querySelectorAll('.expertise-tabs [role="tab"]')];
const expertisePanels = [...document.querySelectorAll('.expertise-panel')];
let expertiseAnimation;
function selectExpertise(index, focus = false) {
  expertiseAnimation?.cancel();
  expertiseTabs.forEach((tab, i) => {
    tab.setAttribute('aria-selected', String(i === index));
    tab.tabIndex = i === index ? 0 : -1;
    expertisePanels[i].hidden = i !== index;
    expertisePanels[i].inert = i !== index;
  });
  document.querySelector('.expertise-count').innerHTML = `0${index + 1} <span>/ 05</span>`;
  if (focus) expertiseTabs[index].focus();
  if (!reducedMotion.matches) expertiseAnimation = expertisePanels[index].animate(
    [{ opacity: 0, transform: 'translateY(12px)' }, { opacity: 1, transform: 'translateY(0)' }],
    { duration: 380, easing: 'cubic-bezier(.2,.7,.2,1)' }
  );
}
expertiseTabs.forEach((tab, index) => {
  expertisePanels[index].inert = index !== 0;
  tab.addEventListener('click', () => {
    if (tab.getAttribute('aria-selected') !== 'true') selectExpertise(index);
  });
  tab.addEventListener('keydown', event => {
    let next;
    if (event.key === 'ArrowRight') next = (index + 1) % expertiseTabs.length;
    if (event.key === 'ArrowLeft') next = (index - 1 + expertiseTabs.length) % expertiseTabs.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = expertiseTabs.length - 1;
    if (next !== undefined) { event.preventDefault(); selectExpertise(next, true); }
  });
});

// Mobile disclosure navigation: native button, Escape support, no hidden focus targets.
const menuToggle = document.querySelector('.mobile-menu-toggle');
const header = document.querySelector('.header');
const navigation = document.querySelector('#primary-navigation');
function setMenu(open, restoreFocus = false) {
  header.classList.toggle('menu-open', open);
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Menüyü kapat' : 'Menüyü aç');
  if (restoreFocus) menuToggle.focus();
}
menuToggle.addEventListener('click', () => setMenu(menuToggle.getAttribute('aria-expanded') !== 'true'));
navigation.addEventListener('click', event => { if (event.target.closest('a')) setMenu(false); });
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && header.classList.contains('menu-open')) setMenu(false, true);
});
document.addEventListener('click', event => {
  if (!header.contains(event.target) && header.classList.contains('menu-open')) setMenu(false);
});
matchMedia('(max-width: 700px)').addEventListener('change', () => setMenu(false));
