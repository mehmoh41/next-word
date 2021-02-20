import WPAPI from 'wpapi';

let endpoint = 'https://dev-nextjswordpress.pantheonsite.io/wp-json';
// if (typeof window !== 'undefined') {
//   endpoint = `https://cors-anywhere.herokuapp.com/${endpoint}`;
// }

const api = new WPAPI({ endpoint });
export default api