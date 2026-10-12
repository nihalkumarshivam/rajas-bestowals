import React from 'react';

// Official Standard Lotus Emblem from the uploaded brand artwork
export const LotusEmblem = ({ size = 64, light = false, className = "", style = {} }) => {
  const src = light ? "/rajas-emblem-light.png" : "/rajas-emblem.png";
  return (
    <img 
      src={src} 
      alt="Rajas Bestowals Royal Lotus Emblem" 
      width={size} 
      height="auto"
      className={`rajas-lotus-emblem ${className}`}
      style={{ 
        display: 'inline-block',
        verticalAlign: 'middle',
        objectFit: 'contain',
        ...style 
      }}
      loading="eager"
    />
  );
};

// Backwards compatibility alias for LotusIcon
export const LotusIcon = ({ size = 48, light = false, className = "", style = {} }) => {
  return <LotusEmblem size={size} light={light} className={className} style={style} />;
};

// Subtle Background Watermark
export const LotusWatermark = ({ className = "" }) => {
  return (
    <div 
      className={`lotus-watermark-wrapper ${className}`}
      aria-hidden="true"
      style={{
        backgroundImage: "url('/rajas-emblem.png')",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        pointerEvents: 'none'
      }}
    />
  );
};

/**
 * Official Standard Rajas Bestowals Logo
 * Renders the exact shape, proportions, ligature typography, and size per user guidelines.
 */
export const RajasLogo = ({ 
  size = 56, 
  variant = "stacked", 
  withTagline = true, 
  light = false,
  className = "",
  style = {}
}) => {
  // 1. Horizontal Layout (for Navbar and Wide Headers)
  if (variant === "horizontal") {
    const src = light ? "/rajas-logo-horizontal-light.png" : "/rajas-logo-horizontal.png";
    return (
      <div 
        className={`rajas-logo-container horizontal-variant ${className}`}
        style={{ display: 'inline-flex', alignItems: 'center', ...style }}
      >
        <img 
          src={src} 
          alt="Rajas Bestowals - Official Logo"
          style={{ 
            height: `${size}px`, 
            width: 'auto', 
            objectFit: 'contain',
            display: 'block'
          }}
          loading="eager"
        />
      </div>
    );
  }

  // 2. Official Standard Stacked Layout (Exact Shape & Proportions per Uploaded Asset)
  const src = light ? "/rajas-logo-tight-light.png" : "/rajas-logo-tight.png";

  return (
    <div 
      className={`rajas-logo-container stacked-variant ${className}`}
      style={{ 
        display: 'inline-flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        textAlign: 'center',
        ...style 
      }}
    >
      <img 
        src={src} 
        alt="Rajas Bestowals - Official Standard Logo"
        style={{ 
          width: `${size * 2.2}px`, 
          maxWidth: '100%',
          height: 'auto', 
          objectFit: 'contain',
          display: 'block'
        }}
        loading="eager"
      />
      {withTagline && (
        <p style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontStyle: 'italic',
          fontSize: `${Math.max(13, size * 0.22)}px`,
          letterSpacing: '0.08em',
          color: light ? '#DFCCA6' : '#7A645A',
          marginTop: '0.65rem',
          marginBottom: 0
        }}>
          Premium Indian Gifting • Heritage • Grace • Craft
        </p>
      )}
    </div>
  );
};

export default RajasLogo;
