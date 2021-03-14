import "./App.css";
import { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
      title: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, searchField, title } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField)
    );
    return (
      <div className="App">
        <header className="App-header">
          <h1>{title}</h1>
          <SearchBox
            placeholder="Search Monsters"
            handleChange={(e) =>
              this.setState({
                searchField: e.target.value,
                title: e.target.value,
              })
            }
          ></SearchBox>
          <CardList monsters={monsters}></CardList>
        </header>
      </div>
    );
  }
}

export default App;
