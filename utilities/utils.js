import { expect } from '@playwright/test';

exports.utils = class utils {
    constructor(page) {
        this.page = page;
    }

    async navigateTo(url){
        await this.page.goto(url)   
    }

    async clickOnElement(identifier){
        await this.page.locator(identifier).click();
    }

    async mouseHover(identifier){
        await this.page.locator(identifier).hover();
    }

    async fillInputBox(identifier, text){
        await this.page.locator(identifier).fill(text);
    }

    async dblClickOnElement(identifier){
        await this.page.locator(identifier).dblclick();
    }

    async focusOnElement(identifier){
        await this.page.locator(identifier).focus();
    }

    async verifyTitle(title){
        await expect(page).toHaveTitle(title);
    }

    async verifyContainsUrl(url){
        await expect(page).toHaveURL(url);
    }

    async verifyToHaveText(identifier, expectedText){
        await expect.soft(this.page.locator(identifier)).toHaveText(expectedText);
    }

    async verifyToHaveVlue(identifier, inputFieldText){
        await expect.soft(this.page.locator(identifier)).toHaveValue(inputFieldText);
    }

    async verifyContainText(identifier, expectedText){
        await expect.soft(this.page.locator(identifier)).toContainText(expectedText);
    }

    async verifyToHaveAttrbutes(attr, value){
        await expect.soft(this.page.locator(identifier)).toHaveAttribute(attr, value);
    }

    async verifyToHaveCss(key, value){  
        await expect.soft(this.page.locator(identifier)).toHaveCSS(key, value);
    }

    async verifyElementIsVisible(identifier){
        await expect.soft(this.page.locator(identifier)).isVisible();
    }

    async verifyRadioBtnChecked(identifier){
        await expect.soft(this.page.locator(identifier)).toBeChecked();
    }

    async verifyTextBoxEditable(identifier){
        await expect.soft(this.page.locator(identifier)).toBeEditable();
    }

    async verifyTextBoxEnabled(identifier){
        await expect.soft(this.page.locator(identifier)).toBeEnabled();
    }

    async verifyElementFocused(identifier){
        await expect.soft(this.page.locator(identifier)).toBeFocused();
    }


    /**
     * Waits for an element to reach a specific state (visible, hidden, or attached).
     * @param {Locator} element - The Playwright Locator for the element to wait for.
     * @param {'visible' | 'hidden' | 'attached'} state - The desired state of the element (default: 'visible').
     * @param {number} timeout - The maximum wait time in milliseconds (default: 9500).
     * @returns {Promise<void>} A promise that resolves when the condition is met.
     */
    async waitForElement(
        element, 
        state = 'visible' | 'hidden' | 'attached' == 'visible',
        timeout = 15000) {
        await element.waitFor({ state, timeout });
    }

    /**
     * Perform assertion on a given Playwright locator.
     * 
     * @param {Locator} target - The Playwright locator to perform the assertion on.
     * @param {string} assertionType - The type of assertion to perform.
     * @param {...any[]} params - Additional parameters required for specific assertions.
     */
    async performAssertion(target, assertionType, ...params) {
        switch (assertionType) {
            case 'toBeAttached':
                await expect(target).toBeAttached();
                break;
            case 'toBeChecked':
                await expect(target).toBeChecked();
                break;
            case 'toBeDisabled':
                await expect(target).toBeDisabled();
                break;
            case 'toBeEditable':
                await expect(target).toBeEditable();
                break;
            case 'toBeEmpty':
                await expect(target).toBeEmpty();
                break;
            case 'toBeEnabled':
                await expect(target).toBeEnabled();
                break;
            case 'toBeFocused':
                await expect(target).toBeFocused();
                break;
            case 'toBeHidden':
                await expect(target).toBeHidden();
                break;
            case 'toBeInViewport':
                await expect(target).toBeInViewport();
                break;
            case 'toBeVisible':
                await expect(target).toBeVisible();
                break;
            case 'toContainText':
                await expect(target).toContainText(params[0]);
                break;
            case 'toHaveAttribute':
                await expect(target).toHaveAttribute(params[0], params[1]);
                break;
            case 'toHaveClass':
                await expect(target).toHaveClass(params[0]);
                break;
            case 'toHaveCount':
                await expect(target).toHaveCount(params[0]);
                break;
            case 'toHaveCSS':
                await expect(target).toHaveCSS(params[0], params[1]);
                break;
            case 'toHaveId':
                await expect(target).toHaveId(params[0]);
                break;
            case 'toHaveJSProperty':
                await expect(target).toHaveJSProperty(params[0], params[1]);
                break;
            case 'toHaveScreenshot':
                await expect(target).toHaveScreenshot();
                break;
            case 'toHaveText':
                await expect(target).toHaveText(params[0]);
                break;
            case 'toHaveValue':
                await expect(target).toHaveValue(params[0]);
                break;
            case 'toHaveValues':
                await expect(target).toHaveValues(params[0]);
                break;
            default:
                throw new Error(`Unsupported assertion type: ${assertionType}`);
        }
    }
}
