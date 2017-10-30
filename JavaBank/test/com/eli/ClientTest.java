package com.eli;

import org.junit.Test;

import static org.junit.Assert.*;

/**
 * Created by localadmin on 7/28/16.
 */
public class ClientTest {
    @Test
    public void testConstructorWithName() throws Exception {
        Client c = new Client("Joe Irons");

        assertNotNull(c);
        assertNotNull(c.getId());
        assertEquals("Joe Irons", c.getName());
        assertEquals(0, c.getAccounts().size());
        assertTrue(c.isActive());

    }

    @Test
    public void testOpenAccountWithType() throws Exception {
        Client c = new Client("Joe Irons");
        c.openAccount(AccountType.CHECKING);

        assertEquals(1, c.getAccounts().size());
        assertEquals(AccountType.CHECKING, c.getAccounts().get(0).getType());
        assertFalse(c.getAccounts().get(0).isClosed());


    }

    @Test
    public void testCloseAccountWithID() throws Exception {
        Client c = new Client("Joe Irons");
        c.openAccount(AccountType.CHECKING);

        Account a = c.getAccounts().get(0);
        a.deposit(50f);


        float amountWithdrawn = 0f;

        try {
            amountWithdrawn = c.closeAccount(a.getId());
        } catch (Exception e) {}

        assertEquals(50, amountWithdrawn, 0.000001);
        assertEquals(0, a.getBalance(), 0.00001);
        assertTrue(a.isClosed());
        assertEquals(2, a.getTransactions().size());
        assertEquals(TransactionType.WITHDRAW, a.getTransactions().get(1).getType());
    }
}