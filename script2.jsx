
class DeletedItem extends React.Component {

    render() { 
        let todo = this.props.deleted;

        return (
            <li>
                {todo.task}, {todo.time}
            </li>
        );
    }
}

class TodoItem extends React.Component {

    deleteItem () {
        this.props.deleteItem();
    }
    render() { 
        let i = this.props.index;
        let todo = this.props.todo;

        return (
            <li >
                {todo.task}, {todo.time}
                <button onClick={(event)=>{this.deleteItem(event, i)}}>DELETE</button>
            </li>
        );
    }
}

class Form extends React.Component {

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

class ItemList extends React.Component {
    constructor(){
      super()
      this.state = {
        word : "",
        list : [],
        deleted : []
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
  
    deleteItem(i){
      let list = this.state.list;
      let deleted = this.state.deleted;
      let deletedTodo = list.splice(i, 1);
      deleted.push(deletedTodo[0]);
      this.setState({list: list, deleted: deleted})
    }
  
    render() {
        console.log(this.state.deleted)
        let list = this.state.list.map( (todo,i)=> {
            return(
                <TodoItem todo={todo} key={i} index={i} deleteItem={this.deleteItem} />
            )
        });

        let deleted = this.state.deleted.map( (todo,i)=> {
            return(
                <DeletedItem deleted={todo} key={i} index={i} />
            )
        })

        return (
          <div >
            <Form getInput={this.changeHandler} addItem={this.addItem} word={this.state.word} />
            <div>
                <ul>
                    Todo List: {list}
                </ul>
            </div>
            <div>
                <ul>
                    Deleted List: {deleted}
                </ul>
            </div>
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