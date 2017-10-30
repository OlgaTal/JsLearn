package com.eli;

import java.util.ArrayList;
import java.util.UUID;

/**
 * Created by localadmin on 7/28/16.
 */
public class Account {
    private String id;
    private AccountType type;
    private float balance;
    private boolean isClosed;
    private ArrayList<Transaction> transactions;
    private byte overDraftCount;

    private final static float FEE = 50f;

    public Account(AccountType myType) {
        id = UUID.randomUUID().toString();
        type = myType;
        balance = 0f;
        isClosed = false;
        transactions = new ArrayList<>();
        overDraftCount = 0;

    }

    @Override
    public String toString() {
        return "Account{" +
                "id='" + id + '\'' +
                ", type=" + type +
                ", balance=" + balance +
                ", isClosed=" + (isClosed?"Yes":"No") +
                ", transactions=" + transactions +
                '}';
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

    public void deposit(float v) {
        transactions.add(new Transaction(v, TransactionType.DEPOSIT));
        balance += v;
    }

    public float withdraw(float v) throws Exception {
        if (isClosed) return 0f;

        if (balance < v) {
            balance -= FEE;
            overDraftCount ++;
            transactions.add(new Transaction(FEE, TransactionType.FEE));
            if (overDraftCount > 2) {
                isClosed = true;
            }
            throw new Exception("Not enough money");
        }

        transactions.add(new Transaction(v, TransactionType.WITHDRAW));
        balance -= v;
        return v;
    }

    private void voidIt() throws Exception {
        transactions.add(new Transaction(-balance, TransactionType.VOID));
        balance = 0f;
    }

    public Float[] filterTransactions(TransactionType myType) {
        return transactions.stream()
                .filter(transaction -> transaction.getType() == myType)
                .map(transaction -> transaction.getAmount())
                .toArray(Float[]::new);
    }

    public float close() throws Exception {
        float delta = 0.00001f;

        float withdraw = 0f;
        if (balance > delta) {
            withdraw = withdraw(balance);
        } else if (balance <= delta && balance >= -delta) {
            voidIt();
        }
        this.isClosed = true;

        return withdraw;

    }
}
