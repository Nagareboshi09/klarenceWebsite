
import React from "react";
import { motion } from "framer-motion";
import { Download, Eye } from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const PrintableResume = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/KlarenceResumeWorkApplication.pdf";
    link.download = "KlarenceResume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col items-center space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md"
      >
        <Card className="border-border/60 bg-secondary/30">
          <CardContent className="pt-6">
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                Resume Preview
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                Preview the resume before downloading
              </p>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Dialog>
              <DialogTrigger asChild>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center bg-brand-purple/10 text-brand-purple border border-brand-purple/20 px-4 py-2 rounded-lg font-medium hover:bg-brand-purple/20 transition-all"
                >
                  <Eye className="mr-2 h-4 w-4" />
                  Preview
                </motion.button>
              </DialogTrigger>
              <DialogContent className="max-w-5xl w-full h-[80vh] p-0">
                <DialogHeader className="px-6 pt-6">
                  <DialogTitle>Resume Preview</DialogTitle>
                  <DialogDescription>
                    A preview of KlarenceResume.pdf
                  </DialogDescription>
                </DialogHeader>
                <div className="px-6 pb-6 h-[calc(80vh-5rem)]">
                  <iframe
                    src="/KlarenceResumeWorkApplication.pdf"
                    className="w-full h-full rounded-lg border border-border"
                    title="Resume Preview"
                  />
                </div>
              </DialogContent>
            </Dialog>
          </CardFooter>
        </Card>
      </motion.div>

      <motion.button
        onClick={handleDownload}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="inline-flex items-center bg-brand-purple text-white px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-all"
      >
        <Download className="mr-2 h-5 w-5" />
        Download Resume
      </motion.button>
    </div>
  );
};

export default PrintableResume;
