import React, { useState, useEffect } from "react";
import gamesList from "../data/games.json";
import ascLogo from '../images/sort-up-ascending-arrow.png';
import desLogo from '../images/sort-down.png';
import _ from 'lodash';
export const GameList = () => {
  const [games, setGames] = useState([]);
  const [isAscending, setSorting] = useState(true);
  const [isLoading, setLoader] = useState(false);
  const [clonedData,setCloned] = useState([]);
  const [filteredCount,setFilterCount] = useState(0);
  useEffect(() => {
    setLoader(true);
    setGames(gamesList);
    fetch('http://starlord.hackerearth.com/TopSellingGames')
      .then(data =>{
        return data.json();
      }).then(json =>{
        setGames(json);
        setLoader(false);
        let cloned = _.cloneDeep(json);
        setCloned(cloned);
      });
  }, []);

  const sorting = (a, b) =>{
    if (a.Year == b.Year) {
      return 0;
    } else {
        return a.Year < b.Year ? -1 : 1;
    }
  }
  const onSorting = (isSort) =>{
    setSorting(!isAscending);
    const ascSorted = games.sort((a, b)=> isAscending ? sorting(a,b) : sorting(b,a)); 
    setGames(ascSorted);
  }

  const getGames = () =>{
    return games.map((game,index) =>{
      return <tr>
        <td>{game.Rank}</td>
        <td>{game.Name}</td>
        <td>{game.Platform}</td>
        <td>{game.Year}</td>
        <td>{game.Genre}</td>
        <td>{game.Publisher}</td>
        <td>{game.Global_Sales}</td>
      </tr>
    });
  }
  const isValidArray = arr =>{
    return arr && arr.length ? true :false;
  }
  const getLoader = () =>{
    return <div className="loading" ><h4>Loading Data...</h4></div>
  }
  const filterGames = (e) =>{
    console.log(e.keyCode, e.key)
    if(e.key === "Backspace" && !e.target.value) {
        let tableData = clonedData; 
        setGames(tableData);
        setFilterCount(0);
    } else {
        let filteredData = isValidArray(clonedData) &&
        clonedData.filter(item =>item.Name.toLowerCase().includes(e.target.value.toLowerCase()));
        console.log('filteredData => ',filteredData );
        setFilterCount(filteredData.length);
        setGames(filteredData);
    }
  }
  return (
    <div>
      <div class="control-box">
        <input type='text'
        placeholder='Search by Name..'
        onKeyDown={filterGames.bind(this)}/>
        <span>Search Count : {filteredCount}</span>
      </div>
      
      <table id="customers">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Platform</th>
            <th>
              <div className="tooltip">
                <span class="tooltiptext">{isAscending ? 'Sort Ascending': 'Sort Descednig'}</span>
                <img className="logo" src={isAscending ? ascLogo : desLogo} onClick={() => {onSorting()}}/>
                Year
              </div> 
              {/* //  <div className="tooltip">
              //   <span class="tooltiptext">Sort Descednig</span>
              //   <img className="logo" src={desLogo} onClick={() => {onSorting()}}/>
              //   Year
              // </div>} */}
            </th>
            <th>Genre</th>
            <th>Publisher</th>
            <th>Global Sales</th>
          </tr>
        </thead>
        {isLoading ? getLoader() : <tbody>{getGames()}</tbody>}
      </table>
    </div>
  );
};

// [7,1,5,3,6,4]
// <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
// 7
// [1,2,3,4,5]
// 1