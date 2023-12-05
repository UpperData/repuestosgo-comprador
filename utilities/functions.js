const Pkijs = require('pkijs')
const Asn1js = require('asn1js')

export function decodeCert(pem) {
    if(typeof pem !== 'string') {
        throw new Error('Expected PEM as string');
    }

    // Load certificate in PEM encoding (base64 encoded DER)
    const b64 = pem.replace(/(-----(BEGIN|END) CERTIFICATE-----|[\n\r])/g, '');
    console.log('DATA CERT: ', b64);

    /*
    // Now that we have decoded the cert it's now in DER-encoding
    const der = Buffer(b64, 'base64')

    // And massage the cert into a BER encoded one
    const ber = new Uint8Array(der).buffer

    // And now Asn1js can decode things \o/
    const asn1 = Asn1js.fromBER(ber)

    return new Pkijs.Certificate({ schema: asn1.result })
    */

    return "";
}