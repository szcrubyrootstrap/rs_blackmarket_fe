const image_path = (image_name) => {
  return new URL(`./${image_name}`, import.meta.url).href
}

const IMAGES = {
  union: image_path('Union.svg'),
  background: image_path('Black_Market_wallpaper.svg')
}

export default IMAGES
