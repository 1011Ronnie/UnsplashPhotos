import { renderPhotos } from "../templates/photos.template";

export class PhotosComponent {
  constructor(id) {
    this.$el = document.getElementById(id);
  }

  addPhotos(paramsToShow = []) {
    this.photos = paramsToShow;
  }

  showPhotos() {
    this.$el.innerHTML = "";
    const html = this.photos.results.map(photo => renderPhotos(photo));
    this.$el.insertAdjacentHTML("afterbegin", html.join(" "));
  }
}
