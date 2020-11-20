import React from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
    return ( <
        div className = {
            styles.container
        } >
        <
        h1 className = {
            styles.title
        } > My shitty data < /h1> <
        Link href = "/funcprog" >
        <
        a className = {
            styles.link
        } > To functional programming < /a> <
        /Link> <
        div id = "barchart" > < /div> <
        /div>
    );
}