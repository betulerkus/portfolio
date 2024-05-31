let slideIndex = 0;
        const slides = document.querySelectorAll('.slide');

        function showSlide(index) {
            if (index < 0) {
                slideIndex = slides.length - 1;
            } else if (index >= slides.length) {
                slideIndex = 0;
            } else {
                slideIndex = index;
            }
            const slideWidth = slides[0].clientWidth;
            document.querySelector('.slides').style.transform = `translateX(${-slideIndex * slideWidth}px)`;
        }

        function nextSlide() {
            showSlide(slideIndex + 1);
        }

        function prevSlide() {
            showSlide(slideIndex - 1);
        }