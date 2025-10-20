import React, { useState } from 'react';
import fetchRapidApi from '../utils/rapidApi';

export default function RapidApiDemo() {
  const [url, setUrl] = useState('');
  const [key, setKey] = useState(import.meta.env.VITE_RAPIDAPI_KEY || '');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const callApi = async () => {
    setError(null);
    setData(null);
    setLoading(true);
    try {
      const res = await fetchRapidApi(url, key);
      setData(res);
    } catch (err) {
      setError(err.message || String(err));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: 12, border: '1px solid #ddd', marginTop: 16 }}>
      <h3>RapidAPI Test</h3>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        <input
          placeholder='Full Request URL (https://...)'
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          style={{ flex: 1, minWidth: 320 }}
        />
        <input
          placeholder='X-RapidAPI-Key'
          value={key}
          onChange={(e) => setKey(e.target.value)}
          style={{ width: 400 }}
        />
        <button onClick={callApi} disabled={loading || !url || !key}>
          {loading ? 'Loading...' : 'Call'}
        </button>
      </div>

      {error && (
        <div style={{ marginTop: 12, color: 'crimson' }}>
          Error: {error}
        </div>
      )}

      {data && (
        <pre style={{ marginTop: 12, maxHeight: 400, overflow: 'auto', background: '#f7f7f7', padding: 8 }}>
          {JSON.stringify(data, null, 2)}
        </pre>
      )}
    </div>
  );
}
