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
public class ClaimsControllerTest {
    @Before
    public void setUp() throws Exception {
        RestAssured.port = 8001;

    }

    @After
    public void tearDown() throws Exception {

    }

    @Test
    // POST /api/claims
    public void shouldCreateAClaim() throws Exception {
        Map<String, Object> json = new HashMap<>();
        json.put("claim_date", "1349154000000");
        json.put("claim_time", "16:52:30");
        json.put("location", "Chicago");
        json.put("carId", 1);


        given().
                contentType(ContentType.JSON).
                body(json).
                when().
                post("/api/claims")
                .then()
                .statusCode(200)
                .body("id", is(2));
    }

}