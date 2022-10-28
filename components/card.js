import styles from '../styles/Card.module.css'

export function card() {
    return (
    <div className={styles.cardGrid}>
        <div className={styles.cardSet} id="cardSet">
            <div className={styles.card} id="card1">          
                <h1>ByteAuth</h1>
                <p>ByteAuth is a authentication api that started development in 2021, It went true a lot of phases and is currently still in devleopement</p>
                <img src="https://i.imgur.com/gBhd5Sr.png" className={styles.image}></img>
            </div>
            <div className={styles.extraCards}>
                <div className={styles.card1}></div>
                <div className={styles.card2}></div>

            </div>
        </div>
        <div className={styles.cardSet} id="cardSet">
            <div className={styles.card} id="card2">          
                <h1>test</h1>
                <p>ByteAuth is a authenntication api that started development in 2021, It went true a lot of phases and is currently still in devleopement</p>
                <img src="https://i.imgur.com/gBhd5Sr.png" className={styles.image}></img>
            </div>
            <div className={styles.extraCards}>
            <div className={styles.card3}></div>
                <div className={styles.card1}></div>
                <div className={styles.card2}></div>
            </div>
        </div>
    </div>
    )
  }