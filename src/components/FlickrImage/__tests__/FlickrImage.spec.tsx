import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FlickrImage from '../FlickrImage';
import { FavoritePhotosProvider } from '@/utils/FavoritePhotosProvider';
import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer(
  http.get('https://www.flickr.com/services/rest/', () => {
    const userId = '148376495@N04';
    const method = 'flickr.people.getInfo';

    if (userId === '148376495@N04' && method === 'flickr.people.getInfo') {
      return HttpResponse.json({
        person: {
          id: '148376495@N04',
          nsid: '148376495@N04',
          ispro: 1,
          is_deleted: 0,
          iconserver: '65535',
          iconfarm: 66,
          path_alias: null,
          has_stats: 0,
          pro_badge: 'standard',
          expire: '0',
          username: { _content: 'FireDevilPhoto' },
          realname: { _content: 'Chris Johnson' },
          location: { _content: '' },
          description: { _content: '' },
          photosurl: { _content: 'https://www.flickr.com/photos/148376495@N04/' },
          profileurl: { _content: 'https://www.flickr.com/people/148376495@N04/' },
          mobileurl: { _content: 'https://www.flickr.com/photos/148376495@N04/' },
          photos: {
            firstdatetaken: { _content: '2014-01-04 15:47:06' },
            firstdate: { _content: '1499772285' },
            count: { _content: 1008 },
          },
          has_adfree: 0,
          has_free_standard_shipping: 0,
          has_free_educational_resources: 0,
        },
        stat: 'ok',
      });
    }
  })
);

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

describe('<FlickImage />', () => {
  test('should render correct title for an image', () => {
    render(
      <FavoritePhotosProvider>
        <FlickrImage
          photoId="53912983340"
          secret="c20648af0b"
          server="65535"
          title="659 YN55 NFL"
          userId="194845532@N03"
        />
      </FavoritePhotosProvider>
    );

    expect(screen.getByRole('heading', { name: '659 YN55 NFL' })).toBeInTheDocument();
  });
  test('should render correct author for an image', async () => {
    render(
      <FavoritePhotosProvider>
        <FlickrImage
          photoId="53914570060"
          secret="2d192c8dc4"
          server="65535"
          title="Flashlight"
          userId="148376495@N04"
        />
      </FavoritePhotosProvider>
    );

    expect(await screen.findByText('Chris Johnson')).toBeInTheDocument();
  });
});
