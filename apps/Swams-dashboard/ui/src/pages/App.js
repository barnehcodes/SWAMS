import '../css/index.css';
import '../css/styles.css';
import '../css/globals.css';


import '../fontawesome.js'; // Ensure this import is correct
import '@fortawesome/fontawesome-free-solid';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;