import styles from "./style.module.scss";
import classNames from "classnames";
import Link from 'next/link';
import Logo from '@/components/logo/logo';
import UserInfo from '@/components/user-info/userInfo';

export const Header = () => {
	return (
		<header className={classNames(styles.header) }>
			<Logo/>
			<h1>
				<Link href='/'>Главная</Link>
				<Link href='/restaurants'>Рестораны</Link>
			</h1>
			<UserInfo/>
		</header>
	)
}