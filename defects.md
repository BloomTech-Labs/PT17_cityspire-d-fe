# Repetition of same functions

To keep the code DRY I would have made the functions being used in the files below reusable

- UserDashboardContainer.js,
- PinnedCitiesContainer.js
- CitySearchResultContainer.js

```js
const deleteNotification = () => {
  notification.open({
    message: 'City Removed',
    description: `${cityAndState.city}, ${cityAndState.state} 
    has been has been removed from Pinned Cities.`,
  });
};

const handleRemoveCity = id => {
  unpinCity(localStorage.getItem('token'), id);
  deleteNotification();
  fetchSavedCity(localStorage.getItem('token'));
  window.location.reload();
};

const handleOnCityClick = cityAndState => {
  localStorage.setItem('cityAndState', JSON.stringify(cityAndState));
  setCityAndState(localStorage.getItem('cityAndState'));
  push(`/pinned/${cityAndState.state}/${cityAndState.city}`);
};
```

# Validation for the SearchBar component

Right now you have to enter specifically city, state initials ex. New York, NY (any rendition lowercase, capitalize or uppercase) in the search bar.

### No data would return

- If you entered the state spelled out (ex. Miami)
- If the user search for a city that does not exists
- If there is a typo

# Should only display on one city in RenderPinnedCity

When the user pins a city or clicks on the view city from the dashboard of pinned cities they are only supposed to see the pinned city that was pinned/clicked but right now it shows a list of all the cities pinned.

# User can pin the same city more than once

The user should only be able to pin a city to their pinned cities once.
