 document.addEventListener("DOMContentLoaded", function () {
            let currentSlide = 0;
            const slides = document.querySelectorAll('.slide');

            function changeSlide(direction) {
                slides[currentSlide].classList.remove('active');
                currentSlide = (currentSlide + direction + slides.length) % slides.length;
                slides[currentSlide].classList.add('active');
            }

            setInterval(() => changeSlide(1), 5000);

            window.changeSlide = changeSlide;
        });





         function scrollMenu(direction) {
            const container = document.getElementById('vegMenu');
            const scrollAmount = 300;
            container.scrollBy({
                left: direction * scrollAmount,
                behavior: 'smooth'
            });
        }

        function toggleDropdown(clickedElement) {
            // Close any open dropdowns first
            document.querySelectorAll(".dropdown").forEach(drop => {
                if (drop !== clickedElement.nextElementSibling) {
                    drop.classList.remove("show");
                }
            });

            // Toggle the dropdown connected to this item
            const dropdown = clickedElement.nextElementSibling;
            dropdown.classList.toggle("show");
        }

        // Optional: Close dropdown when clicking outside
        document.addEventListener('click', function (e) {
            if (!e.target.closest('.menu-item')) {
                document.querySelectorAll('.dropdown').forEach(drop => drop.classList.remove('show'));
            }
        });
        function toggleMenu() {
            const menu = document.querySelector(".menu");
            menu.classList.toggle("show");
        }