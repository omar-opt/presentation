import * as motion  from "motion/react-client"
import { CheckCircle, TrendingUp } from "lucide-react"

export default function Slide2() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center px-6">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center text-4xl font-bold text-white md:text-5xl"
      >
        Introduction
      </motion.h2>

      <div className="grid max-w-6xl gap-8 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="rounded-xl bg-white/10 p-6 backdrop-blur-sm"
        >
          <h3 className="mb-4 text-2xl font-semibold text-cyan-400">Definition</h3>
          <p className="text-gray-200">
            Database security refers to the range of tools, processes, and methodologies used to protect database
            systems from threats such as cyberattacks, data breaches, and unauthorized access.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="rounded-xl bg-white/10 p-6 backdrop-blur-sm"
        >
          <h3 className="mb-4 flex items-center text-2xl font-semibold text-cyan-400">
            <CheckCircle className="mr-2 h-6 w-6" />
            Benefits
          </h3>
          <ul className="ml-2 space-y-2 text-gray-200">
            <li className="flex items-start">
              <span className="mr-2 mt-1 text-cyan-400">•</span>
              <span>Protects sensitive information</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1 text-cyan-400">•</span>
              <span>Ensures data integrity</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1 text-cyan-400">•</span>
              <span>Complies with regulations</span>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="rounded-xl bg-white/10 p-6 backdrop-blur-sm md:col-span-2"
        >
          <h3 className="mb-4 flex items-center text-2xl font-semibold text-cyan-400">
            <TrendingUp className="mr-2 h-6 w-6" />
            Importance
          </h3>
          <p className="text-gray-200">
            With growing data usage, database systems are prime targets—securing them is crucial for business continuity
            and trust. As organizations collect and store more sensitive information, the need for robust database
            security measures becomes increasingly critical.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        className="mt-12 max-w-3xl rounded-xl bg-gradient-to-r from-cyan-900/50 to-blue-900/50 p-6 backdrop-blur-sm"
      >
        <h3 className="mb-4 text-center text-xl font-semibold text-white">Layered Security Approach</h3>
        <div className="flex flex-col items-center justify-center space-y-2">
          <div className="w-full rounded-lg bg-cyan-800/30 p-3 text-center">Firewall</div>
          <div className="w-5/6 rounded-lg bg-cyan-700/30 p-3 text-center">Authentication</div>
          <div className="w-4/6 rounded-lg bg-cyan-600/30 p-3 text-center">Authorization</div>
          <div className="w-3/6 rounded-lg bg-cyan-500/30 p-3 text-center">Encryption</div>
          <div className="w-2/6 rounded-lg bg-cyan-400/30 p-3 text-center">Data</div>
        </div>
      </motion.div>
    </div>
  )
}
