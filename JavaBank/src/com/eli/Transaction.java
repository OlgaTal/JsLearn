package com.eli;

import java.util.Date;
import java.util.UUID;

/**
 * Created by localadmin on 7/28/16.
 */
public class Transaction {
    private String id;
    private Date date;
    private float amount;
    private TransactionType type;

    public Transaction(float v, TransactionType tranType) {
        id = UUID.randomUUID().toString();
        date = new Date();
        amount = v;
        type = tranType;
    }

    @Override
    public String toString() {
        return "Transaction{" +
                "id='" + id + '\'' +
                ", date=" + date +
                ", amount=" + amount +
                ", type=" + type +
                '}';
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
}

