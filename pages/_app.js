import "../styles/globals.scss";
import Layout from "../components/Layout";

import { TransitionProvider } from "../store/TransitionContext";
import TransitionLayout from "../anim/TransitionLayout";

//! do not delete, basic version without page transitions

// function MyApp({ Component, pageProps }) {
//   return (
//     <Layout>
//       <Component {...pageProps} />
//     </Layout>
//   );
// }

//! with transitions enabled:

function MyApp({ Component, pageProps }) {
  return (
    <TransitionProvider>
      <TransitionLayout>
        <div
          style={{
            display: "flex",
            minHeight: "100vh",
            flexDirection: "column",
          }}
        >
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </div>
      </TransitionLayout>
    </TransitionProvider>
  );
}

export default MyApp;
