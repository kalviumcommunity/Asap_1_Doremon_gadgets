import React from "react"
import "./Body.css"
import friend from "../friends.jpg"
import bg from "../newBg.png"

function Body() {
  
  // const bgUrl = "https://cdn.gencraft.com/prod/user/90847a47-bca9-49b3-94a4-e746aacd8220/b1eb617b-04a6-49e8-9734-9d7e160d6eac/image/image1_0.jpg?Expires=1709107126&Signature=ik7ymmKe8Xpsctaj8bg4AKyszSNG5NV3FXRwWnJDfooQUB2BKX71F5eIps4379dFwuJeqYX7HIcYvYw~51Wltrc6gxiHkYcQM6pY66~fs48YPgAtxftlo-ik4fA15jdhFm-C0Zu5WkoceJzqQWsaWurDeZIsdVoY59Tj1xN9h9d8jf53tLw-XMw5O~2wL6T4Lfsr7T2ezSedumlTtnRbA8V06Zc1HAnDTxP~PrQ~nt2Y1j0ASOLldomMHnEgYWNE4cetWOi3tcoEzVmd1m6okvr9c93vouzVkJ5U2c6U78LpwLOf613sfSDm~DsN9etEHKcqvl~094MShFskqFDX8g__&Key-Pair-Id=K3RDDB1TZ8BHT8"

  // const doremonGif = "./src/doremon.gif"
  // const friends = "./src/frnds.gif"
  
  return (
    <>
    <div>
      <img className="bgImg" src={bg} alt="" />
      <h1 className="head">DOREMON'S GADGETS!</h1>
      {/* <img className="dora" src={doremonGif} alt="" /> */}
      <img className="friends" src={friend} alt="" />
    </div>
    <div className="display">
    <div className="row1">
      <div id="divi"><img width={250}px src="./src/gadgets/air-cannon.png" alt="" />
      <h2>Air Cannon</h2></div>
      <div id="divi"><img width={250}px src="./src/gadgets/Anywhere-Door.png" alt="" />
      <h2>Anywhere Door</h2></div>
      <div id="divi"><img width={250}px src="./src/gadgets/Copy-Machine.png" alt="" />
      <h2>Copy Machine</h2></div>
    </div>
    <div className="row2">
      <div id="divi"><img width={250}px src="./src/gadgets/Hopter.png" alt="" />
      <h2>Hopter</h2></div>
      <div id="divi"><img width={250}px src="./src/gadgets/Invisible-Cape.png" alt="" />
      <h2>Invisible Cape</h2></div>
      <div id="divi"><img width={250}px src="./src/gadgets/Copy-Machine.png" alt="" />
      <h2>Copy Machine</h2></div>

    </div>
    </div>
    </>
  )
}

export default Body