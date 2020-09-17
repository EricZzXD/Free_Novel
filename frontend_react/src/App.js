import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';

// Import Component
import HomepageDashboard from './components/views/HomepageDashboard'
import NovelHome from './components/views/NovelComponent/NovelHome'
import HomepageHeader from './components/views/HomepageHeader'
import NovelCategoryType from './components/views/NovelComponent/NovelCategoryType'
import NovelBookChapter from './components/views/NovelComponent/NovelBookChapter'
import NovelChapterParagraph from './components/views/NovelComponent/NovelChapterParagraph'

class App extends Component{
    render() {
        return(
            <div>
                <HomepageHeader/>
            <Switch>
                <Route exact path='/' component={HomepageDashboard} />
                <Route exact path='/NovelHome' component={NovelHome}/>
                <Route path='/NovelCategory' component={NovelCategoryType}/>
                <Route path='/NovelChapter' component={NovelBookChapter}/>
                <Route path='/NovelParagraph' component={NovelChapterParagraph}/>

            </Switch>
            </div>
        )
    }
}


export default App;
