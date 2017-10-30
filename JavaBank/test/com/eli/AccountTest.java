package com.eli;

import org.hamcrest.CoreMatchers;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import java.util.ArrayList;

import static org.junit.Assert.*;

/**
 * Created by localadmin on 7/28/16.
 */
public class AccountTest {
    @Before
    public void setUp() throws Exception {
    }

    @After
    public void tearDown() throws Exception {

    }

    @Test
    public void testAccountConstructorWithType() throws Exception {
        Account a = new Account(AccountType.CHECKING);

        assertNotNull(a);
        assertNotNull(a.getId());
        assertEquals(AccountType.CHECKING, a.getType());
        assertEquals(0f, a.getBalance(), 0.00001);
        assertFalse(a.isClosed());
        assertEquals(0, a.getTransactions().size());

    }

    @Test
    public void testToString() throws Exception {
        Account a = new Account(AccountType.CHECKING);
        assertThat(a.toString(), CoreMatchers.containsString("type=CHECKING, balance=0.0, isClosed=No"));
    }

    @Test
    public void testDepositWithAmount() throws Exception {
        Account a = new Account(AccountType.CHECKING);
        a.deposit(50f);

        assertEquals(50f, a.getBalance(), 0.000001);
        assertEquals(1, a.getTransactions().size());
        assertEquals(50f, a.getTransactions().get(0).getAmount(), 0.0000001);
        assertEquals(TransactionType.DEPOSIT, a.getTransactions().get(0).getType());

        a.deposit(100f);

        assertEquals(150f, a.getBalance(), 0.000001);
        assertEquals(2, a.getTransactions().size());
    }


    @Test
    public void testWithdrawPositive() throws Exception {
        Account a = new Account(AccountType.CHECKING);
        a.deposit(100f);

        assertEquals(50f, a.withdraw(50f), 0.000001);
        assertEquals(50f, a.getBalance(), 0.000001);
        assertEquals(2, a.getTransactions().size());
        assertEquals(50f, a.getTransactions().get(1).getAmount(), 0.0000001);
        assertEquals(TransactionType.WITHDRAW, a.getTransactions().get(1).getType());
    }

    @Test(expected=Exception.class)
    public void testWithdrawNotEnoughMoney() throws Exception {
        Account a = new Account(AccountType.CHECKING);
        float amt = a.withdraw(50f);

        assertEquals(0f, amt, 0.000001);
        assertEquals(-50f, a.getBalance(), 0.000001);
        assertEquals(1, a.getTransactions().size());
        assertEquals(TransactionType.FEE, a.getTransactions().get(0).getType());
        assertEquals(-50f, a.getTransactions().get(0).getAmount(), 0.000001);
    }

    @Test
    public void testWithdrawNotEnoughMoney2() throws Exception {
        Account a = new Account(AccountType.CHECKING);
        try {
            a.withdraw(50f);
        } catch (Exception e) {
            assertEquals("Not enough money", e.getMessage());
            assertEquals(-50f, a.getBalance(), 0.000001);
            assertEquals(1, a.getTransactions().size());
            assertEquals(TransactionType.FEE, a.getTransactions().get(0).getType());
            assertEquals(50f, a.getTransactions().get(0).getAmount(), 0.000001);
        }
    }

    @Test
    public void testWithdrawAccountClosed() throws Exception {
        Account a = new Account(AccountType.CHECKING);
        a.deposit(2f);
        try {
            a.withdraw(50f);
        } catch (Exception e) {}

        try {
            a.withdraw(10f);
        } catch (Exception e) {}

        assertFalse(a.isClosed());
        try {
            a.withdraw(20f);
        } catch (Exception e) {}

        assertEquals(true, a.isClosed());

        assertEquals(-148f, a.getBalance(), 0.000001);
        assertEquals(4, a.getTransactions().size());
        assertEquals(3, a.getTransactions().stream()
                .filter(t -> TransactionType.FEE.equals(t.getType()))
                .toArray(Transaction[]::new).length);
    }


    @Test
    public void testFilterTransactions() throws Exception {
        Account a = new Account(AccountType.CHECKING);
        a.deposit(10f);
        a.deposit(100f);
        a.withdraw(40f);
        a.deposit(50f);

        Float[] trans = a.filterTransactions(TransactionType.DEPOSIT);
        assertEquals(3, trans.length);
        assertArrayEquals(new Float[]{10f,100f,50f}, trans);

        Float[] trans2 = a.filterTransactions(TransactionType.WITHDRAW);
        assertEquals(1, trans2.length);
        assertArrayEquals(new Float[]{40f}, trans2);
    }
}