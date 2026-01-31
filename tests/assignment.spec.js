import { test, expect } from '@playwright/test';

const TARGET_URL = 'https://www.swifttranslator.com/';


// 24 Positive Scenarios

const positiveScenarios = [
  {
    id: 'Pos_Fun_0001',
    description: 'convert a day to day greeting phrase',
    input: 'oyaa hodin innavadha?',
    expected: 'ඔයා හොඩින් ඉන්නවද?'
  },
  {
    id: 'Pos_Fun_0002',
    description: 'Mixedd language input (Singlish + English terms)',//medium
    input: 'machan mata adha enna wenne nehe eka nisa zoom meeting ekee recording eka email ekak vidhihata evanna puLuvandha?',
    expected: 'මචන් මට අද එන්න wඑන්නෙ නෙහෙ එක නිස zoom meeting එකේ recording එක email එකක් විදිහට එවන්න පුළුවන්ද?'
  },
  {
    id: 'Pos_Fun_0003',
    description: 'Simple Request',
    input: 'mata magee bag eka aran enna puLuvandha?',//medium
    expected: 'මට මගේ bag එක අරන් එන්න පුළුවන්ද?'
  },
  {
    id: 'Pos_Fun_0004',
    description: 'Morning greeting',
    input: 'subha upandhinayak vevaa',
    expected: 'සුබ්හ උපන්දිනයක් වෙවා'
  },
  {
    id: 'Pos_Fun_0005',
    description: 'Asking about well-being',
    input: 'kohomadha oyage visthara',
    expected: 'කොහොමද ඔයගෙ විස්තර'
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
    input: 'mama iiye gedhara giyemi',
    expected: 'මම ඊයෙ ගෙදර ගියෙමි'
  },
  {
    id: 'Pos_Fun_0008',
    description: 'currency/numeric format',
    input: 'mama mata rupiyal 5000 yak dhenna puLuvandha ?',//medium
    expected: 'මම මට රුපියල් 5000 යක් දෙන්න පුළුවන්ද ?'
  },
  {
    id: 'Pos_Fun_0009',
    description: 'Simple question',
    input: 'oyage usa kochcharadha',
    expected: 'ඔයගෙ උස කොච්චරද'
  },
  {
    id: 'Pos_Fun_0010',
    description: 'Farewell phrase',
    input: 'obata suba gaman !',
    expected: 'ඔබට සුබ ගමන් !'
  },
  {
    id: 'Pos_Fun_0011',
    description: 'A simple Request',
    input: 'ara lamayagee kooppaya dhenna',
    expected: 'අර ලමයගේ කෝප්පය දෙන්න'
  },
  {
    id: 'Pos_Fun_0012',
    description: 'day to day activity',//long (character 389)
    input: 'adha mata ikkmanata gedhara yanna onee mokadha ape gedhara tiyenne godak dhura nisaa .thava dheyak heta ape gedara dhaanayak tyanava ekata badu wagayak gannath ekka ammath ekk ynn onne.oyai oyagee pawule hamomath ekkha heta ape gedhara enna dhanee gedarata sahabhagee wennath ekkama anith eka thamai enakota food city eken loku ice cream ekak aran enna puLuvandha ? mama avahama salli oyata dhennam.',
    expected: 'අද මට ඉක්ක්මනට ගෙදර යන්න ඔනේ මොකද ape ගෙදර ටියෙන්නෙ ගොඩක් දුර නිසා .තව දෙයක් හෙට ape ගෙඩර දානයක් ට්යනව එකට බඩු wඅගයක් ගන්නත් එක්ක අම්මත් එක්ක් ය්න්න් ඔන්නෙ.ඔයෛ ඔයගේ පwඋලෙ හමොමත් එක්ක්හ හෙට ape ගෙදර එන්න දනේ ගෙඩරට සහබ්හගේ wඑන්නත් එක්කම අනිත් එක තමෛ එනකොට food city එකෙන් ලොකු ice cream එකක් අරන් එන්න පුළුවන්ද ? මම අවහම සල්ලි ඔයට දෙන්නම්.'
  },
  {
    id: 'Pos_Fun_0013',
    description: 'Asking for location',//medium 
    input: 'methana idhan oyagee geval valata yanne kohomadha ? mama dhaen inne paanadhuree',
    expected: 'මෙතන ඉදන් ඔයගේ ගෙවල් වලට යන්නෙ කොහොමද ? මම දැන් ඉන්නේ පානදුරේ'
  },
  {
    id: 'Pos_Fun_0014',
    description: 'Time-related question',
    input: 'dhaen velava kiyanna',
    expected: 'දැන් වෙලව කියන්න'
  },
  {
    id: 'Pos_Fun_0015',
    description: 'Affirmative response',
    input: 'ow mama karannnam',
    expected: 'ow මම කරන්න්නම්'
  },
  {
    id: 'Pos_Fun_0016',
    description: 'Negative response',
    input: 'bee mata eeka karanna baehe',
    expected: 'bee මට ඒක කරන්න බැහෙ'
  },
  {
    id: 'Pos_Fun_0017',
    description: 'Repeated word expressions',
    input: 'as dheka piyaana nidhaaganna mata ba be be mata nidhanna be',//medium
    expected: 'අස් දෙක පියාන නිදාගන්න මට බ බෙ බෙ මට නිදන්න බෙ'
  },
  {
    id: 'Pos_Fun_0018',
    description: 'command form',
    input: 'heta mata kaama ekak dhenna.',//medium
    expected: 'හෙට මට කාම එකක් දෙන්න.'
  },
  {
    id: 'Pos_Fun_0019',
    description: 'Talking about weather',
    input: 'adha raeeta vahiyidha ?',
    expected: 'අද රෑට වහියිද ?'
  },
  {
    id: 'Pos_Fun_0020',
    description: 'Expression of tiredness',
    input: 'mata harima mahansiyi udhee idan vaeda karapu nisaa',//medium
    expected: 'මට හරිම මහන්සියි උදේ ඉඩන් වැඩ කරපු නිසා'
  },
  {
    id: 'Pos_Fun_0021',
    description: 'mixed language input (Singlish + English terms)',
    input: 'adha lunch ekata monavadha genavee ?',//medium
    expected: 'අද lunch එකට මොනවද ගෙනවේ ?'
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
    expected: 'මට හරිම සන්තොසෛයි ඔය ගන'
  },
  {
    id: 'Pos_Fun_0024',
    description: 'Punctuation: Comma usage',
    input: 'mama, oyaa, api',
    expected: 'මම, ඔයා, අපි'
  },
  
];


// 10 Negative Scenarios

const negativeScenarios = [
  {
    id: 'Neg_Fun_0001',
    description: 'Chat shorthand "Thx" should fail to convert meaningfully',
    input: 'Thxx',
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
    input: 'xyz893',
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
    description: 'Email address (should not transliterate parts)',
    input: 'test@gmail.com',
    expected: 'www.google.cඔම්'
  },
];


// Test Suite

test.describe('IT3040 Assignment 1 - SwiftTranslator Automation', () => {

  test.beforeEach(async ({ page }) => {
    // Navigate to the site before each test
    await page.goto(TARGET_URL);
    await page.waitForLoadState('networkidle');
    // Give the page extra time to fully load
    await page.waitForTimeout(1000);
  });


  //  Positive Functional Tests (24 scenarios)

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

 
  //  Negative Functional Tests (10 scenarios)
 
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


  // UI Tests 
 
  test('Pos_UI_0001: Real-time output update behavior', async ({ page }) => {

    const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
    const outputBox = page.locator('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap');

    await inputBox.clear();
    await page.waitForTimeout(500);

    // Type "amma"
    await inputBox.pressSequentially('amma', { delay: 100 });

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
    expect(outputText).toContain('අම්මා');

    // Continue typing " yanawa"
    await inputBox.pressSequentially(' yanawa', { delay: 100 });

    // Wait for updated output
    await page.waitForTimeout(2000);

    outputText = await outputBox.textContent();
    expect(outputText.trim()).toBe('අම්මා යනව');

  });

});