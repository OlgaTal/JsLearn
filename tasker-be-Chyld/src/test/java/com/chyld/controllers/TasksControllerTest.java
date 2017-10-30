package com.chyld.controllers;

import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.json.ObjectContent;
import org.springframework.test.context.jdbc.Sql;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.HashMap;
import java.util.Map;

import static io.restassured.RestAssured.*;
import static org.junit.Assert.*;
import static io.restassured.matcher.RestAssuredMatchers.*;
import static org.hamcrest.Matchers.*;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.DEFINED_PORT)
@Sql(value = {"/clean-database.sql"})
public class TasksControllerTest {
    @Before
    public void setUp() throws Exception {
        RestAssured.port = 8001;
    }

    @After
    public void tearDown() throws Exception {
    }

    @Test
    // GET /api/tasks
    public void shouldGetAllTheTasks() throws Exception {
        get("/api/tasks")
            .then()
            .statusCode(200)
            .body("numberOfElements", is(3));
    }

    @Test
    // GET /api/tasks/:id
    public void shouldGetASingleTask() throws Exception {
        get("/api/tasks/1")
            .then()
            .statusCode(200)
            .body("name", is("Get Milk"));
    }

    @Test
    // POST /api/tasks
    public void shouldCreateATask() throws Exception {
        Map<String, Object> json = new HashMap<>();
        json.put("name", "Get Gas");
        json.put("due", "2012-07-08");
        json.put("category", "Car");

        given().
            contentType(ContentType.JSON).
            body(json).
        when().
            post("/api/tasks")
        .then()
            .statusCode(200)
            .body("id", is(6));
    }

    @Test
    // DELETE /api/tasks/:id
    public void shouldDeleteATask() throws Exception {
        when().
            delete("/api/tasks/1")
        .then()
            .statusCode(200);
    }

    @Test
    // PATCH /api/tasks/:id/complete
    public void shouldChangeTheCompletionStatus() throws Exception {
        when().
            patch("/api/tasks/1/complete")
        .then()
            .statusCode(200)
            .body("isComplete", is(false));
    }
}
