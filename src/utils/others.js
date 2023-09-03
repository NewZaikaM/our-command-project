export function dateFormat(date) {
  return new Intl.DateTimeFormat('ru-RU', {
    month: 'long',
    year: 'numeric',
    day: "numeric"
  }).format(date);
}