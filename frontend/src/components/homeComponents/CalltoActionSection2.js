import React from "react";

const CalltoActionSection2 = () => {
  return (
    <div className="subscribe-section bg-with-black">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="subscribe-head">
            <h2>Congratulations your participation is successfully paid</h2>

          
              <p>Sign up free and get the latest tips.</p>
              <form className="form-section">
                <input placeholder="Your Email..." name="email" type="email" />
                <input value="Yes. I want!" name="subscribe" type="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalltoActionSection2;
