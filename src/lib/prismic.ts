import Prismic from 'prismic-javascript';

export const apiEndPoint = 'https://ricoazeredonext.cdn.prismic.io/api/v2';

export const client = (req = null) => {
  const options = req ? { req } : null;
  
  return Prismic.client(apiEndPoint, options)
};