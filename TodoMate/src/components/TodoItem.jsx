export default function TodoItem({item,index}){
    return <h3 key={index}>{item}</h3>
}