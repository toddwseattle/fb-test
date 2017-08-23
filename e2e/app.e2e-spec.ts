import { FbTestPage } from './app.po';

describe('fb-test App', () => {
  let page: FbTestPage;

  beforeEach(() => {
    page = new FbTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
