import { fireEvent, render, screen } from "@testing-library/react";
import { FormAdd } from "../../src/components";

describe('testing of FormAdd component', () => {
    test('should change text in  input', () => {
        render(<FormAdd onAddCategori={() => {}}></FormAdd>);
        const input = screen.getByRole("textbox")
        fireEvent.input(input, {target: {value: "logan"}})

        expect(input.value).toBe("logan")
     })

     test('should emit submit', () => {
        const onAddCategori = jest.fn();

        render(<FormAdd onAddCategori={onAddCategori}></FormAdd>);
        const input = screen.getByRole("textbox")
        const form = screen.getByRole("form")
        fireEvent.input(input, {target: {value: "logan"}})
        fireEvent.submit(form)

        expect(input.value).toBe("")
        expect(onAddCategori).toHaveBeenCalled();
        expect(onAddCategori).toHaveBeenCalledTimes(1);
        expect(onAddCategori).toHaveBeenCalledWith("logan");

    })

    test('not called addCategori', () => {
        const onAddCategori = jest.fn();

        render(<FormAdd onAddCategori={onAddCategori}></FormAdd>);
        const form = screen.getByRole("form")
        fireEvent.submit(form)

        expect(onAddCategori).not.toHaveBeenCalled();

    })

});