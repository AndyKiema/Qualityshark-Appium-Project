exports.config = {
    runner: 'local',
    port: 4723,
    specs: ['./test/specs/*.js'],
    capabilities: [{
        platformName: 'Android',
        'appium:platformVersion': '11.0', 
        'appium:deviceName': 'PT18546AA12C2405392',  
        'appium:appPackage': 'com.swaglabsmobileapp',     
        'appium:appActivity': 'com.swaglabsmobileapp.MainActivity',
        'appium:automationName': 'UiAutomator2',
        'appium:noReset': true,
    }],
    services: ['appium'],
    framework: 'mocha',
    reporters: [['spec', { symbols: { passed: '[PASS]', failed: '[FAIL]' } }]],
    mochaOpts: { timeout: 110000 }
}