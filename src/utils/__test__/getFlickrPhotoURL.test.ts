import { getFlickrPhotoURL } from '../getFlickrPhotoURL';

describe('getFlickrPhotoURL', () => {
  it('should return a correctly formatted URL for photo retrieval from Flickr', () => {
    const url = getFlickrPhotoURL({ id: '53898730421', secret: '7ea7cfc3fd', serverId: '65535' });
    expect(url).toBe('https://live.staticflickr.com/65535/53898730421_7ea7cfc3fd.jpg');
  });
});
