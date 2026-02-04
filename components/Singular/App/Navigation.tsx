import classes from '@/styles/componentsStyles/App/navigation.module.scss';
import Link from 'next/link';
import { useState } from 'react';

interface Props {
    scrollToSection: (type: string) => void;
}

export default function Navigation({ scrollToSection }: Props) {
    const [isContactsOpen, setIsContactsOpen] = useState(false);

    return (
        <nav className={`${classes.navigation} desktop`}>
            <ul className={classes.list}>
                <li className={classes.item}>
                    <button type="button" onClick={() => scrollToSection('/')} className={classes.link}>
                        Home
                    </button>
                </li>
                <li className={classes.item}>
                    <button type="button" onClick={() => scrollToSection('portfolio')} className={classes.link}>
                        Portfolio
                    </button>
                </li>
                <li className={classes.item}>
                    <button type="button" onClick={() => scrollToSection('about')} className={classes.link}>
                        About me
                    </button>
                </li>
                <li className={classes.item}>
                    <Link href="/faq" className={classes.link}>
                        FAQ
                    </Link>
                </li>
            </ul>

            <div
                className={`${classes['dropdown-container']} ${isContactsOpen ? classes['dropdown-container--open'] : ''}`}
                onMouseOver={() => setIsContactsOpen(true)}
                onMouseOut={() => setIsContactsOpen(false)}
            >
                <button type="button" className={classes['dropdown-opener']} aria-expanded={isContactsOpen} aria-haspopup="true">
                    <span>Contacts</span>
                    <img
                        src="/static/svg/arrowToBottom.svg"
                        alt=""
                        className={`${classes['dropdown-icon']} ${isContactsOpen ? classes['dropdown-icon--open'] : ''}`}
                    />
                </button>
                <div className={`${classes.dropdown} ${isContactsOpen ? '' : classes['dropdown--closed']}`}>
                    <ul className={classes['dropdown-list']} onClick={() => setIsContactsOpen(false)}>
                        <li className={classes['dropdown-item']}>
                            <a
                                href="https://t.me/tamadoge_dev"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={classes['dropdown-link']}
                            >
                                Telegram
                            </a>
                        </li>
                        <li className={classes['dropdown-item']}>
                            <a
                                href="https://github.com/tamadoge-max"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={classes['dropdown-link']}
                            >
                                GitHub
                            </a>
                        </li>
                        <li className={classes['dropdown-item']}>
                            <a
                                href="https://discord.com/users/294033815922540544"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={classes['dropdown-link']}
                            >
                                Discord
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
