import moxios from 'moxios';
import {
  fetchSavedCity,
  pinCity,
  unpinCity,
} from '../state/actions/cityOperations';
import { makeMockStore } from '../utils/makeMockStore';

const store = makeMockStore({ city: {} });

describe('fetchSavedCity', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  it('should create an action to fetch saved cities', () => {
    const cityData = {
      id: 2,
      city: 'Olathe',
      state: 'Kansas',
      rental_price: 1200,
      crime: 'low',
      pollution: 'low',
      walkability: 20,
      livability: 95,
      profile_id: '00ulthapbErVUwVJy4x6',
    };

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 200, response: { cityData } });
    });

    store.dispatch(fetchSavedCity()).then(() => {
      const actionsCalled = store.getActions();
      expect(actionsCalled[0]).toEqual(fetchSavedCity());
    });
  });
});

describe('pinCity', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  it('should create an action to save cities', () => {
    const cityData = {
      id: 2,
      city: 'Olathe',
      state: 'Kansas',
      rental_price: 1200,
      crime: 'low',
      pollution: 'low',
      walkability: 20,
      livability: 95,
      profile_id: '00ulthapbErVUwVJy4x6',
    };

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 200, response: { cityData } });
    });

    store.dispatch(pinCity()).then(() => {
      const actionsCalled = store.getActions();
      expect(actionsCalled[0]).toEqual(pinCity());
    });
  });
});

describe('unsaveCity', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  it('should create an action to fetch saved cities', () => {
    const cityData = {
      id: 2,
      city: 'Olathe',
      state: 'Kansas',
      rental_price: 1200,
      crime: 'low',
      pollution: 'low',
      walkability: 20,
      livability: 95,
      profile_id: '00ulthapbErVUwVJy4x6',
    };

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 200, response: {} });
    });

    store.dispatch(unpinCity(cityData.id)).then(() => {
      const actionsCalled = store.getActions();
      expect(actionsCalled[0]).toEqual(unpinCity(cityData.id));
    });
  });
});
