package com.tasker.models;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.*;

/**
 * Created by localadmin on 8/17/16.
 */
public class ErrorResponseTest {

    @Before
    public void setUp() throws Exception {

    }

    @After
    public void tearDown() throws Exception {

    }

    @Test
    public void shouldCreateErrorResponseAndGetMessage() throws Exception {
        ErrorResponse er = new ErrorResponse("It's broken! Send help!");
        assertEquals("It's broken! Send help!", er.getMessage());
    }
}