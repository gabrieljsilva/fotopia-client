import { Album, User } from 'types'
import { shuffle } from 'utils'

export const Author: User = {
  id: 1,
  name: 'Gabriel Silva',
  email: 'gabrieldjs21@gmail.com',
  avatar:
    'https://images.pexels.com/photos/953457/pexels-photo-953457.jpeg?cs=srgb&dl=pexels-william-mattey-953457.jpg&fm=jpg'
}

export function generateAlbum(amount: number): Album[] {
  const albums: Album[] = []

  for (let x = 0; x < amount; x++) {
    albums.push({
      id: Math.floor(Math.random() * 10000),
      name: 'Portraits',
      images: shuffle([
        {
          id: 1,
          url: 'https://images.pexels.com/photos/3660892/pexels-photo-3660892.jpeg?cs=srgb&dl=pexels-dave-ang-3660892.jpg&fm=jpg'
        },
        {
          id: 2,
          url: 'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?cs=srgb&dl=pexels-jaime-reimer-2662116.jpg&fm=jpg'
        },
        {
          id: 3,
          url: 'https://images.pexels.com/photos/6331533/pexels-photo-6331533.jpeg?cs=srgb&dl=pexels-%C4%91%C3%A0ng-thi%E1%BB%87n-thanh-t%C3%A0i-6331533.jpg&fm=jpg'
        },
        {
          id: 4,
          url: 'https://images.pexels.com/photos/931881/pexels-photo-931881.jpeg?cs=srgb&dl=pexels-simon-berger-931881.jpg&fm=jpg'
        },
        {
          id: 5,
          url: 'https://images.pexels.com/photos/3689859/pexels-photo-3689859.jpeg?cs=srgb&dl=pexels-mouad-mabrouk-3689859.jpg&fm=jpg'
        },
        {
          id: 6,
          url: 'https://images.pexels.com/photos/3946868/pexels-photo-3946868.jpeg?cs=srgb&dl=pexels-%C3%B3mk%C3%A3r-%C3%B1a%C3%ADdu-3946868.jpg&fm=jpg'
        },
        {
          id: 7,
          url: 'https://images.pexels.com/photos/3379942/pexels-photo-3379942.jpeg?cs=srgb&dl=pexels-kyle-loftus-3379942.jpg&fm=jpg'
        },
        {
          id: 8,
          url: 'https://images.pexels.com/photos/3820766/pexels-photo-3820766.jpeg?cs=srgb&dl=pexels-kon-karampelas-3820766.jpg&fm=jpg'
        },
        {
          id: 9,
          url: 'https://images.pexels.com/photos/2953898/pexels-photo-2953898.jpeg?cs=srgb&dl=pexels-zachary-debottis-2953898.jpg&fm=jpg'
        },
        {
          id: 10,
          url: 'https://images.pexels.com/photos/2422970/pexels-photo-2422970.jpeg?cs=srgb&dl=pexels-jeremy-bishop-2422970.jpg&fm=jpg'
        },
        {
          id: 11,
          url: 'https://images.pexels.com/photos/3660892/pexels-photo-3660892.jpeg?cs=srgb&dl=pexels-dave-ang-3660892.jpg&fm=jpg'
        },
        {
          id: 12,
          url: 'https://images.pexels.com/photos/3946868/pexels-photo-3946868.jpeg?cs=srgb&dl=pexels-%C3%B3mk%C3%A3r-%C3%B1a%C3%ADdu-3946868.jpg&fm=jpg'
        },
        {
          id: 13,
          url: 'https://images.pexels.com/photos/3379942/pexels-photo-3379942.jpeg?cs=srgb&dl=pexels-kyle-loftus-3379942.jpg&fm=jpg'
        },
        {
          id: 14,
          url: 'https://images.pexels.com/photos/3820766/pexels-photo-3820766.jpeg?cs=srgb&dl=pexels-kon-karampelas-3820766.jpg&fm=jpg'
        },
        {
          id: 15,
          url: 'https://images.pexels.com/photos/2953898/pexels-photo-2953898.jpeg?cs=srgb&dl=pexels-zachary-debottis-2953898.jpg&fm=jpg'
        },
        {
          id: 16,
          url: 'https://images.pexels.com/photos/2422970/pexels-photo-2422970.jpeg?cs=srgb&dl=pexels-jeremy-bishop-2422970.jpg&fm=jpg'
        }
      ])
    })
  }
  return albums
}
