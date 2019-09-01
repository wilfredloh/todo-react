
 
class Form extends React.Component {
    // constructor() {
    //     super();
    //     this.state = {  }
    // }
    getInput (event) {
        let input = event.target.value;
        this.props.getInput(input);
    }
    addItem () {
        this.props.addItem();
    }
    render() { 
        return (
            <div>
                <input onChange={(event)=>{this.getInput(event)}} value={this.props.word}/>
                <button onClick={(event)=>{this.addItem()}}>Add Item</button>
            </div>
        );
    }
}

class TodoItem extends React.Component {
    // constructor() {
    //     super();
    //     this.state = {  }
    // }
    deleteItem () {
        console.log('hello');
        this.props.deleteItem();
    }
    render() { 
        let list = this.props.list.map( (todo,i)=> {
            return(
                <li key={i}>{todo.task}, {todo.time}
                  <button onClick={(event)=>{this.deleteItem(event, i)}}>DELETE</button>
                </li>
            )
        });
        return (
            <div>
                {list}
            </div>
        );
    }
}

class ItemList extends React.Component {
    constructor(){
      super()
  
      this.state = {
        word:"",
        list : []
      }
      this.changeHandler = this.changeHandler.bind(this);
      this.addItem = this.addItem.bind(this);
      this.deleteItem = this.deleteItem.bind(this);
    }
    
    changeHandler(input){
        this.setState({word: input});
    }

    addItem(){
      let list = this.state.list;
      let word = this.state.word;
      let newTodo = {
          task: word,
          time: moment().format('DD MMM YYYY, h:mm a')
      }
      list.push(newTodo);
      let newList = {
          word: '',
          list: list
      }
      this.setState(newList);
    }
  
    deleteItem(event, i){
      let list = this.state.list;
      list.splice(i, 1);
      this.setState({list: list})
    }
  
    render() {
        console.log("rendering");
        return (
          <div >
            <Form getInput={this.changeHandler} addItem={this.addItem} word={this.state.word} />
            <TodoItem list={this.state.list} deleteItem={this.deleteItem}/>
          </div>
        );
    }
  }
  
  ReactDOM.render(
      <ItemList />,
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