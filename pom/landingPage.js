class LandingPage {
    constructor(page) {
        this.page = page;

        // Locators
        this.toDoColumn = `.gap-6.h-full.inline-flex.p-6 > div:nth-of-type(1)`;
        this.inProgressColumn = `.gap-6.h-full.inline-flex.p-6 > div:nth-of-type(2)`;
        this.doneColumn = `.gap-6.h-full.inline-flex.p-6 > div:nth-of-type(3)`;
        this.columnTaskLocator = `div > .flex.flex-col.gap-3`;
    }

    // Methods to return locators dynamically
    getColumnLocator(columnName) {
        switch (columnName) {
            case 'To Do':
                return this.page.locator(this.toDoColumn);
            case 'In Progress':
                return this.page.locator(this.inProgressColumn);
            case 'Done':
                return this.page.locator(this.doneColumn);
            default:
                throw new Error(`Column ${columnName} not found`);
        }
    }

    async isTaskInColumn(taskDetails, columnName) {
        const columnLocator = this.getColumnLocator(columnName);
        const taskLocator = columnLocator.locator(this.columnTaskLocator, {
            hasText: taskDetails.name,
            hasText: taskDetails.tag,
        });
        return taskLocator.isVisible();
    }
}
module.exports = LandingPage;
