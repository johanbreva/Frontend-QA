import { describe, expect, it } from "vitest";
import { getDashboardForRole, ROLE_IDS } from "./roles";

describe("getDashboardForRole", () => {
	it("returns the dashboard route for each supported role", () => {
		expect(getDashboardForRole(ROLE_IDS.owner)).toBe("/dashboard");
		expect(getDashboardForRole(ROLE_IDS.cook)).toBe("/dashboardCook");
		expect(getDashboardForRole(ROLE_IDS.waiter)).toBe("/dashboardWaiter");
	});

	it("rejects unsupported roles", () => {
		expect(() => getDashboardForRole(999)).toThrow("Rol no soportado: 999");
	});
});