const styles = {
    boxWidth: "xl:max-w-[1280px] w-full",

    heading1: "font-poppins font-bold xs:text-[48px] text-[40px] text-green-leaf xs:leading-[76.8px] leading-[66.8px] w-full",
    heading2: "font-merienda font-bold xs:text-[48px] text-[50px] text-green-leaf xs:leading-[76.8px] leading-[66.8px] w-full",
    
    paragraph: "font-poppins text-[18px] leading-[30.8px]",
  
    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",
  
    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-12 py-4",
  
    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",

    button: "py-3 px-12 font-poppins font-medium text-[22px] text-white bg-green-leaf rounded-[225px]"
  };
  
  export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,

    sectionImg: `flex-1 ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
    sectionImg2: `${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-1 relative`,
  
    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
  };
  
  export default styles;