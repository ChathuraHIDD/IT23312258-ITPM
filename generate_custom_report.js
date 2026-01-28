import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const REPORT_PATH = path.join(__dirname, 'test-results.json');
const OUTPUT_PATH = path.join(__dirname, 'Test_Case_Execution_Report.md');

// Map generic Ids to coverage categories if not explicitly defined in description
const COVERAGE_MAP = {
    'Pos_Fun': 'Positive Functional',
    'Neg_Fun': 'Negative Functional',
    'Pos_UI': 'UI Testing'
};

async function generateReport() {
    if (!fs.existsSync(REPORT_PATH)) {
        console.error('Report file not found. Run tests with: npx playwright test --reporter=json > test-results.json');
        return;
    }

    const fileContent = fs.readFileSync(REPORT_PATH, 'utf8');
    const jsonStartIndex = fileContent.indexOf('{');
    if (jsonStartIndex === -1) {
        console.error('No JSON data found in report file.');
        return;
    }

    const cleanJson = fileContent.substring(jsonStartIndex);
    let data;
    try {
        data = JSON.parse(cleanJson);
    } catch (e) {
        console.error('Failed to parse JSON:', e);
        return;
    }

    let reportContent = '# Test Case Execution Results\n\n';
    reportContent += '| Test Case ID | Test Case Name | Input Length | Input Text | Expected Output | Actual Output | Status | Accuracy Justification |\n';
    reportContent += '|---|---|---|---|---|---|---|---|\n';

    data.suites.forEach(suite => {
        suite.specs.forEach(spec => {
            const test = spec.tests[0];
            const result = test.results[0]; // Get the last result

            const title = spec.title;
            // Extract ID and Description
            const match = title.match(/^(.*?):\s*(.*)$/);
            let id = match ? match[1] : 'N/A';
            let description = match ? match[2] : title;

            // Attempt to extract input/expected from the source if possible, or we need to infer/hardcode mapping.
            // Since we can't easily parse variables from the JSON report without extra steps (like annotations), 
            // we'll rely on what we can get. 
            // Ideally, we should have logged these in the test as annotations or stdout.
            // For now, let's format what we have.

            const status = result.status === 'passed' ? 'Pass' : 'Fail';

            // Length type estimation
            let inputLength = 'M'; // Default
            // This part is tricky without the input data in the report. 
            // We will leave placeholders or try to parse from the description if we encoded it there.

            reportContent += `| ${id} | ${description} | M | [See Script] | [See Script] | [ See Report ] | ${status} | ${status === 'passed' ? 'Converted successfully' : 'Failed'} |\n`;
        });
    });

    fs.writeFileSync(OUTPUT_PATH, reportContent);
    console.log(`Report generated at: ${OUTPUT_PATH}`);
}

generateReport();
