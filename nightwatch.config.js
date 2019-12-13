module.exports = {
  test_settings: {
    webdriver: {
      launch_url: 'http://ondemand.saucelabs.com:80',
      start_process: true,
      host: 'ondemand.saucelabs.com',
      port: 80,
      username: process.env.SAUCE_CRED_USR,
      access_key: process.env.SAUCE_CRED_PSW
    }
  }
}
