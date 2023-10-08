
import Header from './Header';
import QA from './QA';
import Service from './Service';
import Contact from './contact';


const Home = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Header></Header>
            <Service></Service>
            <Contact></Contact>
            <QA></QA>
        </div>
    );
};

export default Home;