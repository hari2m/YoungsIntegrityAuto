import { YoungsIntegrityAutoPage } from './app.po';

describe('youngs-integrity-auto App', () => {
  let page: YoungsIntegrityAutoPage;

  beforeEach(() => {
    page = new YoungsIntegrityAutoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
