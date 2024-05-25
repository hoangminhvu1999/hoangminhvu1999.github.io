import { SvgPath } from "@/utils";
import { Constants } from "@/utils/constants";
import { UrlPath } from "@/utils/url_path";
import Link from "next/link";
import { FC } from "react";

const Footer: FC = () => {

  const styles = {
    footerContainer: [
      'bg-black',
    ].join(' '),
    footerContent: [
      'mx-auto',
      'w-full',
      'max-w-screen-xl',
      'p-4',
      'py-6',
      'lg:py-8',
    ].join(' '),
    footerTop: [
      'md:flex',
      'md:justify-between',
    ].join(' '),
    brandContainer: [
      'mb-6',
      'md:mb-0',
    ].join(' '),
    brandContent: [
      'flex',
      'items-center',
    ].join(' '),
    logo: [
      'h-8',
      'me-3',
    ].join(' '),
    brand: [
      'self-center',
      'text-2xl',
      'font-semibold',
      'whitespace-nowrap',
      'text-white',
    ].join(' '),
    gridContainer: [
      'grid',
      'grid-cols-2',
      'gap-8',
      'sm:gap-6',
      'sm:grid-cols-3',
    ].join(' '),
    columnTitle: [
      'mb-6',
      'text-sm',
      'font-semibold',
      'uppercase',
      'text-white',
    ].join(' '),
    columnList: [
      'text-gray-400',
      'font-medium',
    ].join(' '),
    columnItem: [
      'mb-4',
      'min-w-32',
    ].join(' '),
    itemLink: [
      'hover:underline',
      'hover:text-white',
      'hover:font-semibold'
    ].join(' '),
    hr: [
      'my-6',
      'sm:mx-auto',
      'border-gray-700',
      'lg:my-8',
    ].join(' '),
    footerBottom: [
      'sm:flex',
      'sm:items-center',
      'sm:justify-between',
    ].join(' '),
    copyright: [
      'text-sm',
      'sm:text-center',
      'text-gray-400',
    ].join(' '),
    iconContainer: [
      'flex',
      'mt-4',
      'sm:justify-center',
      'sm:mt-0',
    ].join(' '),
    icon: [
      'text-gray-500',
      'hover:text-white',
      'ms-5',
    ].join(' '),
  }

  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <div className={styles.footerTop}>
          <div className={styles.brandContainer}>
            <Link href={UrlPath.homePath} className={styles.brandContent}>
              <img src={SvgPath.logo} className={styles.logo} alt="Logo" />
              <span className={styles.brand}>{Constants.text.pageName}</span>
            </Link>
          </div>
          <div className={styles.gridContainer}>
            <div>
              <h2 className={styles.columnTitle}>{Constants.text.category}</h2>
              <ul className={styles.columnList}>
                <li className={styles.columnItem}>
                  <Link href="#" className={styles.itemLink}>Something A</Link>
                </li>
                <li className={styles.columnItem}>
                  <Link href="#" className={styles.itemLink}>Something B</Link>
                </li>
                <li className={styles.columnItem}>
                  <Link href="#" className={styles.itemLink}>Something C</Link>
                </li>
                <li className={styles.columnItem}>
                  <Link href="#" className={styles.itemLink}>Something D</Link>
                </li>
                <li className={styles.columnItem}>
                  <Link href="#" className={styles.itemLink}>Something E</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className={styles.columnTitle}>{Constants.text.socialMedia}</h2>
              <ul className={styles.columnList}>
                <li className={styles.columnItem}>
                  <Link href={UrlPath.youtubePath} className={styles.itemLink}>{Constants.text.youtube}</Link>
                </li>
                <li className={styles.columnItem}>
                  <Link href={UrlPath.tiktokPath} className={styles.itemLink}>{Constants.text.tiktok}</Link>
                </li>
                <li className={styles.columnItem}>
                  <Link href="#" className={styles.itemLink}>{Constants.text.facebook}</Link>
                </li>
                <li className={styles.columnItem}>
                  <Link href="#" className={styles.itemLink}>{Constants.text.discord}</Link>
                </li>
                <li className={styles.columnItem}>
                  <Link href={UrlPath.githubPath} className={styles.itemLink}>{Constants.text.github}</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className={styles.columnTitle}>{Constants.text.other}</h2>
              <ul className={styles.columnList}>
                <li className={styles.columnItem}>
                  <a href="#" className={styles.itemLink}>Other 1</a>
                </li>
                <li className={styles.columnItem}>
                  <a href="#" className={styles.itemLink}>Other 2</a>
                </li>
                <li className={styles.columnItem}>
                  <a href="#" className={styles.itemLink}>Other 3</a>
                </li>
                <li className={styles.columnItem}>
                  <a href="#" className={styles.itemLink}>Other 4</a>
                </li>
                <li className={styles.columnItem}>
                  <a href="#" className={styles.itemLink}>Other 5</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className={styles.hr} />
        <div className={styles.footerBottom}>
          <span className={styles.copyright}>{Constants.text.prefixCopyright}<Link href={UrlPath.homePath} className={styles.itemLink}>{Constants.text.pageName}</Link>{Constants.text.suffixCopyright}</span>
          <div className={styles.iconContainer}>
            <Link href={UrlPath.youtubePath} className={styles.icon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
              </svg>
            </Link>
            <Link href={UrlPath.tiktokPath} className={styles.icon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z" />
              </svg>
            </Link>
            <Link href="#" className={styles.icon}>
              <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd" />
              </svg>
            </Link>
            <Link href="#" className={styles.icon}>
              <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
              </svg>
            </Link>
            <Link href={UrlPath.githubPath} className={styles.icon}>
              <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;