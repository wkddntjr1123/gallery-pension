import Head from "next/head";

export default function Home() {
  return (
    <>
      <div className="test">내용입니다</div>
      <style jsx>{`
        .test {
          height: 2000px;
          background-color: #ffd6d6;
        }
      `}</style>
    </>
  );
}
