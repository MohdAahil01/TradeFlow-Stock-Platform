import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The TradeFlow Universe</h1>
        <p className="mt-3">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/smallcaseLogo.png" alt="" className="mb-3" />
          <br />
          <p className="text-small text-muted">Thematic investing platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/streakLogo.png" alt="" style={{ height: "55px" }} className="mb-3" />
          <br />
          <p className="text-small text-muted">Algo & strategy platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/sensibullLogo.svg" alt="" style={{ height: "40px" }} className="mb-3" />
          <br />
          <p className="text-small text-muted">
            Options trading platform
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/zerodhaFundhouse.png" alt="" style={{ height: "55px" }} className="mb-3" />
          <br />
          <p className="text-small text-muted">Asset management</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/goldenpiLogo.png" alt="" style={{ height: "55px" }} className="mb-3" />
          <br />
          <p className="text-small text-muted">Bonds trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/dittoLogo.png" alt="" style={{ height: "55px" }} className="mb-3" />
          <br />
          <p className="text-small text-muted">
            Insurance
          </p>
        </div>
        <button className='p-2 btn btn-primary fs-5 mb-5' style={{ width: "20%", margin: "0 auto" }}>Sign up Now</button>
      </div>
    </div>
  );
}

export default Universe;
