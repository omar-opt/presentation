"use client"

import { useState } from "react"
import { AlertTriangle, CheckCircle, Code } from "lucide-react"

export default function SqlInjectionDemo() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [secureUsername, setSecureUsername] = useState("")
  const [securePassword, setSecurePassword] = useState("")
  const [vulnerableResult, setVulnerableResult] = useState<string | null>(null)
  const [secureResult, setSecureResult] = useState<string | null>(null)
  const [showVulnerableQuery, setShowVulnerableQuery] = useState(false)
  const [showSecureQuery, setShowSecureQuery] = useState(false)

  // Simulate vulnerable login
  const handleVulnerableLogin = () => {
    // This is a simulation of how SQL injection works
    const query = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`

    // Check if this is an SQL injection attempt
    if (username.includes("'") || password.includes("'")) {
      setVulnerableResult("SQL Injection Successful! Unauthorized access granted.")
    } else {
      setVulnerableResult("Login failed. Invalid credentials.")
    }

    setShowVulnerableQuery(true)
  }

  // Simulate secure login
  const handleSecureLogin = () => {
    // This simulates parameterized queries
    // In a real app, this would be handled by a database driver
    const query = `SELECT * FROM users WHERE username = ? AND password = ?`
    const params = [secureUsername, securePassword]

    // Always fails in our demo since we don't have a real database
    setSecureResult("Login failed. Invalid credentials.")
    setShowSecureQuery(true)
  }

  // Reset the demo
  const resetDemo = () => {
    setUsername("")
    setPassword("")
    setSecureUsername("")
    setSecurePassword("")
    setVulnerableResult(null)
    setSecureResult(null)
    setShowVulnerableQuery(false)
    setShowSecureQuery(false)
  }

  return (
    <div className="flex h-full w-full flex-col items-center justify-center px-6 py-8">
      <h2 className="mb-8 text-center text-4xl font-bold text-white">SQL Injection Demo</h2>

      <div className="grid w-full max-w-6xl gap-8 md:grid-cols-2">
        {/* Vulnerable Implementation */}
        <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm">
          <div className="mb-4 flex items-center">
            <AlertTriangle className="mr-2 h-6 w-6 text-red-400" />
            <h3 className="text-2xl font-semibold text-red-400">Vulnerable Login</h3>
          </div>
          <p className="mb-6 text-gray-300">
            This form is vulnerable to SQL injection. Try entering{" "}
            <code className="rounded bg-slate-800 px-1">' OR '1'='1</code> as the username.
          </p>

          <div className="space-y-4">
            <div>
              <label htmlFor="username" className="mb-2 block text-sm font-medium text-gray-200">
                Username:
              </label>
              <input
                type="text"
                id="username"
                className="w-full rounded-md border border-gray-600 bg-slate-800 px-4 py-2 text-white focus:border-red-500 focus:outline-none"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Try: ' OR '1'='1"
              />
            </div>
            <div>
              <label htmlFor="password" className="mb-2 block text-sm font-medium text-gray-200">
                Password:
              </label>
              <input
                type="password"
                id="password"
                className="w-full rounded-md border border-gray-600 bg-slate-800 px-4 py-2 text-white focus:border-red-500 focus:outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              className="w-full rounded-md bg-red-600 px-4 py-2 font-medium text-white transition hover:bg-red-700 focus:outline-none"
              onClick={handleVulnerableLogin}
            >
              Login (Vulnerable)
            </button>

            {showVulnerableQuery && (
              <div className="mt-4 rounded-md bg-slate-800/50 p-4">
                <div className="mb-2 flex items-center">
                  <Code className="mr-2 h-4 w-4 text-gray-400" />
                  <p className="text-sm font-medium text-gray-300">Generated SQL Query:</p>
                </div>
                <pre className="overflow-x-auto whitespace-pre-wrap rounded bg-slate-900 p-2 text-sm text-white">
                  {`SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`}
                </pre>
                {vulnerableResult && (
                  <div
                    className={`mt-4 rounded-md p-3 ${vulnerableResult.includes("Successful") ? "bg-red-900/30" : "bg-gray-800/50"}`}
                  >
                    <p className={vulnerableResult.includes("Successful") ? "text-red-400" : "text-gray-300"}>
                      {vulnerableResult}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Secure Implementation */}
        <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm">
          <div className="mb-4 flex items-center">
            <CheckCircle className="mr-2 h-6 w-6 text-green-400" />
            <h3 className="text-2xl font-semibold text-green-400">Secure Login</h3>
          </div>
          <p className="mb-6 text-gray-300">
            This form uses parameterized queries to prevent SQL injection. Try the same input here.
          </p>

          <div className="space-y-4">
            <div>
              <label htmlFor="secureUsername" className="mb-2 block text-sm font-medium text-gray-200">
                Username:
              </label>
              <input
                type="text"
                id="secureUsername"
                className="w-full rounded-md border border-gray-600 bg-slate-800 px-4 py-2 text-white focus:border-green-500 focus:outline-none"
                value={secureUsername}
                onChange={(e) => setSecureUsername(e.target.value)}
                placeholder="Try the same injection"
              />
            </div>
            <div>
              <label htmlFor="securePassword" className="mb-2 block text-sm font-medium text-gray-200">
                Password:
              </label>
              <input
                type="password"
                id="securePassword"
                className="w-full rounded-md border border-gray-600 bg-slate-800 px-4 py-2 text-white focus:border-green-500 focus:outline-none"
                value={securePassword}
                onChange={(e) => setSecurePassword(e.target.value)}
              />
            </div>
            <button
              className="w-full rounded-md bg-green-600 px-4 py-2 font-medium text-white transition hover:bg-green-700 focus:outline-none"
              onClick={handleSecureLogin}
            >
              Login (Secure)
            </button>

            {showSecureQuery && (
              <div className="mt-4 rounded-md bg-slate-800/50 p-4">
                <div className="mb-2 flex items-center">
                  <Code className="mr-2 h-4 w-4 text-gray-400" />
                  <p className="text-sm font-medium text-gray-300">Parameterized Query:</p>
                </div>
                <pre className="overflow-x-auto whitespace-pre-wrap rounded bg-slate-900 p-2 text-sm text-white">
                  {`SELECT * FROM users WHERE username = ? AND password = ?`}
                </pre>
                <p className="mt-2 text-xs text-gray-400">
                  Parameters: [{secureUsername}, {securePassword}]
                </p>
                {secureResult && (
                  <div className="mt-4 rounded-md bg-gray-800/50 p-3">
                    <p className="text-gray-300">{secureResult}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      <button
        className="mt-8 rounded-md bg-slate-700 px-6 py-2 font-medium text-white transition hover:bg-slate-600 focus:outline-none"
        onClick={resetDemo}
      >
        Reset Demo
      </button>
    </div>
  )
}
