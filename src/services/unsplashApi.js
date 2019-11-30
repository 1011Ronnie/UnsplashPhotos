export class UnsplashApi {
  constructor(baseUrl) {
    this.url = baseUrl;
    this._clientId =
      "d09434a689dae3b464f3b327fd06c600715d9c27f526e61c68aa521db0527e6a";
  }

  async fetchPhotos(query) {
    try {
      let response = await fetch(
        `${this.url}?client_id=${this._clientId}&query=${query}`
      );
      return await response.json();
    } catch (error) {
      console.log(error);
    }
  }
}
