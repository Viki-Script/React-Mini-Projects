import styles from'./todoItem.module.css'

export default function TodoItem({item,index}){
    return <div className={styles.item}>
        <div key={index} className={styles.itemName}>{item}</div>
        <hr className= {styles.line} />
    </div>
}