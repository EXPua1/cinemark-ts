export const formatDate = dateStr => {
  if (!dateStr) return 'Unknown';
  return dateStr.split('-').reverse().join('.');
};
