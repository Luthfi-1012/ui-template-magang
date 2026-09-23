/**
 * Nara Institute Global Client Logic & Interactive UI Engine
 * Version: 2.1 (Full Parallax & Cinematic Scroll Edition)
 */

document.addEventListener('DOMContentLoaded', () => {
  try { initMobileDrawer(); } catch (e) { console.error('Mobile drawer error:', e); }
  try { highlightActiveNav(); } catch (e) { console.error('Active nav error:', e); }
  try { initSmoothScroll(); } catch (e) { console.error('Smooth scroll error:', e); }
  try { initWhatsAppConcierge(); } catch (e) { console.error('WhatsApp concierge error:', e); }
  try { initPillarEngine(); } catch (e) { console.error('Pillar engine error:', e); }
  try { initCardInteractions(); } catch (e) { console.error('Card interactions error:', e); }
  try { initParallaxScroll(); } catch (e) { console.error('Parallax error:', e); }
  try { initScrollReveal(); } catch (e) { console.error('Scroll reveal error:', e); }
});

// 1. Mobile Drawer Navigation
function initMobileDrawer() {
  const header = document.querySelector('header');
  if (!header) return;

  const navContainer = header.querySelector('nav')?.parentElement || header.querySelector('div > div');
  if (!navContainer) return;

  let mobileBtn = document.getElementById('mobile-menu-btn');
  if (!mobileBtn) {
    mobileBtn = document.createElement('button');
    mobileBtn.id = 'mobile-menu-btn';
    mobileBtn.setAttribute('aria-label', 'Toggle mobile navigation menu');
    mobileBtn.className = 'xl:hidden w-9 h-9 rounded-full bg-black/5 hover:bg-black/10 text-[#0B0D0C] flex items-center justify-center transition-all ml-1 sm:ml-2 shadow-sm focus:outline-none';
    mobileBtn.innerHTML = '<span class="material-symbols-outlined text-[20px]">menu</span>';
    navContainer.appendChild(mobileBtn);
  }

  let drawer = document.getElementById('mobile-drawer');
  if (!drawer) {
    drawer = document.createElement('div');
    drawer.id = 'mobile-drawer';
    drawer.className = 'fixed inset-0 z-[100] bg-black/75 backdrop-blur-md opacity-0 pointer-events-none transition-opacity duration-300 flex justify-end';
    drawer.innerHTML = `
      <div id="drawer-panel" class="w-full max-w-sm bg-[#0E110F] text-white h-full p-6 sm:p-8 flex flex-col justify-between transform translate-x-full transition-transform duration-300 ease-out shadow-2xl border-l border-white/10">
        <div>
          <div class="flex items-center justify-between pb-6 border-b border-white/10">
            <div class="flex items-center gap-3">
              <img src="assets/images/logo.png" alt="Nara Institute" class="h-8 w-auto" />
            </div>
            <button id="close-drawer-btn" class="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors focus:outline-none">
              <span class="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>

          <nav class="flex flex-col gap-2 py-6">
            <a href="index.html" class="mobile-nav-link px-4 py-3 rounded-2xl text-base font-semibold text-white/80 hover:text-white hover:bg-white/5 transition-all flex items-center justify-between" data-page="index">
              <span class="flex items-center gap-3"><span class="material-symbols-outlined text-[20px] text-white/50">home</span>Beranda</span>
              <span class="material-symbols-outlined text-[18px] text-white/40">chevron_right</span>
            </a>
            <a href="solutions.html" class="mobile-nav-link px-4 py-3 rounded-2xl text-base font-semibold text-white/80 hover:text-white hover:bg-white/5 transition-all flex items-center justify-between" data-page="solutions">
              <span class="flex items-center gap-3"><span class="material-symbols-outlined text-[20px] text-white/50">grid_view</span>Solusi &amp; Layanan</span>
              <span class="material-symbols-outlined text-[18px] text-white/40">chevron_right</span>
            </a>
            <a href="about.html" class="mobile-nav-link px-4 py-3 rounded-2xl text-base font-semibold text-white/80 hover:text-white hover:bg-white/5 transition-all flex items-center justify-between" data-page="about">
              <span class="flex items-center gap-3"><span class="material-symbols-outlined text-[20px] text-white/50">corporate_fare</span>Tentang Kami &amp; Ekosistem</span>
              <span class="material-symbols-outlined text-[18px] text-white/40">chevron_right</span>
            </a>
            <a href="insights.html" class="mobile-nav-link px-4 py-3 rounded-2xl text-base font-semibold text-white/80 hover:text-white hover:bg-white/5 transition-all flex items-center justify-between" data-page="insights">
              <span class="flex items-center gap-3"><span class="material-symbols-outlined text-[20px] text-white/50">article</span>Pusat Wawasan &amp; Riset</span>
              <span class="material-symbols-outlined text-[18px] text-white/40">chevron_right</span>
            </a>
            <a href="contact.html" class="mobile-nav-link px-4 py-3 rounded-2xl text-base font-semibold text-white/80 hover:text-white hover:bg-white/5 transition-all flex items-center justify-between" data-page="contact">
              <span class="flex items-center gap-3"><span class="material-symbols-outlined text-[20px] text-white/50">mail</span>Kontak &amp; RFQ</span>
              <span class="material-symbols-outlined text-[18px] text-white/40">chevron_right</span>
            </a>
          </nav>
        </div>

        <div class="pt-6 border-t border-white/10 flex flex-col gap-4">
          <div class="flex flex-col">
            <span class="text-white/50 uppercase tracking-widest text-[10px] font-semibold">Hotline Eksekutif Nara</span>
            <a href="https://wa.me/628111028351" target="_blank" class="text-sm font-bold text-white hover:text-[#D8E94B] transition-colors mt-0.5 flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              +62 811-1028-351
            </a>
          </div>
          <a href="contact.html" class="w-full py-3.5 px-6 rounded-full bg-[#D8E94B] hover:bg-[#c9da3d] text-[#0B0D0C] text-sm font-bold flex items-center justify-center gap-2 transition-all shadow-lg">
            <span>Konsultasi Kemitraan</span>
            <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
          </a>
        </div>
      </div>
    `;
    document.body.appendChild(drawer);
  }

  const drawerPanel = drawer.querySelector('#drawer-panel');
  const closeBtn = drawer.querySelector('#close-drawer-btn');

  function openDrawer() {
    drawer.classList.remove('opacity-0', 'pointer-events-none');
    drawer.classList.add('opacity-100', 'pointer-events-auto');
    drawerPanel.classList.remove('translate-x-full');
    drawerPanel.classList.add('translate-x-0');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawer.classList.remove('opacity-100', 'pointer-events-auto');
    drawer.classList.add('opacity-0', 'pointer-events-none');
    drawerPanel.classList.remove('translate-x-0');
    drawerPanel.classList.add('translate-x-full');
    document.body.style.overflow = '';
  }

  mobileBtn.addEventListener('click', openDrawer);
  closeBtn?.addEventListener('click', closeDrawer);
  drawer.addEventListener('click', (e) => {
    if (e.target === drawer) closeDrawer();
  });
}

// 2. Highlight Active Navigation Link
function highlightActiveNav() {
  const path = window.location.pathname.toLowerCase();
  let currentPage = 'index';
  if (path.includes('solutions')) currentPage = 'solutions';
  else if (path.includes('about')) currentPage = 'about';
  else if (path.includes('insights')) currentPage = 'insights';
  else if (path.includes('contact')) currentPage = 'contact';

  const desktopLinks = document.querySelectorAll('header nav a');
  desktopLinks.forEach(link => {
    const href = (link.getAttribute('href') || '').toLowerCase();
    const isActive = (
      (currentPage === 'index' && (href === 'index.html' || href === '/' || href.includes('index') || href === '')) ||
      (currentPage === 'solutions' && href.includes('solutions')) ||
      (currentPage === 'about' && href.includes('about')) ||
      (currentPage === 'insights' && href.includes('insights')) ||
      (currentPage === 'contact' && href.includes('contact'))
    );

    if (isActive) {
      link.classList.remove('text-white', 'text-white/70', 'text-[#0B0D0C]/70');
      link.classList.add('text-[#0B0D0C]', 'font-bold', 'border-b-2', 'border-[#9E1B22]', 'pb-1');
      link.setAttribute('aria-current', 'page');
    } else {
      link.classList.remove('text-white', 'font-bold', 'border-b-2', 'border-[#9E1B22]', 'pb-1');
      link.classList.add('text-[#0B0D0C]/70', 'font-semibold');
      link.removeAttribute('aria-current');
    }
  });

  const mobileLinks = document.querySelectorAll('.mobile-nav-link');
  mobileLinks.forEach(link => {
    if (link.getAttribute('data-page') === currentPage) {
      link.classList.remove('text-white/80');
      link.classList.add('text-[#D8E94B]', 'bg-white/10', 'font-bold');
    } else {
      link.classList.remove('text-[#D8E94B]', 'bg-white/10', 'font-bold');
      link.classList.add('text-white/80');
    }
  });
}

// 3. Smooth Scroll for Anchor Links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href').substring(1);
      if (!targetId) return;
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// 4. Multi-Division Floating WhatsApp Concierge
function initWhatsAppConcierge() {
  if (document.getElementById('nara-wa-concierge')) return;

  const widget = document.createElement('div');
  widget.id = 'nara-wa-concierge';
  widget.className = 'fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-auto';
  
  widget.innerHTML = `
    <div id="wa-popup-card" class="mb-4 w-[340px] sm:w-[380px] bg-[#0E110F]/95 backdrop-blur-2xl text-white rounded-3xl p-5 shadow-2xl border border-white/15 opacity-0 scale-95 pointer-events-none transition-all duration-300 ease-out origin-bottom-right">
      <div class="flex items-start justify-between pb-4 border-b border-white/10">
        <div class="flex items-center gap-3">
          <div class="relative w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#9E1B22] to-[#25D366] p-0.5 shadow-md">
            <div class="w-full h-full bg-[#0E110F] rounded-[14px] flex items-center justify-center">
              <span class="material-symbols-outlined text-[22px] text-emerald-400">support_agent</span>
            </div>
            <span class="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 ring-2 ring-[#0E110F]"></span>
          </div>
          <div class="flex flex-col">
            <span class="font-bold text-sm text-white">Nara Advisory Concierge</span>
            <div class="flex items-center gap-1.5 mt-0.5">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span class="text-[11px] text-emerald-300 font-medium">Online • Respon Cepat &lt; 5 Menit</span>
            </div>
          </div>
        </div>
        <button id="close-wa-popup" class="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white flex items-center justify-center transition-colors">
          <span class="material-symbols-outlined text-[16px]">close</span>
        </button>
      </div>

      <p class="text-xs text-white/70 py-3 leading-relaxed">
        Pilih divisi layanan spesifik di bawah ini untuk terhubung langsung via WhatsApp resmi Nara Institute:
      </p>

      <div class="flex flex-col gap-2">
        <a href="https://wa.me/628111028351?text=Halo%20Nara%20Academy%2C%20saya%20ingin%20berdiskusi%20mengenai%20program%20pelatihan%20SDM%20dan%20sertifikasi%20kompetensi..." 
           target="_blank" 
           class="group p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-[#D8E94B]/40 transition-all flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center">
              <span class="material-symbols-outlined text-[18px]">school</span>
            </div>
            <div class="flex flex-col text-left">
              <span class="text-xs font-bold text-white group-hover:text-[#D8E94B] transition-colors">Nara Academy &amp; Pelatihan SDM</span>
              <span class="text-[10px] text-white/50">In-house training, sertifikasi &amp; asesmen</span>
            </div>
          </div>
          <span class="material-symbols-outlined text-[16px] text-white/40 group-hover:text-[#D8E94B] group-hover:translate-x-0.5 transition-all">arrow_forward</span>
        </a>

        <a href="https://wa.me/628111028351?text=Halo%20Nara%20Consulting%2C%20saya%20ingin%20konsultasi%20mengenai%20strategi%20bisnis%2C%20tata%20kelola%20GRC%20dan%20manajemen..." 
           target="_blank" 
           class="group p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-[#D8E94B]/40 transition-all flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-xl bg-blue-500/20 text-blue-300 flex items-center justify-center">
              <span class="material-symbols-outlined text-[18px]">account_balance</span>
            </div>
            <div class="flex flex-col text-left">
              <span class="text-xs font-bold text-white group-hover:text-[#D8E94B] transition-colors">Nara Consulting &amp; Tata Kelola (GRC)</span>
              <span class="text-[10px] text-white/50">Strategi korporat, risiko &amp; kepatuhan</span>
            </div>
          </div>
          <span class="material-symbols-outlined text-[16px] text-white/40 group-hover:text-[#D8E94B] group-hover:translate-x-0.5 transition-all">arrow_forward</span>
        </a>

        <a href="https://wa.me/628111028351?text=Halo%20Tim%20Nara%20Institute%2C%20kami%20membutuhkan%20layanan%20audit%20K3%2C%20QHSE%20dan%20sertifikasi%20sistem%20manajemen%20ISO..." 
           target="_blank" 
           class="group p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-[#D8E94B]/40 transition-all flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center">
              <span class="material-symbols-outlined text-[18px]">verified_user</span>
            </div>
            <div class="flex flex-col text-left">
              <span class="text-xs font-bold text-white group-hover:text-[#D8E94B] transition-colors">K3, QHSE &amp; Standarisasi ISO</span>
              <span class="text-[10px] text-white/50">Sistem keselamatan, audit mutu &amp; ESG</span>
            </div>
          </div>
          <span class="material-symbols-outlined text-[16px] text-white/40 group-hover:text-[#D8E94B] group-hover:translate-x-0.5 transition-all">arrow_forward</span>
        </a>

        <a href="https://wa.me/628111028351?text=Halo%20Nara%20Institute%2C%20perusahaan%20kami%20ingin%20mengajukan%20Request%20for%20Quotation%20(RFQ)%20dan%20kemitraan%20strategis..." 
           target="_blank" 
           class="group p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-[#D8E94B]/40 transition-all flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-xl bg-[#9E1B22]/30 text-rose-300 flex items-center justify-center">
              <span class="material-symbols-outlined text-[18px]">handshake</span>
            </div>
            <div class="flex flex-col text-left">
              <span class="text-xs font-bold text-white group-hover:text-[#D8E94B] transition-colors">Permintaan Proposal &amp; RFQ B2B</span>
              <span class="text-[10px] text-white/50">Tender korporat, BUMN &amp; holding</span>
            </div>
          </div>
          <span class="material-symbols-outlined text-[16px] text-white/40 group-hover:text-[#D8E94B] group-hover:translate-x-0.5 transition-all">arrow_forward</span>
        </a>
      </div>

      <div class="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] text-white/40">
        <span>Nara Official WhatsApp: 0811-1028-351</span>
        <span>Senin - Sabtu (08:00 - 18:00)</span>
      </div>
    </div>

    <button id="wa-trigger-btn" class="group flex items-center gap-3 bg-[#0E110F] hover:bg-[#181D1A] text-white pl-4 pr-5 py-3 rounded-full border border-white/20 shadow-[0_16px_36px_rgba(0,0,0,0.35)] transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none">
      <div class="relative w-9 h-9 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
        <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.174.086.275.073.376-.044.101-.116.433-.506.549-.68.116-.173.231-.144.39-.086s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.392-12.416c-5.514 0-10 4.486-10 10 0 1.942.559 3.756 1.523 5.295l-1.562 5.705 5.86-1.538c1.481.868 3.208 1.368 5.179 1.368 5.514 0 10-4.486 10-10s-4.486-10-10-10z"/>
        </svg>
        <span class="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-400 ring-2 ring-[#0E110F] animate-ping"></span>
      </div>
      <div class="flex flex-col text-left">
        <span class="text-[11px] font-bold text-white tracking-wide flex items-center gap-1.5">
          Hubungi Nara Concierge
          <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
        </span>
        <span class="text-[9px] text-[#D8E94B] uppercase tracking-wider font-semibold">4 Divisi Solusi Siap Bantu</span>
      </div>
    </button>
  `;

  document.body.appendChild(widget);

  const popupCard = widget.querySelector('#wa-popup-card');
  const triggerBtn = widget.querySelector('#wa-trigger-btn');
  const closeBtn = widget.querySelector('#close-wa-popup');

  let isOpen = false;

  function togglePopup() {
    isOpen = !isOpen;
    if (isOpen) {
      popupCard.classList.remove('opacity-0', 'scale-95', 'pointer-events-none');
      popupCard.classList.add('opacity-100', 'scale-100', 'pointer-events-auto');
    } else {
      popupCard.classList.remove('opacity-100', 'scale-100', 'pointer-events-auto');
      popupCard.classList.add('opacity-0', 'scale-95', 'pointer-events-none');
    }
  }

  triggerBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    togglePopup();
  });

  closeBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    isOpen = true;
    togglePopup();
  });

  document.addEventListener('click', (e) => {
    if (isOpen && !widget.contains(e.target)) {
      isOpen = true;
      togglePopup();
    }
  });
}

// 5. The Nara Operating Engine (6-Pillar Interactive Switcher)
function initPillarEngine() {
  const container = document.getElementById('nara-pillar-engine');
  if (!container) return;

  const pillarData = {
    '01': {
      number: '01',
      title: 'Diagnosis & Assessment',
      subtitle: 'NARA People Health Check™ Khusus CEO',
      tag: 'People Health Check',
      principles: 'Fase 1',
      description: 'Fase diagnosis mendalam layaknya "Medical Check-Up" untuk organisasi Anda. Kami menganalisis akar masalah, bottlenecks, dan gap performa SDM di perusahaan yang sedang tumbuh pesat.',
      bullets: [
        'Audit komprehensif struktur organisasi & beban kerja',
        'Identifikasi gap kompetensi talenta vs strategi bisnis',
        'Evaluasi kesehatan budaya kerja & tingkat retensi',
        'Rekomendasi "Prescription" strategis kepada Business Owner'
      ],
      deliverables: 'Organization Health Report, Talent Gap Analysis, Strategic Prescription Blueprint',
      icon: 'health_and_safety'
    },
    '02': {
      number: '02',
      title: 'Talent Treatment & Partnership',
      subtitle: 'NARA People Care™ - Solusi Terpadu Merawat SDM',
      tag: 'Talent Treatment',
      principles: 'Fase 2',
      description: 'Solusi pendampingan (partnership) jangka panjang dari "Corporate People Doctor". Kami tidak hanya memberikan training, kami memastikan tim Anda benar-benar sehat dan siap mengeksekusi strategi.',
      bullets: [
        'Pendampingan intensif oleh pakar HR tersertifikasi',
        'Konsultasi "One-on-One" bagi eksekutif dan manager',
        'Program penyehatan budaya kerja & peningkatan employee engagement',
        'Sistem evaluasi kinerja dan produktivitas terukur'
      ],
      deliverables: 'Employee Engagement Report, Performance Dashboard, NARA People Care Retainer',
      icon: 'volunteer_activism'
    },
    '03': {
      number: '03',
      title: 'Professional Development',
      subtitle: 'Pengembangan Kompetensi Eksekutif (Run the Business)',
      tag: 'Run The Business',
      principles: 'Fase 3',
      description: 'Program pengembangan kapasitas manajerial tingkat lanjut (HR Pilar) untuk mencetak para pemimpin perusahaan yang mampu mengeksekusi strategi bisnis dengan presisi tinggi.',
      bullets: [
        'Asesmen kompetensi kepemimpinan dan manajerial',
        'Sertifikasi profesi & pelatihan berbasis kompetensi (BNSP)',
        'Workshop in-house tematik (Leadership, Sales, Finance for Non-Finance)',
        'Pembuatan modul pembelajaran korporat spesifik'
      ],
      deliverables: 'Talent Mapping Matrix, Certified Leadership Program, Corporate Learning Modules',
      icon: 'model_training'
    },
    '04': {
      number: '04',
      title: 'Corporate Legal Compliance',
      subtitle: 'Fondasi Kepatuhan Hukum Perusahaan (Protects the Business)',
      tag: 'Legal Compliance',
      principles: 'Fase 4',
      description: 'Menjaga keberlangsungan bisnis dengan memastikan setiap langkah korporasi berpijak pada fondasi hukum (LAW Pilar) yang kuat dan terhindar dari sanksi.',
      bullets: [
        'Audit kepatuhan regulasi sektoral & perizinan bisnis (Legal Audit)',
        'Penyusunan dan review kontrak komersial & kemitraan',
        'Pembuatan Peraturan Perusahaan (PP) & Perjanjian Kerja Bersama (PKB)',
        'Legal Due Diligence untuk merger, akuisisi, atau investasi'
      ],
      deliverables: 'Corporate Legal Audit Report, Draft PKB/PP, Standardized Commercial Contracts',
      icon: 'gavel'
    },
    '05': {
      number: '05',
      title: 'Business Dispute Mitigation',
      subtitle: 'Strategi Manajemen Risiko Hukum & Sengketa',
      tag: 'Risk Mitigation',
      principles: 'Fase 5',
      description: 'Pendekatan preventif dan strategis dalam menangani sengketa bisnis B2B atau ketenagakerjaan, melindungi aset kritis, kelangsungan operasi, dan reputasi perusahaan.',
      bullets: [
        'Advokasi hukum ketenagakerjaan (PHI) dan sengketa industrial',
        'Mediasi sengketa komersial B2B di luar pengadilan (ADR)',
        'Strategi mitigasi risiko litigasi operasional harian',
        'Pendampingan hukum eksekutif (Executive Legal Protection)'
      ],
      deliverables: 'Dispute Resolution Strategy, Settlement Agreement, Legal Risk Heatmap',
      icon: 'shield'
    },
    '06': {
      number: '06',
      title: 'IT & Digital Acceleration',
      subtitle: 'Transformasi Teknologi SDM (Accelerates the Business)',
      tag: 'Tech Acceleration',
      principles: 'Fase 6',
      description: 'Mempercepat produktivitas SDM melalui otomasi teknologi (IT Pilar), pemanfaatan AI, serta penerapan standar keamanan siber tertinggi.',
      bullets: [
        'Implementasi HRIS (Human Resource Information System) terpadu',
        'Otomasi proses bisnis & adopsi Kecerdasan Buatan (AI)',
        'Audit keamanan siber & tata kelola IT (ISO 27001)',
        'Kepatuhan regulasi Pelindungan Data Pribadi (UU PDP)'
      ],
      deliverables: 'HRIS Implementation Blueprint, IT Security Audit, Data Privacy Compliance Matrix',
      icon: 'memory'
    }
  };

  const navButtons = container.querySelectorAll('.pillar-tab-btn');
  const displayCard = container.querySelector('#pillar-display-card');

  if (!navButtons.length || !displayCard) return;

  function updateDisplay(id) {
    const data = pillarData[id];
    if (!data) return;

    displayCard.classList.add('opacity-0', 'translate-y-2');

    setTimeout(() => {
      const elNum = displayCard.querySelector('#display-pillar-num');
      const elTag = displayCard.querySelector('#display-pillar-tag');
      const elPrinciples = displayCard.querySelector('#display-pillar-principles');
      const elTitle = displayCard.querySelector('#display-pillar-title');
      const elSubtitle = displayCard.querySelector('#display-pillar-subtitle');
      const elDesc = displayCard.querySelector('#display-pillar-desc');
      const elBullets = displayCard.querySelector('#display-pillar-bullets');
      const elDeliverables = displayCard.querySelector('#display-pillar-deliverables');
      const elIcon = displayCard.querySelector('#display-pillar-icon');

      if (elNum) elNum.textContent = data.number;
      if (elTag) elTag.textContent = data.tag;
      if (elPrinciples) elPrinciples.textContent = data.principles;
      if (elTitle) elTitle.textContent = data.title;
      if (elSubtitle) elSubtitle.textContent = data.subtitle;
      if (elDesc) elDesc.textContent = data.description;
      if (elIcon) elIcon.textContent = data.icon;
      if (elDeliverables) elDeliverables.textContent = data.deliverables;

      if (elBullets) {
        elBullets.innerHTML = data.bullets.map(b => `
          <li class="flex items-start gap-3 text-white/80 text-sm leading-relaxed">
            <span class="material-symbols-outlined text-[#D8E94B] text-[18px] shrink-0 mt-0.5">check_circle</span>
            <span>${b}</span>
          </li>
        `).join('');
      }

      displayCard.classList.remove('opacity-0', 'translate-y-2');
    }, 150);
  }

  navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-pillar');
      
      navButtons.forEach(b => {
        b.classList.remove('bg-[#9E1B22]', 'text-white', 'shadow-lg', 'border-[#9E1B22]');
        b.classList.add('bg-white/5', 'text-white/70', 'border-white/10');
        const icon = b.querySelector('.pillar-icon');
        if (icon) icon.classList.remove('text-[#D8E94B]');
      });

      btn.classList.remove('bg-white/5', 'text-white/70', 'border-white/10');
      btn.classList.add('bg-[#9E1B22]', 'text-white', 'shadow-lg', 'border-[#9E1B22]');
      const activeIcon = btn.querySelector('.pillar-icon');
      if (activeIcon) activeIcon.classList.add('text-[#D8E94B]');

      updateDisplay(id);
    });
  });
}

// 6. Interactive Card Micro-interactions
function initCardInteractions() {
  const cards = document.querySelectorAll('.interactive-hover-card, .interactive-card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.classList.add('shadow-2xl');
    });
    card.addEventListener('mouseleave', () => {
      card.classList.remove('shadow-2xl');
    });
  });
}

// 7. CINEMATIC PARALLAX ENGINE (Butter-Smooth 60FPS)
function initParallaxScroll() {
  const parallaxBgs = document.querySelectorAll('.parallax-bg');
  const parallaxLayers = document.querySelectorAll('.parallax-layer');
  
  if (!parallaxBgs.length && !parallaxLayers.length) return;

  let isTicking = false;

  function updateParallax() {
    const scrollY = window.pageYOffset;

    parallaxBgs.forEach(bg => {
      const speed = parseFloat(bg.getAttribute('data-parallax-speed')) || 0.28;
      const parent = bg.closest('section') || bg.parentElement;
      const rect = parent.getBoundingClientRect();
      
      // Only process when visible on viewport
      if (rect.top < window.innerHeight && rect.bottom > -100) {
        const offset = (window.innerHeight - rect.top) * speed * 0.4;
        bg.style.transform = `translate3d(0, ${offset}px, 0) scale(1.08)`;
      }
    });

    parallaxLayers.forEach(layer => {
      const speed = parseFloat(layer.getAttribute('data-parallax-speed')) || 0.15;
      const parent = layer.closest('section') || layer.parentElement;
      const rect = parent.getBoundingClientRect();

      if (rect.top < window.innerHeight && rect.bottom > -100) {
        const offset = (window.innerHeight - rect.top) * -speed * 0.3;
        layer.style.transform = `translate3d(0, ${offset}px, 0)`;
      }
    });

    isTicking = false;
  }

  window.addEventListener('scroll', () => {
    if (!isTicking) {
      window.requestAnimationFrame(updateParallax);
      isTicking = true;
    }
  }, { passive: true });

  // Initial call
  updateParallax();
}

// 8. SCROLL REVEAL (IntersectionObserver based entrance animations)
function initScrollReveal() {
  const reveals = document.querySelectorAll('.scroll-reveal');
  if (!reveals.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = parseInt(entry.target.getAttribute('data-reveal-delay') || '0', 10);
        setTimeout(() => {
          entry.target.classList.add('revealed');
        }, delay);
        obs.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    rootMargin: '0px 0px -30px 0px',
    threshold: 0.05
  });

  reveals.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.95) {
      el.classList.add('revealed');
    } else {
      observer.observe(el);
    }
  });
}