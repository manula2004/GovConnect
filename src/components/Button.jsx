import React from "react";

export default function Button({ label, onClick, type = "button", className = "" }) {
  return (
    <button 
      className={`btn-primary ${className}`}
      onClick={onClick} 
      type={type}
    >
      {label}
    </button>
  );
}