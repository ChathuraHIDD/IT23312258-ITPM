# IT23312258-ITPM
# ITPM Assignment 1 - Singlish to Sinhala Translation Testing

## Student Information
- **Registration Number**: IT23312258
- **Assignment**: IT3040 - ITPM Assignment 1
- **Objective**: Test the Singlish to Sinhala translation system at https://www.swifttranslator.com/

## Project Overview

This project contains automated tests using Playwright to evaluate the accuracy and stability of a Singlish to Sinhala translation system. The test suite includes:

- **30 Positive Functional Tests**: Scenarios where the system correctly converts Singlish to Sinhala
- **12 Negative Functional Tests**: Scenarios where the system fails or behaves incorrectly
- **6 UI Tests**: Tests for real-time translation behavior and user interface functionality

### Test Coverage

The test suite comprehensively covers:

1. **Sentence Structures**
   - Simple, compound, and complex sentences
   - Interrogative (questions) and imperative (commands) forms
   - Positive and negative sentence forms

2. **Daily Language Usage**
   - Common greetings, requests, and responses
   - Polite vs informal phrasing
   - Frequently used day-to-day expressions

3. **Word Combinations & Patterns**
   - Multi-word expressions and collocations
   - Joined vs segmented word variations
   - Repeated word expressions for emphasis

4. **Grammatical Forms**
   - Tense variations (past, present, future)
   - Negation patterns
   - Singular/plural usage and pronoun variations
   - Request forms with varying politeness

5. **Input Length Variations**
   - Short inputs (≤ 30 characters)
   - Medium inputs (31–299 characters)
   - Long inputs (≥ 300 characters)

6. **Mixed Language Content**
   - English technical/brand terms embedded in Singlish
   - Place names and common English words
   - English abbreviations and short forms

7. **Formatting & Special Cases**
   - Punctuation marks
   - Currency, time formats, dates
   - Multiple spaces, line breaks, paragraph inputs
   - Slang and colloquial phrasing

## Prerequisites

- Node.js (v16 or higher)
- npm (Node Package Manager)

## Installation

1. Clone this repository:
```bash
git clone <your-repository-url>
cd IT23312258-ITPM
```

2. Install dependencies:
```bash
npm install
```

3. Install Playwright browsers:
```bash
npx playwright install
```

## Running Tests

### Run all tests:
```bash
npm test
```

### Run specific test suites:

**Positive functional tests only:**
```bash
npm run test:positive
```

**Negative functional tests only:**
```bash
npm run test:negative
```

**UI tests only:**
```bash
npm run test:ui
```

### Run tests in headed mode (see browser):
```bash
npm run test:headed
```

### Debug tests:
```bash
npm run test:debug
```

### View test report:
```bash
npm run report
```

## Project Structure

```
IT23312258-ITPM/
├── tests/
│   ├── positive-functional.spec.js   # 30 positive test scenarios
│   ├── negative-functional.spec.js   # 12 negative test scenarios
│   └── ui-tests.spec.js              # 6 UI test scenarios
├── playwright.config.js               # Playwright configuration
├── package.json                       # Project dependencies and scripts
└── README.md                          # This file
```

## Test Results

After running tests, an HTML report will be automatically generated. You can view it by running:
```bash
npm run report
```

The report includes:
- Test execution status (Pass/Fail)
- Execution time
- Screenshots on failure
- Detailed error messages

## Test Case Documentation

All test cases are documented according to the assignment template with the following information:
- Test Case ID
- Test case name
- Input length type (S/M/L)
- Input text (Singlish)
- Expected output (Sinhala)
- Actual output
- Status (Pass/Fail)
- Accuracy justification/Description of issue
- Coverage categories

## Notes

- Tests run on Chromium, Firefox, and WebKit browsers by default
- Each test waits for the page to fully load before executing
- Real-time translation updates are validated with appropriate wait conditions
- The system is designed for standard Singlish transliteration and may not handle chat-style shorthand

## Browser Configuration

The tests are configured to run on:
- Chromium (Desktop Chrome)
- Firefox (Desktop Firefox)
- WebKit (Desktop Safari)

To run on a specific browser:
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

## Troubleshooting

If tests fail to run:

1. Ensure all dependencies are installed:
```bash
npm install
npx playwright install
```

2. Check your internet connection (tests require access to https://www.swifttranslator.com/)

3. Verify Node.js version:
```bash
node --version  # Should be v16 or higher
```

4. Clear Playwright cache and reinstall:
```bash
npx playwright install --force
```

## Contact

For questions or issues regarding this assignment:
- Student: IT23312258
- Course: IT3040 - ITPM
- Year: 3, Semester 1
