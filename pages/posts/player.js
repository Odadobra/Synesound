import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css';
import Link from 'next/link';
import AppContext from '../appContext';
import { useState, useContext } from "react";


import ImageBanner from '../components/ImageBanner';
import { FileUpload } from 'primereact/fileupload';
// import AudioPlayer from '../components/AudioPlayer';

export default function player() {
    const context = useContext(AppContext)
    return (
        <>
            <Head>
                <title>Synesound Player</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <div>

                    {context.imgUrl && <img src={context.imgUrl} />}
                </div>

                <div className={styles.description}>
                    <h1 className={styles.title}>
                        Here's your synesound
                    </h1>
                </div>

                <div>
                    {/* <AudioPlayer /> */}
                </div>
                <div>
                    <h2>
                        <Link href="/">Back to home</Link>
                    </h2>
                </div>

            </main>
        </>

    );
}