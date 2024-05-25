'use client'
import { Constants, SvgPath } from "@/utils";
import { Routes } from "@/utils/routes";
import { UrlPath } from "@/utils/url_path";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

const Header: FC = () => {

  const currentPath = usePathname();

  const styles = {
    navContainer: [
      'bg-black',
      'border-gray-200',
      'px-4',
      'lg:px-6',
      'py-2.5',
    ].join(' '),
    navContent: [
      'flex',
      'flex-wrap',
      'justify-between',
      'items-center',
      'mx-auto',
      'max-w-screen-xl'
    ].join(' '),
    brandContainer: [
      'flex',
      'items-center',
    ].join(' '),
    brandImage: [
      'mr-3',
      'h-6',
      'sm:h-9',
    ].join(' '),
    brandName: [
      'self-center',
      'text-xl',
      'font-semibold',
      'whitespace-nowrap',
      'text-white',
    ].join(' '),
    menuContainer: [
      'hidden',
      'justify-between',
      'items-center',
      'w-full',
      'lg:flex',
      'lg:w-auto',
      'lg:order-1',
    ].join(' '),
    listItemContainer: [
      'flex',
      'flex-col',
      'mt-4',
      'font-medium',
      'lg:flex-row',
      'lg:space-x-8',
      'lg:mt-0',
    ].join(' '),
    selectedItem: [
      'block',
      'py-2',
      'pr-4',
      'pl-3',
      'text-white',
      'rounded',
      'bg-red',
      'lg:bg-transparent',
      'lg:text-red',
      'lg:p-0',
    ].join(' '),
    item: [
      'block',
      'py-2',
      'pr-4',
      'pl-3',
      'text-gray-400',
      'border-b',
      'border-gray-100',
      'hover:bg-gray-50',
      'lg:hover:bg-transparent',
      'lg:border-0',
      'lg:hover:red',
      'lg:p-0',
      'text-gray-400',
      'lg:hover:text-white',
      'hover:text-white',
      'border-gray-700',
    ].join(' '),
  }
  return (
    <header>
      <nav className={styles.navContainer}>
        <div className={styles.navContent}>
          <Link href={UrlPath.homePath} className={styles.brandContainer}>
            <img src={SvgPath.logo} className={styles.brandImage} alt="Logo" />
            <span className={styles.brandName}>{Constants.text.pageName}</span>
          </Link>
          <div className={styles.menuContainer}>
            <ul className={styles.listItemContainer}>
              <li><Link href={Routes.homeRoute} className={currentPath == Routes.homeRoute ? styles.selectedItem : styles.item}>{Constants.text.homePage}</Link></li>
              <li><Link href={Routes.blogRoute} className={currentPath == Routes.blogRoute ? styles.selectedItem : styles.item}>{Constants.text.blog}</Link></li>
              <li><Link href={Routes.projectRoute} className={currentPath == Routes.projectRoute ? styles.selectedItem : styles.item}>{Constants.text.product}</Link></li>
              <li><Link href={Routes.aboutRoute} className={currentPath == Routes.aboutRoute ? styles.selectedItem : styles.item}>{Constants.text.about}</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;