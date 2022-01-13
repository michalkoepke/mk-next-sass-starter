import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Custom Next.js starter</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Custom <a href="https://nextjs.org">Next.js!</a> starter
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.box}>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
            optio provident quaerat eveniet. Necessitatibus quas, earum sed
            minima, blanditiis id molestias nisi at autem delectus ex! Corporis
            repellat eum enim assumenda. Repudiandae possimus commodi illo in
            accusantium. Blanditiis labore iure assumenda, nemo nihil officiis
            odio maiores eveniet? Ipsam soluta vel non delectus suscipit ut,
            quasi necessitatibus minima perspiciatis eaque aperiam ducimus
            provident dolorem, dolore cumque sapiente harum! Accusamus
            praesentium perspiciatis voluptatibus, nemo nostrum rerum aliquam ea
            iure explicabo enim laudantium incidunt, fuga reiciendis quo ex odit
            laborum repellendus omnis maxime est! Ad, excepturi obcaecati! Nihil
            itaque aperiam deleniti aut ex.
          </p>
        </div>
      </main>

      <section className={styles.section1}>
        <div className={styles.testGrid}>
          <div className={styles.card}>test</div>
          <div className={styles.card}>test</div>
          <div className={styles.card}>test</div>
        </div>
      </section>
    </div>
  );
}
