package com.at.controllers;

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

/**
 * Created by localadmin on 8/18/16.
 */
@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.DEFINED_PORT)
@Sql(value = {"/clean-database.sql"})

public class PersonsControllerTest {
    @Before
    public void setUp() throws Exception {
        RestAssured.port = 8001;

    }

    @After
    public void tearDown() throws Exception {

    }

    @Test
    // POST /api/persons
    public void shouldCreateAPerson() throws Exception {
        Map<String, Object> json = new HashMap<>();
        json.put("name", "Test");
        json.put("age", 20);
        json.put("gender", "M");
        json.put("payment", 75);
        json.put("claims", 0);


        given().
                contentType(ContentType.JSON).
                body(json).
                when().
                post("/api/persons")
                .then()
                .statusCode(200)
                .body("id", is(2));
    }


}