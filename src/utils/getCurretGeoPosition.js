export function getPosition() {
  return new Promise(function (resolve, reject) {
    if (!navigator.geolocation)
      return reject("Geolocation is not supported by your browser");

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        resolve({ latitude, longitude });
      },
      () => reject(new Error("Please give us acces to your location"))
    );
  });
}
