const Loader = () => {
  return (
    <div className="loader-container flex-center black-gradient-bg">
      <img
        draggable="false"
        alt="Grand Theft Auto VI"
        loading="lazy"
        width="97"
        height="70"
        decoding="async"
        src="/images/logo.webp"
        className="animate-pulse"
      />
    </div>
  );
};

export default Loader;
