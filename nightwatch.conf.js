var packageJson = require('./package.json')

const buildName = packageJson.name + '#PR-' + process.env.CHANGE_ID + '-build-' + process.env.BUILD_NUMBER

module.exports = {
  src_folders: [],

  webdriver: {
    keep_alive: true
  },

  test_settings: {
    saucelabs: {
      selenium: {
        host: 'ondemand.saucelabs.com',
        launch_url: 'http://ondemand.saucelabs.com:80',
        port: 80
      },

      // More info on configuring capabilities can be found on:
      // https://www.browserstack.com/automate/capabilities?tag=selenium-4
      desiredCapabilities: {
        'saucelabs:options': {
          local: 'false',
          userName: process.env.SAUCE_CRED_USR,
          accessKey: process.env.SAUCE_CRED_PWD
        }
      }
    },

    'saucelabs.chrome': {
      extends: 'saucelabs',
      desiredCapabilities: {
        name: packageJson.name,
        build: buildName,
        'tunnel-identifier': process.env.TUNNEL_IDENTIFIER,
        browserName: 'chrome',
        chromeOptions: {
          w3c: false
        }
      }
    }
  }
}
// module.exports = {

//   test_settings: {
//     ci_chrome: {
//       launch_url: 'http://ondemand.saucelabs.com:80',
//       selenium_port: 80,
//       selenium_host: 'ondemand.saucelabs.com',
//       silent: true,
//       username: process.env.SAUCE_CRED_USR,
//       access_key: process.env.SAUCE_CRED_PSW,
//       desiredCapabilities: {
//         name: packageJson.name,
//         build: buildName,
//         'tunnel-identifier': process.env.TUNNEL_IDENTIFIER,
//         browserName: 'chrome'
//       }
//     },
//     ci_firefox: {
//       launch_url: 'http://ondemand.saucelabs.com:80',
//       selenium_port: 80,
//       selenium_host: 'ondemand.saucelabs.com',
//       silent: true,
//       username: process.env.SAUCE_CRED_USR,
//       access_key: process.env.SAUCE_CRED_PSW,
//       desiredCapabilities: {
//         name: packageJson.name,
//         build: buildName,
//         'tunnel-identifier': process.env.TUNNEL_IDENTIFIER,
//         browserName: 'firefox'
//       }
//     },
//     ci_ie11: {
//       launch_url: 'http://ondemand.saucelabs.com:80',
//       selenium_port: 80,
//       selenium_host: 'ondemand.saucelabs.com',
//       silent: true,
//       username: process.env.SAUCE_CRED_USR,
//       access_key: process.env.SAUCE_CRED_PSW,
//       desiredCapabilities: {
//         name: packageJson.name,
//         build: buildName,
//         'tunnel-identifier': process.env.TUNNEL_IDENTIFIER,
//         browserName: 'internet explorer',
//         platform: 'Windows 10',
//         version: '11.103'
//       }
//     },
//     ci_safari: {
//       launch_url: 'http://ondemand.saucelabs.com:80',
//       selenium_port: 80,
//       selenium_host: 'ondemand.saucelabs.com',
//       silent: true,
//       username: process.env.SAUCE_CRED_USR,
//       access_key: process.env.SAUCE_CRED_PSW,
//       desiredCapabilities: {
//         name: packageJson.name,
//         build: buildName,
//         'tunnel-identifier': process.env.TUNNEL_IDENTIFIER,
//         browserName: 'safari'
//       }
//     },
//     firefox: {
//       desiredCapabilities: {
//         browserName: 'firefox',
//         javascriptEnabled: true,
//         acceptSslCerts: true,
//         marionette: true
//       },
//       selenium: {
//         cli_args: {
//           'webdriver.firefox.driver': require('geckodriver').path
//         }
//       }
//     },
//     safari: {
//       desiredCapabilities: {
//         browserName: 'safari',
//         javascriptEnabled: true,
//         acceptSslCerts: true
//       }
//     }
//   }

//   'browserstack.firefox': {
//     extends: 'browserstack',
//     desiredCapabilities: {
//       browserName: 'firefox'
//     }
//   },

//   'browserstack.ie': {
//     extends: 'browserstack',
//     desiredCapabilities: {
//       browserName: 'IE',
//       browserVersion: '11.0',
//       'bstack:options' : {
//         os: 'Windows',
//         osVersion: '10',
//         local: 'false',
//         seleniumVersion: '3.5.2',
//         resolution: '1366x768'
//       }
//     }
//   }
