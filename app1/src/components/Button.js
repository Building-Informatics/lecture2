import React, {useState, useEffect} from 'react'

function MySubComponent(props) {
    const title = props.title

    const [tag, setTag] = useState(0)
    const [anotherTag, setAnotherTag] = useState(0)

    useEffect(() => {
        console.log('tag is: ', tag)
    }, [tag])

    function myClickFunction(object, setObject) {
        setObject(t => t + 1)
    }

    return (
        <div>
            <p>{title}</p>
        <button onClick={() => myClickFunction(tag, setTag)}>{tag}</button>
        <button onClick={() => myClickFunction(anotherTag, setAnotherTag)}>{anotherTag}</button>
        </div>
    )
}

export default MySubComponent