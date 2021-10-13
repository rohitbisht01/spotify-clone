import './App.css';
import Login from './Login'
import { getTokenFromUrl } from './spotify';
import {useEffect, useState} from 'react'
import Player from './Player'
import SpotifyWebApi from 'spotify-web-api-js'
import { useStateValue} from './StateProvider'


const spotify = new SpotifyWebApi();

function App() {

  const [{user , token },dispatch] = useStateValue();

  useEffect(() => {

     const hash = getTokenFromUrl();
     window.location.hash = "";
     const _token = hash.access_token;
     
     if(_token){

      dispatch({
        type: 'SET_TOKEN',
        token : _token,
      })
      

      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {

         dispatch({
           type: 'SET_USER',
           user : user
         });
       });

       spotify.getUserPlaylists().then((playlists) => {
         dispatch({
           type: 'SET_PLAYLISTS',
           playlists: playlists,
         });
       });


       spotify.getPlaylist('37i9dQZEVXcCB6FexUy4nl?gtm=1').then(response => {
         dispatch({
           type : 'SET_DISCOVER_WEEKLY',
           discover_weekly: response,
         });
       });

     }

  }, []);

  return (
    <div className="app">{
      token ? <Player spotify = {spotify} /> : <Login/>
    }
     
    </div>
  );
}

export default App;
