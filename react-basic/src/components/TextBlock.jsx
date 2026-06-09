const TextBlock = (props) => {
    console.log("props", props)

    if(!props.title) return
    
    return <p>{props.title}</p>
}

export default TextBlock