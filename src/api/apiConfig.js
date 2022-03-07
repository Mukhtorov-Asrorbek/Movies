const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '92e332e0de183a73e44fb780828c0708',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;