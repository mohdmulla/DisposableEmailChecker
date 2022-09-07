const DisposableEmails = require('./disposableEmails.json');

const isDisposable = (email) => {
  domain=email.split('@')[1];
  const hasValue = JSON.stringify(DisposableEmails).includes(domain)
  return hasValue;
}

module.exports = isDisposable;