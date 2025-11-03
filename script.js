// Bouton de téléchargement PDF
document.getElementById('downloadBtn').addEventListener('click', () => {
  const { jsPDF } = window.jspdf;
  const cv = document.getElementById('cv');
  const pdf = new jsPDF('p', 'pt', 'a4');

  pdf.html(cv, {
    callback: function (doc) {
      doc.save('Jean_Dupont_CV.pdf');
    },
    margin: [20, 20, 20, 20],
    html2canvas: { scale: 0.6 }
  });
});

// Mode sombre / clair
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const icon = themeToggle.querySelector('i');
  if (document.body.classList.contains('dark-mode')) {
    icon.classList.replace('fa-moon', 'fa-sun');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i> Mode Clair';
  } else {
    icon.classList.replace('fa-sun', 'fa-moon');
    themeToggle.innerHTML = '<i class="fas fa-moon"></i> Mode Sombre';
  }
});

// Sections repliables
document.querySelectorAll('.collapsible h3').forEach(header => {
  header.addEventListener('click', () => {
    const section = header.parentElement;
    section.classList.toggle('active');
  });
});
