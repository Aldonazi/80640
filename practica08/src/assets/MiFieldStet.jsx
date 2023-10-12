function MiFieldStet(props){
    const{titulo, txt1,txt2}=props
    return(
        <>
        <fieldset>
            <legend>{titulo}</legend>
            <label htmlFor={txt1}>{txt1}></label>
            <input type="text" id={text1} />
            label htmlFor={txt2}>{txt2}></label>
            <input type="text" id={text2}
        </fieldset>
        </>
    )
}
export default MiFieldStet