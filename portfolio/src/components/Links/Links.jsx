import React from 'react';

const Links = () => {
  return (
    <div>
      {[...Array(10)].map((d, i) => {
        return (
          <div key={i + 1} className={`center-container-link link${i + 1}`}>
            {`Link ${i + 1}`}
          </div>
        )
      })}
    </div>
  )
}

export default Links;