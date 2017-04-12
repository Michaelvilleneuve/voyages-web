const config = {
  api: {
    url: process.env.NODE_ENV === 'production' ? 'http://localhost:8080/api' : 'http://localhost:8080/api/'
  }
};

export default config;
