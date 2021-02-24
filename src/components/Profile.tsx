import styles from '../styles/components/Profile.module.css';

export function Profile() {
    return (
        <div className={styles.profileContainer}>
          <img src="https://github.com/diego3g.png" alt="Diego Fernandes"></img>
          <div>
            <strong>Diego Fernandes</strong>
            <p>
              <img src="icons/level.svg" alt="level"></img>
              Level 1
              </p>
          </div>
        </div>
    );
}