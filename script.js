// Cursor Personalizado
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    setTimeout(() => {
        cursorFollower.style.left = e.clientX + 'px';
        cursorFollower.style.top = e.clientY + 'px';
    }, 100);
});

// Links que ativam o efeito do cursor
const hoverElements = document.querySelectorAll('a, button, .portfolio-item, .nav-link, .filter-btn, .course-card, .info-item');

hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.classList.add('active');
        cursorFollower.classList.add('active');
    });
    
    el.addEventListener('mouseleave', () => {
        cursor.classList.remove('active');
        cursorFollower.classList.remove('active');
    });
});

// Menu Mobile
const menuToggle = document.querySelector('.menu-toggle');
const navLinksMobile = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navLinksMobile.classList.toggle('active');
});

// Fechar menu ao clicar em um link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navLinksMobile.classList.remove('active');
    });
});

// Mudar navbar no scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const backToTop = document.querySelector('.back-to-top');
    
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
        backToTop.classList.add('active');
    } else {
        navbar.classList.remove('scrolled');
        backToTop.classList.remove('active');
    }
});

// Filtro do Portfólio
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remover active de todos os botões
        filterBtns.forEach(btn => btn.classList.remove('active'));
        // Adicionar active ao botão clicado
        btn.classList.add('active');
        
        const filter = btn.getAttribute('data-filter');
        
        portfolioItems.forEach(item => {
            if (filter === 'all' || item.getAttribute('data-category') === filter) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Recomendação de Livros
const bookRecommendations = [
    "Clean Code: A Handbook of Agile Software Craftsmanship - Robert C. Martin",
    "O Programador Pragmático: De Aprendiz a Mestre - Andrew Hunt e David Thomas",
    "Código Limpo: Habilidades Práticas do Agile Software - Robert C. Martin",
    "Design Patterns: Elements of Reusable Object-Oriented Software - Erich Gamma",
    "JavaScript: O Guia Definitivo - David Flanagan",
    "Estruturas de dados e algoritmos com JavaScript - Loiane Groner",
    "O Homem do Castelo Alto - Philip K. Dick",
    "Fundação - Isaac Asimov",
    "Neuromancer - William Gibson",
    "O Problema dos Três Corpos - Liu Cixin"
];

document.getElementById('recommend-btn').addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * bookRecommendations.length);
    const recommendation = bookRecommendations[randomIndex];
    document.getElementById('book-recommendation').textContent = recommendation;
});

// Formulário de Contato
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Simulação de envio
    const formMessage = document.getElementById('form-message');
    formMessage.textContent = `Obrigada, ${name}! Sua mensagem foi enviada com sucesso. Entrarei em contato em breve pelo email ${email}.`;
    formMessage.style.display = 'block';
    
    // Limpar o formulário
    this.reset();
    
    // Esconder a mensagem após 5 segundos
    setTimeout(() => {
        formMessage.style.display = 'none';
    }, 5000);
});

// Scroll suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Ativar link ativo na navegação
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Animação ao rolar a página
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.timeline-item, .course-card, .portfolio-item, .info-item');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Inicializar elementos com opacidade 0 para animação
window.addEventListener('load', () => {
    document.querySelectorAll('.timeline-item, .course-card, .portfolio-item, .info-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(50px)';
        el.style.transition = 'all 0.5s ease';
    });
    
    animateOnScroll();
});

window.addEventListener('scroll', animateOnScroll);