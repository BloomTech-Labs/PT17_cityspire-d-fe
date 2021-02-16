import moxios from 'moxios';
import { fetchCityData } from '../state/actions/cityData';
import { makeMockStore } from '../utils/makeMockStore';

const store = makeMockStore({ city: {} });

describe('fetchData', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  it('should create an action to fetch city data', () => {
    const cityData = {
      city: {
        city: 'string',
        state: 'string',
      },
      latitude: 0,
      longitude: 0,
      rental_price: 0,
      crime: 'string',
      pollution: 'string',
      walkability: 0,
      livability: 0,
    };

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 200, response: { cityData } });
    });

    store.dispatch(fetchCityData()).then(() => {
      const actionsCalled = store.getActions();
      expect(actionsCalled[0]).toEqual(fetchCityData());
    });
  });
});
