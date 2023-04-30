import { render, screen } from "@testing-library/react";
import * as hook from "../../src/hooks/useFetchGifs";
import CardGrid from "../../src/components/CardGrid";
describe("testign for CardGrid", () => {
	// const mockAdd = jest.spyOn( hook, "useFetchGifs" ).mockReturnValue({
	//     images: [],
	//     isLoading: false
	// });

	const mock = { images: [], isLoading: false };
	jest.mock("../../src/hooks/useFetchGifs", () => ({
		useFetchGifs: jest.fn(() => {
			return mock;
		}),
	}));

	test("should loading", () => {
        mock.isLoading = false
		render(<CardGrid categori="logan"></CardGrid>);
	});
});
