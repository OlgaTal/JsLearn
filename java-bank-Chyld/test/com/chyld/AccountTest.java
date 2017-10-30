package com.chyld;

import org.hamcrest.CoreMatchers;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.*;

/**
 * Created by chyld on 7/28/16.
 */
public class AccountTest {
    @Before
    public void setUp() throws Exception {

    }

    @After
    public void tearDown() throws Exception {

    }

    @Test
    public void testConstructorWithType() throws Exception {
        Account a = new Account(AccountType.CHECKING);
        assertNotNull(a.getId());
        assertEquals(AccountType.CHECKING, a.getType());
        assertEquals(0f, a.getBalance(), 0.1);
        assertFalse(a.isClosed());
        assertEquals(0, a.getTransactions().size());
    }

    @Test
    public void testToString() throws Exception {
        Account a = new Account(AccountType.CHECKING);
        assertThat(a.toString(), CoreMatchers.containsString("type: CHECKING balance: 0.0"));
    }

    @Test
    public void testDepositMoneyIntoAccount() throws Exception {
        Account a = new Account(AccountType.CHECKING);
        a.deposit(50f);
        assertEquals(50f, a.getBalance(), 0.1);
        assertEquals(1, a.getTransactions().size());
    }

    @Test
    public void testWithdrawEnoughMoney() throws Exception {
        Account a = new Account(AccountType.CHECKING);
        a.deposit(50f);
        a.withdraw(35f);
        assertEquals(15f, a.getBalance(), 0.1);
        assertEquals(2, a.getTransactions().size());
    }

    @Test
    public void testWithdrawNotEnoughMoney() throws Exception {
        Account a = new Account(AccountType.CHECKING);
        a.deposit(75f);
        a.withdraw(100f);
        assertEquals(25f, a.getBalance(), 0.1);
        assertEquals(2, a.getTransactions().size());
        assertEquals(TransactionType.FEE, a.getTransactions().get(1).getType());
    }

    @Test
    public void testClosedAccountTooManyOverdraft() throws Exception {
        Account a = new Account(AccountType.CHECKING);
        a.deposit(1f);
        a.withdraw(100f);
        a.withdraw(100f);
        a.withdraw(100f);
        assertEquals(-149f, a.getBalance(), 0.1);
        assertEquals(4, a.getTransactions().size());
        assertTrue(a.isClosed());
    }

    @Test
    public void testFilterTransactions() throws Exception {
        Account a = new Account(AccountType.CHECKING);
        a.deposit(10f);
        a.deposit(25f);
        a.deposit(35f);
        a.withdraw(20f);
        Float[] floats = {10f, 25f, 35f};
        assertArrayEquals(floats, a.filterTransactions(TransactionType.DEPOSIT));
    }
}
