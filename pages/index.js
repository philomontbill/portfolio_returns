import { useState } from 'react';
import { fetchIndexHistory } from '../fetchIndexData';


export default function Home() {
  const [startDate, setStartDate] = useState('2023-01-01');
  const [endDate, setEndDate] = useState(new Date().toISOString().split('T')[0]);
  const [selectedIndexes, setSelectedIndexes] = useState([]);

  const indexOptions = [
    'S&P 500',
    'Nasdaq Composite',
    'Dow Jones Industrial Average',
    'Russell 2000',
    'Bloomberg US Aggregate Bond Index',
    'S&P 500 Bond Index',
  ];

  const handleIndexChange = (e) => {
    const selected = Array.from(e.target.selectedOptions, (opt) => opt.value);
    setSelectedIndexes(selected);
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '700px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
        Market Index Return Evaluator
      </h1>

      <div style={{ display: 'grid', gap: '1rem' }}>
        <div>
          <label>Start Date:</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            style={{ width: '100%', padding: '0.5rem', marginTop: '0.25rem' }}
          />
        </div>

        <div>
          <label>End Date:</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            style={{ width: '100%', padding: '0.5rem', marginTop: '0.25rem' }}
          />
        </div>

        <div>
          <label>Indexes (hold Cmd/Ctrl to select multiple):</label>
          <select
            multiple
            value={selectedIndexes}
            onChange={handleIndexChange}
            style={{ width: '100%', height: '150px', padding: '0.5rem', marginTop: '0.25rem' }}
          >
            {indexOptions.map((index) => (
              <option key={index} value={index}>
                {index}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div style={{ marginTop: '2rem', fontStyle: 'italic' }}>
        Returns and chart will be displayed here.
      </div><button
  onClick={handleFetchData}
  style={{ marginTop: '1rem', padding: '0.5rem 1rem' }}
>
  Load Data
</button>
<div style={{ marginTop: '2rem', fontStyle: 'italic' }}>
  Returns and chart will be displayed here.

  <button
    onClick={handleFetchData}
    style={{ marginTop: '1rem', padding: '0.5rem 1rem' }}
  >
    Load Data
  </button>
</div>
</div>
);
}


