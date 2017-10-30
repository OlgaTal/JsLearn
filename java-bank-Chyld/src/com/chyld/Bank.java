package com.chyld;

import java.util.ArrayList;
import java.util.Optional;
import java.util.UUID;

/**
 * Created by chyld on 7/28/16.
 */
public class Bank {
    private String id;
    private String name;
    private ArrayList<Client> clients;

    public Bank(String name) {
        id = UUID.randomUUID().toString();
        this.name = name;
        clients = new ArrayList<>();
    }

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public ArrayList<Client> getClients() {
        return clients;
    }

    public void addClient(String name){
        Client c = new Client(name);
        clients.add(c);
    }

    public void removeClient(String id){
        Optional<Client> client = clients.stream().filter(c -> c.getId().equals(id)).findFirst();
        client.ifPresent(c -> {
            c.deactivate();
            c.getAccounts().forEach(account -> c.closeAccount(account.getId()));
        });
    }
}
