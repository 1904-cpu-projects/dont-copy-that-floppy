import React from 'react';

const OauthLoginForm = () => {
  return (
    <form method="get" action="/google">
      <button type="submit">
        <img src="https://developers.google.com/identity/images/btn_google_signin_dark_normal_web.png" />
      </button>
    </form>
  );
};

export default OauthLoginForm;
