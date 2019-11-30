export function compareById(id, arr) {
  const result = arr.filter(elem => elem.id == id);
  return result[0];
}

export function paramsForPopUp(myObj) {
  return {
    bigPhoto: myObj.cover_photo.urls.regular,
    description: myObj.cover_photo.alt_description,
    likes: myObj.cover_photo.likes
  };
}
