
# RSA Encryption API

This repository contains an implementation of the RSA encryption algorithm in Node.js. The application provides API endpoints to encrypt and decrypt messages using 3072-bit RSA keys.  

## Project Overview  

This project demonstrates the implementation of the RSA encryption algorithm using the `node-forge` library. The API has two main functionalities:  

1. Encrypt a message using the public key.  
2. Decrypt a message using the private key.  

The application is built using Express.js and supports JSON-based API requests for encryption and decryption.  

---

## How to Run the Project  

### Prerequisites  
Ensure you have the following installed on your system:  

- [Node.js](https://nodejs.org) (version 14 or higher)  
- npm (Node Package Manager)  

### Installation  

1. Clone the repository:  
   ```bash  
   git clone https://github.com/mrArray/RSA-encryption-and-decryption-algorithm-API.git  
   cd rsa-encryption-api  
   ```  

2. Install the dependencies:  
   ```bash  
   npm install  
   ```  

3. Start the server:  
   ```bash  
   node rsa-api.js  
   ```  

4. The API will be running at `http://localhost:3000`.  

---

## API Endpoints  

### 1. Encrypt Message  

**Endpoint**:  
`POST /encrypt`  

**Request Body**:  
```json  
{  
  "message": "This is a secret message!"  
}  
```  

**Response**:  
```json  
{  
  "encryptedMessage": "vRldm8fBX1gzv... (truncated)"  
}  
```  

### 2. Decrypt Message  

**Endpoint**:  
`POST /decrypt`  

**Request Body**:  
```json  
{  
  "encryptedMessage": "vRldm8fBX1gzv... (truncated)"  
}  
```  

**Response**:  
```json  
{  
  "decryptedMessage": "This is a secret message!"  
}  
```  

---

## Libraries Used  

- [Express.js](https://expressjs.com/)  
- [Node Forge](https://github.com/digitalbazaar/forge)  

---

## Student Details  

- **Name**: Nura Dahiru Musa  
- **Student ID**: 2415066021  
- **University**: Wuhan Textile University  
- **Faculty**: School of Computer Science and Artificial Intelligence  
- **Major**: Computer Science and Technology  
- **Submission Date**: 18-12-2024  

---

## Notes  

- The private key should be securely stored in a production environment.  
- This implementation is for educational purposes and should not be used in production without further security enhancements.  
