export function renderPhotos(params = {}) {
  return `
    <div class="photosContainer">
      <img src="${params.cover_photo.urls.small}" alt="${params.title}" id="${params.id}" class="image receivedPhoto">
    </div>
  `;
}
