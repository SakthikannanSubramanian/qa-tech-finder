const {
    xCUITest,
    mockk,
    appium,
    appium_mobile_app,
    espresso,
    gradle,
    androidprofiler,
    xcode,
    newRelic,
    kibana,
    androidLint,
    xctest,
    xCodeInstruments,
    newmanpostman,
    mockoon,
    pushhero,
    jacoco,
    charles,
    sonarqube,
    grafana,
    typescript,
    junit,
    pitest,
    mockito,
    pact,
    express,
    cucumber,
    codecept,
    karate,
    restAssured,
    lightHouseCI,
    springCloudDataFlow,
    webDeveloperTools,
    testContainers,
    testRestTemplate,
    unirest,
    sentry,
    wireMock,
    gatling,
    k6,
    jmeter,
    postman,
    httpio,
    owaspDependencyChecker,
    snyk,
    firebase,
    victoriaMetrics,
    eslint,
    storybook,
    jest,
    reactTestingLibrary,
    cypress,
    playwright,
    protractor,
    puppeteer,
    webdriverIO,
    percy,
    axe,
    accessibilityInsights,
    wave,
    zap,
    browserStack,
    sitespeed,
    prometheus,
    growthBook,
    optimizely,
    burpSuite,
    mockServer,
    dbFit,
    valgrind,
    split,
    optimizely_mobile,
   } = require("./descriptions.js");
  
 const completeData = [{
       label: "Frontend",
       id: "frontend",
       children: [{
             label: "Static Testing",
             id: "static-testing",
             children: [
                typescript,
                eslint,
                storybook
             ]
          },
          {
             label: "Unit Testing",
             id: "unit-testing",
             children: [
                reactTestingLibrary,
                jest
             ]
          },
          {
             label: "Contract Testing",
             id: "contract-testing",
             children: [
                pact
             ]
          },
          {
             label: "Functional Testing",
             id: "functional-testing",
             children: [
                codecept,
                cypress,
                playwright,
                protractor,
                puppeteer,
                webdriverIO
             ]
          },
          {
             label: "Integration Testing",
             id: "integration-testing",
             children: [
                codecept,
                wireMock,
                webdriverIO,
                playwright,
                puppeteer
             ]
          },
          {
             label: "Visual Regression Testing",
             id: "visual-regression-testing",
             children: [
                percy
             ]
          },
          {
             label: "Security Testing",
             id: "security-testing",
             children: [
                snyk,
                zap,
                burpSuite
             ]
          } , {
             label: "Accessbility Testing",
             id: "accessbility-testing",
             children: [
                axe,
                accessibilityInsights,
                wave
             ]
          } , {
             label: "Compatibility Testing",
             id: "compatibility-testing",
             children: [
                browserStack
             ]
          } , {
             label: "Performance",
             id: "performance",
             children: [
                sitespeed,
                lightHouseCI
             ]
          } , {
             label: "Exploratory",
             id: "exploratory",
             children: [
                postman,
                webDeveloperTools
             ]
          } , {
             label: "Observability",
             id: "observability",
             children: [
                sentry,
                grafana,
                prometheus
             ]
          }, {
            label: "A/B Testing",
            id: "abTesting",
            children: [
               growthBook,
               optimizely
            ]
         } 
       ]
    },
    {
       label: "Backend",
       id: "backend",
       children: [{
          label: "Static Testing",
          id: "static-testing",
          children: [
             jacoco,
             sonarqube,
             typescript
          ]
       } , {
          label: "Unit Testing",
          id: "unit-testing",
          children: [
             junit,
             pitest,
             mockito
          ]
       } , {
          label: "Contract Testing",
          id: "contract-testing",
          children: [
             pact
          ]
       } , {
          label: "Functional Testing",
          id: "functional-testing",
          children: [
             junit,
             express,
             cucumber
          ]
       } , {
          label: "Integration Testing",
          id: "integration-testing",
          children: [
             junit,
             karate,
             restAssured,
             springCloudDataFlow,
             testContainers,
             testRestTemplate,
             unirest,
             wireMock,
             charles
          ]
       } , {
          label: "Performance Testing",
          id: "performance-testing",
          children: [
             gatling,
             k6,
             jmeter
          ]
       } , {
          label: "Exploratory Testing",
          id: "exploratory-testing",
          children: [
             postman,
             httpio
          ]
       } , {
          label: "Security Testing",
          id: "security-testing",
          children: [
             owaspDependencyChecker,
             snyk
          ]
       } , {
          label: "Observability Testing",
          id: "observability-testing",
          children: [
             victoriaMetrics,
             grafana,
             prometheus
          ]
       }, {
         label: "Service Virtualisation Testing",
         id: "service-virtualisation-testing",
         children: [
            mockServer,
            wireMock
         ]
      }, {
         label: "Data Migration Testing",
         id: "data-migration-testing",
         children: [
            dbFit
         ]
      }]
    },
    {
       label: "Mobile Apps",
       id: "mobile-apps",
          children: [{
             label: "Static Testing",
             id: "static-testing",
             children: [
                xctest,
                xcode,
                androidLint,
                androidprofiler,
                sonarqube
             ]
          } , {
             label: "Unit Testing",
             id: "unit-testing",
             children: [
                xctest,
                junit,
                mockk,
                mockito
             ]
          } , {
             label: "Contract Testing",
             id: "contract-testing",
             children: [
                pact
             ]
          } , {
             label: "Functional Testing",
             id: "functional-testing",
             children: [
                xctest,
                xCUITest,
                junit,
                mockk,
                appium,
                espresso,
                gradle
             ]
          } , {
             label: "Integration Testing",
             id: "integration-testing",
             children: [
                xctest,
                charles,
                newmanpostman,
                mockoon,
                pushhero,
                espresso
             ]
          } , {
             label: "Accessibility Testing",
             id: "accessibility-testing",
             children: [
                xctest,
                xCUITest,
                espresso
             ]
          } , {
             label: "Performance Testing",
             id: "performance-testing",
             children: [
                xCodeInstruments,
                gatling
             ]
          } , {
             label: "Compatibility Testing",
             id: "compatibility-testing",
             children: [
                xcode,
                xctest,
                xCUITest,
                firebase,
                kibana,
                newRelic
             ]
          } , {
            label: "Exploratory Testing",
            id: "exploratory-testing",
            children: [
               androidprofiler
            ]
         }, {
             label: "Observability Testing",
             id: "observability-testing",
             children: [
                victoriaMetrics,
                grafana,
                kibana,
                newRelic,
                xcode,
                firebase
             ]
          }, {
            label: "A/B Testing",
            id: "abTesting",
            children: [
               optimizely_mobile,
               split
            ]
         }, {
            label: "Memory Leak Testing",
            id: "memoryLeakTesting",
            children: [
               valgrind
            ]
         } ]
    },    {
      label: "Devices",
      id: "devices",
      children: [{
         label: "Multi Functional Device",
         id: "multifunctionaldevicetesting",
         children: [
            appium_mobile_app
         ]
      }]
   }
 ]

 module.exports = completeData;
 