export function renderPopUp(params = {}) {
  const { bigPhoto, description, likes } = params;
  const myDescription = description == null ? 'no description' : description
  
  return `
    <div id="myModal" class="modal">
      <span class="close">&times;</span>
      <img src="${bigPhoto}" class="modal-content">
      <div id="caption">${myDescription}, Likes:${likes}</div>
    </div>
  `;
}


