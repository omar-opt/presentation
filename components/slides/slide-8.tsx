import * as motion  from "motion/react-client"
import { CheckCircle, Lock, Shield, Database } from "lucide-react"

export default function Slide8() {
  const summaryPoints = [
    "Database security protects data confidentiality, integrity, and availability",
    "Key techniques: access control, encryption, auditing",
    "Threats must be actively mitigated with layered security approaches",
  ]

  return (
    <div className="flex h-full w-full flex-col items-center justify-center px-6">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-center text-4xl font-bold text-white md:text-5xl"
      >
        Conclusion
      </motion.h2>

      <div className="grid max-w-6xl gap-8 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="rounded-xl bg-white/10 p-6 backdrop-blur-sm"
        >
          <h3 className="mb-6 text-2xl font-semibold text-cyan-400">Summary</h3>
          <ul className="space-y-4">
            {summaryPoints.map((point, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
                className="flex items-start"
              >
                <CheckCircle className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-green-400" />
                <span className="text-gray-200">{point}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex flex-col justify-center rounded-xl bg-white/10 p-6 backdrop-blur-sm"
        >
          <h3 className="mb-6 text-2xl font-semibold text-cyan-400">Final Thought</h3>
          <p className="text-lg text-gray-200">
            In a world driven by data, securing your database is not optional—it's mission-critical. Organizations must
            prioritize database security as a fundamental component of their overall cybersecurity strategy.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        className="mt-12 flex max-w-4xl flex-wrap items-center justify-center gap-8"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.1, type: "spring" }}
          className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500/20 to-cyan-700/20 backdrop-blur-sm"
        >
          <Lock className="h-12 w-12 text-cyan-400" />
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.3, type: "spring" }}
          className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500/20 to-cyan-700/20 backdrop-blur-sm"
        >
          <Shield className="h-12 w-12 text-cyan-400" />
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.5, type: "spring" }}
          className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500/20 to-cyan-700/20 backdrop-blur-sm"
        >
          <Database className="h-12 w-12 text-cyan-400" />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.7, duration: 0.5 }}
        className="mt-8 text-center text-gray-400"
      >
        <p>Thank you for your attention!</p>
        <p className="mt-2">Any questions?</p>
      </motion.div>
    </div>
  )
}
