import {getGifs} from "../../src/helpers/getGifs"
describe('testing of the getGifs', () => {
    test('get and return gifs', async() => {
        const gifs = await getGifs("avatar")
        expect(gifs[0]).toEqual(
            {
                id: expect.any(String),
                title: expect.any(String),
                url: expect.any(String),
            }
        )
    });
});