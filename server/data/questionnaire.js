const questionnaire = [
    {
       "Parameter":"Automation coverage",
       "Questions":[
          {
             "Question":"What percentage of Regression test cases have been automated?",
             "Options":{
                "a":{
                   "Range":"80-100%",
                   "Level":4
                },
                "b":{
                   "Range":"50-80%",
                   "Level":3
                },
                "c":{
                   "Range":"25-50%",
                   "Level":2
                },
                "d":{
                   "Range":"0-25%",
                   "Level":1
                }
             }
          },
          {
             "Question":"What percentage of End-to-End test cases have been automated?",
             "Options":{
                "a":{
                   "Range":"80-100%",
                   "Level":4
                },
                "b":{
                   "Range":"50-80%",
                   "Level":3
                },
                "c":{
                   "Range":"25-50%",
                   "Level":2
                },
                "d":{
                   "Range":"0-25%",
                   "Level":1
                }
             }
          },
          {
             "Question":"What percentage of device automation test cases have been automated?",
             "Options":{
                "a":{
                   "Range":"80-100%",
                   "Level":4
                },
                "b":{
                   "Range":"50-80%",
                   "Level":3
                },
                "c":{
                   "Range":"25-50%",
                   "Level":2
                },
                "d":{
                   "Range":"0-25%",
                   "Level":1
                }
             }
          },
          {
             "Question":"Select the level of functional test cases automated?",
             "Options":{
                "a":{
                   "Description":"Very few or No test cases are automated",
                   "Level":1
                },
                "b":{
                   "Description":"Only Critical",
                   "Level":2
                },
                "c":{
                   "Description":"Critical and Major",
                   "Level":3
                },
                "d":{
                   "Description":"All functional test cases are automated",
                   "Level":4
                }
             }
          }
       ]
    },
    {
       "Parameter":"Automated NFT",
       "Questions":[
          {
             "Question":"How much percentage of your Performance Testing automated?",
             "Options":{
                "a":{
                   "Range":"80-100%",
                   "Level":4
                },
                "b":{
                   "Range":"50-80%",
                   "Level":3
                },
                "c":{
                   "Range":"25-50%",
                   "Level":2
                },
                "d":{
                   "Range":"0-25%",
                   "Level":1
                }
             }
          },
          {
             "Question":"How much percentage of your Accessibility Testing automated?",
             "Options":{
                "a":{
                   "Range":"80-100%",
                   "Level":4
                },
                "b":{
                   "Range":"50-80%",
                   "Level":3
                },
                "c":{
                   "Range":"25-50%",
                   "Level":2
                },
                "d":{
                   "Range":"0-25%",
                   "Level":1
                }
             }
          },
          {
             "Question":"How much percentage of your Security Testing automated?",
             "Options":{
                "a":{
                   "Range":"80-100%",
                   "Level":4
                },
                "b":{
                   "Range":"50-80%",
                   "Level":3
                },
                "c":{
                   "Range":"25-50%",
                   "Level":2
                },
                "d":{
                   "Range":"0-25%",
                   "Level":1
                }
             }
          },
          {
             "Question":"How much percentage of your Compatibility Testing (Browsers) automated?",
             "Options":{
                "a":{
                   "Range":"80-100%",
                   "Level":4
                },
                "b":{
                   "Range":"50-80%",
                   "Level":3
                },
                "c":{
                   "Range":"25-50%",
                   "Level":2
                },
                "d":{
                   "Range":"0-25%",
                   "Level":1
                }
             }
          },
          {
             "Question":"How much percentage of your Compatibility Testing (Devices) automated?",
             "Options":{
                "a":{
                   "Range":"80-100%",
                   "Level":4
                },
                "b":{
                   "Range":"50-80%",
                   "Level":3
                },
                "c":{
                   "Range":"25-50%",
                   "Level":2
                },
                "d":{
                   "Range":"0-25%",
                   "Level":1
                }
             }
          },
          {
             "Question":"How much percentage of your Usability Testing automated?",
             "Options":{
                "a":{
                   "Range":"80-100%",
                   "Level":4
                },
                "b":{
                   "Range":"50-80%",
                   "Level":3
                },
                "c":{
                   "Range":"25-50%",
                   "Level":2
                },
                "d":{
                   "Range":"0-25%",
                   "Level":1
                }
             }
          }
       ]
    },
    {
       "Parameter":"Script Quality",
       "Questions":[
          {
             "Question":"Which of the following factors does your script adhere to?",
             "Options":{
                "a":{
                   "Description":"Highly reusable, efficient, and modular scripts with automated maintenance",
                   "Level":4
                },
                "b":{
                   "Description":"Reusable, modular scripts with strong maintainability",
                   "Level":3
                },
                "c":{
                   "Description":"Some level of code reuse and maintainability, but scripts are not fully modular",
                   "Level":2
                },
                "d":{
                   "Description":"Scripts lack reusability and maintainability",
                   "Level":1
                }
             }
          },
          {
             "Question":"How effectively is your automation framework designed to handle errors, ensuring proper logging, recovery, and minimal disruption?",
             "Options":{
                "a":{
                   "Description":"Scripts are resilient to application changes and have robust error handling",
                   "Level":4
                },
                "b":{
                   "Description":"Scripts follow coding standards and handle errors effectively",
                   "Level":3
                },
                "c":{
                   "Description":"Basic error handling and adherence to coding best practices",
                   "Level":2
                },
                "d":{
                   "Description":"Error handling and adherence to best practices are basic and improving",
                   "Level":1
                }
             }
          },
          {
             "Question":"How do your automation scripts and utilities conform to your coding standards?",
             "Options":{
                "a":{
                   "Description":"Maintaining the Code as per your development coding standards",
                   "Level":4
                },
                "b":{
                   "Description":"Ensuring script readability using proper naming conventions and comments",
                   "Level":3
                },
                "c":{
                   "Description":"Following basic coding practices with occasional deviations from established standards",
                   "Level":2
                },
                "d":{
                   "Description":"Limited adherence to coding standards, with basic naming conventions and minimal comments",
                   "Level":1
                }
             }
          },
          {
             "Question":"Select the usage level of static analysis tool like linting?",
             "Options":{
                "a":{
                   "Description":"Extensive usage of linting",
                   "Level":4
                },
                "b":{
                   "Description":"Extensive usage of linting (but few files/lines are excluded)",
                   "Level":3
                },
                "c":{
                   "Description":"Minimal usage of linting",
                   "Level":2
                },
                "d":{
                   "Description":"Yet to implement",
                   "Level":1
                }
             }
          },
          {
             "Question":"Do you have a code review checklist in place to ensure the quality of your scripts?",
             "Options":{
                "a":{
                   "Description":"Yes",
                   "Level":2
                },
                "b":{
                   "Description":"No",
                   "Level":1
                }
             }
          },
          {
             "Question":"Do you have a mechanism to identify vulnerabilities in your script?",
             "Options":{
                "a":{
                   "Description":"Dashboards and alerting",
                   "Level":4
                },
                "b":{
                   "Description":"Dashboards only",
                   "Level":3
                },
                "c":{
                   "Description":"Alerting only",
                   "Level":2
                },
                "d":{
                   "Description":"None",
                   "Level":1
                }
             }
          }
       ]
    },
    {
       "Parameter":"Automation Effectiveness",
       "Questions":[
          {
             "Question":"Choose the applicable parallel execution mechanism in your automation framework?",
             "Options":{
                "a":{
                   "Description":"Tests execute quickly, with extensive parallel execution capabilities",
                   "Level":4
                },
                "b":{
                   "Description":"Parallel execution is not extensive, but increasing at the moment",
                   "Level":3
                },
                "c":{
                   "Description":"Parallel execution is introduced, not extensively used",
                   "Level":2
                },
                "d":{
                   "Description":"Not applicable",
                   "Level":1
                }
             }
          },
          {
             "Question":"How do you rate the level of flakiness in your automation?",
             "Options":{
                "a":{
                   "Description":"No flakiness - Tests are consistently reliable",
                   "Level":4
                },
                "b":{
                   "Description":"Low flakiness - Occasional failures, but easily resolved",
                   "Level":3
                },
                "c":{
                   "Description":"Moderate flakiness - Frequent failures requiring investigation",
                   "Level":2
                },
                "d":{
                   "Description":"No automation or Tests are unreliable and often fail without clear reasons",
                   "Level":1
                }
             }
          },
          {
             "Question":"How do you rate the reduction of manual intervention with your automation?",
             "Options":{
                "a":{
                   "Description":"Complete reduction - No manual intervention required",
                   "Level":4
                },
                "b":{
                   "Description":"Significant reduction - Minimal manual intervention needed",
                   "Level":3
                },
                "c":{
                   "Description":"Moderate reduction - Some manual intervention still necessary",
                   "Level":2
                },
                "d":{
                   "Description":"Minimal reduction - Manual intervention is frequently required",
                   "Level":1
                }
             }
          },
          {
             "Question":"Select your automation frequency and reliability:",
             "Options":{
                "a":{
                   "Description":"Automation test executes for every developer code commit and provides real-time feedback during test execution. Eg. Alerts triggered to your communication groups i.e slack/mail/gchats",
                   "Level":4
                },
                "b":{
                   "Description":"Regular test execution (daily or per release), with good reliability",
                   "Level":3
                },
                "c":{
                   "Description":"Test execution frequency is improving, but reliability is still an issue",
                   "Level":2
                },
                "d":{
                   "Description":"Unreliable tests, high failure rates due to environment or script issues",
                   "Level":1
                }
             }
          }
       ]
    },
    {
       "Parameter":"CI/CD Integration",
       "Questions":[
          {
             "Question":"Where do you stand on the Continuous Integration/Continuous delivery (CI/CD) perspective?",
             "Options":{
                "a":{
                   "Description":"Automation is fully integrated into CI/CD pipelines, providing feedback at every stage of development",
                   "Level":4
                },
                "b":{
                   "Description":"Full integration with CI/CD pipelines, tests are triggered after code commits (dev completion) or nightly builds only",
                   "Level":3
                },
                "c":{
                   "Description":"Partial integration with CI/CD, but test automation triggers are not consistent",
                   "Level":2
                },
                "d":{
                   "Description":"Yet to implement CI/CD",
                   "Level":1
                }
             }
          }
       ]
    },
    {
       "Parameter":"Automation Strategy & Process Stability",
       "Questions":[
          {
             "Question":"What level of automation adoption is implemented in your project?",
             "Options":{
                "a":{
                   "Description":"In-sprint automation - Integrated and executed within the current sprint",
                   "Level":4
                },
                "b":{
                   "Description":"N-1 automation - Automated after the previous sprint, ready for upcoming releases",
                   "Level":3
                },
                "c":{
                   "Description":"Partial automation - Only specific tasks are automated",
                   "Level":2
                },
                "d":{
                   "Description":"No automation - Automation is not yet implemented in the project",
                   "Level":1
                }
             }
          },
          {
             "Question":"How well does your automation align with industry-standard advanced tools? (e.g., AI, machine learning, cloud-based testing tools)",
             "Options":{
                "a":{
                   "Description":"Fully aligned - We use cutting-edge tools like AI-driven testing, cloud-based solutions, and continuous integration platforms.",
                   "Level":4
                },
                "b":{
                   "Description":"Mostly aligned - We use some industry-standard tools, such as automated test management and cloud solutions.",
                   "Level":3
                },
                "c":{
                   "Description":"Partially aligned - We use basic tools but haven't integrated advanced solutions like AI or machine learning yet.",
                   "Level":2
                },
                "d":{
                   "Description":"Not aligned - We don't currently use industry-standard advanced tools in our automation process.",
                   "Level":1
                }
             }
          },
          {
             "Question":"To what extent does your team follow the shift-left approach and implement the industrial test pyramid in your automation testing strategy?",
             "Options":{
                "a":{
                   "Description":"Extensive shift left and Industrial test pyramid is followed",
                   "Level":4
                },
                "b":{
                   "Description":"Effective shift left and Industrial test pyramid is followed to an extent",
                   "Level":3
                },
                "c":{
                   "Description":"No industrial pyramid, but shift left approach is followed.",
                   "Level":2
                },
                "d":{
                   "Description":"No shift left strategies are followed",
                   "Level":1
                }
             }
          },
          {
             "Question":"How would you categorize your current automation strategy and its alignment with processes and business goals?",
             "Options":{
                "a":{
                   "Description":"Advanced automation strategies aligned with business goals, proactive planning for future releases",
                   "Level":4
                },
                "b":{
                   "Description":"Automation strategy is Documented, governance processes in place for script updates and reviews",
                   "Level":3
                },
                "c":{
                   "Description":"Documented automation strategy, governance processes in place for script updates and reviews are followed only to an extent because of project timelines.",
                   "Level":2
                },
                "d":{
                   "Description":"Automation strategy is not in place",
                   "Level":1
                }
             }
          },
          {
             "Question":"How would you rate the strength of your project governance and continuous improvement processes?",
             "Options":{
                "a":{
                   "Description":"Strong governance and continuous improvement processes are fully implemented and consistently followed.",
                   "Level":4
                },
                "b":{
                   "Description":"Governance and continuous improvement processes are in place and regularly reviewed.",
                   "Level":3
                },
                "c":{
                   "Description":"Governance is established, but continuous improvement processes are not consistently followed.",
                   "Level":2
                },
                "d":{
                   "Description":"There is little to no governance or continuous improvement processes in place.",
                   "Level":1
                }
             }
          }
       ]
    },
    {
       "Parameter":"Defect Detection Ratio",
       "Questions":[
          {
             "Question":"What is the Defect Detection Rate(%) achieved through your automation? (Total Defects Found / Defects detected by Automation) * 100",
             "Options":{
                "a":{
                   "Description":">80%",
                   "Level":4
                },
                "b":{
                   "Description":"60% - 80%",
                   "Level":3
                },
                "c":{
                   "Description":"40% - 60%",
                   "Level":2
                },
                "d":{
                   "Description":"<40%",
                   "Level":1
                }
             }
          }
       ]
    },
    {
       "Parameter":"Automation ROI",
       "Questions":[
          {
             "Question":"What is the return on investment (ROI) of your automation? ((Benefits - Cost) / Cost) * 100",
             "Options":{
                "a":{
                   "Description":">80%",
                   "Level":4
                },
                "b":{
                   "Description":"60% - 80%",
                   "Level":3
                },
                "c":{
                   "Description":"40% - 60%",
                   "Level":2
                },
                "d":{
                   "Description":"<40%",
                   "Level":1
                }
             }
          },
          {
             "Question":"How do you measure the success of your automation efforts in terms of time savings and business value?",
             "Options":{
                "a":{
                   "Description":"Extensive time reduction, Increased business value through rapid releases and Decreased production failures",
                   "Level":4
                },
                "b":{
                   "Description":"High efficiency and enhanced business impact",
                   "Level":3
                },
                "c":{
                   "Description":"Moderate improvement in efficiency and business outcomes",
                   "Level":2
                },
                "d":{
                   "Description":"No Automation or Initial Stage of Automation with very minimal practices in place",
                   "Level":1
                }
             }
          }
       ]
    },
    {
       "Parameter":"Team Skills & Expertise",
       "Questions":[
          {
             "Question":"How competent is your team in cross-functional collaboration between developers and testers?",
             "Options":{
                "a":{
                   "Description":"Highly Skilled – Excellent collaboration with seamless communication and teamwork.",
                   "Level":4
                },
                "b":{
                   "Description":"Moderately Skilled – Good collaboration but with some room for improvement.",
                   "Level":3
                },
                "c":{
                   "Description":"Minimally Skilled – Limited collaboration with noticeable gaps in teamwork.",
                   "Level":2
                },
                "d":{
                   "Description":"Not Skilled – Collaboration is poor or non-existent.",
                   "Level":1
                }
             }
          },
          {
             "Question":"How well does your team adopt a 'test automation first' mindset in the development process?",
             "Options":{
                "a":{
                   "Description":"Extensively – Test automation is deeply integrated into every phase of the development process from the start.",
                   "Level":4
                },
                "b":{
                   "Description":"Consistently – Test automation is regularly implemented early in most projects but may vary in some cases.",
                   "Level":3
                },
                "c":{
                   "Description":"Rarely – Test automation is seldom used or only introduced later in the development cycle.",
                   "Level":2
                },
                "d":{
                   "Description":"Not at All – Test automation is not adopted or prioritized in the development process.",
                   "Level":1
                }
             }
          },
          {
             "Question":"Select the proficiency level of team members in hands-on experience with Functional test Automation?",
             "Options":{
                "a":{
                   "Description":"Expert",
                   "Level":4
                },
                "b":{
                   "Description":"Advanced",
                   "Level":3
                },
                "c":{
                   "Description":"Intermediate",
                   "Level":2
                },
                "d":{
                   "Description":"Beginner",
                   "Level":1
                }
             }
          },
          {
             "Question":"Select the proficiency level of team members in hands-on experience with Non-Functional test Automation?",
             "Options":{
                "a":{
                   "Description":"Expert",
                   "Level":4
                },
                "b":{
                   "Description":"Advanced",
                   "Level":3
                },
                "c":{
                   "Description":"Intermediate",
                   "Level":2
                },
                "d":{
                   "Description":"Beginner",
                   "Level":1
                }
             }
          },
          {
             "Question":"What role best describes the primary focus of your team responsibilities?",
             "Options":{
                "a":{
                   "Description":"Quality Advocate - Emphasizes shift-left practices, trains both development and QA teams on quality culture, and adapts to different roles as needed.",
                   "Level":4
                },
                "b":{
                   "Description":"SDET (Software Development Engineer in Test) – Focuses on developing automated tests and testing tools.",
                   "Level":3
                },
                "c":{
                   "Description":"QE (Quality Engineering) – Integrates quality practices into the development lifecycle, with an emphasis on automation.",
                   "Level":2
                },
                "d":{
                   "Description":"QA (Quality Assurance) – Ensures product quality through manual testing and process oversight.",
                   "Level":1
                }
             }
          },
          {
             "Question":"How frequently do you review application logs to diagnose underlying issues?",
             "Options":{
                "a":{
                   "Description":"Proactively",
                   "Level":4
                },
                "b":{
                   "Description":"On demand",
                   "Level":3
                },
                "c":{
                   "Description":"Rarely",
                   "Level":2
                },
                "d":{
                   "Description":"Never",
                   "Level":1
                }
             }
          },
          {
             "Question":"How often do you review developer code to identify underlying issues?",
             "Options":{
                "a":{
                   "Description":"Always",
                   "Level":4
                },
                "b":{
                   "Description":"Frequently",
                   "Level":3
                },
                "c":{
                   "Description":"Rarely",
                   "Level":2
                },
                "d":{
                   "Description":"Never",
                   "Level":1
                }
             }
          }
       ]
    },
    {
       "Parameter":"Metrics & Reporting",
       "Questions":[
          {
             "Question":"How effectively are automation metrics tracked and analyzed within your team?",
             "Options":{
                "a":{
                   "Description":"Metrics are collected and reported in real-time with dashboards that offer deep insights into performance, issues, and trends.",
                   "Level":4
                },
                "b":{
                   "Description":"Most reporting is automated, but with periodic manual intervention. Metrics are available in near real-time.",
                   "Level":3
                },
                "c":{
                   "Description":"Basic reporting and dashboards for tracking automation metrics (pass/fail rates, execution time)",
                   "Level":2
                },
                "d":{
                   "Description":"Metrics are primarily tracked manually, with no or very minimal automation in place.",
                   "Level":1
                }
             }
          },
          {
             "Question":"How would you describe the reviewing of metrics and key performance indicators (KPIs) within your team?",
             "Options":{
                "a":{
                   "Description":"A wide range of metrics (performance, quality, cost, and timelines) are tracked, with clear KPIs aligned to business objectives.",
                   "Level":4
                },
                "b":{
                   "Description":"Metrics are well-defined, and teams regularly track key performance indicators (KPIs) and Service Level Agreements (SLAs).",
                   "Level":3
                },
                "c":{
                   "Description":"Metrics are inconsistently tracked with limited KPIs or SLAs, and the focus is mainly on operational performance.",
                   "Level":2
                },
                "d":{
                   "Description":"Metrics are tracked, but there is minimal alignment with business goals, and only basic KPIs are defined.",
                   "Level":1
                }
             }
          },
          {
             "Question":"How would you rate the maturity and effectiveness of your automation test reporting?",
             "Options":{
                "a":{
                   "Description":"Reports are highly detailed, with the ability to drill down into specifics, such as individual test case performance or task-level metrics.",
                   "Level":4
                },
                "b":{
                   "Description":"Reporting includes trend analysis over time to assess improvements, declines, or stability in key areas such as test coverage, defect rates, or delivery times.",
                   "Level":3
                },
                "c":{
                   "Description":"Partial automation, basic metrics, inconsistent reporting, some trend analysis, manual data collection still present.",
                   "Level":2
                },
                "d":{
                   "Description":"Manual reporting, limited KPIs, reactive reporting, basic metrics, no standardized processes or trend analysis.",
                   "Level":1
                }
             }
          }
       ]
    },
    {
       "Parameter":"Observability",
       "Questions":[
          {
             "Question":"How comprehensive is your system's observability strategy (e.g., monitoring logs, metrics, traces, events)?",
             "Options":{
                "a":{
                   "Description":"Comprehensive observability strategy covering logs, metrics, traces, and events. Every aspect of the system is monitored in real-time, including infrastructure, applications, and user interactions. Dashboards like Real User Monitoring (RUM) are employed, and service-wise dashboards are deployed for both non-prod and prod.",
                   "Level":4
                },
                "b":{
                   "Description":"Performance and health of critical services are continuously monitored, with alerts defined for key performance indicators (KPIs). Alerts have thresholds and regular monitoring, but some responses to incidents are manual and require human intervention.",
                   "Level":3
                },
                "c":{
                   "Description":"Monitoring and observability are mainly reactive. Teams rely on alerts or user reports to investigate issues after they’ve impacted users. The project has some level of instrumentation, but coverage is incomplete.",
                   "Level":2
                },
                "d":{
                   "Description":"Observability is in its early stages. Basic logging is implemented, but metrics and tracing are either not present or very limited.",
                   "Level":1
                }
             }
          },
          {
             "Question":"How are incidents detected in your system?",
             "Options":{
                "a":{
                   "Description":"All aspects of the system are monitored in real-time, with automated alerts notified through tools like Grafana, Sentry, or Jenkins to specific communication platforms. Nightly build health checks are implemented, and performance monitoring is actively in place.",
                   "Level":4
                },
                "b":{
                   "Description":"Alerts are defined with thresholds for critical services, and monitoring is in place for performance and health. Some responses are automated, but manual intervention may be required for certain incidents.",
                   "Level":3
                },
                "c":{
                   "Description":"Incidents are detected with basic logging and limited visibility. Troubleshooting and investigation require manual intervention, and real-time insights are limited, leading to longer resolution times.",
                   "Level":2
                },
                "d":{
                   "Description":"Incidents are often detected after they impact users. Troubleshooting is reactive with no clear strategy for preventing issues.",
                   "Level":1
                }
             }
          }
       ]
    },
    {
       "Parameter":"Automation Scalability & Flexibility",
       "Questions":[
          {
             "Question":"How scalable is your automation framework to handle large-scale tests and complex workflows?",
             "Options":{
                "a":{
                   "Description":"Fully scalable framework that can handle cross-browser, device, and cloud/container integration, high-volume test executions, and complex workflows.",
                   "Level":4
                },
                "b":{
                   "Description":"The framework is well-structured and can handle large-scale tests, including regression testing and complex scenarios.",
                   "Level":3
                },
                "c":{
                   "Description":"Automation is growing, but still limited in handling large-scale tests or complex scenarios. The framework has some flexibility but still requires effort.",
                   "Level":2
                },
                "d":{
                   "Description":"Limited or no scalability. The automation framework cannot handle increased volume of test cases and is restricted to a few specific areas.",
                   "Level":1
                }
             }
          },
          {
             "Question":"How flexible is your automation framework to integrate with new tools, platforms, and technologies?",
             "Options":{
                "a":{
                   "Description":"The framework is extremely flexible, supporting a wide range of tools, platforms, and technologies, and integrates with new ones with no or very minimal disruption.",
                   "Level":4
                },
                "b":{
                   "Description":"The framework is modular, data-dependent, and can integrate with new tools or platforms smoothly with minimal adjustments.",
                   "Level":3
                },
                "c":{
                   "Description":"The framework has some flexibility but is still specific to certain tools or has hard-coded dependencies, requiring moderate effort to adapt to changes.",
                   "Level":2
                },
                "d":{
                   "Description":"The framework is rigid, with hard-coded dependencies, and cannot easily integrate with new tools or platforms.",
                   "Level":1
                }
             }
          },
          {
             "Question":"How easily can your automation framework accommodate future growth and changes in the application?",
             "Options":{
                "a":{
                   "Description":"The framework is easily configurable, supports continuous evolution, and accommodates new changes with minimal effort and disruption.",
                   "Level":4
                },
                "b":{
                   "Description":"The framework is modular and adaptable to changes, but some adjustments are required for accommodating growth or changes in the application.",
                   "Level":3
                },
                "c":{
                   "Description":"The framework can accommodate changes, but it requires moderate effort and may have dependencies that slow down the process.",
                   "Level":2
                },
                "d":{
                   "Description":"The framework is rigid and not easily adaptable to future growth or changes in the application, often requiring significant effort for updates.",
                   "Level":1
                }
             }
          },
          {
             "Question":"How well does your automation framework handle both functional and non-functional tests across multiple platforms?",
             "Options":{
                "a":{
                   "Description":"The framework covers both functional and non-functional tests across multiple platforms and is deeply integrated into the development process.",
                   "Level":4
                },
                "b":{
                   "Description":"The framework handles functional and non-functional tests well and can scale to an extent as application needs grow.",
                   "Level":3
                },
                "c":{
                   "Description":"The framework handles functional tests, but non-functional testing and handling multiple platforms are still limited or require substantial effort.",
                   "Level":2
                },
                "d":{
                   "Description":"The framework is limited to functional tests and cannot handle non-functional tests or multiple platforms, requiring significant work to scale.",
                   "Level":1
                }
             }
          }
       ]
    },
    {
       "Parameter":"Framework & Tools Adoption",
       "Questions":[
          {
             "Question":"How would you describe the scalability and maturity of your test automation framework?",
             "Options":{
                "a":{
                   "Description":"Utilizes advanced and highly scalable frameworks capable of handling complex test scenarios and high volumes of test cases. Frameworks are typically Hybrid or BDD models.",
                   "Level":4
                },
                "b":{
                   "Description":"Employs well-defined frameworks, such as data-driven or keyword-driven frameworks, that are scalable to accommodate growing test volumes and complexity.",
                   "Level":3
                },
                "c":{
                   "Description":"Frameworks and tools have limited scalability and maintenance capabilities, with low handling of increased test complexity or volume.",
                   "Level":2
                },
                "d":{
                   "Description":"Uses basic testing frameworks inconsistently applied across projects, leading to challenges in scalability and maintenance, particularly for various testing types.",
                   "Level":1
                }
             }
          },
          {
             "Question":"What is the maturity level of tools and technologies employed in your test automation framework?",
             "Options":{
                "a":{
                   "Description":"Employs state-of-the-art tools and technologies (e.g., advanced versions of Selenium, Cypress, Appium, Rest Assured) that offer robust features and scalability.",
                   "Level":4
                },
                "b":{
                   "Description":"Frameworks actively use stable tools with regular updates, ensuring compatibility with evolving applications.",
                   "Level":3
                },
                "c":{
                   "Description":"Basic tools are in place but lack standardization, needing enhancements for better scalability and maintainability.",
                   "Level":2
                },
                "d":{
                   "Description":"Limited or outdated tools with minimal features, providing inadequate support for automation.",
                   "Level":1
                }
             }
          },
          {
             "Question":"How well is your automation repository integrated with the development repository?",
             "Options":{
                "a":{
                   "Description":"Fully integrated with the development repository, allowing synchronized updates and enhanced collaboration between development and testing teams.",
                   "Level":4
                },
                "b":{
                   "Description":"Partially integrated, supporting some level of synchronization and collaboration between teams.",
                   "Level":3
                },
                "c":{
                   "Description":"No integration; automation and development repositories are completely separate. Can be integrated in future.",
                   "Level":2
                },
                "d":{
                   "Description":"Not applicable - as the tool used for automation is not supportive.",
                   "Level":1
                }
             }
          },
          {
             "Question":"How regularly is your automation framework maintained and updated?",
             "Options":{
                "a":{
                   "Description":"Frameworks are actively maintained and updated with new features, regular refactoring, and improvements based on feedback.",
                   "Level":4
                },
                "b":{
                   "Description":"Frameworks are periodically maintained to address compatibility and evolving application requirements.",
                   "Level":3
                },
                "c":{
                   "Description":"Framework maintenance is sporadic, with occasional updates made reactively.",
                   "Level":2
                },
                "d":{
                   "Description":"Frameworks are least maintained or there are no in-house developed frameworks (Using third-party tools for automation).",
                   "Level":1
                }
             }
          }
       ]
    }
 ];

 module.exports = {
    questionnaire
 };
