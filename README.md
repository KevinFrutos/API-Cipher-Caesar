# Usage 💻

_# ENCRYPT_

```
GET /encrypt
headers{
    "encrypt_message": "message to encrypt",
    "position": "default: 3" // Optional position from 1 to 25
}
```

_# DECRYPT

```
GET /decrypt
headers{
    "decrypt_message": "message to decrypt",
    "position": "default: 3" // Your encrypt position
}
```