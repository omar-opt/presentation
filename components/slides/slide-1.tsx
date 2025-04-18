
import * as motion  from "motion/react-client"
import { Lock, Database, Shield } from "lucide-react"

export default function Slide1() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-6"
      >
        <div className="flex justify-center space-x-4">
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5, type: "spring" }}>
            <Database className="h-16 w-16 text-cyan-400" />
          </motion.div>
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.7, type: "spring" }}>
            <Lock className="h-16 w-16 text-cyan-400" />
          </motion.div>
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.9, type: "spring" }}>
            <Shield className="h-16 w-16 text-cyan-400" />
          </motion.div>
        </div>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1 }}
        className="mb-4 text-5xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl"
      >
        Database Security
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3 }}
        className="mb-8 text-2xl font-medium text-cyan-400 md:text-3xl"
      >
        Protecting Your Most Valuable Asset
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="mb-8 max-w-2xl text-lg text-gray-300"
      >
        <p className="mb-4">Presented by:</p>
        <p className="font-medium">[FERHAT TAHER / CHABIRA AMAR ABDELLAH ABDEALAZIZE]</p>
        <p className="mt-4 text-sm text-gray-400">[ADVANCE DATA BASE] | [MOHAMED MAICHA]</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ delay: 1.7, duration: 1 }}
        className="absolute -z-10 h-[500px] w-[500px] rounded-full bg-cyan-500 blur-[120px]"
      />
    </div>
  )
}
