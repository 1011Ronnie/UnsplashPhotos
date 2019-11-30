import { ParamsComponent } from "./components/params.component";
import { PhotosComponent } from "./components/photos.component";
import { UnsplashApi } from "./services/unsplashApi";
import { PopUpComponent } from "./components/popUp.component";
import "./style.css";

const params = new ParamsComponent("query-params");
const unsplashApi = new UnsplashApi(
  "https://api.unsplash.com/search/collections/"
);
const photos = new PhotosComponent("photos-list");

params.$el.addEventListener("click", getPhotosList);
async function getPhotosList(event) {
  event.preventDefault();
  if (event.target.classList.contains("submit")) {
    params.init();
    if (params.query) {
      const photosList = await unsplashApi.fetchPhotos(params.query);
      photos.addPhotos(photosList);
      photos.showPhotos();
    }
    params.clear();
  }
}

photos.$el.addEventListener("click", showMoreInfo);
function showMoreInfo(event) {
  event.preventDefault();
  if (event.target.classList.contains("receivedPhoto")) {
    const popUp = new PopUpComponent(photos.photos);
    popUp.openPopUp(event.target.id);
    popUp.modal.addEventListener("click", popUp.closePopUp);
  }
}
