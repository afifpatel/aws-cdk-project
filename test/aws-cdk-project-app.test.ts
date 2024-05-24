import { handler } from "../src"

describe('App created', () => {
    it('returns name and tests', async () => {
        const output = await handler({ name: 'Afif'});
        expect(output).toStrictEqual('Nice work Afif!');
    });

    it('returns no name and tests', async () => {
        const output = await handler({ name: ''});
        expect(output).toStrictEqual('Nice work');
    });
})