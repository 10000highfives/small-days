function checkLoginState() {
	FB.getLoginStatus(function(response) {
	statusChangeCallback(response);
	});
}
window.fbAsyncInit = function() {
	FB.init({
		appId      : '/* App Id here */',
		xfbml      : true,
		version    : 'v2.5'
	});

	FB.getLoginStatus(function(response) {
		statusChangeCallback(response)
	})

	FB.login(function (response) {
		if (response.status === 'connected') {
			// Logged into your app and Facebook.
			console.log('all good, logged in both');
		} else if (response.status === 'not_authorized') {
			document.getElementById('status').innerHTML = 'Please log ' +
				'into this app.';
		} else {
			// The person is not logged into Facebook, so we're not sure if
			// they are logged into this app or not.
			document.getElementById('status').innerHTML = 'Please log ' +
				'into Facebook.';
		}
	});
};
