"use client";
import Image from "next/image";
import { useState } from 'react';
import { faker } from '@faker-js/faker';
import "./globals.css";

interface TokenVault {
  [token: string]: string;
}

function DataProtectionDemoCombined() {
  // Tokenization State
  const [sensitiveDataTokenize, setSensitiveDataTokenize] = useState('');
  const [tokenizedData, setTokenizedData] = useState('');
  const [deTokenizedData, setDeTokenizedData] = useState('');
  const [tokenVault, setTokenVault] = useState<TokenVault>({});

  // Masking State
  const [originalDataMasking, setOriginalDataMasking] = useState('');
  const [maskedData, setMaskedData] = useState('');
  const [selectedMaskingTechnique, setSelectedMaskingTechnique] = useState('');

  // Tokenization Functions
  const tokenizeData = (data: string) => {
    const token = `TOKEN_${Math.random().toString(36).substring(7)}`;
    setTokenVault(prevVault => ({ ...prevVault, [token]: data }));
    return token;
  };

  const deTokenizeData = (token: string) => {
    return tokenVault[token] || '';
  };

  const handleTokenize = () => {
    if (sensitiveDataTokenize) {
      const token = tokenizeData(sensitiveDataTokenize);
      setTokenizedData(token);
      setDeTokenizedData('');
    } else {
      alert('Please enter sensitive data to tokenize.');
    }
  };

  const handleDeTokenize = () => {
    if (tokenizedData) {
      const original = deTokenizeData(tokenizedData);
      setDeTokenizedData(original);
    } else {
      alert('Please enter a token to de-tokenize.');
    }
  };

  // Masking Functions
  const handleMaskingTechniqueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedMaskingTechnique(event.target.value);
  };

  const handleMaskData = () => {
    if (originalDataMasking && selectedMaskingTechnique) {
      let maskedResult = originalDataMasking;
      switch (selectedMaskingTechnique) {
        case 'name':
          maskedResult = faker.person.fullName();
          break;
        case 'credit-card':
          maskedResult = 'XXXX-XXXX-XXXX-' + originalDataMasking.slice(-4);
          break;
        case 'email':
          const parts = originalDataMasking.split('@');
          if (parts.length === 2) {
            maskedResult = parts[0].charAt(0) + '***' + '@' + parts[1].charAt(0) + '***' + '.' + parts[1].split('.').pop();
          }
          break;
        case 'shuffle':
          maskedResult = originalDataMasking.split('').sort(() => Math.random() - 0.5).join('');
          break;
        default:
          maskedResult = originalDataMasking;
      }
      setMaskedData(maskedResult);
    } else {
      alert('Please enter data and select a masking technique.');
    }
  };

  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <h1 className="text-4xl font-bold text-blue-700 mb-8 text-center">Data Protection Demo</h1>

        {/* Tokenization Demo */}
        <section className="bg-white rounded-lg shadow-xl p-8 mb-12">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Interactive Tokenization Demo</h2>
          <p className="text-lg text-gray-600 mb-6">
            Enter sample sensitive data to see it tokenized and de-tokenized.
            <br />
            <span className="font-semibold text-red-500">Important:</span> This is a simplified client-side demo. Real-world tokenization involves secure server-side processes and vaults.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Input */}
            <div>
              <label htmlFor="sensitiveDataTokenize" className="block text-blue-700 text-sm font-bold mb-2">
                Sensitive Data:
              </label>
              <input
                type="text"
                id="sensitiveDataTokenize"
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="e.g., Credit Card Number"
                value={sensitiveDataTokenize}
                onChange={(e) => setSensitiveDataTokenize(e.target.value)}
              />
              <button
                className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md mt-4 focus:outline-none focus:shadow-outline"
                onClick={handleTokenize}
              >
                Tokenize
              </button>
            </div>

            {/* Tokenized Data */}
            <div>
              <label htmlFor="tokenizedData" className="block text-purple-700 text-sm font-bold mb-2">
                Token:
              </label>
              <input
                type="text"
                id="tokenizedData"
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Token"
                value={tokenizedData}
                readOnly
              />
              <button
                className="w-full bg-purple-500 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-md mt-4 focus:outline-none focus:shadow-outline"
                onClick={handleDeTokenize}
                disabled={!tokenizedData}
              >
                De-tokenize
              </button>
            </div>

            {/* De-tokenized Data */}
            <div>
              <label htmlFor="deTokenizedData" className="block text-teal-700 text-sm font-bold mb-2">
                Original Data:
              </label>
              <input
                type="text"
                id="deTokenizedData"
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Original Value"
                value={deTokenizedData}
                readOnly
              />
            </div>
          </div>

          <div className="mt-8 bg-gray-50 rounded-md p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Simplified Token Vault Illustration</h3>
            <p className="text-gray-600 mb-4">
              Imagine a secure, server-side database (the "Token Vault") that securely maps the generated tokens to their original sensitive data. This demo simulates this concept briefly in memory.
            </p>
            <div className="overflow-auto">
              <table className="min-w-full bg-white shadow-md rounded-md">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="py-2 px-4 text-left font-semibold text-gray-700">Sensitive Data</th>
                    <th className="py-2 px-4 text-left font-semibold text-gray-700">Token</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(tokenVault).map(([token, original], index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                      <td className="py-2 px-4 text-gray-700">{original}</td>
                      <td className="py-2 px-4 text-blue-500 font-mono">{token}</td>
                    </tr>
                  ))}
                  {Object.keys(tokenVault).length === 0 && (
                    <tr>
                      <td className="py-2 px-4 text-gray-500 italic" colSpan={2}>No tokens generated yet.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Data Masking Demo */}
        <section className="bg-white rounded-lg shadow-xl p-8">
          <h2 className="text-2xl font-semibold text-orange-700 mb-4">Interactive Data Masking Demo</h2>
          <p className="text-lg text-gray-600 mb-6">
            Explore various data masking techniques. Enter sample sensitive data and see how it can be transformed to protect privacy.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Input Area */}
            <div className="mb-6 md:mb-0">
              <label htmlFor="originalDataMasking" className="block text-orange-700 text-sm font-bold mb-2">
                Original Sensitive Data:
              </label>
              <input
                type="text"
                id="originalDataMasking"
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="e.g., John Doe, 1234-5678-9012-3456, john.doe@example.com"
                value={originalDataMasking}
                onChange={(e) => setOriginalDataMasking(e.target.value)}
              />
            </div>

            {/* Masking Options */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Choose Masking Technique:</h3>
              <div className="space-y-2">
                <div>
                  <input
                    type="radio"
                    id="masking-name"
                    name="maskingTechnique"
                    value="name"
                    className="mr-2 focus:ring-orange-500 h-4 w-4 text-orange-600 border-gray-300 rounded"
                    onChange={handleMaskingTechniqueChange}
                  />
                  <label htmlFor="masking-name" className="text-gray-700 text-sm">Mask Name</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="masking-credit-card"
                    name="maskingTechnique"
                    value="credit-card"
                    className="mr-2 focus:ring-orange-500 h-4 w-4 text-orange-600 border-gray-300 rounded"
                    onChange={handleMaskingTechniqueChange}
                  />
                  <label htmlFor="masking-credit-card" className="text-gray-700 text-sm">Mask Credit Card</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="masking-email"
                    name="maskingTechnique"
                    value="email"
                    className="mr-2 focus:ring-orange-500 h-4 w-4 text-orange-600 border-gray-300 rounded"
                    onChange={handleMaskingTechniqueChange}
                  />
                  <label htmlFor="masking-email" className="text-gray-700 text-sm">Mask Email</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="masking-shuffle"
                    name="maskingTechnique"
                    value="shuffle"
                    className="mr-2 focus:ring-orange-500 h-4 w-4 text-orange-600 border-gray-300 rounded"
                    onChange={handleMaskingTechniqueChange}
                  />
                  <label htmlFor="masking-shuffle" className="text-gray-700 text-sm">Shuffle Characters</label>
                </div>
                {/* Add more masking techniques as needed */}
              </div>
              <button
                className="w-full bg-orange-500 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-md mt-4 focus:outline-none focus:shadow-outline"
                onClick={handleMaskData}
                disabled={!selectedMaskingTechnique || !originalDataMasking}
              >
                Apply Masking
              </button>
            </div>
          </div>

          {/* Masked Output */}
          {maskedData && (
            <div className="mt-8 bg-gray-50 rounded-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Masked Data:</h3>
              <div className="relative">
                <input
                  type="text"
                  id="maskedDataOutput"
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={maskedData}
                  readOnly
                />
                <button
                  className="absolute inset-y-0 right-0 px-4 py-2 focus:outline-none"
                  onClick={() => navigator.clipboard.writeText(maskedData)}
                  title="Copy to Clipboard"
                >
                  <svg className="w-5 h-5 text-gray-500 hover:text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2m-2 4h.01M9 16h.01M12 13h.01M15 16h.01"></path></svg>
                </button>
              </div>
              <p className="text-gray-600 mt-2">
                The original data has been transformed using the selected masking technique.
              </p>
            </div>
          )}

          <div className="mt-10 bg-gray-50 rounded-md p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Understanding Data Masking</h3>
            <p className="text-gray-600">
              Data masking involves obscuring sensitive information while keeping the data format and structure intact. This allows for realistic testing, development, and analytics without exposing actual private details. Different techniques can be applied depending on the data type and the desired level of anonymity.
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
              <li><strong>Substitution:</strong> Replacing real data with realistic fake data.</li>
              <li><strong>Shuffling:</strong> Randomly reordering data within a column.</li>
              <li><strong>Redaction:</strong> Removing or obscuring parts of the data.</li>
              <li><strong>Number/Date Variance:</strong> Modifying numerical or date values.</li>
              {/* Add more masking techniques here */}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}




export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex items-center justify-center">
        <Image src="/logo.png" alt="Logo" width={100} height={100} />
      </div>
      <DataProtectionDemoCombined />
      <div className="text-gray-600 text-sm">
        &copy; {new Date().getFullYear()} Data Protection Demo. All rights reserved.
      </div>
    </div>
  );
}
