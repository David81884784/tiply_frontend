import React from "react";
import {
  CheckCircle,
  XCircle,
  Info,
  AlertTriangle,
} from "lucide-react";

const icons = {
  success: <CheckCircle className="text-green-400" size={20} />,
  error: <XCircle className="text-red-400" size={20} />,
  warning: <AlertTriangle className="text-yellow-400" size={20} />,
  info: <Info className="text-blue-400" size={20} />,
};

const base = "flex items-start gap-3 px-4 py-3 rounded-lg text-sm border shadow transition-all duration-300 animate-fade-in";

const styles = {
  success: "bg-green-600/10 border-green-400 text-green-300",
  error: "bg-red-600/10 border-red-400 text-red-300",
  warning: "bg-yellow-600/10 border-yellow-400 text-yellow-300",
  info: "bg-blue-600/10 border-blue-400 text-blue-300",
};

export default function Alert({ type = "info", message }) {
  return (
    <div className={`${base} ${styles[type] || styles.info}`}>
      <div className="mt-1">{icons[type] || icons.info}</div>
      <div className="flex-1 leading-relaxed">{message}</div>
    </div>
  );
}
