import React from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import {
    getData
} from "../components/utilities";

export default function FuncProg() {
    getData("https://opendata.rdw.nl/resource/m9d7-ebf2.json");
    return ( <
        div className = {
            styles.container
        } >
        <
        Head >
        <
        title > Create Next App < /title> <
        link rel = "icon"
        href = "/favicon.ico" / >
        <
        /Head> <
        main className = {
            styles.main
        } >
        <
        h1 className = {
            styles.title
        } > Welcome to Functional Programming! < /h1> <
        Link href = "/" >
        <
        a className = {
            styles.link
        } > To Home < /a> <
        /Link> <
        p className = {
            styles.description
        } >
        <
        code className = {
            styles.code
        } > console.log('hello'); < /code> <
        /p> <
        div className = "chart" > < /div> <
        /main> <
        /div>
    );
}