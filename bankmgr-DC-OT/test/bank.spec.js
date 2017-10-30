const expect = require('chai').expect;
const Bank = require('../lib/bank');
const Account = require('../lib/account');

describe('Bank', () => {
  describe('constructor', () => {
    it('should create a bankmgr object', () => {
      const bank1 = new Bank('BOA');
      expect(bank1).to.be.instanceof(Bank);
      expect(bank1.name).to.equal('BOA');
      expect(bank1.accounts).to.have.length(0);
    });
  });
  describe('#addAccount', () => {
    it('should add a bank account to bank object', () => {
      const bank = new Bank('Chase');
      expect(bank.name).to.equal('Chase');
      expect(bank.accounts).to.be.length(0);

      const acc1 = new Account('Daniel');
      const acc2 = new Account('Olga');

      bank.addAccount(acc1);
      expect(bank.accounts).to.be.length(1);

      bank.addAccount(acc2);
      expect(bank.accounts).to.be.length(2);
    });
  });

  describe('#getValue', () => {
    it('should sum up all the account balances', () => {
      const bank = new Bank('Chase');
      const acc1 = new Account('Daniel');
      const acc2 = new Account('Olga');
      acc1.deposit(100);
      acc2.deposit(150);
      acc1.deposit(50);

      bank.addAccount(acc1);
      bank.addAccount(acc2);
      expect(bank.getValue()).to.equal(300);

      const acc3 = new Account('Chylds');
      acc3.deposit(100);
      bank.addAccount(acc3);
      expect(bank.getValue()).to.equal(400);
    });
  });
});
