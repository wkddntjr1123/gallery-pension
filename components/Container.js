const Container = ({ children }) => {
  return (
    <>
      <div className="container">{children}</div>
      <style jsx>{`
        .container {
          max-width: 1280px;
          width: 100%;
          padding: 0 5rem;
          margin: 6rem auto;
        }
      `}</style>
    </>
  );
};

export default Container;
