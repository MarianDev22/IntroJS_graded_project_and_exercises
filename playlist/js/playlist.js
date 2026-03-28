/**
 * @typedef {Object} Song
 * @property {string} title - The title of the song.
 * @property {string} artist - The artist of the song.
 * @property {string} genre - The genre of the song.
 * @property {number} duration - The duration of the song in seconds.
 * @property {boolean} favorite - Whether the song is marked as a favorite.
 */
// Example: { title: 'Song Title', artist: 'Song Artist', genre: 'Song Genre', duration: 180, favorite: false }

/**
 * @typedef {Object} Playlist
 * @property {string} name - The name of the playlist.
 * @property {Song[]} songs - The list of songs in the playlist.
 */
// Example: { name: 'Playlist Name', songs: [{ title: 'Song Title', artist: 'Song Artist', genre: 'Song Genre', duration: 180, favorite: false }] }

const musicCatalog = () => {
  /**
   * Array of playlists in the catalog.
   * @type {Playlist[]}
   */
  let playlists = [];

  /**
   * Adds a new playlist to the catalog.
   * @param {string} playlistName - The name of the new playlist.
   */
  const createPlaylist = (playlistName) => {
    const playlist = { name: playlistName, songs: [] };
    playlists = [...playlists, playlist];
    return playlist;
  };

  /**
   * Gets all playlists in the catalog.
   * @returns {Playlist[]} The list of all playlists.
   */
  const getAllPlaylists = () => playlists;

  /**
   * Removes a playlist from the catalog.
   * @param {string} playlistName - The name of the playlist to remove.
   */
  const removePlaylist = (playlistName) => {
    playlists = playlists.filter((playlist) => playlistName !== playlist.name);
  };

  /**
   * Adds a song to a specific playlist.
   * @param {string} playlistName - The name of the playlist to add the song to.
   * @param {{ title: string, artist: string, genre: string, duration: number }} song - The song to add to the playlist.
   * @throws {Error} If the playlist is not found.
   */
  const addSongToPlaylist = (playlistName, song) => {
    const playlist = playlists.find(
      (playlist) => playlistName === playlist.name,
    );
    if (!playlist) {
      throw new Error(`The playlist ${playlistName} doesn't exist`);
    }
    playlists = playlists.map((playlist) => {
        if (playlistName !== playlist.name) {
          return playlist;
        } else {
          song.favorite = false;
          return { ...playlist, songs: [...playlist.songs, song] };
        }
      });
    };

  /**
   * Removes a song from a specific playlist.
   * @param {string} playlistName - The name of the playlist to remove the song from.
   * @param {string} title - The title of the song to remove.
   * @throws {Error} If the playlist or song is not found.
   */
  const removeSongFromPlaylist = (playlistName, title) => {
    const playlist = playlists.find(
      (playlist) => playlistName === playlist.name,
    );
    if (!playlist) {
      throw new Error(`The playlist ${playlistName} doesn't exist`);
    }
    if (!playlist.songs.find((song) => song.title === title)) {
      throw new Error(`The song ${title} is not in ${playlistName}`);
    }
    playlist.songs = playlist.songs.filter((song) => title !== song.title);
  };

  /**
   * Marks a song as a favorite or removes the favorite status.
   * @param {string} playlistName - The name of the playlist containing the song.
   * @param {string} title - The title of the song to mark as a favorite.
   * @returns {void}
   */
  const favoriteSong = (playlistName, title) => {
    const playlist = playlists.find(
      (playlist) => playlistName === playlist.name,
    );
    const song = playlist.songs.find((song) => song.title == title);
    song.favorite = !song.favorite;
  };

  /**
   * Sorts songs in a specific playlist by a given criterion (title, artist, or duration).
   * @param {string} playlistName - The name of the playlist to sort songs in.
   * @param {'title' | 'artist' | 'duration'} criterion - The criterion to sort by.
   * @returns {void}
   * @throws {Error} If the playlist is not found or the criterion is invalid.
   */
  const sortSongs = (playlistName, criterion) => {
    const playlist = playlists.find(
      (playlist) => playlistName === playlist.name,
    );
    if (!playlist) {
      throw new Error(`The playlist ${playlistName} doesn't exist`);
    }
    if (!["title", "artist", "duration"].includes(criterion)) {
      throw new Error(`It's not possible to sort songs by ${criterion}`);
    }
    if (criterion === "title" || criterion === "artist") {
      playlist.songs.sort((a, b) => a[criterion].localeCompare(b[criterion]));
    } else {
      playlist.songs.sort((a, b) => a[criterion] - b[criterion]);
    }
  };

  return {
    createPlaylist,
    addSongToPlaylist,
    removeSongFromPlaylist,
    sortSongs,
    getAllPlaylists,
    removePlaylist,
    favoriteSong,
  };
};

export default musicCatalog;

const catalog1 = musicCatalog();

catalog1.createPlaylist("Rock");
catalog1.createPlaylist("Funk");
console.log(catalog1.getAllPlaylists());

catalog1.addSongToPlaylist("Funk", {
  title: "Gravity",
  artist: "John Meyer",
  genre: "jazz",
  duration: 4,
});

console.log(catalog1.getAllPlaylists());

catalog1.addSongToPlaylist("Funk",{ title: 'Hey Jude', artist: 'The Beatles', genre: 'rock', duration: 5 });

console.log(catalog1.getAllPlaylists())
// catalog1.removeSongFromPlaylist('Funk','Fly away');

// catalog1.removePlaylist('Rock');
// catalog1.favoriteSong('Funk','Hey Jude');
// console.log(catalog1.getAllPlaylists());
// catalog1.favoriteSong('Funk','Hey Jude');
// console.log(catalog1.getAllPlaylists());
// catalog1.addSongToPlaylist('Funk',{ title: "Don't Phunk with My Heart", artist: 'Black Eyed Peas', genre: 'hip hop', duration: 6 })

// catalog1.sortSongs('Funk', 'duration');
// console.log(catalog1.getAllPlaylists());
