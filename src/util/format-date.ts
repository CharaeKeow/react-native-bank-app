/**
 * Util to format JS date into nice format.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat | Reference: MDN - Intl.DateTimeFormat}
 */
export const formatDate = (date: Date) => {
  const formattedDate = new Intl.DateTimeFormat('en-MY', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  });

  return formattedDate.format(date);
};
