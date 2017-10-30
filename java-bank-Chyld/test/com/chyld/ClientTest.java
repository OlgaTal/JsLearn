package com.chyld;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.*;

/**
 * Created by chyld on 7/28/16.
 */
public class ClientTest {
    @Before
    public void setUp() throws Exception {

    }

    @After
    public void tearDown() throws Exception {

    }

    @Test
    public void testConstructorWithName() throws Exception {
        Client c = new Client("Sara");
        assertNotNull(c.getId());
        assertEquals("Sara", c.getName());
        assertTrue(c.isActive());
        assertEquals(0, c.getAccounts().size());
    }

    @Test
    public void testOpenAccount() throws Exception {
        Client c = new Client("Sara");
        c.openAccount(AccountType.CHECKING);
        assertEquals(1, c.getAccounts().size());
    }

    @Test
    public void testCloseAccount() throws Exception {
        Client c = new Client("Sara");
        c.openAccount(AccountType.CHECKING);
        c.openAccount(AccountType.SAVINGS);
        assertEquals(2, c.getAccounts().size());
        String id = c.getAccounts().get(0).getId();
        c.closeAccount(id);
        assertTrue(c.getAccounts().get(0).isClosed());
        assertFalse(c.getAccounts().get(1).isClosed());
        assertEquals(0f, c.getAccounts().get(0).getBalance(), 0.1);
    }
}
