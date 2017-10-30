package com.eli;

/**
 * Created by localadmin on 7/28/16.
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
        return "Symbol is " + symbol + " shares " + shares + " total " + price * shares;
    }

    public String getSymbol() {
        return symbol;
    }

    public void setSymbol(String symbol) {
        this.symbol = symbol;
    }

    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }

    public int getShares() {
        return shares;
    }

    public void setShares(int shares) {
        this.shares = shares;
    }
}
