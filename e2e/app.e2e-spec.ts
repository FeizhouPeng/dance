import { DancePage } from './app.po';

describe('dance App', () => {
  let page: DancePage;

  beforeEach(() => {
    page = new DancePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
