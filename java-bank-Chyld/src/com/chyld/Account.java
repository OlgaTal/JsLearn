package com.chyld;

import java.util.ArrayList;
import java.util.UUID;

/**
 * Created by chyld on 7/28/16.
 */
public class Account {
    private String id;
    private AccountType type;
    private float balance;
    private boolean isClosed;
    private byte overdraftCount;
    private ArrayList<Transaction> transactions;

    public Account(AccountType type) {
        id = UUID.randomUUID().toString();
        this.type = type;
        balance = 0f;
        isClosed = false;
        overdraftCount = 0;
        transactions = new ArrayList<>();
    }

    public String getId() {
        return id;
    }

    public AccountType getType() {
        return type;
    }

    public float getBalance() {
        return balance;
    }

    public boolean isClosed() {
        return isClosed;
    }

    public ArrayList<Transaction> getTransactions() {
        return transactions;
    }

    @Override
    public String toString() {
        return "Account: " + id + " type: " + type + " balance: " + balance + " closed? " + isClosed;
    }

    public void deposit(float amount){
        if(isClosed) return;

        Transaction t = new Transaction(amount, TransactionType.DEPOSIT);
        this.balance += amount;
        transactions.add(t);
    }

    public void withdraw(float amount){
        if(isClosed) return;

        Transaction t;
        if(balance < amount){
            t = new Transaction(amount, TransactionType.FEE);
            this.balance -= 50f;
            this.overdraftCount += 1;
        } else {
            t = new Transaction(amount, TransactionType.WITHDRAW);
            this.balance -= amount;
        }

        if(overdraftCount > 2){
            this.isClosed = true;
        }

        transactions.add(t);
    }

    public Float[] filterTransactions(TransactionType type){
        return transactions.stream().filter(t -> t.getType() == type).map(t -> t.getAmount()).toArray(Float[]::new);
    }

    public void close(){
        this.balance = 0f;
        this.isClosed = true;
    }
}
