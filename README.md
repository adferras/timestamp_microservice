# Timestamp microservice

This has been created as an assignment from [freecodecamp](http://www.freecodecamp.com)

This app has been deployed to the following locations:
[Github](http://adferras.github.io/timestamp_microservice/)
[Cloud 9](https://timestamp-microservice-adferras.c9users.io)
[Heroku](http://timestamp-microservice-1690.herokuapp.com)

## This app fulfills the following user stories:
I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016).
If it does, it returns both the Unix timestamp and the natural language form of that date.
If it does not contain a date or Unix timestamp, it returns null for those properties.

## Example Usage:
```
https://timestamp-microservice-adferras.c9users.io/January%201,%202001
https://timestamp-microservice-adferras.c9users.io/978307200
```

## Example Output:
`{"unix":978307200,"natural":"January 1, 2001"}`