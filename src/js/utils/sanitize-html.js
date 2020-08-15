export function sanitizeHTML(string) {
  const temp = document.createElement('div');
	temp.textContent = string;
	return temp.innerHTML;
}
