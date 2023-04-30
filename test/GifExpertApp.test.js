import { fireEvent, render, screen, renderHook, waitFor} from "@testing-library/react";
import GifExpertApp from "../src/GifExpertApp";
import { useFetchGifs } from "../src/hooks/useFetchGifs";

describe('GifExpertApp test', () => {
    test('should show two loading', () => { 
        render(<GifExpertApp></GifExpertApp>);
        expect(screen.getAllByText("Cargando...").length).toBe(2)
     })


     test('should show two loading', async () => { 
        render(<GifExpertApp></GifExpertApp>);
        const input = screen.getByRole("textbox")
        const form = screen.getByRole("form")
        fireEvent.input(input, {target: {value: "logan"}})
        fireEvent.submit(form)

        expect(screen.getAllByRole("heading", { level:3}).length).toBe(3)
     })
});