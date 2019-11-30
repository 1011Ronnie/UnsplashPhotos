export class ParamsComponent {
  constructor(id) {
    this.$el = document.getElementById(id);
    this.query = "";
  }

  init() {
    const submitQuery = document.getElementById("input").value;
    this.query = submitQuery;
  }
  clear() {
    document.getElementById("input").value = "";
  }
}
