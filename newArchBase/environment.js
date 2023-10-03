//environment file with all the environment variables

var _Environments = {
 
  production: {
    env: "production",
    API_URL: "https://perfumecart.ae/api/v1",
    SOCKET_URL: "https://perfumecart.ae",
    GOOGLE_MAP_KEY: "AIzaSyB2GVU_CI6mG6QKJSKS7CHmhCccrk8KGYs",
    COUNTRY_PHONE_CODE: "+91",
    COUNTRY_CODE: "IN",
    CURRENCY_CODE: "INR",
    LOGS: true,
  },
  development: {
    env: "development",
    API_URL: "http://20.40.49.93:8081/api/v1",
    SOCKET_URL: "http://20.40.49.93:8081",
    GOOGLE_MAP_KEY: "AIzaSyB2GVU_CI6mG6QKJSKS7CHmhCccrk8KGYs",
    COUNTRY_PHONE_CODE: "+91",
    COUNTRY_CODE: "IN",
    CURRENCY_CODE: "INR",
    LOGS: true,
  }
};

function getEnvironment() {
  var env = "development";  
  return _Environments[env];
}

var Environment = getEnvironment();
module.exports = Environment;