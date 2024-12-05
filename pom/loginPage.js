require('dotenv').config({ path: '.env.secret' });

const loginPage = {
    getLandingPageLinkLocators: (index) => `li:nth-of-type(${index}) a`,

    getUsername: `input#username`,
    getPassword: `input#password`,
    getLogInBtn: `button[type="submit"]`,

    // Retrieve credentials from environment variables
    username: process.env.USERNAME,
    password: process.env.PASSWORD
}
module.exports = {
    loginPage,
    adminLogin: async (page) => {
        await page.fill(loginPage.getUsername, loginPage.username, );
        await page.fill(loginPage.getPassword, loginPage.password);
        await page.click(loginPage.getLogInBtn);
        await page.waitForLoadState('networkidle'); 
    }
}
