# api.ai-echo-server : sample webhook implementation in NodeJS
This is a really simple webhook implementation that gets Api.ai classification JSON (i.e. a JSON output of Api.ai /query endpoint) and returns a fulfillment response

# One-click deploy to Heroku
[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

# What does the service do ?
It's a simple echo fulfillment service that uses a simple Express Node js server. The service simply returns the input text as the output. 

The service packs the result in the Api.ai webhook-compatible response JSON and returns it to Api.ai.