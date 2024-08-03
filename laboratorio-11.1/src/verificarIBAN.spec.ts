import { patronCompruebaIban } from './verificarIBAN'

describe('patronCompruebaIban', () => {
    test.each([
        ['ES6621000418401234567891', true],
        ['ES60 0049 1500 05 1234567892', true],
        ['ES21-0019-0020-96-1234567890', true],
        ['ES21_0019_0020_96_1234567890', true],
        ['ES21 0019-0020_96-1234567890', true],
        ['ES210019002096123456789', false],
        ['ES21001900209612345678901', false],
        ['ES210019002096123456789', false],
        ['ES2100190020961234567890A', false],
        ['ES2100190020961234567890 ', false],
    ])(
        'patronCompruebaIban(%s) debe ser %s',
        (iban, expected) => {
            expect(patronCompruebaIban(iban)).toBe(expected)
        }
    )
})