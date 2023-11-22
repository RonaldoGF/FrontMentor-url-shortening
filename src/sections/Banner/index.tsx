import BannerImport from "@/assets/images/illustration-working.svg";
import styles from "./Banner.module.scss";
import { FC } from "react";

interface IBannerProps {
  title?: string;
  paragraph?: string;
  buttonLabel?: string;
}

const Banner: FC<IBannerProps> = ({ title, paragraph, buttonLabel }) => {
  return (
    <section className="flex  flex-col-reverse gap-y-8 lg:gap-y-0 lg:flex-row w-full   overflow-hidden">
      <div className={styles.ArticleText}>
        <h2 className="text-[3rem]  lg:[font-size:_clamp(2.5rem,3vw,5rem)] text-start tracking-[-.2rem] leading-[110%] font-bold text-neutral-very-dark-violet">
          {title}
        </h2>
        <p className="text-[1rem] text-neutral-gray text-start">{paragraph}</p>
        <button className="btn-shorty-style w-fit self-center lg:self-start">
          {buttonLabel}
        </button>
      </div>
      <div className={styles.ImgStyle}>
        <img src={BannerImport} />
      </div>
    </section>
  );
};

Banner.defaultProps = {
  title: "More than just shorter links",
  paragraph:
    "Build your brand's recognition and get detailed insights on how your links are performing.",
  buttonLabel: "Get Started",
};

export default Banner;
