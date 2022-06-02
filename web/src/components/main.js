import React from 'react';
import Header from '../header/header';
import Footer from '../footer/copyright';


//진입점
class App extends Main() {
    render() {
        return (
            <>
                <Header title='Welcom'></Header>

                <Footer></Footer>
            </>
        );
    }
}




export default Main;