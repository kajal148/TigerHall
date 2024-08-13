export const resizeImage = (uri, height, width) => {
    const baseUrl = 'https://images.staging.tigerhall.io/';
    const path = uri.split('https://images.staging.tigerhall.io/')[1];

    console.log(path);
    const imageSrc = baseUrl + `resize/${height}x${width}/` + path;
    
    return imageSrc;
}   