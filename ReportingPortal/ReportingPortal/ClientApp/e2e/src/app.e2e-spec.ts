// ====================================================
// More Templates: https://www.ebenmonney.com/templates
// Email: support@ebenmonney.com
// ====================================================

import { AppPage } from './app.po';

describe('ReportingPortal App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display application title: ReportingPortal', () => {
    page.navigateTo();
    expect(page.getAppTitle()).toEqual('ReportingPortal');
  });
});
