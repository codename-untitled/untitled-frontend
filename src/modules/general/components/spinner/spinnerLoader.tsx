function SpinnerLoader() {
  return (
    <div className="relative animate-spin">
      <img
        width={156}
        height={156}
        alt="spinner"
        src={require('assets/spinner purple.svg').default}
        className="object-fit"
      />
    </div>
  );
}

export default SpinnerLoader;
