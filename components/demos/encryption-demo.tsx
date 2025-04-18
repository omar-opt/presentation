"use client"

import { useState } from "react"
import { Lock, Unlock, RefreshCw } from "lucide-react"

export default function EncryptionDemo() {
  const [plaintext, setPlaintext] = useState("")
  const [encryptedText, setEncryptedText] = useState("")
  const [decryptedText, setDecryptedText] = useState("")
  const [encryptionKey, setEncryptionKey] = useState("secret-key-123")

  // Simple XOR encryption for demonstration purposes only
  // This is NOT secure for real applications
  const xorEncrypt = (text: string, key: string): string => {
    let result = ""
    for (let i = 0; i < text.length; i++) {
      const charCode = text.charCodeAt(i) ^ key.charCodeAt(i % key.length)
      result += String.fromCharCode(charCode)
    }
    // Convert to base64 for display
    return btoa(result)
  }

  const xorDecrypt = (encryptedBase64: string, key: string): string => {
    try {
      // Convert from base64
      const encrypted = atob(encryptedBase64)
      let result = ""
      for (let i = 0; i < encrypted.length; i++) {
        const charCode = encrypted.charCodeAt(i) ^ key.charCodeAt(i % key.length)
        result += String.fromCharCode(charCode)
      }
      return result
    } catch (e) {
      return "Error: Invalid encrypted text"
    }
  }

  const handleEncrypt = () => {
    if (!plaintext) {
      alert("Please enter text to encrypt")
      return
    }
    const encrypted = xorEncrypt(plaintext, encryptionKey)
    setEncryptedText(encrypted)
    setDecryptedText("")
  }

  const handleDecrypt = () => {
    if (!encryptedText) {
      alert("Please encrypt some text first")
      return
    }
    const decrypted = xorDecrypt(encryptedText, encryptionKey)
    setDecryptedText(decrypted)
  }

  const generateRandomKey = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    let result = ""
    for (let i = 0; i < 16; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    setEncryptionKey(result)
  }

  return (
    <div className="flex h-full w-full flex-col items-center justify-center px-6 py-8">
      <h2 className="mb-8 text-center text-4xl font-bold text-white">Encryption Demo</h2>

      <div className="w-full max-w-4xl rounded-xl bg-white/10 p-6 backdrop-blur-sm">
        <div className="mb-6">
          <p className="text-gray-300">
            This demo shows a simplified version of data encryption. In real database security, much stronger encryption
            algorithms are used, and key management is critical.
          </p>
        </div>

        <div className="mb-6 flex items-center justify-between rounded-md bg-slate-800/50 p-4">
          <div className="flex items-center">
            <RefreshCw className="mr-2 h-5 w-5 text-cyan-400" />
            <label htmlFor="encryptionKey" className="text-sm font-medium text-gray-200">
              Encryption Key:
            </label>
          </div>
          <div className="flex flex-1 items-center space-x-2 px-4">
            <input
              type="text"
              id="encryptionKey"
              className="w-full rounded-md border border-gray-600 bg-slate-900 px-4 py-2 font-mono text-sm text-white focus:border-cyan-500 focus:outline-none"
              value={encryptionKey}
              onChange={(e) => setEncryptionKey(e.target.value)}
            />
            <button
              onClick={generateRandomKey}
              className="rounded-md bg-slate-700 px-3 py-2 text-sm text-white transition hover:bg-slate-600 focus:outline-none"
            >
              Generate
            </button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <div className="mb-4 flex items-center">
              <Unlock className="mr-2 h-6 w-6 text-cyan-400" />
              <h3 className="text-xl font-semibold text-cyan-400">Plaintext</h3>
            </div>
            <textarea
              className="h-40 w-full rounded-md border border-gray-600 bg-slate-800 p-4 text-white focus:border-cyan-500 focus:outline-none"
              placeholder="Enter text to encrypt..."
              value={plaintext}
              onChange={(e) => setPlaintext(e.target.value)}
            ></textarea>
            <button
              className="mt-4 w-full rounded-md bg-cyan-600 px-4 py-2 font-medium text-white transition hover:bg-cyan-700 focus:outline-none"
              onClick={handleEncrypt}
            >
              Encrypt
            </button>
          </div>

          <div>
            <div className="mb-4 flex items-center">
              <Lock className="mr-2 h-6 w-6 text-purple-400" />
              <h3 className="text-xl font-semibold text-purple-400">Encrypted</h3>
            </div>
            <textarea
              className="h-40 w-full rounded-md border border-gray-600 bg-slate-800 p-4 font-mono text-purple-300 focus:border-purple-500 focus:outline-none"
              placeholder="Encrypted text will appear here..."
              value={encryptedText}
              readOnly
            ></textarea>
            <button
              className="mt-4 w-full rounded-md bg-purple-600 px-4 py-2 font-medium text-white transition hover:bg-purple-700 focus:outline-none"
              onClick={handleDecrypt}
              disabled={!encryptedText}
            >
              Decrypt
            </button>
          </div>
        </div>

        {decryptedText && (
          <div className="mt-6 rounded-md bg-slate-800/50 p-4">
            <div className="mb-2 flex items-center">
              <Unlock className="mr-2 h-5 w-5 text-green-400" />
              <p className="text-sm font-medium text-gray-300">Decrypted Result:</p>
            </div>
            <p className="rounded bg-slate-900 p-3 text-green-400">{decryptedText}</p>
          </div>
        )}

        <div className="mt-8 rounded-md bg-slate-800/30 p-4">
          <h4 className="mb-2 text-lg font-medium text-white">How Database Encryption Works</h4>
          <ul className="list-inside list-disc space-y-2 text-sm text-gray-300">
            <li>
              <strong>Transparent Data Encryption (TDE)</strong> - Encrypts database files at the file system level
            </li>
            <li>
              <strong>Column-level Encryption</strong> - Encrypts specific columns containing sensitive data
            </li>
            <li>
              <strong>Key Management</strong> - Secure storage and rotation of encryption keys
            </li>
            <li>
              <strong>Hashing</strong> - One-way transformation for passwords and sensitive data
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
