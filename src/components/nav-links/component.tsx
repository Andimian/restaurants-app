'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';
import styles from './style.module.scss';
import { inter } from '@/app/ui/fonts';

export default function NavLinks() {
	const pathname = usePathname();

	return (
		<nav>
			<Link href='/' className={classNames(styles.link, inter.className, {
				[styles.active]: pathname === '/',
			})}>
				Главная
			</Link>
			<Link href='/restaurants' className={classNames(styles.link, inter.className, {
				[styles.active]: pathname === '/restaurants',
			})}>
				Рестораны
			</Link>
			<Link href='/about' className={classNames(styles.link, inter.className, {
				[styles.active]: pathname === '/about',
			})}>
				  О нас </Link>
			<Link href='/delivery'
				  className={classNames(styles.link, inter.className, {
					  [styles.active]: pathname === '/delivery',
				  })}>
				Доставка
			</Link>
		</nav>
	);
}
