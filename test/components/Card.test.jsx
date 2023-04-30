import { render, screen } from "@testing-library/react";
import { Card } from "../../src/components";

describe('unit test of Card component', () => {
    const title = "pitbulls baby"
    const url = "http://www.ababa.com/"
    test('should match snapshot', () => { 
        const {container} = render(<Card title={title} url={url}></Card>)
        expect(container).toMatchSnapshot();
     })

     test("show url and title", () => {
         render(<Card title={title} url={url}></Card>);
         const {src, alt} = screen.getByRole("img");
        expect(src).toEqual(url)
        expect(alt).toEqual(title)
     })

     test('should show title in p', () => { 
         render(<Card title={title} url={url}></Card>);
        
        expect(screen.getByText(title)).toBeTruthy()
      })
});