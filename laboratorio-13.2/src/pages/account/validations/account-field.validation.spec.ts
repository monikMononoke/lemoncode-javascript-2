import { validateNameField, validateTypeField } from "./account-field.validation";

describe("account-field.validation specs", () => {
    it("Should return validation succeeded when type is informed", () => {
        // Arrange
        const value = "checking";
        // Act
        const result = validateTypeField(value);
        // Assert
        expect(result.succeeded).toBeTruthy();
    });

    it("Should return validation failed when type is not selected", () => {
        // Arrange
        const value = "";
        // Act
        const result = validateTypeField(value);
        // Assert
        expect(result.succeeded).toBeFalsy();
        expect(result.errorMessage).toEqual("Debe informar el campo");
    });

    it("Should return validation failed when name is empty", () => {
        // Arrange
        const value = "";
        // Act
        const result = validateNameField(value);
        // Assert
        expect(result.succeeded).toBeFalsy();
        expect(result.errorMessage).toEqual("Debe informar el campo");
    });
});