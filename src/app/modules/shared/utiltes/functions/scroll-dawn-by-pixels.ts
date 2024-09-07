/**
 *
 * @param pixels
 */
export function scrollDown(pixels = 50) {
  window.scrollBy({
    top: pixels,
    behavior: 'smooth',
  });
}
