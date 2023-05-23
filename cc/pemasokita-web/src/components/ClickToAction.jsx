import { cta } from "../assets";
import styles, { layout } from "../styles";
import EastIcon from '@mui/icons-material/East';

export default function ClickToAction() {
  return (
    <section className={`${layout.section} w-[80%] mx-auto`}>
      <div className={layout.sectionImg3}>
        <img src={cta} alt="explore" className="w-full h-full" />

        <div className="absolute flex flex-wrap items-center justify-center bottom-0 sm:bottom-[5.5rem]">
          <h3 className={`${styles.heading3} text-center`}>Want to be a part of Pemasokita?</h3>

          <button
            type="button"
            className={`${styles.button2} mt-0 mb-8 sm:mb-0 sm:mt-4`}
          >
            <div className="text-xs sm:text-[22px] my-1">
              Explore <EastIcon />
            </div>
          </button>
        </div>
      </div>
    </section>
  )
}
