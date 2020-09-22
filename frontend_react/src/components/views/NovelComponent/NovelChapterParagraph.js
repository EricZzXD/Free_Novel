// Import packets
import React from 'react'
import axios from 'axios'

class NovelChapterParagraph extends React.Component{
    state={
        paragraph:[],
    }

    componentDidMount() {
        let Temp_Book_data = this.props.location.pathname.slice(21)
        let Temp_Book_data_split = Temp_Book_data.split('_')
        axios.post(global.config.url + 'BookParagraph',{Book_ID: Temp_Book_data_split[0], Book_Chapter:Temp_Book_data_split[1], Book_paragraph:Temp_Book_data_split[2]}).then(res=>{
            let tempParaArray = []  // Create temporary array
            for(let i=0;i<res.data.data.length;i++){
                if(res.data.data[i]!== ''){  // remove the Empty array
                    tempParaArray.push(res.data.data[i])
                }
            }
            tempParaArray[0] = tempParaArray[0].slice(21)  // Used to remove unnecessary text
            this.setState({paragraph:tempParaArray})  // Update state
        })
    }

    render() {
        return(
            <div>
                {
                    this.state.paragraph.map((data,i)=>{
                        return(
                            <p key={i}>{data}</p>
                        )
                    })
                }
            </div>
        )
    }
}

export default NovelChapterParagraph