import React, { useState } from 'react'

function Control() {
    const [init, setInit] = useState(false)

  return (
    <div>
        <div>
            <button > Start </button>
        </div>
        <div>
            <button> Next  </button>
        </div>
        <div>
            <button> Before </button>
        </div>
        <div>
            <button> Submit </button>
        </div>
    </div>
  )
}

export default Control