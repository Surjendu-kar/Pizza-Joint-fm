import { motion } from "motion/react"

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <motion.h1 
      className="text-4xl font-bold capitalize text-white"
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{
        duration:2,
        delay:1,
        ease:"backInOut"
      }}
      > Learning FM</motion.h1>
    </div>
  )
}

export default App