export const toggleOverflow = () => {
    document.body.classList.toggle('overflow-y-hidden')
  }

export const isOnMobile = () => window.innerWidth <= 500;