export const toggleOverflow = () => {
    document.body.classList.toggle('overflow-hidden');
    document.documentElement.classList.toggle('overflow-hidden');
}

export const isOnMobile = () => window.outerWidth <= 1024;

export const capitalize = (string : string) => {
  return string[0].toLocaleUpperCase() + string.slice(1);
}
