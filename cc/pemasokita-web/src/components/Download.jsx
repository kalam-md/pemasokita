import { download, googleplay } from "../assets";
import styles, { layout } from "../styles";

export default function Download() {
  return (
    <section className={`${layout.section} justify-center w-[80%] mx-auto`}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading1}>
          Download Now
        </h2>
        <p className={`${styles.paragraph} max-w-[447px]`}>
        Download our app from google play and you don’t have to be worry about your product anymore. 
        </p>

        <button
          type="button"
          className={`my-4`}
        >
            <img src={googleplay} alt="" />
        </button>
      </div>


      <div className={layout.sectionImg2}>
        <img src={download} alt="explore" className="w-[100%] h-[100%]" />
      </div>

    </section>
  )
}
