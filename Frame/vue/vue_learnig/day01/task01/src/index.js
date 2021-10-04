import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
/**
 * Square Board 和 Game 是react的三个组件
 */
// class Square extends React.Component {
    // 给Square组件 添加构造函数 用来初始化 state state具有记忆功能 让square组件记得自己被点击过
    /**在 JavaScript class 中，每次你定义其子类的构造函数时，都需要调用 super 方法。
     * 因此，在所有含有构造函数的的 React 组件中，构造函数必须以 super(props) 开头。
     */
    // constructor(props){
    //     super(props);
    //     // 记住是对象的形式存储 不要打分号
    //     this.state = {
    //         value:null,
    //     }
    // }
    // render() {
    //   return (
    //     <button className="square"
        // 使用箭头函数 点击每一个格子 把里面的值设置为X 
        /**
         * 在 Square 组件 render 方法中的 onClick 事件监听函数中调用 this.setState，
         * 我们就可以在每次 <button> 被点击的时候通知 React 去重新渲染 Square 组件。
         * 组件更新之后，Square 组件的 this.state.value 的值会变为 'X'，
         * 因此，我们在游戏棋盘上就能看见 X 了。点击任意一个方格，X 就会出现了。
            每次在组件中调用 setState 时，React 都会自动更新其子组件。
         */
        /*
         * 每一个 Square 被点击时，Board 提供的 onClick 函数就会触发。我们回顾一下这是怎么实现的：
                向 DOM 内置元素 <button> 添加 onClick prop，让 React 开启对点击事件的监听。
                当 button 被点击时，React 会调用 Square 组件的 render() 方法中的 onClick 事件处理函数。
                事件处理函数触发了传入其中的 this.props.onClick() 方法。这个方法是由 Board 传递给 Square 的。
                由于 Board 把 onClick={() => this.handleClick(i)} 传递给了 Square，所以当 Square 中的事件处理函数触发时，其实就是触发的 Board 当中的 this.handleClick(i) 方法。
         */
     
//         onClick={()=>this.props.onClick()}>                
//           {this.props.value}
//         </button>
//       );
//     }
//   }
  


/*修改 Square组件为一个函数组件 因为只包含一个render方法 
    如果你想写的组件只包含一个 render 方法，并且不包含 state，那么使用函数组件就会更简单。
    我们不需要定义一个继承于 React.Component 的类，
    我们可以定义一个函数，这个函数接收 props 作为参数，然后返回需要渲染的元素。
    函数组件写起来并不像 class 组件那么繁琐，很多组件都可以使用函数组件来写。
 
 */
    function Square(props){
        return (
           <button className="square" onClick={props.onClick}>
               {props.value}
           </button>
        )
    }
  class Board extends React.Component {
     
   
    renderSquare(i) {
        // 1.传递一个名为 value 的 prop 到 Square中
        // 在react中 数据通过props的传递 从父组件传递到子组件
        /**
         * 2.我们通过修改 Board 来指示每一个 Square 的当前值（'X', 'O', 或者 null）。
         * 我们在 Board 的构造函数中已经定义好了 squares 数组，
         * 这样，我们就可以通过修改 Board 的 renderSquare 方法来读取这些值了。
         * 这样，每个 Square 就都能接收到一个 value prop 了，
         * 这个 prop 的值可以是 'X'、 'O'、 或 null（null 代表空方格）
         * 3.由于 state 对于每个组件来说是私有的，因此我们不能直接通过 Square 来更新 Board 的 state
         * 相反，从 Board 组件向 Square 组件传递一个函数，当 Square 被点击的时候，这个函数就会被调用
         */
      return <Square 
        value={this.props.squares[i]}
        onClick={()=>this.props.onClick(i)}
      />
    }
  
    render() {
       
     
      return (
        <div>
         
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
      constructor(props){
          super(props);
          this.state = {
              history: [{
                  squares: Array(9).fill(null),

              }],
              stepNumber:0,
              xIsNext: true,
          }
      }
       handleClick(i){
        const history = this.state.history.slice(0,this.state.stepNumber + 1);
        const current = history[history.length-1];
        //   修改handleClick 函数来翻转 xIsNext的值
        const squares = current.squares.slice();
        //   当有玩家胜出 或者 某个Square 已经被填充时 该函数（handleClick）不做任何处理直接返回
          if(calculateWinner(squares)||squares[i]){
              return;
          }
          squares[i] = this.state.xIsNext ? 'X': 'O';
          this.setState({
              history:history.concat([{
                squares:squares,
              }]),
              stepNumber:history.length,
              xIsNext:!this.state.xIsNext,
          })
      }
      jumpTo(step){
          this.setState({
              stepNumber:step,
              xIsNext:(step % 2) == 0,
          })
      }
    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);
        const moves = history.map((step,move)=>{
            const desc = move?
            '回到步骤 ' + move :
            '点击开始游戏';
            return (
                <li key = {move}>
                    <button onClick={()=> this.jumpTo(move)}>{desc}</button>
                </li>
            )
        })

        let status;
        if(winner){
            status = '最后的赢家是: ' + winner;
        }
        else{
            status = '下一个选手: ' + (this.state.xIsNext ? 'X' : 'O');
        }
     
      return (
        <div className="game">
          <div className="game-board">
            <Board 
            squares = {current.squares}
            onClick = {(i) => this.handleClick(i)}/>
          </div>
          <div className="game-info">
            <div>{status}</div>
            <ol>{moves}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }