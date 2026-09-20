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
// Lightweight perspective projection of a torus knot: no 3D framework or model download.
const canvas=document.querySelector('#sculpture'),ctx=canvas.getContext('2d');const motion=document.querySelector('#motion');const reduced=matchMedia('(prefers-reduced-motion: reduce)');let paused=reduced.matches,visible=true,frame=0,w=0,h=0,angle=.45,px=0,py=0;const points=[];const rings=180,sides=22;
function center(t){return [(2+Math.cos(3*t))*.72*Math.cos(2*t),(2+Math.cos(3*t))*.72*Math.sin(2*t),Math.sin(3*t)*.85];}
for(let i=0;i<rings;i++){const t=i/rings*Math.PI*2,c=center(t),n=center(t+.001);let tangent=n.map((v,k)=>v-c[k]);let l=Math.hypot(...tangent);tangent=tangent.map(v=>v/l);let normal=[-tangent[1],tangent[0],0];l=Math.hypot(...normal);normal=normal.map(v=>v/l);const b=[tangent[1]*normal[2]-tangent[2]*normal[1],tangent[2]*normal[0]-tangent[0]*normal[2],tangent[0]*normal[1]-tangent[1]*normal[0]];for(let j=0;j<sides;j++){const a=j/sides*Math.PI*2;points.push(c.map((v,k)=>v+.39*(normal[k]*Math.cos(a)+b[k]*Math.sin(a))));}}
function resize(){const rect=canvas.getBoundingClientRect();w=rect.width;h=rect.height;const dpr=Math.min(devicePixelRatio||1,1.7);canvas.width=Math.round(w*dpr);canvas.height=Math.round(h*dpr);ctx.setTransform(dpr,0,0,dpr,0,0);draw();}
function draw(){ctx.clearRect(0,0,w,h);const glow=ctx.createRadialGradient(w*.5,h*.46,10,w*.5,h*.46,w*.48);glow.addColorStop(0,'rgba(127,167,54,.13)');glow.addColorStop(1,'rgba(16,17,15,0)');ctx.fillStyle=glow;ctx.fillRect(0,0,w,h);const ay=angle+px*.2,ax=.65+py*.2,az=-.35;const cy=Math.cos(ay),sy=Math.sin(ay),cx=Math.cos(ax),sx=Math.sin(ax),cz=Math.cos(az),sz=Math.sin(az);const scale=Math.min(w*.185,h*.19);const projected=points.map(([x,y,z])=>{let x1=x*cy+z*sy,z1=-x*sy+z*cy,y1=y*cx-z1*sx,z2=y*sx+z1*cx,x2=x1*cz-y1*sz,y2=x1*sz+y1*cz;const depth=7/(7+z2);return [w*.51+x2*scale*depth,h*.48+y2*scale*depth,z2,depth];});
// Fine wireframe reveals the real depth and topology of the rotating form.
for(let i=0;i<rings;i+=2){for(let j=0;j<sides;j++){const a=projected[i*sides+j],b=projected[i*sides+(j+1)%sides];ctx.strokeStyle=`rgba(168,211,106,${.08+(1-(a[2]+2.8)/5.6)*.34})`;ctx.lineWidth=.55;ctx.beginPath();ctx.moveTo(a[0],a[1]);ctx.lineTo(b[0],b[1]);ctx.stroke();}}
projected.sort((a,b)=>b[2]-a[2]);for(const p of projected){const light=Math.max(.12,Math.min(1,(3-p[2])/5.5));ctx.fillStyle=`rgba(195,243,107,${light*.85})`;ctx.beginPath();ctx.arc(p[0],p[1],Math.max(.45,1.1*p[3]),0,Math.PI*2);ctx.fill();}}
let last=0;function animate(time){frame=0;if(paused||!visible||document.hidden)return;if(time-last>32){angle+=.004;draw();last=time;}frame=requestAnimationFrame(animate);}function sync(){motion.setAttribute('aria-pressed',String(paused));motion.setAttribute('aria-label',paused?'Animasyonu oynat':'Animasyonu duraklat');motion.textContent=paused?'▷':'Ⅱ';if(frame)cancelAnimationFrame(frame);frame=0;if(!paused&&visible&&!document.hidden)frame=requestAnimationFrame(animate);else draw();}motion.addEventListener('click',()=>{paused=!paused;sync();});reduced.addEventListener('change',e=>{paused=e.matches;sync();});canvas.addEventListener('pointermove',e=>{if(paused)return;const r=canvas.getBoundingClientRect();px=(e.clientX-r.left)/w-.5;py=(e.clientY-r.top)/h-.5;});canvas.addEventListener('pointerleave',()=>{px=py=0;});new ResizeObserver(resize).observe(canvas);new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;sync();}).observe(canvas);document.addEventListener('visibilitychange',sync);resize();sync();
