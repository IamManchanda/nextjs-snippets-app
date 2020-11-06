import "../styles/app.scss";

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-red-500 app-background w-full p-10 min-h-screen">
      <div className="max-w-2xl mx-auto">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
