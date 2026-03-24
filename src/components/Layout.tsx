import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { motion } from "motion/react";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-accent text-primary">
      <Navbar />
      <main className="flex-grow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <Outlet />
        </motion.div>
      </main>
    </div>
  );
}
