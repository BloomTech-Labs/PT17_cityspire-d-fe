import moxios from 'moxios';
import {
  fetchSavedCity,
  saveCity,
  unsaveCity,
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

describe('saveCity', () => {
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

    store.dispatch(saveCity()).then(() => {
      const actionsCalled = store.getActions();
      expect(actionsCalled[0]).toEqual(saveCity());
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

    store.dispatch(unsaveCity(cityData.id)).then(() => {
      const actionsCalled = store.getActions();
      expect(actionsCalled[0]).toEqual(unsaveCity(cityData.id));
    });
  });
});
