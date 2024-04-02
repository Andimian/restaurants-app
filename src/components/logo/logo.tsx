'use client';

import logo from '../../assets/img/main-logo.png';
import styles from './style.module.scss';
import Image from 'next/image';

const Logo = () => {
	return (
		<div className={styles.root}>
			<Image className="object-cover" src={logo} alt='Логотип'/>
		</div>
	);
};

export default Logo;
