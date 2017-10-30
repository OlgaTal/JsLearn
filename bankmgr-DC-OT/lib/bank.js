/* eslint-disable func-names */

function Bank(name) {
  this.name = name;
  this.accounts = [];
}

Bank.prototype.addAccount = function (account) {
  this.accounts.push(account);
};

Bank.prototype.getValue = function () {
  return this.accounts.reduce((accum, account) => accum + account.balance, 0);
};

module.exports = Bank;
