package com.at.controllers;

import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.jdbc.Sql;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.HashMap;
import java.util.Map;

import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.is;
import static org.junit.Assert.*;

/**
 * Created by localadmin on 8/18/16.
 */

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.DEFINED_PORT)
@Sql(value = {"/clean-database.sql"})
public class CarsControllerTest {
    @Before
    public void setUp() throws Exception {
        RestAssured.port = 8001;

    }

    @After
    public void tearDown() throws Exception {

    }

    @Test
    // POST /api/cars
    public void shouldCreateACar() throws Exception {
        Map<String, Object> json = new HashMap<>();
        json.put("make", "Honda");
        json.put("model", "Accord");
        json.put("year", 2016);
        json.put("personId", 1);

        given().
                contentType(ContentType.JSON).
                body(json).
                when().
                post("/api/cars")
                .then()
                .statusCode(200)
                .body("id", is(2));
    }

}