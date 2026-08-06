// Replace COMMIT_SHA with the latest short commit hash from GitHub
(function () {
  // Change these two lines to match your repository
  const USER = 'jbm-ballistics';
  const REPO = 'jbm-ballistics';

  fetch(`https://api.github.com/repos/${USER}/${REPO}/commits/main`)
    .then(r => r.json())
    .then(data => {
      if (!data.sha) return;
      const short = data.sha.substring(0, 7);
      document.body.innerHTML = document.body.innerHTML.replace(/COMMIT_SHA/g, short);
    })
    .catch(() => {
      // Fail silently if the request fails
    });
})();
