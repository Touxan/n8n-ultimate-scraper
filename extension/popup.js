document.addEventListener('DOMContentLoaded', () => {
  const exportButton = document.getElementById('exportCookies');
  if (exportButton) {
    exportButton.addEventListener('click', () => {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.cookies.getAll({ url: tabs[0].url }, (cookies) => {
          let cookieList = cookies.map(cookie => ({
            cookie: {
              domain: cookie.domain,
              name: cookie.name,
              value: cookie.value,
              path: cookie.path || '/',
              secure: cookie.secure || false,
              httpOnly: cookie.httpOnly || false,
              sameSite: cookie.sameSite || 'Lax',
              expirationDate: cookie.expirationDate || null
            }
          }));
          
          let jsonCookies = JSON.stringify(cookieList, null, 2);

          // Copy cookies to clipboard in JSON format
          navigator.clipboard.writeText(jsonCookies).then(() => {
            alert('Cookies copied to clipboard in JSON format!');
          }).catch(err => {
            console.error('Error copying cookies: ', err);
          });
        });
      });
    });
  }
});

