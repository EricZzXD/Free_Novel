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
        // Retrieve Data from the backend
        axios.post(global.config.url + 'CategoryType',{CateType:this.state.Cate_Type, CatePage:this.state.Cate_Page}).then(res=>{
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
                <button name='Previous_page' className={this.state.Cate_Page} onClick={this.Cate_Change_Page}
                    disabled={this.state.Cate_Page==1?true:false}>上一页</button>
                <br/>
                <button name='Next_page' className={this.state.Cate_Page} onClick={this.Cate_Change_Page}>下一页</button>
            </div>
        )
    }

    // Change page refresh State info
    Cate_Change_Page=(e)=>{
        // Detect the name whether next page or previous page
        if(e.target.name === 'Next_page') {
            // Create Temp variable to keep trace of the Page number
            let newPage = Number(e.target.className) + 1

            // Base on the Page number to retrieve novel and update page if success
            axios.post(global.config.url + '/CategoryType',{CateType:this.state.Cate_Type, CatePage:newPage}).then(res=>{
                this.state.Cate_Book_Info = res.data.data
                this.setState({Cate_Book_Info:this.state.Cate_Book_Info, CatePage:newPage})
            })
        }
        if(e.target.name === 'Previous_page'){
            // Create Temp variable to keep trace of the Page number
            let newPage = Number(e.target.className) - 1

            // Base on the Page number to retrieve novel and update page if success
            axios.post(global.config.url + '/CategoryType',{CateType:this.state.Cate_Type, CatePage:newPage}).then(res=>{
                this.state.Cate_Book_Info = res.data.data
                this.setState({Cate_Book_Info:this.state.Cate_Book_Info, CatePage:newPage})
            })
        }
        console.log(this.state)
    }




}
export default NovelCategoryType