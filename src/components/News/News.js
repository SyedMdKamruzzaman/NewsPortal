import React, {Component} from 'react';
import NewSingle from './NewSingle';


class News extends Component{

    constructor(props){
        super(props);
        this.state={
            news:[],
        }
    }


    componentDidMount(){
        const url='https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=f213c9ee1b664523a4650537b11e9502';

        fetch(url)
          .then((response)=>{
              return response.json();
          })
          .then((data)=>{
              this.setState({
                  news:data.articles
              })
          })
          .catch((error)=>console.log(error));
          
    }

    renderItems(){
        return this.state.news.map((item) => 
         <NewSingle key={item.url} item={item} />
        );
    }


    

    render(){
        return(
            <div className="row">
                {this.renderItems()}
            </div>
        );
    }
}

export default News;