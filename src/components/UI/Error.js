import React from "react";
import Card from "./Card";
import Button from "./Button";

import styles from "./Error.module.css"

const Error = (props) => {
    return (
        <div className={styles.backdrop}>
            <Card className={styles.modal}>
                <header className={styles.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={styles.content}>
                    <p>{props.message}</p>
                </div>
                <footer className={styles.footer}>
                    <Button onClick={props.onConfirm}>OK</Button>
                </footer>
            </Card>
        </div>
    )
}
export default Error