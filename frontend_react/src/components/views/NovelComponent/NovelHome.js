// Import packets
import React from 'react'
import axios from 'axios'

class NovelHome extends React.Component{

    state={
        Novel_Category:[]
    }

    componentDidMount() {
        console.log(global.config.url + 'getNovelCategory')
        axios.get(global.config.url + 'getNovelCategory').then(res=>{
            this.state.Novel_Category = res.data.data
            this.setState({Novel_Category:this.state.Novel_Category})
            console.log(res.data)
        })
    }

    render() {
        return(
            <div>
                <ul>
                    {
                        this.state.Novel_Category.map((data,i)=>{
                            return(
                                <div key={i}>
                                    <li><a href={'/NovelCategory/' + data.link_ID}><b>{data.Cate_name}</b></a></li>
                                </div>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default NovelHome