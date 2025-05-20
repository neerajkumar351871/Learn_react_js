import React from 'react';

function App() {
  const numbers = ['C', 1, 2, 3, '+', 4, 5, 6, '-',  7, 8,9, '/',0];

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="border rounded shadow p-4" style={{ maxWidth: '400px', width: '100%' }}>
      <div className="mb-3">
           <input type="text" className="form-control text-end fs-4" placeholder="0"/>
        </div>
        <div className="row g-2">
          {numbers.map((num, index) =>
            num !== '' ? (
              <div key={index} className="col-3">
                <button type="button" className="btn btn-info w-100 py-3">
                  {num}
                </button>
              </div>
            ) : (
              <div key={index} className="col-3"></div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
