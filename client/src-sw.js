// TODO: Create a service worker that caches static assets:
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        this.navigator.serviceWorker.register('./src-sw.js').then(function(reistration) {
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, function (err) {
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}

this.addEventListener('fetch', function (event) {

});