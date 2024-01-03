const image_path = (image_name) => {
  return new URL(`./${image_name}`, import.meta.url).href
}

const IMAGES = {
  union: image_path('Union.svg'),
  background: image_path('Black_Market_wallpaper.svg'),
  unionWhite: image_path('Union_white.svg'),
  shoppingCart: image_path('Shopping_cart.svg'),
  menuIcon: image_path('menu.svg'),
  dashboardSelectArrow: image_path('select_arrow.svg')
}

export default IMAGES
