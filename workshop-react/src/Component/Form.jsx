function Form(props) {
    return ( 
        <>
        <label>{props.labelle}</label>
        <input type={props.type} name={props.name} placeholder={props.placeholder} />

        </>
     );
}

export default Form;