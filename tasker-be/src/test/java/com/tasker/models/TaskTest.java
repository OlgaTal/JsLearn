package com.tasker.models;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import java.text.SimpleDateFormat;

import static org.hamcrest.CoreMatchers.*;
import static org.junit.Assert.*;

public class TaskTest {

    @Before
    public void setUp() throws Exception {

    }

    @After
    public void tearDown() throws Exception {

    }

    @Test
    public void shouldCreateAnInstanceOfTask() throws Exception {
        Task t = new Task();
        assertThat(t, instanceOf(Task.class));
        assertTrue(t.getCreatedAt().getTime() > 0);
        assertTrue(t.getUpdatedAt().getTime() > 0);
    }

    @Test
    public void shuoldGetAndSetIdOnTask() throws Exception {
        Task t = new Task();
        t.setId(3);
        assertEquals(3, t.getId());
    }

    @Test
    public void shouldGetAndSetNameonTask() throws Exception {
        Task t = new Task();

        t.setName("Go to lunch!");

        assertEquals("Go to lunch!", t.getName());
    }

    @Test
    public void shouldGetAndSetCategoryOnTask() throws Exception {

        Task t = new Task();
        t.setCategory("3");
        assertEquals("3", t.getCategory());
    }

    @Test
    public void shouldGetAndSetDueDateOnTask() throws Exception {
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");

        Task t = new Task();
        t.setDue(format.parse("2012-03-11"));
        assertEquals("Sun Mar 11 00:00:00 CST 2012", t.getDue().toString());
    }

    @Test
    public void shouldGetAndSetIsCompleteOnTask() throws Exception {
        Task t = new Task();
        t.setComplete(true);
        assertEquals(true, t.getComplete());
    }

    @Test
    public void shouldGetAndSetCreatedAt() throws Exception {
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");

        Task t = new Task();
        t.setCreatedAt(format.parse("2012-03-11"));
        assertEquals("Sun Mar 11 00:00:00 CST 2012", t.getCreatedAt().toString());
    }

    @Test
    public void shouldGetAndSetUpdatedAt() throws Exception {
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");

        Task t = new Task();
        t.setUpdatedAt(format.parse("2012-03-11"));
        assertEquals("Sun Mar 11 00:00:00 CST 2012", t.getUpdatedAt().toString());
    }

    @Test
    public void shouldUpdateTheTimeOnTask() throws Exception {
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");

        Task t = new Task();
        t.setUpdatedAt(null);
        t.updateTime();
        assertTrue(t.getUpdatedAt().getTime() > 0);
    }
}