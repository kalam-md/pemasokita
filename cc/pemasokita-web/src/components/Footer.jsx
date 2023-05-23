import styles from "../styles"
import { footerLinks } from "../constants"

export default function Footer() {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-[80%]`}>
        <div className="flex-[1] flex flex-col justify-start mr-10">
          <h1 className={`${styles.heading2} text-[38px] object-contain text-white`}>
            PEMASOKITA
          </h1>
          <p className={`${styles.paragraph} text-[#DEDEDE] mt-4 max-w-[485px]`}>
            Lorem ipsum dolor sit amet consectetur. Odio amet natoque tortor convallis. Bibendum sapien suspendisse ipsum urna malesuada elit. Bibendum vitae nibh scelerisque sed aliquam ullamcorper est.
          </p>
        </div>

        <div className="flex-[1] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map((footerlink) => (
            <div
              key={footerlink.title}
              className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}
            >
              <h4 className="font-poppins font-medium text-[18px] text-white leading-[27px]">
                {footerlink.title}
              </h4>
              <ul className="list-none mt-4 text-[#DEDEDE]">
                {footerlink.links.map((link, index) => (
                  <li
                    key={link.name}
                    onClick={() => window.open(link.link)}
                    className={`font-poppins font-normal text-[16px] leading-[24px] cursor-pointer ${index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                      }`}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="font-poppins font-normal text-center text-[16px] mt-24 text-white">
        Ⓒ 2023 Pemasokita
      </div>

    </section>
  )
}
