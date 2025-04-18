import * as motion  from "motion/react-client"
import { Shield, Cpu, Database, Lock } from "lucide-react"

export default function Slide7() {
  const bestPractices = [
    {
      title: "Principle of Least Privilege",
      description: "Grant users only the minimum permissions necessary to perform their job functions.",
      icon: <Shield className="h-6 w-6 text-cyan-400" />,
    },
    {
      title: "Regular Backups",
      description: "Implement automated, encrypted backups with regular testing of restoration procedures.",
      icon: <Database className="h-6 w-6 text-cyan-400" />,
    },
    {
      title: "Real-Time Monitoring",
      description: "Deploy continuous monitoring tools to detect and alert on suspicious database activities.",
      icon: <Shield className="h-6 w-6 text-cyan-400" />,
    },
  ]

  const emergingTrends = [
    {
      title: "AI-driven Threat Detection",
      description: "Machine learning algorithms that identify unusual patterns and potential security threats.",
      icon: <Cpu className="h-6 w-6 text-purple-400" />,
    },
    {
      title: "Blockchain for Secure Auditing",
      description: "Immutable ledgers that provide tamper-proof records of database transactions and changes.",
      icon: <Lock className="h-6 w-6 text-purple-400" />,
    },
    {
      title: "Zero Trust Architecture",
      description:
        "Security model that requires verification for everyone trying to access resources, regardless of position.",
      icon: <Shield className="h-6 w-6 text-purple-400" />,
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
        Real-World Applications
      </motion.h2>

      <div className="grid max-w-6xl gap-12 md:grid-cols-2">
        <div>
          <motion.h3
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mb-6 text-center text-2xl font-semibold text-cyan-400"
          >
            Best Practices
          </motion.h3>

          <div className="space-y-6">
            {bestPractices.map((practice, index) => (
              <motion.div
                key={practice.title}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.2, duration: 0.5 }}
                className="rounded-xl bg-white/10 p-6 backdrop-blur-sm"
              >
                <div className="mb-3 flex items-center">
                  {practice.icon}
                  <h4 className="ml-3 text-lg font-medium text-white">{practice.title}</h4>
                </div>
                <p className="text-gray-300">{practice.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <motion.h3
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mb-6 text-center text-2xl font-semibold text-purple-400"
          >
            Emerging Trends
          </motion.h3>

          <div className="space-y-6">
            {emergingTrends.map((trend, index) => (
              <motion.div
                key={trend.title}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.2, duration: 0.5 }}
                className="rounded-xl bg-white/10 p-6 backdrop-blur-sm"
              >
                <div className="mb-3 flex items-center">
                  {trend.icon}
                  <h4 className="ml-3 text-lg font-medium text-white">{trend.title}</h4>
                </div>
                <p className="text-gray-300">{trend.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.5 }}
        className="mt-10 max-w-4xl rounded-xl bg-gradient-to-r from-cyan-900/30 to-purple-900/30 p-6 text-center backdrop-blur-sm"
      >
        <p className="text-lg font-medium text-gray-200">
          "Organizations that implement these practices and stay current with emerging trends are better positioned to
          protect their data assets in an evolving threat landscape."
        </p>
      </motion.div>
    </div>
  )
}
