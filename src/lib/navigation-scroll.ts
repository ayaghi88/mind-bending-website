export function scrollPageToTop(target: Pick<Window, 'scrollTo'>) {
  target.scrollTo({ top: 0, left: 0, behavior: 'instant' });
}