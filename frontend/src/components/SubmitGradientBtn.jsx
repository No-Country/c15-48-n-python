import React from "react";
import { Link } from "react-router-dom";

export default function SubmitGradientBtn({ onClick, BtnText, disabled, link }) {
  return (
    <div className="flex justify-center mt-6">
      <button
        type="submit"
        onClick={onClick}
        className="flex items-center w-30 text-white bg-gradient-to-r from-social-pink to-purple text-xs px-8 py-1.5 rounded-3xl disabled:opacity-50"
        disabled={disabled}
      >
        <Link to={`${link}`}>{BtnText}</Link>
      </button>
    </div>
  );
}
