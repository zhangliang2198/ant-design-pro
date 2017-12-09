import Nightmare from 'nightmare';

describe('Homepage', () => {
  it('it should have logo text', async () => {
    const page = Nightmare().goto('http://localhost:8018');
    const text = await page.evaluate(() => document.body.innerHTML).end();
    expect(text).toContain('<h1>真正赢家</h1>');
  });
});
