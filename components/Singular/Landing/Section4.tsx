import ButtonProject from '@/components/Reusable/Landing/ButtonProject';
import ProjectComp from '@/components/Reusable/Landing/Project';
import classes from '@/styles/componentsStyles/Landing/section4.module.scss';
import Project from '@/types/project';

const PROJECTS: Project[] = [
    {
        id: 'tonmainers',
        name: 'Ton Mainers',
        cover: 'tonmainers',
        link: 'https://project-bitmainers.vercel.app',
        description: 'TonMiners is a groundbreaking NFT game on the TON Blockchain, offering a captivating pixelated universe where players can engage in mining activities.',
        technologies: 'NEXT - TypeScript - Scss',
        staff: '2 Designers - 1 Frontend dev',
        timeSpent: '2 months'
    },
    {
        id: 'cs2dle',
        name: 'CS2DLE',
        cover: 'cs2dle',
        link: 'http://cs2dle.net',
        description: 'CS2DLE is Daily Counter-Strike 2 Puzzle Challenge',
        technologies: 'NEXT - TypeScript',
        staff: '1 Designer - 1 Frontend dev',
        timeSpent: '2 month'
    },
    {
        id: 'neokcs',
        name: 'NeoKCS',
        cover: 'neokcs',
        link: 'http://neokcs.com',
        description: 'NeoKCS is personal website for gambling streamers',
        technologies: 'NEXT - TypeScript',
        staff: '',
        timeSpent: '2 weeks'
    },
    {
        id: 'steamupgrade',
        name: 'Steam Upgrade',
        cover: 'steamupgrade',
        link: 'http://steamupgrade.com/',
        description: 'Steam Upgrade is a platform that allows you to upgrade your Steam account to a higher level, with a variety of features and benefits.',
        technologies: 'React - JavaScript - Express',
        staff: '',
        timeSpent: '2 month'
    },
    {
        id: 'csgrind',
        name: 'csgrind',
        cover: 'csgrind',
        link: 'https://csgrind.com/',
        description: 'csgrind is a platform that allows you to grind your CS2 account to a higher level, with a variety of features and benefits.',
        technologies: 'React - JavaScript - Express',
        staff: '',
        timeSpent: '2 month'
    },
    {
        id: 'earngames',
        name: 'Earn Games',
        cover: 'earngames',
        link: 'https://earngames.pages.dev/',
        description: 'Check out Earn Games, our marketplace for special NFTs and our Academy, where we teach young folks to be digital experts in blockchain and Web 3.0.',
        technologies: 'VUE - TypeScript - Scss',
        staff: '2 Designers - 3 Frontend devs',
        timeSpent: '2 months'
    },
    {
        id: 'nuef',
        name: 'Nuef',
        cover: 'nuef',
        link: 'https://nuef.pages.dev/',
        description: `Welcome to Nuef, the portfolio website for a musical studio that elevates brands to fame. At Nuef, it's not just about money, we seek believers in their musical projects.`,
        technologies: 'HTML - JavaScript - Scss',
        staff: '1 Designer - 1 Frontend dev',
        timeSpent: '3 weeks'
    },
    {
        id: 'metasnipers',
        name: 'Meta Snipers',
        cover: 'metasnipers',
        link: 'https://metasnipers.pages.dev/',
        description: 'MetaSnipers stands at the forefront of NFT innovation, offering a unique platform that predicts trends in the dynamic world of digital art and collectibles.',
        technologies: 'VUE - TypeScript - Scss',
        staff: '1 Designer - 1 Frontend dev',
        timeSpent: '2 weeks'
    },
    {
        id: 'digiproxy2',
        name: 'Digi Proxy 2',
        cover: 'proxyCatGirl',
        link: 'https://digiproxy.cc/en',
        description: 'Digi Proxy is your ultimate solution for reliable and secure Residential, Datacenter, and Sneaker proxies. Constantly innovating for the best internet experience.',
        technologies: 'NEXT - TypeScript - Scss',
        staff: '2 Designers - 4 Frontend devs',
        timeSpent: '1 month'
    },
    {
        id: 'digiproxy',
        name: 'Digi Proxy',
        cover: 'digiProxy',
        link: 'https://digiproxy.pages.dev',
        description: 'Experience the pinnacle of proxy services with Digi Proxy – your source for the fastest and most affordable residential proxies.',
        technologies: 'HTML - JavaScript - Scss',
        staff: '1 Designer - 1 Frontend dev',
        timeSpent: '1 month'
    },
    {
        id: 'earnfm',
        name: 'Earn FM',
        cover: 'earnFm',
        link: 'https://heavens.pro/',
        description: 'Switch to Earn.FM for the easiest way to earn passive income effortlessly. Simply turn it on, download the app, and let your internet connection pay for itself.',
        technologies: 'VUE - TypeScript - Scss',
        staff: '1 Designer - 2 Frontend devs',
        timeSpent: '3 weeks'
    }
];

export default function Section4() {

    return (
        <section className={`${classes['section-4']} section`}>
            <div className={classes['inner-container']}>
                <div className={classes.projects}>
                    <div className={classes['flex-container']}>
                        <div className={classes['index-container']}>
                            {PROJECTS.map((_, index, arr) => {
                                return (
                                    <span 
                                     key={index + 'index'}
                                     className={`
                                      ${classes.index} 
                                      ${index + 1 !== arr.length ? classes['index-to-top'] : ''} 
                                      ${index !== 0 ? classes['index-from-bottom'] : ''}
                                    `}>
                                        {index + 1}
                                    </span>
                                )
                            })}
                        </div>
                        <div className={classes['title-container']}>
                            <div className={classes.inner}>
                                {PROJECTS.map((el, index, arr) => {
                                    return (
                                        <h2 
                                         key={index + 'title'}
                                         className={`
                                          ${classes.title} 
                                          ${index + 1 !== arr.length ? classes['title-to-top'] : ''}  
                                          ${index !== 0 ? classes['title-from-bottom'] : ''}
                                        `}>
                                            {el.name}
                                        </h2>
                                    )
                                })}
                            </div>
                        </div>
                        <div className={`${classes.lines} desktop`}>
                            {PROJECTS.map((el, index, arr) => {
                                return (
                                    <ButtonProject 
                                        key={el.id + 'button'}
                                        index={index}
                                        projectsAmount={arr.length}
                                    />
                                )
                            })}
                        </div>
                    </div>
                    {PROJECTS.map((el, index, arr) => {
                        return (
                            <ProjectComp 
                                key={el.id}
                                id={el.id}
                                name={el.name}
                                cover={el.cover}
                                link={el.link}
                                description={el.description}
                                technologies={el.technologies}
                                staff={el.staff}
                                timeSpent={el.timeSpent}
                                index={index}
                                projectsAmount={arr.length}
                            />
                        )
                    })}
                </div>
            </div>
        </section>
    )
}