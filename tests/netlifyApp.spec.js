import { test, expect } from '@playwright/test';
import LandingPage from '../pom/landingPage';
import loginPage from '../pom/loginPage';
import appData from '../data/appData.json';
import { utils } from '../utilities/utils';

test.beforeEach(async ({ page }) => {
    const helper = new utils(page);
    await helper.navigateTo(appData.landingPageUrl);
    await loginPage.adminLogin(page);
});

test.describe('Netlify App Functional Features Validation', () => {

    // Define the test scenarios
    const testCases = [
        {
            description: 'Test Case 1: Verify "Implement user authentication" is in the "To Do" column',
            taskDetails: { name: appData.implementUserAuthentication, tag: appData.feature, priority: appData.highPriority },
            columnName: appData.toDo,
        },
        {
            description: 'Test Case 2: Verify "Fix navigation bug" is in the "To Do" column',
            taskDetails: { name: appData.fixNavigationBug, tag: appData.bug },
            columnName: appData.toDo,
        },
        {
            description: 'Test Case 3: Verify "Design system updates" is in the "In Progress" column',
            taskDetails: { name: appData.designSystemUpdates, tag: appData.design },
            columnName: appData.inProgress,
        },
        {
            description: 'Test Case 4: Verify "Push notification system" is in the "To Do" column',
            taskDetails: { name: appData.pushNotificationSystem, tag: appData.feature },
            columnName: appData.toDo,
        },
        {
            description: 'Test Case 5: Verify "Offline mode" is in the "In Progress" column',
            taskDetails: { name: appData.offlineMode, tag: appData.feature, priority: appData.highPriority },
            columnName: appData.inProgress,
        },
        {
            description: 'Test Case 6: Verify "App icon design" is in the "Done" column',
            taskDetails: { name: appData.appIconDesign, tag: appData.design },
            columnName: appData.done,
        },
    ];

    // Use forEach to iterate over test scenarios
    testCases.forEach(({ description, taskDetails, columnName }) => {
        test(description, async ({ page }) => {
            const landingPage = new LandingPage(page);
            await landingPage.isTaskInColumn(taskDetails, columnName);
        });
    });

});
