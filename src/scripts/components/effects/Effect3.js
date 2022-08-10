import React from 'react'

export default function ({ color, classname }) {
  return (
    <div className={`effect-3 ${classname}`}>
      <div className="circle">
        <div style={{ borderColor: color }} />
        <div style={{ borderColor: color }} />
      </div>
      <div className="line">
        <div>
          <span style={{ backgroundColor: color }} />
        </div>
        <div>
          <span style={{ backgroundColor: color }} />
        </div>
        <div>
          <span style={{ backgroundColor: color }} />
        </div>
        <div>
          <span style={{ backgroundColor: color }} />
        </div>
      </div>
    </div>
  )
}
