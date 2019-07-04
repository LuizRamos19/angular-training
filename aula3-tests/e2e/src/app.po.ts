import { browser, by, element } from 'protractor';

export class AppPage {
    navigateTo() {
        return browser.get(browser.baseUrl) as Promise<any>;
    }

    getTitleText() {
        return element(by.css('app-root h1')).getText() as Promise<string>;
    }

    getCounterText() {
        return element(by.id('counter')).getText();
    }

    getIncreaseButton() {
        return element(by.id('increase'));
    }

    getDecreaseButton() {
        return element(by.id('decrease'));
    }
}
