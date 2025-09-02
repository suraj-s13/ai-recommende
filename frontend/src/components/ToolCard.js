import React from "react";

function ToolCard({ tool }) {
  const getPricingClass = (pricing) => {
    switch (pricing.toLowerCase()) {
      case "free":
        return "pricing-free";
      case "freemium":
        return "pricing-freemium";
      case "paid":
        return "pricing-paid";
      default:
        return "";
    }
  };

  return (
    <div className="tool-card">
      <div className="card-holder">
        <h3 className="tool-name">{tool.toolName}</h3>
        <span className={`pricing-tag ${getPricingClass(tool.pricingModel)}`}>
          {tool.pricingModel}
        </span>
      </div>
      <p className="tool-description">{tool.description}</p>
      <a
        href={tool.toolURL}
        target="_blank"
        rel="noopener noreferrer"
        className="tool-link"
      >
        Visit Site
      </a>
    </div>
  );
}

export default ToolCard;