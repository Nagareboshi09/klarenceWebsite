import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { motion } from "framer-motion";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="relative inline-flex items-center rounded-full p-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-brand-purple focus:ring-offset-2"
    >
      <div className="relative flex items-center w-16 h-9 rounded-full border-2 border-[#D46A49] overflow-hidden">
        <motion.span
          className="absolute inset-y-0 left-0 w-1/2 flex items-center justify-center z-10"
          initial={false}
          animate={{ opacity: isDark ? 0.4 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <Sun className="w-5 h-5 text-yellow-500" />
        </motion.span>
        <motion.span
          className="absolute inset-y-0 right-0 w-1/2 flex items-center justify-center z-10"
          initial={false}
          animate={{ opacity: isDark ? 1 : 0.4 }}
          transition={{ duration: 0.3 }}
        >
          <Moon className="w-5 h-5 text-brand-purple" />
        </motion.span>
        <motion.span
          className="absolute left-1 top-1 bottom-1 w-[calc(50%-4px)] rounded-full shadow-md z-0 bg-[#F1F5F9] dark:bg-white"
          initial={false}
          animate={{
            x: isDark ? "100%" : "0%",
          }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      </div>
    </motion.button>
  );
};

export default ThemeToggle;