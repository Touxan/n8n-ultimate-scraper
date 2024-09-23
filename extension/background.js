chrome.action.onClicked.addListener((tab) => {
  chrome.cookies.getAll({ url: tab.url }, (cookies) => {
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
      console.log('Cookies copied to clipboard in JSON format.');
    }).catch(err => {
      console.error('Error copying cookies: ', err);
    });
  });
});

