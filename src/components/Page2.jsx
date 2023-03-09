import React, { useEffect } from 'react'

function Page2(status) {
  useEffect(() => {
  {
    !status.props == 2
      ? (document.getElementById("Page2").style.display = "none")
      : (document.getElementById("Page2").style.display = "unset");
  }
}, [status]);

  return (
    <div id='Page2'>Page2</div>
  )
}

export default Page2