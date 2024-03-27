function List(props){
    const {data} = props;
    const List=data.map((e,i)=>{
      return(
        <li>Id : {i+1} <br/> Name : {e.name} <br/>Branch : {e.branch}</li>
      )  
    })
    return(
        <div>
            <h1>List</h1>
            <ul>
            {List}
            </ul>
        </div>
    )
  }
  export default List;