package com.eli;

import org.hamcrest.CoreMatchers;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.*;

/**
 * Created by localadmin on 7/28/16.
 */
public class TransactionTest {
    @Before
    public void setUp() throws Exception {

    }

    @After
    public void tearDown() throws Exception {

    }

    @Test
    public void testConstructorWithAmountAndType() throws Exception {
        Transaction t = new Transaction(50f, TransactionType.DEPOSIT);
        assertNotNull(t);
        assertNotNull(t.getId());
        assertNotNull(t.getDate());
        assertEquals(50f, t.getAmount(), 0.00002);
        assertEquals(TransactionType.DEPOSIT, t.getType());
    }

    @Test
    public void testToString1() throws Exception {
        Transaction t = new Transaction(50f, TransactionType.WITHDRAW);
        assertEquals("Transaction{" +
                "id='" + t.getId() + '\'' +
                ", date=" + t.getDate() +
                ", amount=" + t.getAmount() +
                ", type=" + t.getType() +
                '}', t.toString());
    }

    @Test
    public void testToString() throws Exception {
        Transaction t = new Transaction(50f, TransactionType.WITHDRAW);
        assertThat(t.toString(), CoreMatchers.containsString("amount=50.0, type=WITHDRAW"));
    }

}