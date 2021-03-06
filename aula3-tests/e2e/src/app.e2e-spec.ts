import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
    let page: AppPage;

    beforeEach(() => {
        page = new AppPage();
    });

    it('deve exibir 2 ao clicar duas vezes no botão +', () => {
        page.navigateTo();
        page.getIncreaseButton().click();
        page.getIncreaseButton().click();
        expect(page.getCounterText()).toBe('Count: 2');
    });

    afterEach(async () => {
        // Assert that there are no errors emitted from the browser
        const logs = await browser.manage().logs().get(logging.Type.BROWSER);
        expect(logs).not.toContain(jasmine.objectContaining({
            level: logging.Level.SEVERE,
        } as logging.Entry));
    });
});
