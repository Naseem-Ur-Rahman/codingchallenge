// store.js
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { PeopleAPi } from "../features/categories/people/peopleSlice";
import { FilmsAPi } from "../features/categories/films/filmsSlice";
import { PlanetsAPi } from "../features/categories/planets/planetsSlice";

export const store = configureStore({
  reducer: {
    [PeopleAPi.reducerPath]: PeopleAPi.reducer,
    [FilmsAPi.reducerPath]: FilmsAPi.reducer,
    [PlanetsAPi.reducerPath]: PlanetsAPi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      PeopleAPi.middleware,
      FilmsAPi.middleware,
      PlanetsAPi.middleware
    ),
});
setupListeners(store.dispatch);
