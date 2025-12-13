export const smoothScrollTo = (elementId, offset = 0) => {
  const element = document.getElementById(elementId.replace('#', ''))
  if (element) {
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
    const offsetPosition = elementPosition - offset
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}

export const handleSmoothScroll = (e, targetId, offset = 80) => {
  e.preventDefault()
  smoothScrollTo(targetId, offset)
}