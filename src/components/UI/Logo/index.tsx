import { useSelector } from "react-redux";
import LogoDark from "../../../assets/logo-dark.svg";
import LogoLight from "../../../assets/logo-light.svg";
import LogoMobile from "../../../assets/logo-mobile.svg";
import { selectDarkMode } from "../../../redux/theme/themeSelectors";

const Logo = () => {
  const LogoImg = useSelector(selectDarkMode) ? LogoLight : LogoDark;
  return (
    <picture className="flex items-center pl-6 h-20 sm:border-r sm:border-r-line-light sm:dark:border-r-line-dark md:h-24 w-64 lg:w-[18.75rem]">
      <source srcSet={LogoMobile} media="(max-width: 767px)" />
      <img src={LogoImg} alt="Logo" />
    </picture>
  );
};
export default Logo;
