import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dialog from './components/Dialog';
import Artists from './pages/Artisits/Artists';
import Landing from './pages/Landing/Landing';
import SelectedArtists from './pages/SelectedArtist/SelectedArtists';
import { store } from './redux/store';
import { ARTISTS_ROUTE, LANDING_ROUTE, SELECTED_ARTIST_ROUTE } from './routes';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path={LANDING_ROUTE} element={<Landing />} />
          <Route path={ARTISTS_ROUTE} element={<Artists />} />
          <Route path={SELECTED_ARTIST_ROUTE} element={<SelectedArtists />} />
        </Routes>
      </BrowserRouter>
      <Dialog />
    </Provider>
  );
}

export default App;
