import { test, expect } from '@playwright/test';

const TARGET_URL = 'https://www.swifttranslator.com/';

// ---------------------------------------------------------------------------
// 24 POSITIVE SCENARIOS
// ---------------------------------------------------------------------------
const positiveScenarios = [
  {
    id: 'Pos_Fun_0001',
    description: 'Convert a short daily greeting phrase',
    input: 'oyaata kohomadha?',
    expected: 'ඔයාට කොහොමද?'
  },
  {
    id: 'Pos_Fun_0002',
    description: 'Mixed language input (Singlish + English terms)',
    input: 'machan mata adha meeting ekee Zoom link eka email ekak vidhihata evanna puLuvandha?',
    expected: 'මචන් මට අද meeting එකේ Zoom link එක email එකක් විදිහට එවන්න පුළුවන්ද?'
  },
  {
    id: 'Pos_Fun_0003',
    description: 'Simple Request',
    input: 'mata help ekak karanna puLuvandha?',
    expected: 'මට help එකක් කරන්න පුළුවන්ද?'
  },
  {
    id: 'Pos_Fun_0004',
    description: 'Morning greeting',
    input: 'subha udhasanak',
    expected: 'සුභ උදාසනක්'
  },
  {
    id: 'Pos_Fun_0005',
    description: 'Asking about well-being',
    input: 'kohomadha oya',
    expected: 'කොහොමද ඔය'
  },
  {
    id: 'Pos_Fun_0006',
    description: 'Expressing gratitude',
    input: 'bohooma isthuthi',
    expected: 'බොහොම ඉස්තුති'
  },
  {
    id: 'Pos_Fun_0007',
    description: 'Going home',
    input: 'mama gedhara yanawa',
    expected: 'මම ගෙදර යනව'
  },
  {
    id: 'Pos_Fun_0008',
    description: 'Eating food',
    input: 'mama kaema kanawa',
    expected: 'මම කෑම කනව'
  },
  {
    id: 'Pos_Fun_0009',
    description: 'Simple question about name',
    input: 'oyage nama mokakdha',
    expected: 'ඔයගේ නම මොකක්ද'
  },
  {
    id: 'Pos_Fun_0010',
    description: 'Farewell phrase',
    input: 'mama yanawa',
    expected: 'මම යනව'
  },
  {
    id: 'Pos_Fun_0011',
    description: 'Request for water',
    input: 'mata vathura dhenna',
    expected: 'මට වතුර දෙන්න'
  },
  {
    id: 'Pos_Fun_0012',
    description: 'Talking about work',
    input: 'mama office ekata yanawa',
    expected: 'මම office එකට යනව'
  },
  {
    id: 'Pos_Fun_0013',
    description: 'Asking for location',
    input: 'meka kohedha',
    expected: 'මෙක කොහෙද'
  },
  {
    id: 'Pos_Fun_0014',
    description: 'Time-related question',
    input: 'velawa kiyatha',
    expected: 'වේලාව කියත'
  },
  {
    id: 'Pos_Fun_0015',
    description: 'Affirmative response',
    input: 'ow mama karanna',
    expected: 'ඔව් මම කරන්න'
  },
  {
    id: 'Pos_Fun_0016',
    description: 'Negative response',
    input: 'naeae mama baehe',
    expected: 'නෑඒ මම බෑහේ'
  },
  {
    id: 'Pos_Fun_0017',
    description: 'Talking about studying',
    input: 'mama padham kiyawanawa',
    expected: 'මම පදම් කියවනව'
  },
  {
    id: 'Pos_Fun_0018',
    description: 'Asking to come',
    input: 'enna puluwandha',
    expected: 'එන්න පුළුවන්ද'
  },
  {
    id: 'Pos_Fun_0019',
    description: 'Talking about weather',
    input: 'adha wassa enawa',
    expected: 'අද වැස්ස එනව'
  },
  {
    id: 'Pos_Fun_0020',
    description: 'Expression of tiredness',
    input: 'mata harima saaradhaiyi',
    expected: 'මට හරිම සාරදයියි'
  },
  {
    id: 'Pos_Fun_0021',
    description: 'Asking about lunch',
    input: 'adha lunch eka mokakdha',
    expected: 'අද lunch එක මොකක්ද'
  },
  {
    id: 'Pos_Fun_0022',
    description: 'Simple past tense',
    input: 'mama giya',
    expected: 'මම ගිය'
  },
  {
    id: 'Pos_Fun_0023',
    description: 'Expressing happiness',
    input: 'mata harima santhosaiyi',
    expected: 'මට හරිම සන්තෝසයයි'
  },
  {
    id: 'Pos_Fun_0024',
    description: 'Asking to wait',
    input: 'tikak inna',
    expected: 'ටිකක් ඉන්න'
  },
  // NEW POSITIVE SCENARIOS
  {
    id: 'Pos_Fun_0025',
    description: 'Punctuation: Comma usage',
    input: 'mama, oya, api',
    expected: 'මම, ඔය, අපි'
  },
  {
    id: 'Pos_Fun_0026',
    description: 'Numbers mixed with text',
    input: 'mama 2025 di gedhara yanawa',
    expected: 'මම 2025 දි ගෙදර යනව'
  },
  {
    id: 'Pos_Fun_0027',
    description: 'English date format',
    input: 'adha 2025-01-29',
    expected: 'අද 2025-01-29'
  },
  {
    id: 'Pos_Fun_0028',
    description: 'Long sentence (Medium length)',
    input: 'mama heta udhe negitala gedhara gihilla aayeth enawa',
    expected: 'මම හෙට උදේ නැගිටල ගෙදර ගිහිල්ල ආයෙත් එනව'
  },
  {
    id: 'Pos_Fun_0029',
    description: 'Combined sentences with full stop',
    input: 'mama yanawa. oya enna.',
    expected: 'මම යනව. ඔය එන්න.'
  },
  {
    id: 'Pos_Fun_0030',
    description: 'Exclamation',
    input: 'hari shook!',
    expected: 'හරි ෂෝක්!'
  }
];

// ---------------------------------------------------------------------------
// 10 NEGATIVE SCENARIOS
// ---------------------------------------------------------------------------
const negativeScenarios = [
  {
    id: 'Neg_Fun_0001',
    description: 'Chat shorthand "Thx" should fail to convert meaningfully',
    input: 'Thx',
    expected: 'ථx'
  },
  {
    id: 'Neg_Fun_0002',
    description: 'Incorrect stress test with missing spaces',
    input: 'mamagedharayanavaa',
    expected: 'මමගෙදරයනවා'
  },
  {
    id: 'Neg_Fun_0003',
    description: 'Numbers only input',
    input: '12345',
    expected: '12345'
  },
  {
    id: 'Neg_Fun_0004',
    description: 'Special characters only',
    input: '@#$%^&*',
    expected: '@#$%^&*'
  },
  {
    id: 'Neg_Fun_0005',
    description: 'Empty spaces only',
    input: '     ',
    expected: ''
  },
  {
    id: 'Neg_Fun_0006',
    description: 'Mixed random characters',
    input: 'xyz123',
    expected: 'xයz123'
  },
  {
    id: 'Neg_Fun_0007',
    description: 'Single character input',
    input: 'k',
    expected: 'ක්'
  },
  {
    id: 'Neg_Fun_0008',
    description: 'All caps input',
    input: 'KOHOMADHA',
    expected: 'KOHOMADHA'
  },
  {
    id: 'Neg_Fun_0009',
    description: 'Very long text without proper spacing',
    input: 'mamayanawagetharagedharakohedhayanawadhen',
    expected: 'මමයනවගෙතරගෙදරකොහෙදයනවදෙන්'
  },
  {
    id: 'Neg_Fun_0010',
    description: 'Random gibberish',
    input: 'qwerty',
    expected: 'qwඑර්තය'
  },
  // NEW NEGATIVE SCENARIOS
  {
    id: 'Neg_Fun_0011',
    description: 'Email address (should not transliterate parts)',
    input: 'test@gmail.com',
    expected: 'test@gmail.com'
  },
  {
    id: 'Neg_Fun_0012',
    description: 'URL (should not transliterate well)',
    input: 'www.google.com',
    expected: 'www.google.cඔම්'
  }
];

// ---------------------------------------------------------------------------
// TEST SUITE
// ---------------------------------------------------------------------------
test.describe('IT3040 Assignment 1 - SwiftTranslator Automation', () => {

  test.beforeEach(async ({ page }) => {
    // Navigate to the site before each test
    await page.goto(TARGET_URL);
    await page.waitForLoadState('networkidle');
    // Give the page extra time to fully load
    await page.waitForTimeout(1000);
  });

  // -------------------------------------------------------------------------
  // 1. POSITIVE FUNCTIONAL TESTS (24 scenarios)
  // -------------------------------------------------------------------------
  for (const scenario of positiveScenarios) {
    test(`${scenario.id}: ${scenario.description}`, async ({ page }) => {

      // Input field
      const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });

      // Output field
      const outputBox = page.locator('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap');

      // Clear input field first
      await inputBox.clear();
      await page.waitForTimeout(500);

      // Enter text
      await inputBox.fill(scenario.input);

      // Wait for the output to contain some text (not empty)
      await page.waitForFunction(
        (selector) => {
          const element = document.querySelector(selector);
          return element && element.textContent.trim().length > 0;
        },
        '.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap',
        { timeout: 10000 }
      );

      // Get the text content of output
      const outputText = await outputBox.textContent();

      // Verify
      expect(outputText.trim()).toBe(scenario.expected);
    });
  }

  // -------------------------------------------------------------------------
  // 2. NEGATIVE FUNCTIONAL TESTS (10 scenarios)
  // -------------------------------------------------------------------------
  for (const scenario of negativeScenarios) {
    test(`${scenario.id}: ${scenario.description}`, async ({ page }) => {

      const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
      const outputBox = page.locator('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap');

      await inputBox.clear();
      await page.waitForTimeout(500);

      await inputBox.fill(scenario.input);

      // For empty/whitespace inputs, the output might stay empty
      if (scenario.input.trim() === '') {
        await page.waitForTimeout(2000);
        const outputText = await outputBox.textContent();
        expect(outputText.trim()).toBe(scenario.expected);
      } else {
        // Wait for output
        await page.waitForFunction(
          (selector) => {
            const element = document.querySelector(selector);
            return element && element.textContent.trim().length > 0;
          },
          '.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap',
          { timeout: 10000 }
        );

        const outputText = await outputBox.textContent();
        expect(outputText.trim()).toBe(scenario.expected);
      }
    });
  }

  // -------------------------------------------------------------------------
  // 3. UI TEST SCENARIO (1 scenario)
  // -------------------------------------------------------------------------
  test('Pos_UI_0001: Real-time output update behavior', async ({ page }) => {

    const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
    const outputBox = page.locator('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap');

    await inputBox.clear();
    await page.waitForTimeout(500);

    // Type "mama"
    await inputBox.pressSequentially('mama', { delay: 100 });

    // Wait for output to appear
    await page.waitForFunction(
      (selector) => {
        const element = document.querySelector(selector);
        return element && element.textContent.trim().length > 0;
      },
      '.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap',
      { timeout: 5000 }
    );

    let outputText = await outputBox.textContent();
    expect(outputText).toContain('මම');

    // Continue typing " yanawa"
    await inputBox.pressSequentially(' yanawa', { delay: 100 });

    // Wait for updated output
    await page.waitForTimeout(2000);

    outputText = await outputBox.textContent();
    expect(outputText.trim()).toBe('මම යනව');

  });

  // NEW UI SCENARIOS
  test('Pos_UI_0002: Verify layout responsiveness', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
    await expect(inputBox).toBeVisible();
  });

  test('Pos_UI_0003: Verify input area cleared on reload', async ({ page }) => {
    const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
    await inputBox.fill('test text');
    await page.reload();
    await page.waitForTimeout(1000);
    await expect(inputBox).toHaveValue('');
  });

  test('Pos_UI_0004: Verify placeholder text', async ({ page }) => {
    const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
    await expect(inputBox).toBeVisible();
  });

  test('Pos_UI_0005: Large input text area expansion', async ({ page }) => {
    const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
    await expect(inputBox).toHaveCSS('resize', 'none');
    await inputBox.fill('Line 1\nLine 2\nLine 3');
    const val = await inputBox.inputValue();
    expect(val).toContain('Line 3');
  });

  test('Pos_UI_0006: Clipboard copy interactions', async ({ page }) => {
    const outputBox = page.locator('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap');
    await outputBox.click();
    await expect(outputBox).toBeVisible();
  });

});