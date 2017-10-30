const expect = require('chai').expect;
const Account = require('../lib/account');

describe('Account', () => {
  describe('constructor', () => {
    it('should create an account object', () => {
      const acct1 = new Account('Daniel');
      expect(acct1).to.be.instanceof(Account);
      expect(acct1.name).to.equal('Daniel');
      expect(acct1.balance).to.equal(0);
      expect(acct1.number).to.be.length(36);
      expect(acct1.deposits).to.have.length(0);
      expect(acct1.withdraws).to.have.length(0);
    });
  });
  describe('#deposit', () => {
    it('should add deposit to account object', () => {
      const acct1 = new Account('Daniel');
      const bal = acct1.deposit(100.0);
      expect(bal).to.equal(100);
      expect(acct1.balance).to.equal(100);
      expect(acct1.deposits).to.be.length(1);
    });
  });
  describe('#withdraw', () => {
    it('should withdraw from account', () => {
      const acct1 = new Account('Olga');
      acct1.deposit(100.0);
      expect(acct1.withdraw(50.0)).to.equal(50);
      expect(acct1.balance).to.equal(50);
      expect(acct1.withdraws).to.be.length(1);
    });
    it('should NOT withdraw from account', () => {
      const acct1 = new Account('Olga');
      acct1.deposit(100.0);
      expect(acct1.withdraw(150.0)).to.equal(100);
      expect(acct1.balance).to.equal(100);
      expect(acct1.withdraws).to.be.length(0);
    });
  });
});
