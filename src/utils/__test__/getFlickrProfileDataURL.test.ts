import { getFlickrProfileDataURL } from '../getFlickrProfileDataURL';

describe('getFlickrProfileDataURL', () => {
  it('should format correct URL given user ID', () => {
    const url = getFlickrProfileDataURL({ user_id: '148376495@N04' });
    expect(url).toBe(
      'https://www.flickr.com/services/rest/?user_id=148376495%40N04&api_key=3018234adaa28f4f4bc702a311869836&format=json&method=flickr.people.getInfo&nojsoncallback=1'
    );
  });
});
