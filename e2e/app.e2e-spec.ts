import { Comp4dummiesPage } from './app.po';

describe('comp4dummies App', function() {
  let page: Comp4dummiesPage;

  beforeEach(() => {
    page = new Comp4dummiesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
