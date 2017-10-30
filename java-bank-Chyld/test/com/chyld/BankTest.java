package com.chyld;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.*;

/**
 * Created by chyld on 7/28/16.
 */
public class BankTest {
    @Before
    public void setUp() throws Exception {

    }

    @After
    public void tearDown() throws Exception {

    }

    @Test
    public void testConstructorWithName() throws Exception {
        Bank b = new Bank("BoA");
        assertNotNull(b.getId());
        assertEquals("BoA", b.getName());
        assertEquals(0, b.getClients().size());
    }

    @Test
    public void testAddClient() throws Exception {
        Bank b = new Bank("BoA");
        b.addClient("Sara");
        assertEquals(1, b.getClients().size());
    }

    @Test
    public void testRemoveClient() throws Exception {
        Bank b = new Bank("BoA");
        b.addClient("Sara");
        b.getClients().get(0).openAccount(AccountType.SAVINGS);
        b.getClients().get(0).openAccount(AccountType.CHECKING);
        b.addClient("Bob");
        b.removeClient(b.getClients().get(0).getId());
        assertEquals(2, b.getClients().size());
        assertFalse(b.getClients().get(0).isActive());
        assertTrue(b.getClients().get(0).getAccounts().get(0).isClosed());
        assertTrue(b.getClients().get(0).getAccounts().get(1).isClosed());
    }
}
