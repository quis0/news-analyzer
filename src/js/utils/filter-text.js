export function fliterText(text) {
  const regexp = /<.+>/g
  return text.replace(regexp, '');
}
