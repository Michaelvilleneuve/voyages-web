const isConnected = () => {
  return typeof window === 'undefined' ? false : sessionStorage.getItem('token');
};

export default isConnected;
