// class ListItem extends React.Component {



//     render() {
//       // render the list with a map() here

//       let array = this.state
//       console.log("rendering");

//       return (
//         <li>
//           {this.state.list}
//         </li>
//       );
//   }
// }

class List extends React.Component {
  constructor(){
    super()

    this.state = {
      word:"",
      list : []
    }
  }

  addItem(event){
    // debugger;
    let list = this.state.list;
    let word = this.state.word;
    let obj = {
        name: word,
        time: moment().format('DD MMM YYYY, h:mm a')
    }
    list.push(obj);
    let state = {
        word: '',
        list: list
    }
    this.setState(state);
  }

  deleteItem(event, i){
    let list = this.state.list;
    list.splice(i, 1);
    this.setState(this.state)
  }

  changeHandler(event){
    // debugger;
    let list = this.state.list;
    let input = event.target.value;
    let finalWord = {
        word: input
    }
    this.setState(finalWord);
  }

  render() {
      // render the list with a map() here
      let list = this.state.list.map( (todo,i)=> {
        return(
            <li key={i}>{todo.name}, {todo.time}
              <button onClick={(event)=>{this.deleteItem(event, i)}}>DELETE</button>
            </li>
        )
      })
      console.log("rendering");
      return (
        <div className="list">
          <input onChange={(event)=>{this.changeHandler(event)}} value={this.state.word}/>
          <button onClick={(event)=>{this.addItem(event)}}>add item</button>
            <ul>
                {list}
            </ul>
        </div>
      );
  }
}

class  extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (  );
  }
}
 
export default ;


ReactDOM.render(
    <List/>,
    document.getElementById('root')
);



// <input onChange={(event)=>{this.changeHandler(event)}} value={this.state.word}/>



// inputHandler(event){
//         //test
//         let input = event.target.value;
//         let array = this.state.textarray;
//         array.push(input);
//         this.setState({textarray: array})
//         console.log(array)
//         array.map((ele)=>{
//             console.log(ele.value)
//         })
//         if(event.target.value.includes('s')){
//              this.setState({text: event.target.value})
//              input.style.border = 'none'
//              console.log("state text:"+this.state.text)
//          } else if(event.target.value.length >= 5){
//              this.setState({text: input.value.toUpperCase()})
//          } else{
//              this.setState({text: input.value})
//              input.style.border = '1px solid red'
//          }
//     }
//      <input value="" onChange={(event)=>{ this.inputHandler(event) }}/>
//     <p>{this.state.textarray}</p>