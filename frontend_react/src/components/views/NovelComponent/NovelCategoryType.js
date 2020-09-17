// Import packets
import React from 'react'
import axios from 'axios'

class NovelCategoryType extends React.Component{

    state={
        // Cate type and page that require to post to backend
        Cate_Type:this.props.location.pathname.slice(-6),
        Cate_Page:1,

        // Store the book info
        Cate_Book_Info:[],

    }

    componentDidMount() {
        console.log(this.props.location.pathname.slice(-6))  // => Example: Cate_1
        console.log(global.config.url + '/CategoryType')
        axios.post(global.config.url + '/CategoryType',{CateType:this.state.Cate_Type, CatePage:this.state.Cate_Page}).then(res=>{
            this.state.Cate_Book_Info = res.data.data
            this.setState({Cate_Book_Info:this.state.Cate_Book_Info})
        })
    }

    render() {
        return(
            <div>
                <ul>
                    {
                        this.state.Cate_Book_Info.map((data,i)=>{
                            return(
                                <div key={i}>
                                    <li><a href={'/NovelChapter/' + 'Book_' + this.state.Cate_Book_Info[i].book_id + '_' +
                                    this.state.Cate_Book_Info[i].book_chapter}>{data.Name}</a></li>
                                </div>
                            )
                        })
                    }
                </ul>
                <br/>
                <button name='Previous_page' onClick={this.Cate_Change_Page}>上一页</button>
                <br/>
                <button name='Next_page' onClick={this.Cate_Change_Page}>下一页</button>
            </div>
        )
    }

    // Change page refresh State info
    Cate_Change_Page=(e)=>{
        let Cate_page = this.state.Cate_Page
        if(e.target.name === 'Next_page') {
            this.setState({Cate_Page: Cate_page + 1})
            axios.post(global.config.url + '/CategoryType',{CateType:this.state.Cate_Type, CatePage:this.state.Cate_Page}).then(res=>{
                this.state.Cate_Book_Info = res.data.data
                this.setState({Cate_Book_Info:this.state.Cate_Book_Info})
            })
        }else{
            this.setState({Cate_Page: Cate_page - 1})
            axios.post(global.config.url + '/CategoryType',{CateType:this.state.Cate_Type, CatePage:this.state.Cate_Page}).then(res=>{
                this.state.Cate_Book_Info = res.data.data
                this.setState({Cate_Book_Info:this.state.Cate_Book_Info})
            })
        }
        console.log(this.state)
    }




}
export default NovelCategoryType