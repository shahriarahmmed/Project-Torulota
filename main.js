// Toggle Menu
const menuToggle = document.querySelector('.menuToggle');
        const navigation = document.querySelector('.navigation');
        menuToggle.onclick = function () {
            menuToggle.classList.toggle('active');
            navigation.classList.toggle('active');
        }

        window.addEventListener('scroll', function () {
            const header = document.querySelector('header');
            header.classList.toggle('sticky', window.scrollY, 0);
        })


        function toggleMenu() {
            menuToggle.classList.remove('active');
            navigation.classList.remove('active');
        }