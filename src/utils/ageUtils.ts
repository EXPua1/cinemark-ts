import { getReleaseDates, getContentRatings } from './api';

const ageRatingsMap = {
  G: '0+',
  PG: '6+',
  'PG-13': '12+',
  PG13: '14+',
  R: '16+',
  'NC-17': '18+',
  NR: '18+',
  U: '0+',
  'PG-12': '12+',
  '12A': '12+',
  R18: '18+',
  M: '16+',
  'MA15+': '15+',
  'R18+': '18+',
  ATP: '0+',
  'TV-Y': '0+',
  'TV-Y7': '7+',
  'TV-G': '0+',
  'TV-PG': '6+',
  'TV-14': '14+',
  'TV-MA': '18+',
};

const formatAgeRating = rating => {
  if (!rating) return '';
  if (/^\d+\+$/.test(rating)) return rating;
  if (/^\+\d+$/.test(rating)) return rating.slice(1) + '+';
  if (/^\d+$/.test(rating)) return rating + '+';
  return ageRatingsMap[rating] || '';
};

// Список країн для пошуку сертифікатів за популярністю
const countriesPriority = [
  'UA',
  'US',
  'DE',
  'GB',
  'FR',
  'IT',
  'CA',
  'AU',
  'ES',
];

// Пошук сертифікатів для фільмів
const getMovieAgeCertification = async id => {
  try {
    const releaseData = await getReleaseDates(id);
    // console.log(releaseData);

    if (!releaseData?.results) return '';

    // Перевірка по кожній країні в порядку пріоритету
    for (const country of countriesPriority) {
      const certification = releaseData.results
        .find(item => item.iso_3166_1 === country)
        ?.release_dates.find(date => date.certification)?.certification;

      if (certification) return certification;
    }

    // Якщо сертифікат не знайдено, то використовуємо поточний пошук по всіх даних
    for (const item of releaseData.results) {
      // console.log({ item });

      const certification = item.release_dates.find(
        date => date.certification
      )?.certification;
      // console.log(certification?.certification);

      if (certification) return certification;
    }
  } catch (error) {
    console.error('Error fetching movie age certification:', error);
    return '';
  }
};

// Пошук сертифікатів для серіалів
const getTvAgeCertification = async id => {
  try {
    const contentData = await getContentRatings(id);
    // console.log({ contentData });

    if (!contentData?.results) return '';

    for (const country of countriesPriority) {
      const rating = contentData.results.find(
        item => item.iso_3166_1 === country
      )?.rating;
      if (rating) return rating;
    }

    const rating = contentData.results.find(item => item.rating).rating;
    if (rating) return rating;
  } catch (error) {
    console.error('Error fetching TV age certification:', error);
    return '';
  }
};

export const fetchAgeCertification = async (type, id, setAge) => {
  try {
    let rating = '';

    if (type === 'movie') {
      rating = await getMovieAgeCertification(id);
      // console.log(rating);
    } else if (type === 'tv') {
      rating = await getTvAgeCertification(id);
      // console.log(rating);
    }

    setAge(formatAgeRating(rating) || 'No age info');
  } catch (error) {
    console.error('Error fetching age certification:', error);
    setAge('No age info');
  }
};
