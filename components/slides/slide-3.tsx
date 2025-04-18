import * as motion  from "motion/react-client"
import { Lock, UserCheck, FileText, Key, EyeOff } from "lucide-react"

export default function Slide3() {
  const concepts = [
    {
      title: "Access Control",
      icon: <UserCheck className="h-8 w-8 text-cyan-400" />,
      description: "Restricts database access to authorized users based on roles and permissions.",
    },
    {
      title: "Encryption",
      icon: <Lock className="h-8 w-8 text-cyan-400" />,
      description: "Transforms data into unreadable format to protect it from unauthorized access.",
    },
    {
      title: "Database Auditing",
      icon: <FileText className="h-8 w-8 text-cyan-400" />,
      description: "Tracks and logs database activities to detect suspicious behavior.",
    },
    {
      title: "Authentication & Authorization",
      icon: <Key className="h-8 w-8 text-cyan-400" />,
      description: "Verifies user identity and determines their access privileges.",
    },
    {
      title: "Data Masking",
      icon: <EyeOff className="h-8 w-8 text-cyan-400" />,
      description: "Hides sensitive data while preserving its format and usability for testing.",
    },
  ]

  return (
    <div className="flex h-full w-full flex-col items-center justify-center px-6">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center text-4xl font-bold text-white md:text-5xl"
      >
        Key Concepts
      </motion.h2>

      <div className="grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
        {concepts.map((concept, index) => (
          <motion.div
            key={concept.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * index, duration: 0.5 }}
            className="flex flex-col rounded-xl bg-white/10 p-6 backdrop-blur-sm"
          >
            <div className="mb-4 flex items-center">
              {concept.icon}
              <h3 className="ml-3 text-xl font-semibold text-white">{concept.title}</h3>
            </div>
            <p className="text-gray-300">{concept.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="mt-12 max-w-4xl rounded-xl bg-gradient-to-r from-cyan-900/30 to-blue-900/30 p-6 text-center backdrop-blur-sm"
      >
        <p className="text-lg text-gray-200">
          These key concepts form the foundation of a comprehensive database security strategy, working together to
          protect data at rest, in transit, and during access.
        </p>
      </motion.div>
    </div>
  )
}
