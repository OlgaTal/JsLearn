package com.chyld;

/**
 * Created by chyld on 7/28/16.
 */
public class Stock {
    private String symbol;
    private float price;
    private int shares;

    public Stock(String symbol, float price, int shares) {
        this.symbol = symbol;
        this.price = price;
        this.shares = shares;
    }

    @Override
    public String toString() {
        return this.symbol + " shares " + this.shares + " total " + (this.shares * this.price);
    }

    public String getSymbol() {
        return symbol;
    }

    public float getPrice() {
        return price;
    }

    public int getShares() {
        return shares;
    }

    public void setSymbol(String symbol) {
        this.symbol = symbol;
    }

    public void setPrice(float price) {
        this.price = price;
    }

    public void setShares(int shares) {
        this.shares = shares;
    }
}
