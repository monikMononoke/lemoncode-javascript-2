import { AccountVm } from "../account.vm";
import { validateForm } from "./account-form.validation";

describe("account-form.validation specs", () => {
    it("Should return validation succeeded when both fields are informed", () => {
        // Arrange
        const account: AccountVm = {
            type: "checking",
            name: "myaccount",
        };

        // Act
        const result = validateForm(account);

        // Assert
        expect(result.succeeded).toBeTruthy();
        expect(result.errors.type).toEqual("");
        expect(result.errors.name).toEqual("");
    });
});