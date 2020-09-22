// Import packets
import React from 'react'
import axios from 'axios'



class NovelBookChapter extends React.Component{

    state={
        // Book ID
        book_ID:'',
        book_Chapter:'',

        // Book info store
        Book_Info:[],
    }

    componentDidMount() {
        let BookInfo_array = this.props.location.pathname.slice(19).split('_')
        this.setState({book_ID:BookInfo_array[0], book_Chapter:BookInfo_array[1]},()=>{
            console.log(this.state)
            axios.post(global.config.url + 'BookChapter',{bookID:this.state.book_ID, bookChapter:this.state.book_Chapter}).then(res=>{
                this.state.Book_Info = res.data.data
                this.setState({Book_Info:this.state.Book_Info})

                console.log(res.data)
            })
        })
    }

    render() {
        return(
            <div>
                <ul>
                    {
                        this.state.Book_Info.map((data,i)=>{
                            return(
                                <div key={i}>
                                    <li><a href={'/NovelParagraph/Book_' + this.state.book_ID + '_' + this.state.book_Chapter + '_' + data.Chapter_Link }>{data.Chapter_Name}</a></li>
                                </div>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default NovelBookChapter