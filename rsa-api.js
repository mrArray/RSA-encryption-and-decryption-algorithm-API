const express = require('express');
const bodyParser = require('body-parser');
const forge = require('node-forge');

const app = express();
app.use(bodyParser.json());

// Generate 3072-bit RSA keys
const generateRSAKeys = () => {
    console.log('Generating 3072-bit RSA keys...');
    const keyPair = forge.pki.rsa.generateKeyPair({ bits: 3072, e: 0x10001 });
    console.log('RSA keys generated successfully.');
    return {
        publicKey: forge.pki.publicKeyToPem(keyPair.publicKey),
        privateKey: forge.pki.privateKeyToPem(keyPair.privateKey),
    };
};

// Generate the keys once for the application
const { publicKey, privateKey } = generateRSAKeys();

// Encrypt a message using the public key
const encryptMessage = (publicKeyPem, message) => {
    const publicKey = forge.pki.publicKeyFromPem(publicKeyPem);
    const encrypted = publicKey.encrypt(message, 'RSA-OAEP');
    return forge.util.encode64(encrypted); // Base64 encoding
};

// Decrypt a message using the private key
const decryptMessage = (privateKeyPem, encryptedMessage) => {
    const privateKey = forge.pki.privateKeyFromPem(privateKeyPem);
    const encryptedBytes = forge.util.decode64(encryptedMessage); // Base64 decoding
    const decrypted = privateKey.decrypt(encryptedBytes, 'RSA-OAEP');
    return decrypted;
};

// API endpoints

// Endpoint to encrypt a message
app.post('/encrypt', (req, res) => {
    const { message } = req.body;

    if (!message) {
        return res.status(400).json({ error: 'Message is required.' });
    }

    try {
        const encryptedMessage = encryptMessage(publicKey, message);
        res.json({ encryptedMessage });
    } catch (error) {
        res.status(500).json({ error: 'Failed to encrypt the message.' });
    }
});

// Endpoint to decrypt a message
app.post('/decrypt', (req, res) => {
    const { encryptedMessage } = req.body;

    if (!encryptedMessage) {
        return res.status(400).json({ error: 'Encrypted message is required.' });
    }

    try {
        const decryptedMessage = decryptMessage(privateKey, encryptedMessage);
        res.json({ decryptedMessage });
    } catch (error) {
        res.status(500).json({ error: 'Failed to decrypt the message.' });
    }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`RSA Encryption API is running on http://localhost:${PORT}`);
});
