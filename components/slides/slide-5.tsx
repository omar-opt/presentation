import * as motion  from "motion/react-client"
import { Layers, Shield, Database, User, Server } from "lucide-react"

export default function Slide5() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center px-6">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-center text-4xl font-bold text-white md:text-5xl"
      >
        Database Security Architecture
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="relative mx-auto mb-8 mt-4 max-w-5xl"
      >
        <div className="rounded-xl bg-white/5 p-8 backdrop-blur-sm">
          <div className="flex flex-col items-center">
            {/* Client Layer */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mb-8 flex w-full max-w-md flex-col items-center rounded-lg bg-gradient-to-r from-slate-800 to-slate-700 p-4 shadow-lg"
            >
              <User className="mb-2 h-8 w-8 text-cyan-400" />
              <h3 className="text-lg font-semibold text-white">Client Layer</h3>
              <p className="mt-2 text-center text-sm text-gray-300">
                User interfaces, applications, and client-side security controls
              </p>
            </motion.div>

            {/* Arrow */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mb-4 h-10 w-0.5 bg-gradient-to-b from-cyan-500 to-cyan-300"
            />

            {/* Network Security Layer */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="mb-8 flex w-full max-w-md flex-col items-center rounded-lg bg-gradient-to-r from-slate-800 to-slate-700 p-4 shadow-lg"
            >
              <Shield className="mb-2 h-8 w-8 text-cyan-400" />
              <h3 className="text-lg font-semibold text-white">Network Security Layer</h3>
              <p className="mt-2 text-center text-sm text-gray-300">
                Firewalls, VPNs, intrusion detection systems, and encrypted connections
              </p>
            </motion.div>

            {/* Arrow */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="mb-4 h-10 w-0.5 bg-gradient-to-b from-cyan-500 to-cyan-300"
            />

            {/* Application Layer */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.5 }}
              className="mb-8 flex w-full max-w-md flex-col items-center rounded-lg bg-gradient-to-r from-slate-800 to-slate-700 p-4 shadow-lg"
            >
              <Server className="mb-2 h-8 w-8 text-cyan-400" />
              <h3 className="text-lg font-semibold text-white">Application Layer</h3>
              <p className="mt-2 text-center text-sm text-gray-300">
                Authentication, authorization, input validation, and secure coding practices
              </p>
            </motion.div>

            {/* Arrow */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="mb-4 h-10 w-0.5 bg-gradient-to-b from-cyan-500 to-cyan-300"
            />

            {/* Database Layer */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.7, duration: 0.5 }}
              className="flex w-full max-w-md flex-col items-center rounded-lg bg-gradient-to-r from-slate-800 to-slate-700 p-4 shadow-lg"
            >
              <Database className="mb-2 h-8 w-8 text-cyan-400" />
              <h3 className="text-lg font-semibold text-white">Database Layer</h3>
              <p className="mt-2 text-center text-sm text-gray-300">
                Encryption at rest, access controls, auditing, and database activity monitoring
              </p>
            </motion.div>
          </div>

          {/* Security Monitoring Spanning All Layers */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.0, duration: 0.5 }}
            className="absolute -right-4 bottom-1/2 top-1/2 flex -translate-y-1/2 transform flex-col items-center rounded-lg bg-gradient-to-b from-cyan-900/40 to-blue-900/40 p-4 shadow-lg md:right-4"
          >
            <Layers className="mb-2 h-8 w-8 text-cyan-400" />
            <h3 className="text-lg font-semibold text-white">Security Monitoring</h3>
            <p className="mt-2 text-center text-sm text-gray-300">
              Continuous monitoring and threat detection across all layers
            </p>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.2, duration: 0.5 }}
        className="mt-4 max-w-4xl text-center text-gray-300"
      >
        <p>
          A comprehensive database security architecture implements multiple layers of protection, ensuring that if one
          layer is compromised, others remain intact to protect the data.
        </p>
      </motion.div>
    </div>
  )
}
