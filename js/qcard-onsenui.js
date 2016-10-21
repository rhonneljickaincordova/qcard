document.addEventListener('init', function(event) {
  var page = event.target;

  if (page.id === 'index') {
    page.querySelector('#login-btn').onclick = function() {
      document.querySelector('#myNavigator').pushPage('login.html', {data: {title: 'Login to Qcard'}});
    };

    page.querySelector('#signup-btn').onclick = function() {
      document.querySelector('#myNavigator').pushPage('signup.html', {data: {title: 'Sign Up to Qcard'}});
    };
  } else if (page.id === 'login') {
    page.querySelector('ons-toolbar .center').innerHTML = page.data.title;

    page.querySelector('#forgot-pw').onclick = function() {
      document.querySelector('#myNavigator').pushPage('forgotpassword.html', {data: {title: 'Forgot Password'}});
    };

    page.querySelector('#signin-btn').onclick = function() {
      window.location.href = 'dashboard.html';
    };
  }else if (page.id === 'signup') {
    page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
  }else if (page.id === 'forgotpw') {
    page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
  }
});