import { AngularHTTPPage } from './app.po';

describe('angular-http App', () => {
  let page: AngularHTTPPage;

  beforeEach(() => {
    page = new AngularHTTPPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
