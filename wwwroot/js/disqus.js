
(function () {
    window.disqus = {
        blog001: function (elementId) {

            var disqus_config = function () {
                this.page.url = "https://altandenter.github.io/blogpost001";
                this.page.identifier = blog001;
            };
            var elem = document.getElementById(elementId);

            let d = document, s = d.createElement('script');
            s.src = 'https://https-altandenter-github-io.disqus.com/embed.js';
            s.setAttribute('data-timestamp', +new Date());
            (d.head || d.body).appendChild(s);
        }
    };
})();


// // /* <div id="disqus_thread"></div>
//     <script>

//         var disqus_config = function () {
//             this.page.url = "https://altandenter.github.io/blogpost001";
//     this.page.identifier = blog001;
// };

// (function() {
//             let d = document, s = d.createElement('script');
// s.src = 'https://https-altandenter-github-io.disqus.com/embed.js';
// s.setAttribute('data-timestamp', +new Date());
// (d.head || d.body).appendChild(s);
// })();
// </script>
//     <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript> */}