const questionnaire = [
   {
     "Parameter": "Automation coverage",
     "ParameterWeightage": 11,
     "Recommendations": [
      {
        "level": 1,
        "recommendation": "Start by automating high-priority test cases such as regression tests. Begin with smaller, repetitive tasks that are critical to project delivery."
      },
      {
        "level": 2,
        "recommendation": "Expand your automation coverage by including more functional and non-functional tests. Look into increasing test coverage for edge cases and add automation for key workflows."
      },
      {
        "level": 3,
        "recommendation": "Increase the depth of your automation by covering all critical features and business logic. Ensure your tests are comprehensive and can be executed across various platforms."
      },
      {
        "level": 4,
        "recommendation": "Achieve full automation coverage across all testing types, including performance and security testing. Continue optimizing your framework for increased execution speed and scalability."
      }
    ],
     "Questions": [
       {
         "Question": "What percentage of Regression test cases have been automated?",
         "qWeightage": 3,
         "Options": {
           "a": {
             "Range": "80-100%",
             "Level": 4
           },
           "b": {
             "Range": "50-80%",
             "Level": 3
           },
           "c": {
             "Range": "25-50%",
             "Level": 2
           },
           "d": {
             "Range": "0-25%",
             "Level": 1
           }
         }
       },
       {
         "Question": "What percentage of End-to-End test cases have been automated?",
         "qWeightage": 2,
         "Options": {
           "a": {
             "Range": "80-100%",
             "Level": 4
           },
           "b": {
             "Range": "50-80%",
             "Level": 3
           },
           "c": {
             "Range": "25-50%",
             "Level": 2
           },
           "d": {
             "Range": "0-25%",
             "Level": 1
           }
         }
       },
       {
         "Question": "What percentage of device automation test cases have been automated?",
         "qWeightage": 1,
         "Options": {
           "a": {
             "Range": "80-100%",
             "Level": 4
           },
           "b": {
             "Range": "50-80%",
             "Level": 3
           },
           "c": {
             "Range": "25-50%",
             "Level": 2
           },
           "d": {
             "Range": "0-25%",
             "Level": 1
           }
         }
       },
       {
         "Question": "Select the level of functional test cases automated?",
         "qWeightage": 4,
         "Options": {
           "a": {
             "Description": "Very few or No test cases are automated",
             "Level": 1
           },
           "b": {
             "Description": "Only Critical",
             "Level": 2
           },
           "c": {
             "Description": "Critical and Major",
             "Level": 3
           },
           "d": {
             "Description": "All functional test cases are automated",
             "Level": 4
           }
         }
       }
     ]
   },
   {
     "Parameter": "Automated NFT",
     "ParameterWeightage": 9,
     "Recommendations": [
      {
        "level": 1,
        "recommendation": "Begin automating performance, security, and accessibility testing for critical functionalities. Focus on automating the basic non-functional tests that are most relevant to your project."
      },
      {
        "level": 2,
        "recommendation": "Increase the scope of your non-functional tests by adding more complex tests like load and stress testing. Start integrating tools such as JMeter for performance and OWASP for security testing."
      },
      {
        "level": 3,
        "recommendation": "Automate a wider range of non-functional tests, such as compatibility across multiple browsers and devices. Ensure that all critical non-functional aspects are fully covered."
      },
      {
        "level": 4,
        "recommendation": "At this level, ensure that non-functional tests are integrated into your continuous integration pipeline. Regularly run automated performance and security tests, and use predictive analytics for proactive improvements."
      }
    ],
     "Questions": [
       {
         "Question": "How much percentage of your Performance Testing automated?",
         "qWeightage": 6,
         "Options": {
           "a": {
             "Range": "80-100%",
             "Level": 4
           },
           "b": {
             "Range": "50-80%",
             "Level": 3
           },
           "c": {
             "Range": "25-50%",
             "Level": 2
           },
           "d": {
             "Range": "0-25%",
             "Level": 1
           }
         }
       },
       {
         "Question": "How much percentage of your Accessibility Testing automated?",
         "qWeightage": 2,
         "Options": {
           "a": {
             "Range": "80-100%",
             "Level": 4
           },
           "b": {
             "Range": "50-80%",
             "Level": 3
           },
           "c": {
             "Range": "25-50%",
             "Level": 2
           },
           "d": {
             "Range": "0-25%",
             "Level": 1
           }
         }
       },
       {
         "Question": "How much percentage of your Security Testing automated?",
         "qWeightage": 5,
         "Options": {
           "a": {
             "Range": "80-100%",
             "Level": 4
           },
           "b": {
             "Range": "50-80%",
             "Level": 3
           },
           "c": {
             "Range": "25-50%",
             "Level": 2
           },
           "d": {
             "Range": "0-25%",
             "Level": 1
           }
         }
       },
       {
         "Question": "How much percentage of your Compatibility Testing (Browsers) automated?",
         "qWeightage": 4,
         "Options": {
           "a": {
             "Range": "80-100%",
             "Level": 4
           },
           "b": {
             "Range": "50-80%",
             "Level": 3
           },
           "c": {
             "Range": "25-50%",
             "Level": 2
           },
           "d": {
             "Range": "0-25%",
             "Level": 1
           }
         }
       },
       {
         "Question": "How much percentage of your Compatibility Testing (Devices) automated?",
         "qWeightage": 3,
         "Options": {
           "a": {
             "Range": "80-100%",
             "Level": 4
           },
           "b": {
             "Range": "50-80%",
             "Level": 3
           },
           "c": {
             "Range": "25-50%",
             "Level": 2
           },
           "d": {
             "Range": "0-25%",
             "Level": 1
           }
         }
       },
       {
         "Question": "How much percentage of your Usability Testing automated?",
         "qWeightage": 1,
         "Options": {
           "a": {
             "Range": "80-100%",
             "Level": 4
           },
           "b": {
             "Range": "50-80%",
             "Level": 3
           },
           "c": {
             "Range": "25-50%",
             "Level": 2
           },
           "d": {
             "Range": "0-25%",
             "Level": 1
           }
         }
       }
     ]
   },
   {
     "Parameter": "Script Quality",
     "ParameterWeightage": 5,
     "Recommendations": [
      {
        "level": 1,
        "recommendation": "Focus on writing simple, reusable scripts for basic functionalities. Maintain consistency in naming conventions and basic code structure for readability."
      },
      {
        "level": 2,
        "recommendation": "Improve modularity by refactoring your scripts to make them more reusable and maintainable. Start incorporating basic error handling and logging."
      },
      {
        "level": 3,
        "recommendation": "Ensure that scripts follow industry best practices, with robust error handling, logging, and a focus on scalability. Begin integrating static code analysis tools like ESLint or SonarQube."
      },
      {
        "level": 4,
        "recommendation": "Achieve high-quality scripts with extensive reusability, efficiency, and automated maintenance. Continue refactoring and use tools like TDD (Test-Driven Development) and CI/CD for continuous improvement."
      }
    ],
     "Questions": [
       {
         "Question": "Which of the following factors does your script adhere to?",
         "qWeightage": 6,
         "Options": {
           "a": {
             "Description": "Highly reusable, efficient, and modular scripts with automated maintenance",
             "Level": 4
           },
           "b": {
             "Description": "Reusable, modular scripts with strong maintainability",
             "Level": 3
           },
           "c": {
             "Description": "Some level of code reuse and maintainability, but scripts are not fully modular",
             "Level": 2
           },
           "d": {
             "Description": "Scripts lack reusability and maintainability",
             "Level": 1
           }
         }
       },
       {
         "Question": "How effectively is your automation framework designed to handle errors, ensuring proper logging, recovery, and minimal disruption?",
         "qWeightage": 5,
         "Options": {
           "a": {
             "Description": "Scripts are resilient to application changes and have robust error handling",
             "Level": 4
           },
           "b": {
             "Description": "Scripts follow coding standards and handle errors effectively",
             "Level": 3
           },
           "c": {
             "Description": "Basic error handling and adherence to coding best practices",
             "Level": 2
           },
           "d": {
             "Description": "Error handling and adherence to best practices are basic and improving",
             "Level": 1
           }
         }
       },
       {
         "Question": "How do your automation scripts and utilities conform to your coding standards?",
         "qWeightage": 4,
         "Options": {
           "a": {
             "Description": "Maintaining the Code as per your development coding standards",
             "Level": 4
           },
           "b": {
             "Description": "Ensuring script readability using proper naming conventions and comments",
             "Level": 3
           },
           "c": {
             "Description": "Following basic coding practices with occasional deviations from established standards",
             "Level": 2
           },
           "d": {
             "Description": "Limited adherence to coding standards, with basic naming conventions and minimal comments",
             "Level": 1
           }
         }
       },
       {
         "Question": "Select the usage level of static analysis tool like linting?",
         "qWeightage": 3,
         "Options": {
           "a": {
             "Description": "Extensive usage of linting",
             "Level": 4
           },
           "b": {
             "Description": "Extensive usage of linting (but few files/lines are excluded)",
             "Level": 3
           },
           "c": {
             "Description": "Minimal usage of linting",
             "Level": 2
           },
           "d": {
             "Description": "Yet to implement",
             "Level": 1
           }
         }
       },
       {
         "Question": "Do you have a code review checklist in place to ensure the quality of your scripts?",
         "qWeightage": 2,
         "Options": {
           "a": {
             "Description": "Yes",
             "Level": 2
           },
           "b": {
             "Description": "No",
             "Level": 1
           }
         }
       },
       {
         "Question": "Do you have a mechanism to identify vulnerabilities in your script?",
         "qWeightage": 1,
         "Options": {
           "a": {
             "Description": "Dashboards and alerting",
             "Level": 4
           },
           "b": {
             "Description": "Dashboards only",
             "Level": 3
           },
           "c": {
             "Description": "Alerting only",
             "Level": 2
           },
           "d": {
             "Description": "None",
             "Level": 1
           }
         }
       }
     ]
   },
   {
     "Parameter": "Automation Effectiveness",
     "ParameterWeightage": 10,
     "Recommendations": [
      {
        "level": 1,
        "recommendation": "Focus on ensuring automation coverage for the most critical and repetitive tasks. Prioritize building a foundation that can scale as your testing requirements grow."
      },
      {
        "level": 2,
        "recommendation": "Improve test execution time by optimizing your automation framework. Start implementing parallel test execution and consider implementing a feedback loop for better reporting."
      },
      {
        "level": 3,
        "recommendation": "Enhance your automation by adding complex test scenarios and improving test execution efficiency. Ensure that automation provides timely feedback and integrates with the CI/CD pipeline."
      },
      {
        "level": 4,
        "recommendation": "Ensure your automation tests run seamlessly in a CI/CD pipeline and offer real-time feedback. Continually optimize your framework for minimal flakiness and maximum reliability."
      }
    ],
     "Questions": [
       {
         "Question": "Choose the applicable parallel execution mechanism in your automation framework?",
         "qWeightage": 3,
         "Options": {
           "a": {
             "Description": "Tests execute quickly, with extensive parallel execution capabilities",
             "Level": 4
           },
           "b": {
             "Description": "Parallel execution is not extensive, but increasing at the moment",
             "Level": 3
           },
           "c": {
             "Description": "Parallel execution is introduced, not extensively used",
             "Level": 2
           },
           "d": {
             "Description": "Not applicable",
             "Level": 1
           }
         }
       },
       {
         "Question": "How do you rate the level of flakiness in your automation?",
         "qWeightage": 4,
         "Options": {
           "a": {
             "Description": "No flakiness - Tests are consistently reliable",
             "Level": 4
           },
           "b": {
             "Description": "Low flakiness - Occasional failures, but easily resolved",
             "Level": 3
           },
           "c": {
             "Description": "Moderate flakiness - Frequent failures requiring investigation",
             "Level": 2
           },
           "d": {
             "Description": "No automation or Tests are unreliable and often fail without clear reasons",
             "Level": 1
           }
         }
       },
       {
         "Question": "How do you rate the reduction of manual intervention with your automation?",
         "qWeightage": 1,
         "Options": {
           "a": {
             "Description": "Complete reduction - No manual intervention required",
             "Level": 4
           },
           "b": {
             "Description": "Significant reduction - Minimal manual intervention needed",
             "Level": 3
           },
           "c": {
             "Description": "Moderate reduction - Some manual intervention still necessary",
             "Level": 2
           },
           "d": {
             "Description": "Minimal reduction - Manual intervention is frequently required",
             "Level": 1
           }
         }
       },
       {
         "Question": "Select your automation frequency and reliability:",
         "qWeightage": 2,
         "Options": {
           "a": {
             "Description": "Automation test executes for every developer code commit and provides real-time feedback during test execution. Eg. Alerts triggered to your communication groups i.e slack/mail/gchats",
             "Level": 4
           },
           "b": {
             "Description": "Regular test execution (daily or per release), with good reliability",
             "Level": 3
           },
           "c": {
             "Description": "Test execution frequency is improving, but reliability is still an issue",
             "Level": 2
           },
           "d": {
             "Description": "Unreliable tests, high failure rates due to environment or script issues",
             "Level": 1
           }
         }
       }
     ]
   },
   {
     "Parameter": "CI/CD Integration",
     "ParameterWeightage": 4,
     "Recommendations": [
      {
        "level": 1,
        "recommendation": "Start by integrating basic automation tests into your existing CI pipeline. Ensure that automated tests run with each commit or nightly builds."
      },
      {
        "level": 2,
        "recommendation": "Expand your CI/CD pipeline to include more comprehensive tests (e.g., regression and integration tests) that run with each code change, ensuring continuous feedback."
      },
      {
        "level": 3,
        "recommendation": "Optimize your CI/CD pipeline to handle more complex test cases and ensure faster feedback. Add parallel test execution to speed up your pipeline."
      },
      {
        "level": 4,
        "recommendation": "Ensure full integration of your automation tests with the CI/CD pipeline. Automate deployment, testing, and feedback at every stage of the development cycle, with zero manual intervention."
      }
    ],
     "Questions": [
       {
         "Question": "Where do you stand on the Continuous Integration/Continuous delivery (CI/CD) perspective?",
         "qWeightage": 1,
         "Options": {
           "a": {
             "Description": "Automation is fully integrated into CI/CD pipelines, providing feedback at every stage of development",
             "Level": 4
           },
           "b": {
             "Description": "Full integration with CI/CD pipelines, tests are triggered after code commits (dev completion) or nightly builds only",
             "Level": 3
           },
           "c": {
             "Description": "Partial integration with CI/CD, but test automation triggers are not consistent",
             "Level": 2
           },
           "d": {
             "Description": "Yet to implement CI/CD",
             "Level": 1
           }
         }
       }
     ]
   },
   {
     "Parameter": "Automation Strategy & Process Stability",
     "ParameterWeightage": 13,
     "Recommendations": [
      {
        "level": 1,
        "recommendation": "Start by focusing on basic automation within your sprints. Build simple, repeatable automation processes and ensure that they are integrated into the development lifecycle."
      },
      {
        "level": 2,
        "recommendation": "Expand your strategy to include more comprehensive automation tools and processes. Align your strategy with business goals and adopt industry-standard tools for greater efficiency."
      },
      {
        "level": 3,
        "recommendation": "Create a structured, documented automation strategy that includes clear goals, maintenance processes, and regular reviews. Implement continuous improvement practices."
      },
      {
        "level": 4,
        "recommendation": "At this level, ensure that your automation strategy is fully aligned with both technical and business goals. Regularly review and evolve your processes, keeping them adaptable to future trends and challenges."
      }
    ],
     "Questions": [
       {
         "Question": "What level of automation adoption is implemented in your project?",
         "qWeightage": 5,
         "Options": {
           "a": {
             "Description": "In-sprint automation - Integrated and executed within the current sprint",
             "Level": 4
           },
           "b": {
             "Description": "N-1 automation - Automated after the previous sprint, ready for upcoming releases",
             "Level": 3
           },
           "c": {
             "Description": "Partial automation - Only specific tasks are automated",
             "Level": 2
           },
           "d": {
             "Description": "No automation - Automation is not yet implemented in the project",
             "Level": 1
           }
         }
       },
       {
         "Question": "How well does your automation align with industry-standard advanced tools? (e.g., AI, machine learning, cloud-based testing tools)",
         "qWeightage": 4,
         "Options": {
           "a": {
             "Description": "Fully aligned - We use cutting-edge tools like AI-driven testing, cloud-based solutions, and continuous integration platforms.",
             "Level": 4
           },
           "b": {
             "Description": "Mostly aligned - We use some industry-standard tools, such as automated test management and cloud solutions.",
             "Level": 3
           },
           "c": {
             "Description": "Partially aligned - We use basic tools but haven't integrated advanced solutions like AI or machine learning yet.",
             "Level": 2
           },
           "d": {
             "Description": "Not aligned - We don't currently use industry-standard advanced tools in our automation process.",
             "Level": 1
           }
         }
       },
       {
         "Question": "To what extent does your team follow the shift-left approach and implement the industrial test pyramid in your automation testing strategy?",
         "qWeightage": 3,
         "Options": {
           "a": {
             "Description": "Extensive shift left and Industrial test pyramid is followed",
             "Level": 4
           },
           "b": {
             "Description": "Effective shift left and Industrial test pyramid is followed to an extent",
             "Level": 3
           },
           "c": {
             "Description": "No industrial pyramid, but shift left approach is followed.",
             "Level": 2
           },
           "d": {
             "Description": "No shift left strategies are followed",
             "Level": 1
           }
         }
       },
       {
         "Question": "How would you categorize your current automation strategy and its alignment with processes and business goals?",
         "qWeightage": 2,
         "Options": {
           "a": {
             "Description": "Advanced automation strategies aligned with business goals, proactive planning for future releases",
             "Level": 4
           },
           "b": {
             "Description": "Automation strategy is Documented, governance processes in place for script updates and reviews",
             "Level": 3
           },
           "c": {
             "Description": "Documented automation strategy, governance processes in place for script updates and reviews are followed only to an extent because of project timelines.",
             "Level": 2
           },
           "d": {
             "Description": "Automation strategy is not in place",
             "Level": 1
           }
         }
       },
       {
         "Question": "How would you rate the strength of your project governance and continuous improvement processes?",
         "qWeightage": 1,
         "Options": {
           "a": {
             "Description": "Strong governance and continuous improvement processes are fully implemented and consistently followed.",
             "Level": 4
           },
           "b": {
             "Description": "Governance and continuous improvement processes are in place and regularly reviewed.",
             "Level": 3
           },
           "c": {
             "Description": "Governance is established, but continuous improvement processes are not consistently followed.",
             "Level": 2
           },
           "d": {
             "Description": "There is little to no governance or continuous improvement processes in place.",
             "Level": 1
           }
         }
       }
     ]
   },
   {
     "Parameter": "Defect Detection Ratio",
     "ParameterWeightage": 3,
     "Recommendations": [
      {
        "level": 1,
        "recommendation": "Automate the detection of defects in critical areas like regression tests. Start tracking defect metrics and identify high-priority areas for automation."
      },
      {
        "level": 2,
        "recommendation": "Increase automation coverage in less-tested areas and refine your detection processes. Aim to cover edge cases and report defects in real-time."
      },
      {
        "level": 3,
        "recommendation": "Expand your automation suite to include complex scenarios, ensuring high defect detection across all project areas. Begin focusing on defect prevention."
      },
      {
        "level": 4,
        "recommendation": "You’re already at the top! Maintain your defect detection coverage by continuously optimizing your tests and incorporating predictive analytics to catch defects early."
      }
    ],
     "Questions": [
       {
         "Question": "What is the Defect Detection Rate(%) achieved through your automation? (Total Defects Found / Defects detected by Automation) * 100",
         "qWeightage": 1,
         "Options": {
           "a": {
             "Description": ">80%",
             "Level": 4
           },
           "b": {
             "Description": "60% - 80%",
             "Level": 3
           },
           "c": {
             "Description": "40% - 60%",
             "Level": 2
           },
           "d": {
             "Description": "<40%",
             "Level": 1
           }
         }
       }
     ]
   },
   {
     "Parameter": "Automation ROI",
     "ParameterWeightage": 2,
     "Recommendations": [
      {
        "level": 1,
        "recommendation": "Start by tracking simple ROI metrics such as test execution time saved. Focus on automating smaller, time-consuming tasks for quick returns."
      },
      {
        "level": 2,
        "recommendation": "Expand your ROI analysis to include cost savings and efficiency improvements. Automate more complex tests and continue measuring ROI to ensure it improves over time."
      },
      {
        "level": 3,
        "recommendation": "Enhance ROI tracking to include both quantitative (time/cost) and qualitative (business impact) metrics. Optimize your framework to maximize return on automation efforts."
      },
      {
        "level": 4,
        "recommendation": "Track and measure ROI in real-time using advanced metrics. Regularly optimize and refine your automation efforts to continually increase ROI and reduce testing costs."
      }
    ],
     "Questions": [
       {
         "Question": "What is the return on investment (ROI) of your automation? ((Benefits - Cost) / Cost) * 100",
         "qWeightage": 2,
         "Options": {
           "a": {
             "Description": ">80%",
             "Level": 4
           },
           "b": {
             "Description": "60% - 80%",
             "Level": 3
           },
           "c": {
             "Description": "40% - 60%",
             "Level": 2
           },
           "d": {
             "Description": "<40%",
             "Level": 1
           }
         }
       },
       {
         "Question": "How do you measure the success of your automation efforts in terms of time savings and business value?",
         "qWeightage": 1,
         "Options": {
           "a": {
             "Description": "Extensive time reduction, Increased business value through rapid releases and Decreased production failures",
             "Level": 4
           },
           "b": {
             "Description": "High efficiency and enhanced business impact",
             "Level": 3
           },
           "c": {
             "Description": "Moderate improvement in efficiency and business outcomes",
             "Level": 2
           },
           "d": {
             "Description": "No Automation or Initial Stage of Automation with very minimal practices in place",
             "Level": 1
           }
         }
       }
     ]
   },
   {
     "Parameter": "Team Skills & Expertise",
     "ParameterWeightage": 1,
     "Recommendations": [
      {
        "level": 1,
        "recommendation": "Provide foundational training on automation tools. Foster collaboration between developers and testers to bridge the gap and create a shared understanding of automation."
      },
      {
        "level": 2,
        "recommendation": "Train your team on advanced frameworks and encourage hands-on experience. Introduce specialized roles like SDETs to build expertise in both development and testing."
      },
      {
        "level": 3,
        "recommendation": "Focus on building mastery in advanced automation tools and techniques. Regularly review team performance and facilitate knowledge-sharing sessions."
      },
      {
        "level": 4,
        "recommendation": "Your team is highly skilled. Continue to encourage learning by adopting the latest automation technologies and sharing knowledge with the wider organization."
      }
    ],
     "Questions": [
       {
         "Question": "How competent is your team in cross-functional collaboration between developers and testers?",
         "qWeightage": 7,
         "Options": {
           "a": {
             "Description": "Highly Skilled – Excellent collaboration with seamless communication and teamwork.",
             "Level": 4
           },
           "b": {
             "Description": "Moderately Skilled – Good collaboration but with some room for improvement.",
             "Level": 3
           },
           "c": {
             "Description": "Minimally Skilled – Limited collaboration with noticeable gaps in teamwork.",
             "Level": 2
           },
           "d": {
             "Description": "Not Skilled – Collaboration is poor or non-existent.",
             "Level": 1
           }
         }
       },
       {
         "Question": "How well does your team adopt a 'test automation first' mindset in the development process?",
         "qWeightage": 6,
         "Options": {
           "a": {
             "Description": "Extensively – Test automation is deeply integrated into every phase of the development process from the start.",
             "Level": 4
           },
           "b": {
             "Description": "Consistently – Test automation is regularly implemented early in most projects but may vary in some cases.",
             "Level": 3
           },
           "c": {
             "Description": "Rarely – Test automation is seldom used or only introduced later in the development cycle.",
             "Level": 2
           },
           "d": {
             "Description": "Not at All – Test automation is not adopted or prioritized in the development process.",
             "Level": 1
           }
         }
       },
       {
         "Question": "Select the proficiency level of team members in hands-on experience with Functional test Automation?",
         "qWeightage": 5,
         "Options": {
           "a": {
             "Description": "Expert",
             "Level": 4
           },
           "b": {
             "Description": "Advanced",
             "Level": 3
           },
           "c": {
             "Description": "Intermediate",
             "Level": 2
           },
           "d": {
             "Description": "Beginner",
             "Level": 1
           }
         }
       },
       {
         "Question": "Select the proficiency level of team members in hands-on experience with Non-Functional test Automation?",
         "qWeightage": 4,
         "Options": {
           "a": {
             "Description": "Expert",
             "Level": 4
           },
           "b": {
             "Description": "Advanced",
             "Level": 3
           },
           "c": {
             "Description": "Intermediate",
             "Level": 2
           },
           "d": {
             "Description": "Beginner",
             "Level": 1
           }
         }
       },
       {
         "Question": "What role best describes the primary focus of your team responsibilities?",
         "qWeightage": 3,
         "Options": {
           "a": {
             "Description": "Quality Advocate - Emphasizes shift-left practices, trains both development and QA teams on quality culture, and adapts to different roles as needed.",
             "Level": 4
           },
           "b": {
             "Description": "SDET (Software Development Engineer in Test) – Focuses on developing automated tests and testing tools.",
             "Level": 3
           },
           "c": {
             "Description": "QE (Quality Engineering) – Integrates quality practices into the development lifecycle, with an emphasis on automation.",
             "Level": 2
           },
           "d": {
             "Description": "QA (Quality Assurance) – Ensures product quality through manual testing and process oversight.",
             "Level": 1
           }
         }
       },
       {
         "Question": "How frequently do you review application logs to diagnose underlying issues?",
         "qWeightage": 1,
         "Options": {
           "a": {
             "Description": "Proactively",
             "Level": 4
           },
           "b": {
             "Description": "On demand",
             "Level": 3
           },
           "c": {
             "Description": "Rarely",
             "Level": 2
           },
           "d": {
             "Description": "Never",
             "Level": 1
           }
         }
       },
       {
         "Question": "How often do you review developer code to identify underlying issues?",
         "qWeightage": 2,
         "Options": {
           "a": {
             "Description": "Always",
             "Level": 4
           },
           "b": {
             "Description": "Frequently",
             "Level": 3
           },
           "c": {
             "Description": "Rarely",
             "Level": 2
           },
           "d": {
             "Description": "Never",
             "Level": 1
           }
         }
       }
     ]
   },
   {
     "Parameter": "Metrics & Reporting",
     "ParameterWeightage": 8,
     "Recommendations": [
      {
        "level": 1,
        "recommendation": "Start by tracking basic metrics such as pass/fail rates and execution times. Use simple reporting tools to share these metrics with the team."
      },
      {
        "level": 2,
        "recommendation": "Improve your reporting with more detailed metrics such as test coverage and failure rates. Integrate automated reporting into your development process."
      },
      {
        "level": 3,
        "recommendation": "Create real-time dashboards for advanced reporting and focus on KPIs that align with business goals. Automate the creation of reports and trend analysis."
      },
      {
        "level": 4,
        "recommendation": "Refine your reporting tools to provide real-time feedback with predictive analytics. Ensure that your reports are actionable and contribute to continuous improvement."
      }
    ],
     "Questions": [
       {
         "Question": "How effectively are automation metrics tracked and analyzed within your team?",
         "qWeightage": 3,
         "Options": {
           "a": {
             "Description": "Metrics are collected and reported in real-time with dashboards that offer deep insights into performance, issues, and trends.",
             "Level": 4
           },
           "b": {
             "Description": "Most reporting is automated, but with periodic manual intervention. Metrics are available in near real-time.",
             "Level": 3
           },
           "c": {
             "Description": "Basic reporting and dashboards for tracking automation metrics (pass/fail rates, execution time)",
             "Level": 2
           },
           "d": {
             "Description": "Metrics are primarily tracked manually, with no or very minimal automation in place.",
             "Level": 1
           }
         }
       },
       {
         "Question": "How would you describe the reviewing of metrics and key performance indicators (KPIs) within your team?",
         "qWeightage": 2,
         "Options": {
           "a": {
             "Description": "A wide range of metrics (performance, quality, cost, and timelines) are tracked, with clear KPIs aligned to business objectives.",
             "Level": 4
           },
           "b": {
             "Description": "Metrics are well-defined, and teams regularly track key performance indicators (KPIs) and Service Level Agreements (SLAs).",
             "Level": 3
           },
           "c": {
             "Description": "Metrics are inconsistently tracked with limited KPIs or SLAs, and the focus is mainly on operational performance.",
             "Level": 2
           },
           "d": {
             "Description": "Metrics are tracked, but there is minimal alignment with business goals, and only basic KPIs are defined.",
             "Level": 1
           }
         }
       },
       {
         "Question": "How would you rate the maturity and effectiveness of your automation test reporting?",
         "qWeightage": 1,
         "Options": {
           "a": {
             "Description": "Reports are highly detailed, with the ability to drill down into specifics, such as individual test case performance or task-level metrics.",
             "Level": 4
           },
           "b": {
             "Description": "Reporting includes trend analysis over time to assess improvements, declines, or stability in key areas such as test coverage, defect rates, or delivery times.",
             "Level": 3
           },
           "c": {
             "Description": "Partial automation, basic metrics, inconsistent reporting, some trend analysis, manual data collection still present.",
             "Level": 2
           },
           "d": {
             "Description": "Manual reporting, limited KPIs, reactive reporting, basic metrics, no standardized processes or trend analysis.",
             "Level": 1
           }
         }
       }
     ]
   },
   {
     "Parameter": "Observability",
     "ParameterWeightage": 7,
     "Recommendations": [
      {
        "level": 1,
        "recommendation": "Implement basic logging and monitoring for your most critical systems. Set up alerts to notify the team when issues arise."
      },
      {
        "level": 2,
        "recommendation": "Expand your observability coverage to include more critical systems and start using tools like Grafana to visualize logs, metrics, and performance."
      },
      {
        "level": 3,
        "recommendation": "Ensure comprehensive observability by integrating logs, metrics, and traces. Implement proactive monitoring and automate incident response for faster resolution."
      },
      {
        "level": 4,
        "recommendation": "Maintain high observability across all systems with real-time insights. Use AI-based alerts and automated monitoring to ensure reliability at scale."
      }
    ],
     "Questions": [
       {
         "Question": "How comprehensive is your system's observability strategy (e.g., monitoring logs, metrics, traces, events)?",
         "qWeightage": 2,
         "Options": {
           "a": {
             "Description": "Comprehensive observability strategy covering logs, metrics, traces, and events. Every aspect of the system is monitored in real-time, including infrastructure, applications, and user interactions. Dashboards like Real User Monitoring (RUM) are employed, and service-wise dashboards are deployed for both non-prod and prod.",
             "Level": 4
           },
           "b": {
             "Description": "Performance and health of critical services are continuously monitored, with alerts defined for key performance indicators (KPIs). Alerts have thresholds and regular monitoring, but some responses to incidents are manual and require human intervention.",
             "Level": 3
           },
           "c": {
             "Description": "Monitoring and observability are mainly reactive. Teams rely on alerts or user reports to investigate issues after they’ve impacted users. The project has some level of instrumentation, but coverage is incomplete.",
             "Level": 2
           },
           "d": {
             "Description": "Observability is in its early stages. Basic logging is implemented, but metrics and tracing are either not present or very limited.",
             "Level": 1
           }
         }
       },
       {
         "Question": "How are incidents detected in your system?",
         "qWeightage": 1,
         "Options": {
           "a": {
             "Description": "All aspects of the system are monitored in real-time, with automated alerts notified through tools like Grafana, Sentry, or Jenkins to specific communication platforms. Nightly build health checks are implemented, and performance monitoring is actively in place.",
             "Level": 4
           },
           "b": {
             "Description": "Alerts are defined with thresholds for critical services, and monitoring is in place for performance and health. Some responses are automated, but manual intervention may be required for certain incidents.",
             "Level": 3
           },
           "c": {
             "Description": "Incidents are detected with basic logging and limited visibility. Troubleshooting and investigation require manual intervention, and real-time insights are limited, leading to longer resolution times.",
             "Level": 2
           },
           "d": {
             "Description": "Incidents are often detected after they impact users. Troubleshooting is reactive with no clear strategy for preventing issues.",
             "Level": 1
           }
         }
       }
     ]
   },
   {
     "Parameter": "Automation Scalability & Flexibility",
     "ParameterWeightage": 6,
     "Recommendations": [
      {
        "level": 1,
        "recommendation": "Start with automating simple test cases and ensure that your framework is adaptable to handle changes in test requirements and environments."
      },
      {
        "level": 2,
        "recommendation": "Expand your framework to handle more complex scenarios and platforms. Start adding support for cross-browser and cross-device testing."
      },
      {
        "level": 3,
        "recommendation": "Make your framework scalable by handling larger test suites and complex workflows. Optimize it for parallel test execution and integrate it with cloud-based testing."
      },
      {
        "level": 4,
        "recommendation": "Ensure your automation framework is highly scalable and adaptable to future technologies. Continue optimizing for speed, reliability, and increased test volume."
      }
    ],
     "Questions": [
       {
         "Question": "How scalable is your automation framework to handle large-scale tests and complex workflows?",
         "qWeightage": 4,
         "Options": {
           "a": {
             "Description": "Fully scalable framework that can handle cross-browser, device, and cloud/container integration, high-volume test executions, and complex workflows.",
             "Level": 4
           },
           "b": {
             "Description": "The framework is well-structured and can handle large-scale tests, including regression testing and complex scenarios.",
             "Level": 3
           },
           "c": {
             "Description": "Automation is growing, but still limited in handling large-scale tests or complex scenarios. The framework has some flexibility but still requires effort.",
             "Level": 2
           },
           "d": {
             "Description": "Limited or no scalability. The automation framework cannot handle increased volume of test cases and is restricted to a few specific areas.",
             "Level": 1
           }
         }
       },
       {
         "Question": "How flexible is your automation framework to integrate with new tools, platforms, and technologies?",
         "qWeightage": 3,
         "Options": {
           "a": {
             "Description": "The framework is extremely flexible, supporting a wide range of tools, platforms, and technologies, and integrates with new ones with no or very minimal disruption.",
             "Level": 4
           },
           "b": {
             "Description": "The framework is modular, data-dependent, and can integrate with new tools or platforms smoothly with minimal adjustments.",
             "Level": 3
           },
           "c": {
             "Description": "The framework has some flexibility but is still specific to certain tools or has hard-coded dependencies, requiring moderate effort to adapt to changes.",
             "Level": 2
           },
           "d": {
             "Description": "The framework is rigid, with hard-coded dependencies, and cannot easily integrate with new tools or platforms.",
             "Level": 1
           }
         }
       },
       {
         "Question": "How easily can your automation framework accommodate future growth and changes in the application?",
         "qWeightage": 2,
         "Options": {
           "a": {
             "Description": "The framework is easily configurable, supports continuous evolution, and accommodates new changes with minimal effort and disruption.",
             "Level": 4
           },
           "b": {
             "Description": "The framework is modular and adaptable to changes, but some adjustments are required for accommodating growth or changes in the application.",
             "Level": 3
           },
           "c": {
             "Description": "The framework can accommodate changes, but it requires moderate effort and may have dependencies that slow down the process.",
             "Level": 2
           },
           "d": {
             "Description": "The framework is rigid and not easily adaptable to future growth or changes in the application, often requiring significant effort for updates.",
             "Level": 1
           }
         }
       },
       {
         "Question": "How well does your automation framework handle both functional and non-functional tests across multiple platforms?",
         "qWeightage": 1,
         "Options": {
           "a": {
             "Description": "The framework covers both functional and non-functional tests across multiple platforms and is deeply integrated into the development process.",
             "Level": 4
           },
           "b": {
             "Description": "The framework handles functional and non-functional tests well and can scale to an extent as application needs grow.",
             "Level": 3
           },
           "c": {
             "Description": "The framework handles functional tests, but non-functional testing and handling multiple platforms are still limited or require substantial effort.",
             "Level": 2
           },
           "d": {
             "Description": "The framework is limited to functional tests and cannot handle non-functional tests or multiple platforms, requiring significant work to scale.",
             "Level": 1
           }
         }
       }
     ]
   },
   {
     "Parameter": "Framework & Tools Adoption",
     "ParameterWeightage": 12,
     "Recommendations": [
      {
        "level": 1,
        "recommendation": "Start with basic frameworks like keyword-driven or data-driven models. Adopt simple tools like Selenium and JUnit to begin automating tests."
      },
      {
        "level": 2,
        "recommendation": "Use more advanced frameworks like BDD or hybrid models for better scalability. Introduce tools like Appium for mobile testing and improve your test automation pipeline."
      },
      {
        "level": 3,
        "recommendation": "Focus on optimizing your framework for handling complex scenarios. Implement CI/CD integration, parallel test execution, and continuous test feedback."
      },
      {
        "level": 4,
        "recommendation": "Continue refining your framework with the latest tools and technologies. Ensure that your framework is flexible, scalable, and fully integrated with CI/CD for real-time testing."
      }
    ],
     "Questions": [
       {
         "Question": "How would you describe the scalability and maturity of your test automation framework?",
         "qWeightage": 4,
         "Options": {
           "a": {
             "Description": "Utilizes advanced and highly scalable frameworks capable of handling complex test scenarios and high volumes of test cases. Frameworks are typically Hybrid or BDD models.",
             "Level": 4
           },
           "b": {
             "Description": "Employs well-defined frameworks, such as data-driven or keyword-driven frameworks, that are scalable to accommodate growing test volumes and complexity.",
             "Level": 3
           },
           "c": {
             "Description": "Frameworks and tools have limited scalability and maintenance capabilities, with low handling of increased test complexity or volume.",
             "Level": 2
           },
           "d": {
             "Description": "Uses basic testing frameworks inconsistently applied across projects, leading to challenges in scalability and maintenance, particularly for various testing types.",
             "Level": 1
           }
         }
       },
       {
         "Question": "What is the maturity level of tools and technologies employed in your test automation framework?",
         "qWeightage": 3,
         "Options": {
           "a": {
             "Description": "Employs state-of-the-art tools and technologies (e.g., advanced versions of Selenium, Cypress, Appium, Rest Assured) that offer robust features and scalability.",
             "Level": 4
           },
           "b": {
             "Description": "Frameworks actively use stable tools with regular updates, ensuring compatibility with evolving applications.",
             "Level": 3
           },
           "c": {
             "Description": "Basic tools are in place but lack standardization, needing enhancements for better scalability and maintainability.",
             "Level": 2
           },
           "d": {
             "Description": "Limited or outdated tools with minimal features, providing inadequate support for automation.",
             "Level": 1
           }
         }
       },
       {
         "Question": "How well is your automation repository integrated with the development repository?",
         "qWeightage": 2,
         "Options": {
           "a": {
             "Description": "Fully integrated with the development repository, allowing synchronized updates and enhanced collaboration between development and testing teams.",
             "Level": 4
           },
           "b": {
             "Description": "Partially integrated, supporting some level of synchronization and collaboration between teams.",
             "Level": 3
           },
           "c": {
             "Description": "No integration; automation and development repositories are completely separate. Can be integrated in future.",
             "Level": 2
           },
           "d": {
             "Description": "Not applicable - as the tool used for automation is not supportive.",
             "Level": 1
           }
         }
       },
       {
         "Question": "How regularly is your automation framework maintained and updated?",
         "qWeightage": 1,
         "Options": {
           "a": {
             "Description": "Frameworks are actively maintained and updated with new features, regular refactoring, and improvements based on feedback.",
             "Level": 4
           },
           "b": {
             "Description": "Frameworks are periodically maintained to address compatibility and evolving application requirements.",
             "Level": 3
           },
           "c": {
             "Description": "Framework maintenance is sporadic, with occasional updates made reactively.",
             "Level": 2
           },
           "d": {
             "Description": "Frameworks are least maintained or there are no in-house developed frameworks (Using third-party tools for automation).",
             "Level": 1
           }
         }
       }
     ]
   }
 ];

 module.exports = {
    questionnaire
 };
