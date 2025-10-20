import axios from 'axios';

/**
 * Fetch a RapidAPI endpoint with the given full URL and key.
 * If key is omitted it will throw. The X-RapidAPI-Host header is derived from the URL's host.
 *
 * @param {string} url Full request URL (including protocol)
 * @param {string} key RapidAPI key
 * @returns {Promise<any>} response data
 */
export default async function fetchRapidApi(url, key) {
  if (!url) throw new Error('Missing URL');
  if (!key) throw new Error('Missing RapidAPI key');

  const host = (() => {
    try { return new URL(url).host; } catch { return null; }
  })();

  const headers = {
    'X-RapidAPI-Key': key,
  };

  if (host) headers['X-RapidAPI-Host'] = host;

  const res = await axios.get(url, { headers });
  return res.data;
}
