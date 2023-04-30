import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('user hook fetch gifs', () => {
    test('should return values initioals', () => { 
            const {result } = renderHook(() => useFetchGifs("logan"))
            const {images, isLoading} = result.current;
            expect(images.length).toBe(0)
            expect(isLoading).toBeTruthy()
     })

     test("should retunr array images and isLoading in false", async () => {
        const {result } = renderHook(() => useFetchGifs("logan"))

        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0)
        )

        const {images, isLoading} = result.current;
            expect(images.length).toBeGreaterThan(0)
            expect(isLoading).toBeFalsy()
     })
});