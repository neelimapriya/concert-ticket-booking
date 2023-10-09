
import Header from './Header';

import QAns from './QAns';
import Service from './Service';
import Contact from './contact';


const Home = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Header></Header>
            <Service></Service>
            <Contact></Contact>
            <QAns></QAns>
        </div>
    );
};

export default Home;