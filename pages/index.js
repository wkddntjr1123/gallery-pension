import HoverImage from "../components/HoverImage";

export default function Main() {
  return (
    <>
      <div style={{ height: "200vh" }}>
        <div className="test">
          <HoverImage title={"test"} link="#" src="/test.png" />
        </div>
      </div>
      <style jsx>
        {`
          .test {
            width: 20rem;
            height: 10rem;
          }
        `}
      </style>
    </>
  );
}
