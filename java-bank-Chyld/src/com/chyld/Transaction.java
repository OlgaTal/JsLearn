package com.chyld;

import java.util.Date;
import java.util.Random;
import java.util.UUID;

/**
 * Created by chyld on 7/28/16.
 */
public class Transaction {
    private String id;
    private Date date;
    private float amount;
    private TransactionType type;

    public Transaction(float amount, TransactionType type) {
        id = UUID.randomUUID().toString();
        this.date = new Date();
        this.amount = amount;
        this.type = type;
    }

    public String getId() {
        return id;
    }

    public Date getDate() {
        return date;
    }

    public float getAmount() {
        return amount;
    }

    public TransactionType getType() {
        return type;
    }

    @Override
    public String toString() {
        return "Transaction: " + id + " type: " + type + " amount: " + amount;
    }
}
