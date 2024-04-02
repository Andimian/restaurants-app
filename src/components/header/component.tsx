import styles from "./style.module.scss";
import classNames from "classnames";
import Link from 'next/link';
import Logo from '@/components/logo/logo';
import UserInfo from '@/components/user-info/userInfo';
import { inter } from '@/app/ui/fonts';
import NavLinks from '@/components/nav-links/component';

export const Header = () => {
	return (
		<header className={classNames(styles.header) }>
			<Logo/>
			<NavLinks/>
			<UserInfo/>
		</header>
	)
}
