// Перемикання головних лабораторних робіт (Верхнє меню)
document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        // 1. Ховаємо всі бічні панелі меню
        document.querySelectorAll('.side-nav').forEach(nav => nav.classList.remove('active'));
        
        // 2. Ховаємо всі вкладені підменю
        document.querySelectorAll('.submenu').forEach(sub => sub.style.display = 'none');
        
        // 3. Отримуємо ID цільового меню
        const targetId = btn.getAttribute('href').replace('#', '');
        const targetMenu = document.getElementById(targetId + '-menu');
        
        if (targetMenu) {
            // Показуємо потрібне бічне меню
            targetMenu.classList.add('active');
            
            // Якщо у цього меню є вкладене підменю — показуємо його
            const submenu = targetMenu.querySelector('.submenu');
            if (submenu) {
                submenu.style.display = 'block';
            }
            
            // Автоматично імітуємо клік по першому пункту бічного меню
            const firstLink = targetMenu.querySelector('a');
            if (firstLink) {
                firstLink.click();
            }
        }
    });
});

// Логіка для утримання підменю відкритими при кліках всередині них
document.querySelectorAll('.side-nav a').forEach(link => {
    link.addEventListener('click', () => {
        const parentSubmenu = link.closest('.submenu');
        const siblingSubmenu = link.nextElementSibling;
        
        if (siblingSubmenu && siblingSubmenu.classList.contains('submenu')) {
            siblingSubmenu.style.display = 'block';
        } else if (parentSubmenu) {
            parentSubmenu.style.display = 'block';
        }
    });
});