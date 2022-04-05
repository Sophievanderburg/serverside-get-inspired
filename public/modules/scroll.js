export const scrollButton = document.querySelector('header button')
export const main = document.querySelector('main')

export function scrollFunction () {
    if (document.documentElement.scrollTop < 500) {
        scrollButton.scrollIntoView();
        scrollButton.classList.add('draai')
      } else {
        document.documentElement.scrollTop = 0;
        scrollButton.classList.remove('draai')
      }
}

scrollButton.addEventListener('click', scrollFunction);
