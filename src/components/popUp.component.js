import { compareById, paramsForPopUp } from "../services/helpFunctions";
import { renderPopUp } from "../templates/popUp.template";

export class PopUpComponent {
  constructor(obj) {
    this.data = obj;
  }

  openPopUp(id) {
    const params = paramsForPopUp(compareById(id, this.data.results));
    const container = document.getElementById("photos-list");
    const html = renderPopUp(params);
    container.insertAdjacentHTML("beforeend", html);
    this.modal = document.getElementById("myModal");
    this.modal.style.display = "block";
  }

  closePopUp(event) {
    if (event.target.classList.contains("close")) {
      this.style.display = "none";
      this.removeEventListener("click", this.closePopUp);
      this.remove();
    }
  }
}
