import styles from "../styles/components/Profile.module.scss";

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="http://github.com/vctrlima.png" alt="Victor Lima" />
            <div>
                <strong>Victor Lima</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level 1
                </p>
            </div>
        </div>
    );
}
