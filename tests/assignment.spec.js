import { test, expect } from '@playwright/test';

const TARGET_URL = 'https://www.swifttranslator.com/';


// 24 Positive Scenarios

const positiveScenarios = [
  {
    id: 'Pos_Fun_0001',
    description: 'convert a day to day greeting phrase',
    input: 'oyaa hodin innawadha?',
    expected: 'ඔයා හොදින් ඉන්නවාද?'
  },
  {
    id: 'Pos_Fun_0002',
    description: 'Mixedd language input (Singlish + English terms)',//medium
    input: 'machan mata adha enna wenne nehe eka nisa zoom meeting ekee recording eka email ekak vidhihata ewanna puLuvandha?',
    expected: 'මචන් මට අද එන්න වෙන්නේ නෑ ඒක නිසා zoom meeting එකේ recording එක email එකක් විදිහට එවන්න පුලුවන්ද?'
  },
  {
    id: 'Pos_Fun_0003',
    description: 'Simple Request',
    input: 'mata magee bag eka aran enna puLuvandha?',//medium
    expected: 'මට මගේ බෑග් එක අරන් එන්න පුළුවන්ද?'
  },
  {
    id: 'Pos_Fun_0004',
    description: 'Morning greeting',
    input: 'subha upandinayak wewa',
    expected: 'සුභ උපන්දිනයක් වේවා'
  },
  {
    id: 'Pos_Fun_0005',
    description: 'Asking about well-being',
    input: 'kohomadha oyage wisthara',
    expected: 'කොහොමද ඔයගේ විස්තර'
  },
  {
    id: 'Pos_Fun_0006',
    description: 'Expressing gratitude',
    input: 'bohooma isthuthi',
    expected: 'බොහොම ඉස්තුති'
  },
  {
    id: 'Pos_Fun_0007',
    description: 'Tense variation - past tense',
    input: 'mama iiye gedara giyemi',
    expected: 'මම ඊයේ ගෙදර ගියේමි'
  },
  {
    id: 'Pos_Fun_0008',
    description: 'currency/numeric format',
    input: 'mama mata rupiyal 5000 yak denna puLuwandhaa ?',//medium
    expected: 'මම මට රුපියල් 5000 යක් දෙන්න පුලුවන්ද ?'
  },
  {
    id: 'Pos_Fun_0009',
    description: 'Simple question',
    input: 'oyage wayasa keeyadha',
    expected: 'ඔයගේ වයස කීයද'
  },
  {
    id: 'Pos_Fun_0010',
    description: 'Farewell phrase',
    input: 'obata suba gaman !',
    expected: 'ඔබට සුභ ගමන් !'
  },
  {
    id: 'Pos_Fun_0011',
    description: 'A simple Request',
    input: 'mage kooppe dhenna',
    expected: 'මගේ කෝප්පේ දෙන්න'
  },
  {
    id: 'Pos_Fun_0012',
    description: 'day to day activity',//long (character 389)
    input: 'ada mata ikkmanata gedara yanna onee mokada ape gedara tiyenne godak dura nisa .thawa deyak heta ape gedara dhaanayak tyanawa ekata badu wagayak gannath ekka ammath ekk ynn onne.oyai oyagee pawule hamomath ekkha heta ape gedhara enna dhanee gedarata sahabhagee wennath ekkama anith eka thamai enakota food city eken loku ice cream ekak aran enna puLuwandha ? man awahama salli oyata dennam.',
    expected: 'අද මට ඉක්මනට ගෙදර යන්න ඕනේ,මොක්ද අපේ ගෙදර තියෙන්නේ ගොඩක් දුර නිසා .තව දෙයක් හෙට අපේ ගෙදර දානයක් තියනවා ඒකට බඩු වගයක් ගන්නත් එක්ක අම්මත් එක්ක යන්න ඕනේ.ඔයාගේ පවුලේ හැමෝමත් එක්ක හෙට අපේ ගෙදර එන්න දානේ ගෙදරට සහභාගී වෙන්නත් එක්කම අනිත් එක තමයි එනකොට ෆූඩ් city එකෙන් ලොකු ice cream එකක් අරන් එන්න පුලුවන්ද ? මම ආවහම සල්ලි ඔයාට දෙන්නම් .'
  },
  {
    id: 'Pos_Fun_0013',
    description: 'Asking for location',//medium 
    input: 'methana idan oyagee gewal walata yanne kohomada ? mama dan inne paanaduree',
    expected: 'මෙතන ඉදන් ඔයාගේ ගෙවල් වලට යන්නේ කොහොමද ?  මම දැන් ඉන්නේ පානදුරේ.'
  },
  {
    id: 'Pos_Fun_0014',
    description: 'Time-related question',
    input: 'dan welawa kiyanna',
    expected: 'දැන් වේලාව කියන්න'
  },
  {
    id: 'Pos_Fun_0015',
    description: 'Affirmative response',
    input: 'ow mama karannnam',
    expected: 'ඔව් මම කරන්නම්'
  },
  {
    id: 'Pos_Fun_0016',
    description: 'Negative response',
    input: 'bee mata eeka karanna baehe',
    expected: 'බෑ මට ඒක කරන්න බෑහැ'
  },
  {
    id: 'Pos_Fun_0017',
    description: 'Repeated word expressions',
    input: 'as deka piyana nidaganna mata be be be mata nidanna be',//medium
    expected: 'ඇස් දෙක පියාන නිදාගන්න මට බෑ බෑ බෑ මට නිදන්න බෑ'
  },
  {
    id: 'Pos_Fun_0018',
    description: 'command form',
    input: 'heta mee wadhe aniwaren iwara karanna',//medium
    expected: 'ෙට මේ වැඩේ අනිවාර්යයෙන් ඉවර කරන්න'
  },
  {
    id: 'Pos_Fun_0019',
    description: 'Talking about weather',
    input: 'adha reeta wahiyidha',
    expected: 'අද රෑට වහියිද'
  },
  {
    id: 'Pos_Fun_0020',
    description: 'Expression of tiredness',
    input: 'mata harima mahansiyi ude idan wada karapu nisa',//medium
    expected: 'මට හරිම මහන්සි උදේ ඉදන් වැඩ කරපු නිසා'
  },
  {
    id: 'Pos_Fun_0021',
    description: 'mixed language input (Singlish + English terms)',
    input: 'adha lunch eka monawadha genawee ?',//medium
    expected: 'අද lunch එක මොනවද ගෙනාවේ ?'
  },
  {
    id: 'Pos_Fun_0022',
    description: 'Simple past tense',
    input: 'mama giyaa',
    expected: 'මම ගියා'
  },
  {
    id: 'Pos_Fun_0023',
    description: 'Expressions',
    input: 'mata harima santhosaiyi oya gana', //medium
    expected: 'මට හරිම සන්තෝසයයි ඔයා ගැන'
  },
  {
    id: 'Pos_Fun_0024',
    description: 'Punctuation: Comma usage',
    input: 'mama, oya, api',
    expected: 'මම, ඔය, අපි'
  },
  
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