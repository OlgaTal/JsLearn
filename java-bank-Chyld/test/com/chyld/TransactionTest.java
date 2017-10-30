package com.chyld;

import org.hamcrest.CoreMatchers;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.*;

/**
 * Created by chyld on 7/28/16.
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
        assertNotNull(t.getId());
        assertNotNull(t.getDate());
        assertEquals(50f, t.getAmount(), 0.1);
        assertEquals(TransactionType.DEPOSIT, t.getType());
    }

    @Test
    public void testToString() throws Exception {
        Transaction t = new Transaction(50f, TransactionType.DEPOSIT);
        assertThat(t.toString(), CoreMatchers.containsString("type: DEPOSIT amount: 50.0"));
    }
}
