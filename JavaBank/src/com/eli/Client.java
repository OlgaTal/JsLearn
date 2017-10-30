package com.eli;

import java.util.ArrayList;
import java.util.Optional;
import java.util.UUID;

/**
 * Created by localadmin on 7/28/16.
 */
public class Client {
    private String id;
    private String name;
    private ArrayList<Account> accounts;
    private boolean isActive;

    public Client(String myName) {
        id = UUID.randomUUID().toString();
        name = myName;
        accounts = new ArrayList<>();
        isActive = true;
    }

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public ArrayList<Account> getAccounts() {
        return accounts;
    }

    public boolean isActive() {
        return isActive;
    }

    @Override
    public String toString() {
        return "Client{" +
                "id='" + id + '\'' +
                ", name='" + name + '\'' +
                ", accounts=" + accounts +
                ", isActive=" + isActive +
                '}';
    }

    public void openAccount(AccountType myType) {
        accounts.add(new Account(myType));
    }

    public float closeAccount(String accountID) throws Exception {
        float result = 0f;
        Optional<Account> myAccount = accounts.stream()
                    .filter(account -> account.getId().equals(accountID))
                    .findFirst();

        if (myAccount.isPresent()) {
            result = myAccount.get().close();
        }

        return result;
    }
}
