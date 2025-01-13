function setCookie(name, value, expireInDays = 30)
{
  var expiry = new Date();
  expiry.setDate(expiry.getDate() + expireInDays);
  document.cookie = `${name}=${value}; expires=${expiry.toUTCString()}; path=/`;
}

function deleteCookie(name)
{
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

function getCookie(name)
{
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2)
  {
    return parts.pop().split(';').shift();
  }
}
