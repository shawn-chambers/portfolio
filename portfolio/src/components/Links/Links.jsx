import React from 'react';

const Links = () => {
  return (
    <>
      {[...Array(10)].map((d, i) => {
        return (
          <div key={i + 1} className={`home__link--${i + 1}`}>
            {`Link ${i + 1}`}
          </div>
        )
      })}
    </>
  )
}

export default Links;