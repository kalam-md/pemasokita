import { headerLeaf} from "../assets";
import styles, { layout } from "../styles";

export default function Header() {
  return (
    <section className={`${layout.section} justify-center w-[80%] mx-auto`}>
      <div className={layout.sectionInfo2}>
        <h2 className={styles.heading2}>
        Connecting Suppliers <br /> with UMKM for <br /> Sustainable Growth
        </h2>
        <p className={`${styles.paragraph} max-w-[567px] mt-4 font-semibold text-gray-700`}>
        Pemasokita help to brigde the gap between suppliers and UMKM enterprises with our user-friendly platform
        </p>
      </div>


      <div className={layout.sectionImg}>
        <img src={headerLeaf} alt="explore" className="absolute sm:left-[10px] md:block hidden" />
      </div>

    </section>
  )
}
