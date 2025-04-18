import * as motion  from "motion/react-client"
import { AlertTriangle, ShieldCheck, UserX, Settings, AlertCircle } from "lucide-react"

export default function Slide6() {
  const risks = [
    {
      title: "SQL Injection",
      icon: <AlertCircle className="h-8 w-8 text-red-400" />,
      description: "Attackers insert malicious SQL code into application queries to manipulate the database.",
    },
    {
      title: "Insider Threats",
      icon: <UserX className="h-8 w-8 text-red-400" />,
      description: "Authorized users misusing their access privileges to steal or compromise data.",
    },
    {
      title: "Misconfigurations",
      icon: <Settings className="h-8 w-8 text-red-400" />,
      description: "Improperly configured database settings that leave security vulnerabilities.",
    },
    {
      title: "Unpatched Vulnerabilities",
      icon: <AlertTriangle className="h-8 w-8 text-red-400" />,
      description: "Outdated database software with known security flaws that haven't been patched.",
    },
  ]

  const solutions = [
    {
      title: "Regular Updates",
      icon: <ShieldCheck className="h-8 w-8 text-green-400" />,
      description: "Keep database software and security patches up to date.",
    },
    {
      title: "Access Limitation",
      icon: <ShieldCheck className="h-8 w-8 text-green-400" />,
      description: "Implement the principle of least privilege for all database users.",
    },
    {
      title: "Encryption",
      icon: <ShieldCheck className="h-8 w-8 text-green-400" />,
      description: "Encrypt sensitive data both at rest and in transit.",
    },
    {
      title: "SQL Injection Prevention",
      icon: <ShieldCheck className="h-8 w-8 text-green-400" />,
      description: "Use parameterized queries and input validation to prevent SQL injection attacks.",
    },
    {
      title: "Database Firewalls",
      icon: <ShieldCheck className="h-8 w-8 text-green-400" />,
      description: "Implement database firewalls to monitor and filter database traffic.",
    },
  ]

  return (
    <div className="flex h-full w-full flex-col items-center justify-center px-6">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-center text-4xl font-bold text-white md:text-5xl"
      >
        Challenges & Solutions
      </motion.h2>

      <div className="grid max-w-6xl gap-8 md:grid-cols-2">
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mb-6 text-center text-2xl font-semibold text-red-400"
          >
            Common Risks
          </motion.h3>

          <div className="space-y-4">
            {risks.map((risk, index) => (
              <motion.div
                key={risk.title}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                className="rounded-lg bg-white/10 p-4 backdrop-blur-sm"
              >
                <div className="flex items-center">
                  {risk.icon}
                  <h4 className="ml-3 text-lg font-medium text-white">{risk.title}</h4>
                </div>
                <p className="mt-2 text-sm text-gray-300">{risk.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <motion.h3
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mb-6 text-center text-2xl font-semibold text-green-400"
          >
            Solutions
          </motion.h3>

          <div className="space-y-4">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                className="rounded-lg bg-white/10 p-4 backdrop-blur-sm"
              >
                <div className="flex items-center">
                  {solution.icon}
                  <h4 className="ml-3 text-lg font-medium text-white">{solution.title}</h4>
                </div>
                <p className="mt-2 text-sm text-gray-300">{solution.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="mt-8 max-w-4xl rounded-xl bg-gradient-to-r from-slate-800/80 to-slate-700/80 p-6 text-center backdrop-blur-sm"
      >
        <p className="text-lg font-medium text-cyan-400">
          "A proactive approach to database security involves identifying risks before they become breaches."
        </p>
      </motion.div>
    </div>
  )
}
