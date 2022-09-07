const DisposableEmails = require('./disposableEmails.json');

const isDisposable = (email) => {
  domain=email.split('@')[1];
  console.log(domain,DisposableEmails);
  const hasValue = JSON.stringify(DisposableEmails).includes(domain)
  return hasValue;
}

module.exports = isDisposable;