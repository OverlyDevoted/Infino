import { getFlickrPhotoDataURL } from '../getFlickrPhotoDataURL';

describe('getFlickrPhotoDataURL', () => {
  it('should return a correctly formatted URL for photo data retrieval from Flickr', () => {
    const url = getFlickrPhotoDataURL({ page: 1, text: 'garden' });
    expect(url).toBe(
      'https://www.flickr.com/services/rest/?api_key=3018234adaa28f4f4bc702a311869836&format=json&nojsoncallback=1&method=flickr.photos.search&per_page=12&text=garden&page=1'
    );
  });

  it("should throw error when supplied with invalid parameters 'page'", () => {
    expect(() => getFlickrPhotoDataURL({ page: 0, text: 'garden' })).toThrow(Error);
  });

  it("should throw error when supplied with invalid parameters 'text'", () => {
    expect(() => getFlickrPhotoDataURL({ page: 1, text: '' })).toThrow(Error);
  });

  it("should throw error when supplied with invalid parameters 'text' and 'page'", () => {
    expect(() => getFlickrPhotoDataURL({ page: 0, text: '' })).toThrow(Error);
  });
});
