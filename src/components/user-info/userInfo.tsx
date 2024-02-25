'use client';

import styles from "./style.module.scss";
import { useState } from 'react';
import { Button } from '@/components/button/component';
import Image from 'next/image';
import cart from '@/assets/img/cart.png';

const UserInfo = () => {
	const [ isOpen, setIsOpen ] = useState(false);
	const closeModal = () => setIsOpen(false);

	return (
		<div className={styles.root}>
			{/*<Login/>*/}

			<Button title={''} onClick={() => setIsOpen(true)} className={styles.btn}>
				<Image src={cart} alt='Корзина'/>
			</Button>

			{/*{isOpen && (*/}
			{/*	<Modal onClose={closeModal} className={styles.modal}>*/}
			{/*		<CartContainer/>*/}
			{/*	</Modal>*/}
			{/*)}*/}
		</div>
	);
};

export default UserInfo;