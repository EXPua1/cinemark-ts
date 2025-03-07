import { getReleaseDates, getContentRatings } from '../utils/api';

const ageRatingsMap = {
  G: '0+',
  PG: '6+',
  'PG-13': '12+',
  R: '16+',
  'NC-17': '18+',
  NR: '18+',
};

const getMovieAgeCertification = async id => {
  try {
    const releaseData = await getReleaseDates(id);
    if (!releaseData?.results) return '';

    const uaRating = releaseData.results.find(item => item.iso_3166_1 === 'UA')
      ?.release_dates[0]?.certification;
    if (uaRating) return uaRating;

    const usRating = releaseData.results.find(item => item.iso_3166_1 === 'US')
      ?.release_dates[0]?.certification;
    return usRating || '';
  } catch (error) {
    console.error('Error fetching movie age certification:', error);
    return '';
  }
};

const getTvAgeCertification = async id => {
  try {
    const contentData = await getContentRatings(id);
    if (!contentData?.results) return '';

    const uaRating = contentData.results.find(
      item => item.iso_3166_1 === 'UA'
    )?.rating;
    if (uaRating) return uaRating;

    const usRating = contentData.results.find(
      item => item.iso_3166_1 === 'US'
    )?.rating;
    return usRating || '';
  } catch (error) {
    console.error('Error fetching TV age certification:', error);
    return '';
  }
};

export const fetchAgeCertification = async (type, id, setAgeCertification) => {
  try {
    let rating = '';

    if (type === 'movie') {
      rating = await getMovieAgeCertification(id);
    } else if (type === 'tv') {
      rating = await getTvAgeCertification(id);
    }

    setAgeCertification(ageRatingsMap[rating] || 'No age certification');
  } catch (error) {
    console.error('Error fetching age certification:', error);
    setAgeCertification('No age certification');
  }
};
