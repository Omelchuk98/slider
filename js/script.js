const prev = document.getElementById('btn-prev'); // отримали доступ до кнопки
const next = document.getElementById('btn-next'); // отримали доступ до кнопки
const slides = document.querySelectorAll('.slide'); // отримали доступ до слайдів (будуть як масив)
const dots = document.querySelectorAll('.dot'); // отримали доступ до кнопок знизу
/* Нам потрібна змінна, по якій будемо відслідковувати, який слайд активний */
let index = 0;

const activeSlide = (n) => {
  for (let slide of slides) {
    slide.classList.remove('active'); //забрали клас ектів у всіх слайдів
  }
  slides[n].classList.add('active'); // добавили ектів для того номера, який задано в параметрі
};

const activeDots = (n) => {
  for (let dot of dots) {
    dot.classList.remove('active'); //забрали клас ектів у всіх dot
  }
  dots[n].classList.add('active'); // добавили ектів для того номера, який задано в параметрі
};

//функція для переключання вперед, де стоїть умова, якщо ми дійшли до останнього слайда, то індекс стає 0, тобто починаємо прокручувати спочатку, але якщо це не останній слайд, то ми просто плюсуємо 1 до індекса і проганяємо далі, при кожному запиті ми виконуємо функцію екстівслайд, тобто власне переключаються картинки
const prepareCurrentSlide = (ind) => {
  activeSlide(index);
  activeDots(index);
};
const nextSlide = () => {
  if (index == slides.length - 1) {
    index = 0;
    prepareCurrentSlide(index);
  } else {
    index++;
    prepareCurrentSlide(index);
  }
};
//аналогічна до попередньої
const prevSlide = () => {
  if (index == 0) {
    index = slides.length - 1;
    prepareCurrentSlide(index);
  } else {
    index--;
    prepareCurrentSlide(index);
  }
};

dots.forEach((item, indexDot) => {
  item.addEventListener('click', () => {
    index = indexDot;
    prepareCurrentSlide(index);
  });
});

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

//setInterval(nextSlide, 2500); //переключення слайдів із затримкою
