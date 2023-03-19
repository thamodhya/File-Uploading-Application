import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ArticleContent from '../pages/article page/ArticleContent';
import Content from '../pages/Chapter page/Content';
import UnitContent from '../pages/Unit page/UnitContent';
import ViewKT from '../pages/KT view/ViewKT';
import ViewContent from '../pages/article view/ViewContent';
import EditTask from '../pages/Chapter page/EditTask';
import QuizEntry from '../pages/Quiz/QuizEntry';
 
import Quizpage from "../pages/Quiz/Quizpage";

 

const AppRoutes = () => {
    return (
        <React.Fragment>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Content/>} />

                    <Route exact path="/Unit" element={<UnitContent/>} />
                    <Route exact path="/Unit/:id" element={<UnitContent/>} />

                    <Route exact path="/article" element={<ArticleContent/>} />
                    <Route exact path="/article/View" element={<ViewContent/>} />
                    <Route exact path="/Unit/View" element={<ViewKT/>} />
                    <Route exact path="/edit/:id" element={<EditTask/>} />
                    
                    <Route exact path="/quiz/view" element={<QuizEntry/>}/>
                    <Route exact path="/quiz/view/:id" element={<QuizEntry/>}/>
                     
                     
                    <Route exact path="/quiz" element={<Quizpage/>} />
                    <Route exact path="/quiz/:id" element={<Quizpage/>} />
                </Routes>
            </BrowserRouter>
        </React.Fragment>
    );
}
export default AppRoutes;
