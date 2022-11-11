export const InputSearch = (props) => {
    return(
        <div style={{marginTop:'8rem'}}>
        <span>Search: </span>
        <input type='text' onChange={props.onSearch}/>
        </div>
    )
};
