package com.tasker.models;

public class ErrorResponse {
    private String message;

    public String getMessage() {
        return message;
    }

    public ErrorResponse() {
    }

    public ErrorResponse(String s) {
        message = s;
    }
}
