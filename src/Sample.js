
const Sample=((props)=>{
    const {studentData}=props;
    const store=studentData.map((ele,index)=>{
      return(
        <tr>
            <td>{index+1}</td>
            <td>{ele.name}</td>
            <td>{ele.branch}</td>
        </tr>        
      )
    })
    return(
        <div>
          <h2>hello {props.user}!</h2>
          <h1>Table</h1>
          <table>
            
            <thead>
              <th>Id</th>
              <th>Name</th>
              <th>Branch</th>
            </thead>
            <tbody>
              {store}
            </tbody>
          </table>
        </div>
    )
})


export default Sample;
