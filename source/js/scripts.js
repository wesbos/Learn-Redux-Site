module.exports = function() {

$(function() {

  // update the sub count
  $.getJSON('https://bostype.com/sendy/subscriberscount?i=1&l=1',function(data) { $('.sub-count').text(data.count) });

  $('form.signup').on('submit',function(e){
    e.preventDefault();
    var email = $(this).find('input[name="email"]').val();

    // Add them to the list
    $.ajax('https://bostype.com/sendy/subscribe', {
      type : 'POST',
      data : {
        email : email,
        list : 'Ct7zsQu3UIBOKuXcvE583Q',
        boolean : true,
        redux : 'true'
      },
      success : function(res) {

      }
    });

    // send out the email
    // $.getJSON('https://wesbos.com/mc/send-redux.php?callback=?&email=' + encodeURIComponent(email), function(res){
    $.getJSON('https://reactforbeginners.com/api/course/'+encodeURIComponent(email)+'/RDX', function(res){
      console.log(res);
    });

    // side it up
    $('form.signup').slideUp();

    // tell the what is next
    $('.success-sign-up').show();

    // mark as a conversion in google analytics
    ga('send', 'event', 'download','redux');
    // mark as conversion in FB
    window._fbq = window._fbq || [];
    window._fbq.push(['track', 'Signup', {}]);

  });

  // When the page loads, check if they are authed
  if(localStorage.hash) {
    $('.signup input, .signup label').hide();
    $('.signup').addClass('done');
    $('form.signup').html('<p class="center">You are authenticated! Watch the videos below. Enjoy!</p>');
  }

});


// twitter
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');

// facebook
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&appId=107600482664934&version=v2.3";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

// Google Analytics
ga('create', 'UA-65558692-2', 'auto');
ga('send', 'pageview');

// Facebook Ads

(function() {
  var _fbq = window._fbq || (window._fbq = []);
  if (!_fbq.loaded) {
    var fbds = document.createElement('script');
    fbds.async = true;
    fbds.src = '//connect.facebook.net/en_US/fbds.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(fbds, s);
    _fbq.loaded = true;
  }
  _fbq.push(['addPixelId', '1038184196213607']);
  window._fbq.push(['track', 'PixelInitialized', {}]);
  window._fbq.push(['track', 'View', {}]);
})();

} // end module.exports
