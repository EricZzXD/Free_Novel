// Import packets
import React from 'react'
import axios from 'axios'

class NovelChapterParagraph extends React.Component{
    state={
        paragraph:'',
    }

    componentDidMount() {
        let Temp_Book_data = this.props.location.pathname.slice(21)
        let Temp_Book_data_split = Temp_Book_data.split('_')
        axios.post(global.config.url + '/BookParagraph',{Book_ID: Temp_Book_data_split[0], Book_Chapter:Temp_Book_data_split[1], Book_paragraph:Temp_Book_data_split[2]}).then(res=>{
            console.log(res.data)
            this.setState({paragraph:res.data.paragraph})
        })
    }

    render() {
        return(
            <div>
                <div>{this.state.paragraph}</div>
            </div>
        )
    }
}

export default NovelChapterParagraph