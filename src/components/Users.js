
import { Link } from "react-router-dom";
import React, { Component } from 'react';
import './user.css';  
import axios from "axios";
class Users extends Component {
    constructor(props){
        super(props);
        this.state = {
            
            posts : []   
        };
    }
   componentDidMount(){
   var k=this.props.match.params.id;
    axios
    .get(
     
     `http://localhost:4000/members/${k}`
    
    )
    .then((resp) => {
      console.log(resp)
     
     this.setState({posts:resp.data})
   
    
    })
    .catch((error) => {
     
      console.log(error);
    });
   }
   renderTableData() {
    const Shivam = this.state.posts;
    const {
      








    
      season,
      city,
      date,
      team1,
      team2,
      toss_winner,
      toss_decision,
      result,
      
      winner,
      win_by_runs,
      win_by_wickets,
      player_of_match,
      venue,
      umpire1,
      umpire2
     
      } =Shivam;
      return(
        <div className="wrapper">

                <div className="section1">
                  <div className="bris">
                
                  </div>
                     <h1 className="names">
                       Seasons: <p>{season}</p>
                     </h1>
                     <h2 className="cate">
                     City: <p>{city}</p>
                     </h2>
                     <p className="add">
                     Date:<p>{date}</p>
                     </p>
                     <p className="add">
                       Team1:{team1}
                     </p>
                     <p className="add">
                       Team2:{team2}
                     </p>
                     <p className="add">
                       Toss Winner:{toss_winner}
                     </p>
                     <p className="add">
                       Toss Decision:{toss_decision}
                     </p>
                     <p className="add">
                       Result:{result}
                     </p>
                    <Link to="/"> <p className="adds">Back To DahBoard</p></Link>
                </div>
                
          
            </div>
      )
   
   }
    render() {
       
       console.log(this.props)
    
            return(
              <div className="body">
              {this.renderTableData()}
              
              </div>
            
            );
        }
      
    }
  
  
 


export default Users;
