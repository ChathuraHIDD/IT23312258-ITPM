T23312258-ITPM

ITPM Assignment 1 - Singlish to Sinhala Translation Testing

Student Information

Registration Number: IT23312258
Assignment: IT3040 - ITPM Assignment 1
Objective: Test the Singlish to Sinhala translation system at https://www.swifttranslator.com/

Project Overview

This project contains automated tests using Playwright to evaluate the accuracy and stability of a Singlish to Sinhala translation system. The test suite includes:

24 Positive Functional Tests: Scenarios where the system correctly converts Singlish to Sinhala
10 Negative Functional Tests: Scenarios where the system fails or behaves incorrectly
0 UI Tests: Tests for real-time translation behavior and user interface functionality and upadting

HOW TO RUN THIS PROJECT

1) Node.js (v16 or higher)
npm (Node Package Manager)
Installation

2) Clone this repository:
   1) git clone using this url(https://github.com/ChathuraHIDD/IT23312258-ITPM.git)
   2) cd IT23312258-ITPM
   3) Install dependencies:
         npm install or npm i
   4) Install Playwright browsers:
         npx playwright install
      
3)Running Tests

4)Run all tests:

npm test

5)Run specific test suites:

 Positive functional tests only:
    npm run test:positive
    
 Negative functional tests only:
    npm run test:negative
    
npm run report

Project Structure

IT23312258-ITPM/
├── tests/
│   ├── positive-functional.spec.js   # 24 positive test scenarios
│   ├── negative-functional.spec.js   # 11 negative test scenarios
│   └── ui-tests.spec.js              # 1 UI test scenarios
├── playwright.config.js               # Playwright configuration
├── package.json                       # Project dependencies and scripts
└── README.md                          # This file
Test Results

After running tests, an HTML report will be automatically generated. You can view it by running:

npm run report

The report includes:

Test execution status (Pass/Fail)
Execution time
Screenshots on failure
Detailed error messages
Test Case Documentation

All test cases are documented according to the assignment template with the following information:

Test Case ID
Test case name
Input length type (S/M/L)
Input text (Singlish)
Expected output (Sinhala)
Actual output
Status (Pass/Fail)
Accuracy justification/Description of issue
Coverage categories

Notes

Tests run on Chromium, Firefox, and WebKit browsers by default
Each test waits for the page to fully load before executing
Real-time translation updates are validated with appropriate wait conditions
The system is designed for standard Singlish transliteration and may not handle chat-style shorthand
Browser Configuration

The tests are configured to run on:

Chromium (Desktop Chrome)
Firefox (Desktop Firefox)
WebKit (Desktop Safari)
To run on a specific browser:

npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
Troubleshooting

If tests fail to run:

Ensure all dependencies are installed:
npm install
npx playwright install
Check your internet connection (tests require access to https://www.swifttranslator.com/)

Verify Node.js version:

node --version  # Should be v16 or higher
Clear Playwright cache and reinstall:
npx playwright install --force

Contact

For questions or issues regarding this assignment:

Student: IT23312258
Course: IT3040 - ITPM
Year: 3, Semester 1
