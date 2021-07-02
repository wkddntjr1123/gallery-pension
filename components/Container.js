const Container = ({ children }) => {
  return (
    <>
      <div className="container" data-aos="fade-up" data-aos-duration="1500">
        {children}
      </div>
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
