import { group } from "../assets";
import styles, { layout } from "../styles";
import EastIcon from '@mui/icons-material/East';

export default function Overview() {
  return (
    <section className={`${layout.section} justify-center w-[80%] mx-auto`}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Cari tahu apakah <br className="sm:block hidden" /> kualitas produk baik
        </h2>
        <p className={`${styles.paragraph} max-w-[567px] mt-4`}>
          Lorem ipsum dolor sit amet consectetur. Ornare massa nunc nibh tristique. Non ligula tristique ut ut libero sit convallis maecenas. At egestas auctor porta mattis.
        </p>

        <button
          type="button"
          className={`${styles.button} mt-4`}
        >
          <div className="mx-3 my-1">
            Explore <EastIcon />
          </div>
        </button>
      </div>


      <div className={layout.sectionImg}>
        <img src={group} alt="explore" className="w-full h-full" />
      </div>

    </section>
  )
}
