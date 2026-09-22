// Form Handling, Modal Notification & WhatsApp Routing for Contact & RFQ Page
document.addEventListener('DOMContentLoaded', () => {
  const rfqForm = document.getElementById('institutionalRfqForm');
  const successModal = document.getElementById('rfqSuccessModal');
  const closeModalBtn = document.getElementById('closeModalBtn');

  if (rfqForm) {
    rfqForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const fullName = document.getElementById('fullName')?.value || 'Bapak/Ibu';
      const companyName = document.getElementById('entityName')?.value || 'Perusahaan';

      if (successModal) {
        const clientNameDisplay = document.getElementById('modalClientName');
        if (clientNameDisplay) clientNameDisplay.textContent = fullName;
        const companyDisplay = document.getElementById('modalCompanyName');
        if (companyDisplay) companyDisplay.textContent = companyName;

        successModal.classList.remove('hidden', 'opacity-0', 'pointer-events-none');
        successModal.classList.add('flex', 'opacity-100', 'pointer-events-auto');
      }

      const inlineNotice = document.getElementById('successNotification');
      if (inlineNotice) {
        inlineNotice.classList.remove('hidden');
        inlineNotice.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }

      rfqForm.reset();
    });
  }

  if (closeModalBtn && successModal) {
    closeModalBtn.addEventListener('click', () => {
      successModal.classList.add('hidden', 'opacity-0', 'pointer-events-none');
      successModal.classList.remove('flex', 'opacity-100', 'pointer-events-auto');
    });

    successModal.addEventListener('click', (e) => {
      if (e.target === successModal) {
        successModal.classList.add('hidden', 'opacity-0', 'pointer-events-none');
        successModal.classList.remove('flex', 'opacity-100', 'pointer-events-auto');
      }
    });
  }

  document.querySelectorAll('a[data-whatsapp-route]').forEach(waBtn => {
    waBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const division = waBtn.getAttribute('data-whatsapp-route') || 'Umum';
      const phone = waBtn.getAttribute('data-phone') || '628111028351';
      const message = encodeURIComponent(`Halo Nara Institute, saya ingin berkonsultasi mengenai kebutuhan divisi ${division} untuk perusahaan kami.`);
      window.open(`https://api.whatsapp.com/send?phone=${phone}&text=${message}`, '_blank');
    });
  });
});
