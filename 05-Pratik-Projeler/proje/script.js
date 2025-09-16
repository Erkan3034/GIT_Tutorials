// Sayfa yüklendiğinde çalışacak fonksiyon
document.addEventListener('DOMContentLoaded', function() {
    console.log('Git Tutorial Web Sitesi yüklendi!');

    // Smooth scrolling için navigation linklerine event listener ekle
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Basit bir karşılama mesajı
    showWelcomeMessage();

    // Sayfa scroll olayını dinle
    window.addEventListener('scroll', handleScroll);
});

// Karşılama mesajı fonksiyonu
function showWelcomeMessage() {
    setTimeout(() => {
        const welcomeSection = document.querySelector('#home p');
        if (welcomeSection) {
            welcomeSection.style.animation = 'fadeIn 2s ease-in-out';
        }
    }, 500);
}

// Scroll olayını handle eden fonksiyon
function handleScroll() {
    const header = document.querySelector('header');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 100) {
        header.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
    } else {
        header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    }
}

// Dinamik içerik ekleme fonksiyonu
function addDynamicContent() {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
        const currentDate = new Date().toLocaleDateString('tr-TR');
        const dynamicText = document.createElement('p');
        dynamicText.textContent = `Bu sayfa ${currentDate} tarihinde görüntülendi.`;
        dynamicText.style.fontStyle = 'italic';
        dynamicText.style.color = '#666';
        aboutSection.appendChild(dynamicText);
    }
}

// Sayfa yüklendikten 2 saniye sonra dinamik içerik ekle
setTimeout(addDynamicContent, 2000);

// CSS animasyonu için style ekleme
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(style);