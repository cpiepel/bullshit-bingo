import { BullshitBingoPage } from './app.po';

describe('bullshit-bingo App', function() {
  let page: BullshitBingoPage;

  beforeEach(() => {
    page = new BullshitBingoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
