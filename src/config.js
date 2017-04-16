const config = {
  api: {
    url: process.env.NODE_ENV === 'production' ? 'http://localhost:8080/api' : 'http://localhost:8080/api/',
    assets(file) {
      return process.env.NODE_ENV === 'production' ? `http://localhost:8080${file}` : `http://localhost:8080${file}`;
    }
  }
};

export default config;
